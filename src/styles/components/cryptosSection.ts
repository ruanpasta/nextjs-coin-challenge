import { styled } from "..";
import { utils } from "../utils";

export const CryptosSectionContainer = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: utils.sizes["5xl"],

  minHeight: '40rem',
  ...utils.px('5%'),
  ...utils.py('5xl')
})
