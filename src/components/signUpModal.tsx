import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { ButtonComponent, TextInputComponent } from '@/libs/components'
import { TextInputErrorMessage } from '@/libs/components/textInput'

import {
  SignUpModalCoin,
  SignUpModalContainer,
  SignUpModalFooter,
  SignUpModalHeader,
  SignUpModalMain,
  SignUpModalMainCheckbox,
  SignUpModalSynch,
} from '@/styles/components/signUpModal'

import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from 'react-icons/ai'
import { timer } from '@/helpers'

interface SignUpModalProps {
  closeModal: () => void
}

export default function SignUpModal({ closeModal }: SignUpModalProps) {
  const router = useRouter()

  const [passwordType, setPasswordType] = useState('password')
  const [confirmPasswordType, setConfirmPasswordType] = useState('password')

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
    getValues,
  } = useForm()

  const validateConfirmPassword = (value: string) => {
    const password = getValues('password')
    return value === password || 'Passwords do not match'
  }

  const onSubmit = async (data: any) => {
    // Simulating a user creation
    setIsLoanding(true)
    await timer(800).finally(() => setIsLoanding(false))
    router.push('/dashboard')
  }

  return (
    <SignUpModalContainer>
      <SignUpModalHeader>
        <span>
          Sign up to{' '}
          <SignUpModalCoin>
            Coin<SignUpModalSynch>Synch</SignUpModalSynch>
          </SignUpModalCoin>
        </span>
        <ButtonComponent variant='link' color='secondary' onClick={closeModal}>
          <AiOutlineClose size={16} />
        </ButtonComponent>
      </SignUpModalHeader>

      <SignUpModalMain>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' noValidate>
          <TextInputComponent
            placeholder='Name'
            isValid={!errors.name}
            errorMessage={errors?.name?.message}
            {...register('name', { required: 'Name is required' })}
            iconStart={<AiOutlineUser size={16} />}
          />
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
            autoComplete='new-password'
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
          <TextInputComponent
            type={confirmPasswordType}
            placeholder='Confirm password'
            isValid={!errors.confirmPassword}
            errorMessage={errors?.confirmPassword?.message}
            {...register('confirmPassword', {
              required: 'Confirm password is required',
              validate: validateConfirmPassword,
            })}
            iconStart={<AiOutlineLock size={16} />}
            iconEnd={
              <ButtonComponent
                variant='link'
                color='secondary'
                onClick={($event: any) =>
                  handlePasswordVisible(
                    $event,
                    confirmPasswordType,
                    setConfirmPasswordType
                  )
                }
              >
                {confirmPasswordType === 'password' ? (
                  <AiOutlineEye size={16} />
                ) : (
                  <AiOutlineEyeInvisible size={16} />
                )}
              </ButtonComponent>
            }
          />

          <SignUpModalMainCheckbox>
            <input
              type='checkbox'
              id='accept-terms'
              {...register('acceptTerms', {
                required: 'Accept terms is required',
              })}
            />{' '}
            <label htmlFor='accept-terms'>
              I have read and accept the{' '}
              <strong>Privacy Policy and Terms of User Sign up.</strong>
            </label>
            {errors.acceptTerms && (
              <TextInputErrorMessage>
                {errors?.acceptTerms!.message as string}
              </TextInputErrorMessage>
            )}
          </SignUpModalMainCheckbox>

          <ButtonComponent
            type='submit'
            variant='contained'
            size='large'
            isLoading={isLoading}
          >
            Sign Up
          </ButtonComponent>
        </form>
      </SignUpModalMain>

      <SignUpModalFooter>
        <span>
          Sign up to{' '}
          <SignUpModalCoin>
            Coin<SignUpModalSynch>Synch</SignUpModalSynch>
          </SignUpModalCoin>
        </span>
      </SignUpModalFooter>
    </SignUpModalContainer>
  )
}
