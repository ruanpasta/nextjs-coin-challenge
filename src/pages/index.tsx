import { GetServerSideProps, GetStaticProps } from 'next'

import axios from 'axios'

import { CoinsContext } from '@/core/contexts/coinsContext'

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

import { Coin } from '@/core/models/coin'

export default function Home({ coins }: { coins: Coin[] }) {
  return (
    <HomeContainer>
      <CoinsContext.Provider value={{ coins }}>
        <header>
          <Navbar />
        </header>

        <HeroBanner />
        <PageDivider />
        <ServicesSection />
        <CryptosSection />
        <EmailSubscribe />
        <Credits />
      </CoinsContext.Provider>
    </HomeContainer>
  )
}

async function getCoins() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/coins`
    )
    const coins = await response.json()
    return coins 
  } catch (error) {
    throw new Error('Failed to load coins')
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const coins = (await getCoins()) || {}

  return {
    props: { coins },
  }
}
