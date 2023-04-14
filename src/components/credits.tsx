import Image from 'next/image'

import { Content, CreditsContainer } from '@/styles/components/credits'

import logo from '../assets/logo.png'

export default function Credits() {
  return (
    <CreditsContainer>
      <Content>
      <span>Copyright © 2022 - All rights reserved</span>
      <Image src={logo} width={121} height={21} alt='' />
      </Content>
    </CreditsContainer>
  )
}
