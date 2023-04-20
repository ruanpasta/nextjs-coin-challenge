import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useCoinsContext } from '@/core/contexts/coinsContext'
import { Coin } from '@/core/models/coin'

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
import Button from '@/libs/components/button'

export default function Navbar() {
  const size = useWindowSize()
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(true)

  useEffect(() => {
    setIsMobile(size.width < 321)
    setIsDesktop(size.width > 920)
  }, [size.width])

  const { coins } = useCoinsContext()

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
                {coins
                  .sort((a, b) => b.volumeLastMonth - a.volumeLastMonth)
                  .map((coin) => (getCoinInfo(coin)))}
              </CryptoContent>
            </CryptoSlider>
          )}
          {isMobile ? (
            <AiOutlineMenu />
          ) : (
            <>
              <Button color='secondary'>Sign in</Button>
              <Button variant='contained' size='medium'>Sign up</Button>
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
