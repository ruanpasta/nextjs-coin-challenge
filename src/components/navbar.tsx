import Image from 'next/image'
import Link from 'next/link'

import {
  CryptoContent,
  CryptoSlider,
  NavbarContainer,
  NavbarElements,
  PagesMenus,
} from '@/styles/components/navbar'

import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarElements>
        <div>
          <Image src={logo.src} width={124} height={21} alt='logo' />

          <PagesMenus>
            <Link href='/'>About</Link>
            <Link href='/'>Top Cryptos</Link>
          </PagesMenus>
        </div>
        <div>
          <CryptoSlider>
            <CryptoContent>
              <span>{'BIT R$ 150342,00 +7,082'}</span>
              <span>ETH R$ 9.2030,15 -18,709</span>
              <span>SOL R$ 11.003,62 +7,082</span>
              <span>BIN R$ 1.532,16 -3,980</span>
              <span>DOG R$ 23,62 +1,230</span>
            </CryptoContent>
          </CryptoSlider>
          <a href='/'>Sign in</a>
          <button>Sign up</button>
        </div>
      </NavbarElements>
    </NavbarContainer>
  )
}
