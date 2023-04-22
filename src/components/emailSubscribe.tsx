import { ButtonComponent } from '@/libs/components'

import {
  EmailSubscribeContainer,
  EmailSubscribeContent,
  EmailSubscribeInfo,
  EmailSubscribeSpacer,
  EmailSubscribeSubscribeForm,
} from '@/styles/components/emailSubscribe'

export default function EmailSubscribe() {
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
            <input placeholder='Email' />
            <ButtonComponent variant='contained' size='large'>Subscribe</ButtonComponent>
          </EmailSubscribeSubscribeForm>
        </EmailSubscribeSpacer>
      </EmailSubscribeContent>
    </EmailSubscribeContainer>
  )
}
