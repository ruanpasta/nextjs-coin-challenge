import { styled } from "..";
import { utils } from "../utils";

export const CryptosSectionContainer = styled('section', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const CryptosSectionContent = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: utils.sizes["5xl"],
  maxWidth: 'calc(100vw - ((100vw - 1232px) /2))',
  width: '100%',

  minHeight: '40rem',
  ...utils.px('5%'),
  ...utils.py('5xl')
})
