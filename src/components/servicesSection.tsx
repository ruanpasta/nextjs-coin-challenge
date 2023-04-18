import Image from 'next/image'

import {
  ServicesSectionContent,
  ServicesSectionContainer,
  ServicesSectionItems,
  ServicesSectionSolutionCard,
  ServicesSectionSolutions,
  ServicesSectionSolutionsBelow,
  ServicesSectionSolutionsCTA,
  ServicesSectionSolutionsMobile,
} from '@/styles/components/servicesSection'

import solutionTwo from '../assets/solution-2.png'
import solutionThree from '../assets/solution-3.png'
import solutionFour from '../assets/solution-4.png'
import solutionFive from '../assets/solution-5.png'

import { useKeenSlider } from 'keen-slider/react'

const solutions = [
  {
    id: 1,
    element: (
      <>
        <Image src={solutionTwo} width={64} height={64} alt='' />
        <span>For your company</span>
        <h4>Crypto Solutions</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{' '}
        </p>
      </>
    ),
  },
  {
    id: 2,
    element: (
      <>
        <Image src={solutionThree} width={64} height={64} alt='' />
        <span>For your company</span>
        <h4>Crypto Solutions</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{' '}
        </p>
      </>
    ),
  },
  {
    id: 4,
    element: (
      <>
        <Image src={solutionFour} width={64} height={64} alt='' />
        <span>For your company</span>
        <h4>Crypto Solutions</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{' '}
        </p>
      </>
    ),
  },
  {
    id: 5,
    element: (
      <>
        <Image src={solutionFive} width={64} height={64} alt='' />
        <span>For your company</span>
        <h4>Crypto Solutions</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{' '}
        </p>
      </>
    ),
  },
]

export default function ServicesSection() {
  const [sliderContainerRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
    loop: false,
  })

  return (
    <ServicesSectionContainer>
      <ServicesSectionContent>
        <ServicesSectionItems>
          <ServicesSectionSolutions>
            {solutions
              .filter((solutionToFilter) => solutionToFilter.id < 3)
              .map((solution) => (
                <ServicesSectionSolutionCard key={solution.id}>
                  {solution.element}
                </ServicesSectionSolutionCard>
              ))}
          </ServicesSectionSolutions>

          <ServicesSectionSolutionsBelow>
            {solutions
              .filter((solutionToFilter) => solutionToFilter.id > 2)
              .map((solution) => (
                <ServicesSectionSolutionCard key={solution.id}>
                  {solution.element}
                </ServicesSectionSolutionCard>
              ))}
          </ServicesSectionSolutionsBelow>

          <ServicesSectionSolutionsMobile
            ref={sliderContainerRef}
            className='keen-slider'
          >
            {solutions.map((solution) => (
              <ServicesSectionSolutionCard
                key={solution.id}
                className='keen-slider__slide'
              >
                {solution.element}
              </ServicesSectionSolutionCard>
            ))}
          </ServicesSectionSolutionsMobile>
        </ServicesSectionItems>

        <ServicesSectionSolutionsCTA>
          <h4>Lorem ipsum</h4>
          <h2>Lorem ipsum</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
          <button>Sign up now</button>
        </ServicesSectionSolutionsCTA>
      </ServicesSectionContent>
    </ServicesSectionContainer>
  )
}
