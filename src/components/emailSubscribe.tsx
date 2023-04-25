import { useState } from 'react'

import { ButtonComponent } from '@/libs/components'

import {
  EmailSubscribeContainer,
  EmailSubscribeContent,
  EmailSubscribeInfo,
  EmailSubscribeSpacer,
  EmailSubscribeSubscribeForm,
} from '@/styles/components/emailSubscribe'
import { timer } from '@/helpers'

export default function EmailSubscribe() {
  const [isLoading, setIsLoanding] = useState(false)
  const [email, setEmail] = useState('')

  const handleEmail = (value: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(value?.target?.value)

  const handleSubscribe = async () => {
    // Simulating subscribe
    setIsLoanding(true)
    await timer(800).finally(() => setIsLoanding(false))
    setEmail('')
  }

  return (
    <EmailSubscribeContainer>
      <EmailSubscribeContent>
        <EmailSubscribeSpacer>
          <EmailSubscribeInfo>
            <span>Lorem ipsum </span>
            <h2>Lorem ipsum </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </EmailSubscribeInfo>

          <EmailSubscribeSubscribeForm>
            <label>Email</label>
            <input placeholder='Email' value={email} onChange={handleEmail} />
            <ButtonComponent
              variant='contained'
              size='large'
              isLoading={isLoading}
              onClick={handleSubscribe}
            >
              Subscribe
            </ButtonComponent>
          </EmailSubscribeSubscribeForm>
        </EmailSubscribeSpacer>
      </EmailSubscribeContent>
    </EmailSubscribeContainer>
  )
}
