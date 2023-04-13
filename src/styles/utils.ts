interface Sizes {
  sm: string | number
  md: string | number
  lg: string | number
  xl: string | number
  '2xl': string | number
  '3xl': string | number
  '4xl': string | number
  '5xl': string | number
}

type SizeKey = keyof Sizes

const sizes: Sizes = {
  sm: '0.75rem',
  md: '0.875rem',
  lg: '1rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  '4xl': '2.5rem',
  '5xl': '3rem',
}

export const utilsStyles = {
  fontSizes: {
    ...sizes
  },

  lineHeights: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
    '4xl': '3rem',
    '5xl': '3.5rem',
  },

  letterSpacings: {
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
    '2xl': 0,
    '3xl': 0,
    '4xl': -1,
    '5xl': -1,
  },
}

const getValue = ({
  obj,
  propName,
}: {
  obj: any
  propName: SizeKey | string
}) => Object.getOwnPropertyDescriptor(obj, propName)?.value

const isSizeKey = (value: any): value is SizeKey => {
  return typeof value === 'string' && value in sizes
}

const getSize = (propName: SizeKey | string) => {
  if (isSizeKey(propName)) return getValue({ obj: sizes, propName })
  return propName
}

export const utils = {
  sizes,
  fs: (propName: string) => ({
    fontSize: getValue({ obj: utilsStyles.fontSizes, propName }),
    lineHeight: getValue({ obj: utilsStyles.lineHeights, propName }),
    letterSpacing: getValue({ obj: utilsStyles.letterSpacings, propName }),
  }),
  px: (propName: SizeKey | string) => ({
    paddingLeft: getSize(propName),
    paddingRight: getSize(propName),
  }),
  py: (propName: SizeKey | string) => ({
    paddingTop: getSize(propName),
    paddingBottom: getSize(propName),
  }),
  mx: (propName: SizeKey | string) => ({
    marginLeft: getSize(propName),
    marginRight: getSize(propName),
  }),
  my: (propName: SizeKey | string) => ({
    marginTop: getSize(propName),
    marginBottom: getSize(propName),
  }),
  maxHW: (propName: SizeKey | string) => ({
    maxHeight: getSize(propName),
    maxWidth: getSize(propName),
  })
}
