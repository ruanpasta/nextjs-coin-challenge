import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { ButtonComponent, TextInputComponent } from '@/libs/components'

import {
  SignInModalCoin,
  SignInModalContainer,
  SignInModalFooter,
  SignInModalHeader,
  SignInModalMain,
  SignInModalSynch,
} from '@/libs/components/signInModal'

import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
  AiOutlineMail,
} from 'react-icons/ai'
import { timer } from '@/helpers'

interface SignInModalProps {
  closeModal: () => void
}

export default function SignInModal({ closeModal }: SignInModalProps) {
  const router = useRouter()

  const [passwordType, setPasswordType] = useState('password')
  const [isLoading, setIsLoanding] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handlePasswordVisible = (
    $event: Event,
    inputType: any,
    setInputType: (t: string) => void
  ) => {
    $event.preventDefault()

    setInputType(inputType === 'text' ? 'password' : 'text')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    // Simulating a user login
    setIsLoanding(true)
    await timer(800).finally(() => setIsLoanding(false))
    router.push('/dashboard')
  }

  return (
    <SignInModalContainer>
      <SignInModalHeader>
        <span>
          Sign in to{' '}
          <SignInModalCoin>
            Coin<SignInModalSynch>Synch</SignInModalSynch>
          </SignInModalCoin>
        </span>
        <ButtonComponent variant='link' color='secondary' onClick={closeModal}>
          <AiOutlineClose size={16} />
        </ButtonComponent>
      </SignInModalHeader>

      <SignInModalMain>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' noValidate>
          <TextInputComponent
            type='email'
            placeholder='Email'
            isValid={!errors?.email}
            errorMessage={errors?.email?.message}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: emailRegex, message: 'Email is invalid' },
            })}
            iconStart={<AiOutlineMail size={16} />}
          />

          <TextInputComponent
            type={passwordType}
            placeholder='Password'
            isValid={!errors.password}
            errorMessage={errors?.password?.message}
            {...register('password', { required: 'Password is required' })}
            iconStart={<AiOutlineLock size={16} />}
            iconEnd={
              <ButtonComponent
                variant='link'
                color='secondary'
                onClick={($event: any) =>
                  handlePasswordVisible($event, passwordType, setPasswordType)
                }
              >
                {passwordType === 'password' ? (
                  <AiOutlineEye size={16} />
                ) : (
                  <AiOutlineEyeInvisible size={16} />
                )}
              </ButtonComponent>
            }
          />

          <ButtonComponent
            type='submit'
            variant='contained'
            size='large'
            isLoading={isLoading}
          >
            Sign In
          </ButtonComponent>
        </form>
      </SignInModalMain>

      <SignInModalFooter>
        <span>
          Sign in to{' '}
          <SignInModalCoin>
            Coin<SignInModalSynch>Synch</SignInModalSynch>
          </SignInModalCoin>
        </span>
      </SignInModalFooter>
    </SignInModalContainer>
  )
}
