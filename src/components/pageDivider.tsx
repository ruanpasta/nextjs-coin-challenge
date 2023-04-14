import {
  PageDividerContainer,
  FullBackground,
} from '@/styles/components/pageDivider'

import divider from '../assets/landpage-divider.png'
import Image from 'next/image'

export default function PageDivider() {
  return (
    <PageDividerContainer>
      <FullBackground>
        <Image src={divider} width={1440} height={247} alt='' />
      </FullBackground>
    </PageDividerContainer>
  )
}
