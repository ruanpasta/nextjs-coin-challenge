import { styled } from "..";
import { utils } from "../utils";

export const CryptosSectionContainer = styled('section', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const CryptosSectionContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: utils.sizes["5xl"],
  maxWidth: 'calc(100vw - ((100vw - 1232px) /2))',
  width: '100%',

  ...utils.px('5%'),
  ...utils.py('5xl'),

  [utils.mediaBreaks.sm]: {
    ...utils.px('2xl')
  }
})
