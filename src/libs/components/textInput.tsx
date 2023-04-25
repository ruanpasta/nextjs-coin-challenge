import React, { ReactNode, forwardRef } from 'react'
import { IconContext } from 'react-icons'

import {
  TextInputContainer,
  TextInputElement,
  TextInputErrorMessage,
  TextInputField,
  TextInputIconWrapper,
} from '@/styles/libs/components/textInput'

interface TextInputProps {
  iconStart?: ReactNode
  iconEnd?: ReactNode
  isValid?: boolean
  errorMessage?: string

  // Rest props
  [propName: string]: any
}

// TODO: create a prop to receive error message

function TextInputComponent(
  { iconStart, iconEnd, isValid = true, errorMessage, ...rest }: TextInputProps,
  ref: any
) {
  return (
    <TextInputContainer>
      <TextInputField hasError={!isValid}>
        {iconStart && (
          <IconContext.Provider value={{}}>
            <TextInputIconWrapper>
              {React.cloneElement(iconStart as React.ReactElement)}
            </TextInputIconWrapper>
          </IconContext.Provider>
        )}

        <TextInputElement ref={ref} {...rest} />

        {iconEnd && (
          <IconContext.Provider value={{}}>
            <TextInputIconWrapper>
              {React.cloneElement(iconEnd as React.ReactElement)}
            </TextInputIconWrapper>
          </IconContext.Provider>
        )}
      </TextInputField>

      {!isValid && (
        <TextInputErrorMessage>{errorMessage}</TextInputErrorMessage>
      )}
    </TextInputContainer>
  )
}

export { TextInputErrorMessage }
export default forwardRef(TextInputComponent)
