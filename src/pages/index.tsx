import { Navbar } from '@/components'
import { HomeContainer, LandingPage } from '@/styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <LandingPage></LandingPage>
    </HomeContainer>
  )
}
