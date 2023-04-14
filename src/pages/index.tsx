import {
  Credits,
  CryptosSection,
  EmailSubscribe,
  HeroBanner,
  PageDivider,
  Navbar,
  ServicesSection,
} from '@/components'

import { HomeContainer } from '@/styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <header>
        <Navbar />
      </header>

      <HeroBanner />

      <PageDivider />

      <ServicesSection />

      <CryptosSection />

      <EmailSubscribe />

      <Credits />
    </HomeContainer>
  )
}
