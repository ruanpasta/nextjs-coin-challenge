import { styled } from ".";
import { utils } from "./utils";

export const HomeContainer = styled('main', {
  color: '$primary500',

  span: {
    color: 'Red',
    ...utils.fs('5xl')
  }
})
