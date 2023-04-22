import { ButtonComponent } from '@/libs/components'

export default function SignInModal() {
  return (
    <>
      <header>
        <h4>Sign in to CoinSynch</h4>
        <ButtonComponent variant='link' color='secondary'>
          X
        </ButtonComponent>
      </header>
      <main>
        <input placeholder='Email' />
        <input placeholder='Password' />
        <ButtonComponent variant='link' color='secondary'>
          Forgot password?
        </ButtonComponent>

        <ButtonComponent variant='contained' size='large'>
          Sign in
        </ButtonComponent>

        <footer>
          <span>Sign up to CoinSynch</span>
        </footer>
      </main>
    </>
  )
}
