import Image from 'next/image'

import { AiOutlineArrowRight } from 'react-icons/ai'

import {
  CTASessionButtons,
  CallToAction,
  HeroBannerContainer,
  Illustrations,
} from '@/styles/components/heroBanner'

import carouselOne from '../assets/carousel-1.png'
import carouselTwo from '../assets/carousel-2.png'
import carouselThree from '../assets/carousel-3.png'

// Criar o Carousel das imagens

export default function HeroBanner() {
  return (
    <HeroBannerContainer>
      <CallToAction>
        <h1>Lorem ipsum dolor sit amet, consectetur</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
        <button>
          Sign Up Now
          <AiOutlineArrowRight />
        </button>

        <CTASessionButtons>
          <button>
            Cryptos
          </button>
          <button>
            NFTs
          </button>
          <button>
            Games
          </button>
        </CTASessionButtons>
      </CallToAction>

      <Illustrations>
        <Image src={carouselOne} alt='' width={464} height={499} />
        <Image src={carouselTwo} alt='' width={464} height={499} />
        <Image src={carouselThree} alt='' width={464} height={499} />
      </Illustrations>
    </HeroBannerContainer>
  )
}
