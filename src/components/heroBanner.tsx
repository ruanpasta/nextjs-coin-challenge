import { useEffect } from 'react'

import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import {
  HeroBannerCTASessionButtons,
  HeroBannerCallToAction,
  HeroBannerContent,
  HeroBannerContainer,
  HeroBannerIllustrations,
} from '@/styles/components/heroBanner'

import { AiOutlineArrowRight } from 'react-icons/ai'

import carouselOne from '../assets/carousel-1.png'
import carouselTwo from '../assets/carousel-2.png'
import carouselThree from '../assets/carousel-3.png'

const carouselImages = [
  { id: 1, src: carouselOne },
  { id: 2, src: carouselTwo },
  { id: 3, src: carouselThree },
]

export default function HeroBanner() {
  const [sliderContainerRef, sliderInstance] = useKeenSlider({
    loop: false,
    defaultAnimation: {
      duration: 2000,
    },
  })

  useEffect(() => {
    const handleScroll = (e: Event) => {
      // Verifica se o evento de scroll foi acionado pelo scroll vertical
      if (Math.abs((e as WheelEvent).deltaY) > 30) {
        if ((e as WheelEvent).deltaY > 20)
          sliderInstance.current?.next() // Scroll para baixo
        else sliderInstance.current?.prev() // Scroll para cima
      }
    }
    document.addEventListener('wheel', handleScroll)
    return () => document.removeEventListener('wheel', handleScroll)
  }, [sliderContainerRef, sliderInstance])

  return (
    <HeroBannerContainer>
      <HeroBannerContent>
        <HeroBannerCallToAction>
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

          <HeroBannerCTASessionButtons>
            <button>Cryptos</button>
            <button>NFTs</button>
            <button>Games</button>
          </HeroBannerCTASessionButtons>
        </HeroBannerCallToAction>

        <HeroBannerIllustrations ref={sliderContainerRef} className='keen-slider'>
          {carouselImages.map((image) => (
            <Image
              key={image.id}
              className='keen-slider__slide'
              src={image.src}
              width={464}
              height={499}
              alt='Carousel Image'
            />
          ))}
        </HeroBannerIllustrations>
      </HeroBannerContent>
    </HeroBannerContainer>
  )
}
