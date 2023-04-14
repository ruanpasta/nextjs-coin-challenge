import { styled } from "..";
import { utils } from "../utils";

export const CreditsContainer = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ...utils.py('2xl'),
  ...utils.px('lg')
})
