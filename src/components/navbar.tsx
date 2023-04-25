import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Tooltip } from 'react-tooltip'

import { ButtonComponent, ModalComponent } from '@/libs/components'

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
import SignInModal from './signInModal'
import SignUpModal from './signUpModal'

export default function Navbar() {
  const size = useWindowSize()
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)

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

  const openSignUpModal = () => setIsSignUpModalOpen(true)

  const openSignInModal = () => setIsSignInModalOpen(true)

  const closeModal = () => (
    setIsSignUpModalOpen(false), setIsSignInModalOpen(false)
  )

  return (
    <NavbarContainer>
      <NavbarElements>
        <NavbarItem>
          <Image src={logo.src} width={124} height={21} alt='logo' />

          <PagesMenus>
            <Link href='/' data-tooltip-id='not-implemented'>
              About
            </Link>
            <Link href='/' data-tooltip-id='not-implemented'>
              Top Cryptos
            </Link>
          </PagesMenus>
        </NavbarItem>
        <NavbarItem>
          {isDesktop && (
            <CryptoSlider>
              <CryptoContent>
                {coins
                  .sort((a, b) => b.volumeLastMonth - a.volumeLastMonth)
                  .map((coin) => getCoinInfo(coin))}
              </CryptoContent>
            </CryptoSlider>
          )}
          {isMobile ? (
            <ButtonComponent
              data-tooltip-id='not-implemented'
              color='secondary'
              size='medium'
            >
              <AiOutlineMenu />
            </ButtonComponent>
          ) : (
            <>
              <ButtonComponent color='secondary' onClick={openSignInModal}>
                Sign in
              </ButtonComponent>
              <ButtonComponent
                variant='contained'
                size='medium'
                onClick={openSignUpModal}
              >
                Sign up
              </ButtonComponent>
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
      <ModalComponent
        isOpen={isSignInModalOpen || isSignUpModalOpen}
        onClose={closeModal}
      >
        {isSignInModalOpen && <SignInModal closeModal={closeModal} />}
        {isSignUpModalOpen && <SignUpModal closeModal={closeModal} />}
      </ModalComponent>
      <Tooltip id='not-implemented'>Not implemented</Tooltip>
    </NavbarContainer>
  )
}
