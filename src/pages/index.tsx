import Image from 'next/image'

import { CryptosSection, HeroBanner, Navbar, ServicesSection } from '@/components'

import {
  HomeContainer,
  LandingPage,
  LandingPageDivider,
} from '@/styles/pages/home'

import landingPageDivider from '../assets/landpage-divider.png'

export default function Home() {
  return (
    <HomeContainer>
      <header>
        <Navbar />
      </header>

      <LandingPage>
        <HeroBanner />

        <LandingPageDivider>
          <Image src={landingPageDivider} width={1440} height={247} alt='' />
        </LandingPageDivider>

        <ServicesSection />

        <CryptosSection />
      </LandingPage>
    </HomeContainer>
  )
}
