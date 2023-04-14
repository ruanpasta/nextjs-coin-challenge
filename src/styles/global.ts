import { globalCss } from ".";
import { utils } from "./utils";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: '$white',
    color: '$textBase',
    '--webkit-font-smoothing': 'antyaliased',

    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  h1: {
    ...utils.fs('5xl')
  },
  
  h2: {
    ...utils.fs('4xl')
  },
  
  h3: {
    ...utils.fs('3xl')
  },

  h4: {
    ...utils.fs('2xl')
  },
})
