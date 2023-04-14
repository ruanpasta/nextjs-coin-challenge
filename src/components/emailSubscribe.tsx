import {
  EmailSubscribeContainer,
  FullBackground,
  Info,
  Spacer,
  SubscribeForm,
} from '@/styles/components/emailSubscribe'

export default function EmailSubscribe() {
  return (
    <EmailSubscribeContainer>

      <FullBackground />
      <Spacer>
        <Info>
          <span>Lorem ipsum </span>
          <h2>Lorem ipsum </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </Info>

        <SubscribeForm>
          <label>Email</label>
          <input placeholder='Email' />
          <button>Subscribe</button>
        </SubscribeForm>
      </Spacer>
    </EmailSubscribeContainer>
  )
}
