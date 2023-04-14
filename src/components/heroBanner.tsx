import Image from 'next/image'

import { AiOutlineArrowRight } from 'react-icons/ai'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import {
  CTASessionButtons,
  CallToAction,
  HeroBannerContainer,
  Illustrations,
} from '@/styles/components/heroBanner'

import carouselOne from '../assets/carousel-1.png'
import carouselTwo from '../assets/carousel-2.png'
import carouselThree from '../assets/carousel-3.png'
import { useEffect, useRef, useState } from 'react'

const carouselImages = [
  { id: 1, src: carouselOne },
  { id: 2, src: carouselTwo },
  { id: 3, src: carouselThree },
]

export default function HeroBanner() {
  const [sliderContainerRef, sliderInstance] = useKeenSlider<any>({
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
          <button>Cryptos</button>
          <button>NFTs</button>
          <button>Games</button>
        </CTASessionButtons>
      </CallToAction>

      <Illustrations ref={sliderContainerRef} className='keen-slider'>
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
      </Illustrations>
    </HeroBannerContainer>
  )
}
