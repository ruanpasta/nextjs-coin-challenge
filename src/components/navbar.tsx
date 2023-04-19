import { useContext } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { CoinsContext } from '@/core/contexts/coinsContext'
import { Coin, CoinsContextType } from '@/core/models/coin'

import useWindowSize from '@/hooks/useWindowSize'

import {
  CryptoContent,
  CryptoContentItem,
  CryptoSlider,
  NavbarContainer,
  NavbarElements,
  NavbarItem,
  PagesMenus,
} from '@/styles/components/navbar'

import { AiOutlineMenu } from 'react-icons/ai'

import logo from '../assets/logo.png'

export default function Navbar() {
  const size = useWindowSize()
  const isMobile = size.width < 321
  const isDesktop = size.width > 920

  const { coins } = useContext<CoinsContextType>(CoinsContext)

  const getCoinInfo = (coin: Coin) => {
    const price = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(coin.price)

    const change = `${coin.change.toFixed(2)}%`

    return (
      <CryptoContentItem key={coin.id}>
        <span>{coin.id}</span>
        <span>{price}</span>
        <span
          className={
            coin.change > 0
              ? 'crypto-content__change--positive'
              : 'crypto-content__change--negative'
          }
        >
          {change}
        </span>
      </CryptoContentItem>
    )
  }

  return (
    <NavbarContainer>
      <NavbarElements>
        <NavbarItem>
          <Image src={logo.src} width={124} height={21} alt='logo' />

          <PagesMenus>
            <Link href='/'>About</Link>
            <Link href='/'>Top Cryptos</Link>
          </PagesMenus>
        </NavbarItem>
        <NavbarItem>
          {isDesktop && (
            <CryptoSlider>
              <CryptoContent>
                {coins.map((coin) => getCoinInfo(coin))}
              </CryptoContent>
            </CryptoSlider>
          )}
          {isMobile ? (
            <AiOutlineMenu />
          ) : (
            <>
              <a href='/'>Sign in</a>
              <button>Sign up</button>
            </>
          )}
        </NavbarItem>
      </NavbarElements>
      {!isDesktop && (
        <CryptoSlider>
          <CryptoContent>
            {coins.map((coin) => getCoinInfo(coin))}
          </CryptoContent>
        </CryptoSlider>
      )}
    </NavbarContainer>
  )
}
