import { createStitches } from '@stitches/react'
import { utilsStyles } from './utils'

export const {
  styled,
  css,
  globalCss,
  getCssText,
  keyframes,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      textBase: '#5D6670',

      primary100: '#FFF6E8',
      primary200: '#FFE1B5',
      primary300: '#FFCD82',
      primary400: '#FFB94F',
      primary500: '#FBAB34', // PrimaryBase
      primary600: '#18B863',
      primary700: '#AD721A',
      primary800: '#7A4E0C',
      primary900: '#472C04',

      secondary100: '#F6F6F6',
      secondary200: '#F4F3F8',
      secondary300: '#E0DEEA',
      secondary400: '#ACABB7',
      secondary500: '#8C8A97', // SecondaryBase
      secondary600: '#716F7A',
      secondary700: '#5F5C6B',
      secondary800: '#4E4B59',
      secondary900: '#33303E',

      tertiary100: '#E8FAF1',
      tertiary200: '#D1F6E3',
      tertiary300: '#A4EDC6',
      tertiary400: '#8DE8B8',
      tertiary500: '#1BD171', // TertiaryBase
      tertiary600: '#18B863',
      tertiary700: '#149E55',
      tertiary800: '#0E6B3A',
      tertiary900: '#07381E',

      quartenary100: '#FFF2F3',
      quartenary200: '#FFCFD0',
      quartenary300: '#FF9497',
      quartenary400: '#FA7D80',
      quartenary500: '#EC3237', // QuartenaryBase
      quartenary600: '#D42D31',
      quartenary700: '#A12226',
      quartenary800: '#6E171A',
      quartenary900: '#3B0C0E',
    },

    ...utilsStyles,
  },
})
