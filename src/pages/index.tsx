import {
  Credits,
  CryptosSection,
  EmailSubscribe,
  HeroBanner,
  PageDivider,
  Navbar,
  ServicesSection,
} from '@/components'

import {
  HomeContainer,
  LandingPage,
} from '@/styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <header>
        <Navbar />
      </header>

      <LandingPage>
        <HeroBanner />

        <PageDivider />

        <ServicesSection />

        <CryptosSection />

        <EmailSubscribe />

        <Credits />
      </LandingPage>
    </HomeContainer>
  )
}
