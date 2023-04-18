import Image from 'next/image'
import Link from 'next/link'

import {
  CryptoContent,
  CryptoSlider,
  NavbarContainer,
  NavbarElements,
  NavbarItem,
  PagesMenus,
} from '@/styles/components/navbar'

import logo from '../assets/logo.png'
import useWindowSize from '@/hooks/useWindowSize'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
  const size = useWindowSize()
  const isMobile = size.width < 321
  const isDesktop = size.width > 920

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
                <span>{'BIT R$ 150342,00 +7,082'}</span>
                <span>ETH R$ 9.2030,15 -18,709</span>
                <span>SOL R$ 11.003,62 +7,082</span>
                <span>BIN R$ 1.532,16 -3,980</span>
                <span>DOG R$ 23,62 +1,230</span>
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
            <span>{'BIT R$ 150342,00 +7,082'}</span>
            <span>ETH R$ 9.2030,15 -18,709</span>
            <span>SOL R$ 11.003,62 +7,082</span>
            <span>BIN R$ 1.532,16 -3,980</span>
            <span>DOG R$ 23,62 +1,230</span>
          </CryptoContent>
        </CryptoSlider>
      )}
    </NavbarContainer>
  )
}
