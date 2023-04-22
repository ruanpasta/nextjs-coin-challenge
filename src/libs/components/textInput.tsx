import React, { ReactNode } from 'react'
import { IconContext } from 'react-icons'

import {
  TextInputContainer,
  TextInputElement,
  TextInputIconWrapper,
} from '@/styles/libs/components/textInput'

interface TextInputProps {
  iconStart?: ReactNode
  iconEnd?: ReactNode

  // Rest props
  [propName: string]: any
}

export default function TextInputComponent({
  iconStart,
  iconEnd,
  ...rest
}: TextInputProps) {
  return (
    <TextInputContainer>
      {iconStart && (
        <IconContext.Provider value={{}}>
          <TextInputIconWrapper>
            {React.cloneElement(iconStart as React.ReactElement)}
          </TextInputIconWrapper>
        </IconContext.Provider>
      )}

      <TextInputElement {...rest} />

      {iconEnd && (
        <IconContext.Provider value={{}}>
          <TextInputIconWrapper>
            {React.cloneElement(iconEnd as React.ReactElement)}
          </TextInputIconWrapper>
        </IconContext.Provider>
      )}
    </TextInputContainer>
  )
}
