import Image from 'next/image'

import {
    FullBackground,
  ServicesSectionContainer,
  ServicesSectionItems,
  SolutionCard,
  Solutions,
  SolutionsBelow,
  SolutionsCTA,
} from '@/styles/components/servicesSection'

import solutionTwo from '../assets/solution-2.png'

export default function ServicesSection() {
  return (
    <ServicesSectionContainer>
      <FullBackground />

      <ServicesSectionItems>
        <Solutions>
          <SolutionCard>
            <Image src={solutionTwo} width={64} height={64} alt='' />
            <span>For your company</span>
            <h4>Crypto Solutions</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,{' '}
            </p>
          </SolutionCard>
          <SolutionCard>
            <Image src={solutionTwo} width={64} height={64} alt='' />
            <span>For your company</span>
            <h4>Crypto Solutions</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,{' '}
            </p>
          </SolutionCard>
        </Solutions>

        <SolutionsBelow>
          <SolutionCard>
            <Image src={solutionTwo} width={64} height={64} alt='' />
            <span>For your company</span>
            <h4>Crypto Solutions</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,{' '}
            </p>
          </SolutionCard>
          <SolutionCard>
            <Image src={solutionTwo} width={64} height={64} alt='' />
            <span>For your company</span>
            <h4>Crypto Solutions</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,{' '}
            </p>
          </SolutionCard>
        </SolutionsBelow>
      </ServicesSectionItems>

      <SolutionsCTA>
        <h4>Lorem ipsum</h4>
        <h2>Lorem ipsum</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        </p>
          <button>
            Sign up now
          </button>
      </SolutionsCTA>
    </ServicesSectionContainer>
  )
}
