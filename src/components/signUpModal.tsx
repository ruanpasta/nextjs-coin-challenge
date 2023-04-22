import { ButtonComponent, TextInputComponent } from '@/libs/components'
import {
  SignUpModalContainer,
  SignUpModalFooter,
  SignUpModalHeader,
  SignUpModalMain,
} from '@/styles/components/signUpModal'
import {
  AiOutlineEye,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from 'react-icons/ai'

export default function SignUpModal() {
  return (
    <SignUpModalContainer>
      <SignUpModalHeader>
        <h4>Sign in to CoinSynch</h4>
        <ButtonComponent variant='link' color='secondary'>
          X
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
            placeholder='Password'
            iconStart={<AiOutlineLock size={16} />}
            iconEnd={<AiOutlineEye />}
          />
          <TextInputComponent
            placeholder='Confirm password'
            iconStart={<AiOutlineLock size={16} />}
            iconEnd={<AiOutlineEye />}
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
        <span>Sign up to CoinSynch</span>
      </SignUpModalFooter>
    </SignUpModalContainer>
  )
}
