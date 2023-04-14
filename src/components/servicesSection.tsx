import Image from 'next/image'

import {
  ServicesSectionContent,
  ServicesSectionContainer,
  ServicesSectionItems,
  ServicesSectionSolutionCard,
  ServicesSectionSolutions,
  ServicesSectionSolutionsBelow,
  ServicesSectionSolutionsCTA,
} from '@/styles/components/servicesSection'

import solutionTwo from '../assets/solution-2.png'

export default function ServicesSection() {
  return (
    <ServicesSectionContainer>
      <ServicesSectionContent>
        <ServicesSectionItems>
          <ServicesSectionSolutions>
            <ServicesSectionSolutionCard>
              <Image src={solutionTwo} width={64} height={64} alt='' />
              <span>For your company</span>
              <h4>Crypto Solutions</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{' '}
              </p>
            </ServicesSectionSolutionCard>
            <ServicesSectionSolutionCard>
              <Image src={solutionTwo} width={64} height={64} alt='' />
              <span>For your company</span>
              <h4>Crypto Solutions</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{' '}
              </p>
            </ServicesSectionSolutionCard>
          </ServicesSectionSolutions>

          <ServicesSectionSolutionsBelow>
            <ServicesSectionSolutionCard>
              <Image src={solutionTwo} width={64} height={64} alt='' />
              <span>For your company</span>
              <h4>Crypto Solutions</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{' '}
              </p>
            </ServicesSectionSolutionCard>
            <ServicesSectionSolutionCard>
              <Image src={solutionTwo} width={64} height={64} alt='' />
              <span>For your company</span>
              <h4>Crypto Solutions</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{' '}
              </p>
            </ServicesSectionSolutionCard>
          </ServicesSectionSolutionsBelow>
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
