import { GetStaticProps } from 'next'

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
import { useEffect, useState } from 'react'

export default function Home() {
  const [coins, setCoins] = useState<Coin[]>([])

  async function getCoins() {
    try {
      const coinsResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/coins`)
      setCoins(coinsResponse.data)
    } catch (error) {
      throw new Error('Failed to load coins')
    }
  }

  useEffect(() => {
    getCoins()
  }, [])

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

export const getStaticProps: GetStaticProps = async () => {
  const twoHours = 60 * 60 * 2

  return {
    props: {},
    revalidate: twoHours
  }
}
