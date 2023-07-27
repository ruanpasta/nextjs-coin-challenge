import Image from 'next/image'

import { DashboardContainer, DashboardNavbar } from '@/styles/pages/dashboard'

import logo from '../assets/logo.png'

export default function Dashboard() {
  return (
    <DashboardContainer>
      <header>
        <DashboardNavbar>
          <Image src={logo.src} width={124} height={21} alt='logo' />
        </DashboardNavbar>
      </header>
      <h1>Dashboard Work in progress</h1>
      <p>(Development stopped)</p>
    </DashboardContainer>
  )
}
