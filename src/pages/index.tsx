import { useEffect, useState } from 'react'

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

export default function Home() {
  const [coins, setCoins] = useState<Coin[]>([])

  async function getCoins() {
    try {
      const response = await axios.post('api/coins')
      setCoins(response.data)
    } catch (e) {
      throw new Error('Failed to get coins' + e)
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
