import { styled } from '@/styles'
import { utils } from '@/styles/utils'

export const ButtonContainer = styled('button', {
  cursor: 'pointer',
  border: 0,
  ...utils.py('0.5rem'),
  ...utils.px('2xl'),
  ...utils.fs('md'),

  variants: {
    color: {
      primary: {
        color: '$white',
        backgroundColor: '$primary500',
        '&:hover': { backgroundColor: '$primary400' },
      },
      secondary: {
        color: '$primary500',
        backgroundColor: '$primary100',
        '&:hover': { backgroundColor: '$primary200' },
      },
      success: {
        color: 'white',
        backgroundColor: '$tertiary700',
        '&:hover': { backgroundColor: '$tertiary600' },
      },
    },
    size: {
      small: {
        ...utils.py('0.25rem'),
        ...utils.px('lg'),
        ...utils.fs('sm')
      },
      medium: {
        ...utils.py('0.5rem'),
        ...utils.px('xl'),
        ...utils.fs('md')
      },
      large: {
        ...utils.py('0.75rem'),
        ...utils.px('2xl'),
        ...utils.fs('lg')
      },
      extraLarge: {
        ...utils.py('0.875rem'),
        ...utils.px('5xl'),
        ...utils.fs('lg')
      }
    },
    format: {
      rounded: {
        borderRadius: 32,
      },
      square: {
        borderRadius: 4
      },
    },
    variant: {
      link: {
        backgroundColor: 'transparent',
      },
      contained: {},
    },
  },

  compoundVariants: [
    {
      color: 'primary',
      variant: 'link',
      css: {
        backgroundColor: 'transparent',
        color: '$primary500',
        '&:hover': {
          color: '$primary300',
          backgroundColor: 'transparent',
        },
      },
    },
    {
      color: 'secondary',
      variant: 'link',
      css: {
        backgroundColor: 'transparent',
        color: '$textBase',
        '&:hover': {
          color: '$secondary500',
          backgroundColor: 'transparent',
        },
      },
    },
  ],

  defaultVariants: {
    color: 'primary',
    variant: 'link',
    size: 'small',
    format: 'rounded'
  },
})
