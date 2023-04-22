import { useState } from 'react'

import { ButtonComponent, TextInputComponent } from '@/libs/components'

import {
  SignUpModalCoin,
  SignUpModalContainer,
  SignUpModalFooter,
  SignUpModalHeader,
  SignUpModalMain,
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

export default function SignUpModal() {
  const [passwordType, setPasswordType] = useState('password')
  const [confirmPasswordType, setConfirmPasswordType] = useState('password')

  const handlePasswordVisible = (
    $event: Event,
    inputType: any,
    setInputType: (t: string) => void
  ) => {
    $event.preventDefault()

    setInputType(inputType === 'text' ? 'password' : 'text')
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
        <ButtonComponent variant='link' color='secondary'>
          <AiOutlineClose size={16} />
        </ButtonComponent>
      </SignUpModalHeader>

      <SignUpModalMain>
        <form>
          <TextInputComponent
            placeholder='Name'
            iconStart={<AiOutlineUser size={16} />}
          />
          <TextInputComponent
            placeholder='Email'
            iconStart={<AiOutlineMail size={16} />}
          />
          <TextInputComponent
            type={passwordType}
            placeholder='Password'
            iconStart={<AiOutlineLock size={16} />}
            iconEnd={
              <ButtonComponent
                variant='link'
                color='secondary'
                onClick={($event: any) =>
                  handlePasswordVisible(
                    $event,
                    passwordType,
                    setPasswordType
                  )
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

          <div>
            <input type='checkbox' id='accept-terms' />
            <label htmlFor='accept-terms'>
              I have read and accept the{' '}
              <strong>Privacy Policy and Terms of User Sign up.</strong>
            </label>
          </div>

          <ButtonComponent variant='contained' size='large'>
            Sign in
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
