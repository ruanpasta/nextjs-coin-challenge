
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

const sizes = {
  sm: 0.75,
  md: 0.875,
  lg: 1,
  xl: 1.25,
  '2xl': 1.5,
  '3xl': 2,
  '4xl': 2.5,
  '5xl': 3,
}

const sizesToRem = Object.entries(sizes).reduce((sizes: any, [key, value]) => {
  sizes[key] = `${value}rem`
  return sizes
}, {}) as Sizes

export const utilsStyles = {
  fontSizes: {
    ...sizesToRem
  },

  lineHeights: {
    ...sizes
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

const getValue = ({ obj, propName }: { obj: any; propName: SizeKey | string }) =>
  Object.getOwnPropertyDescriptor(obj, propName)?.value

const isSizeKey = (value: any): value is SizeKey => {
  return typeof value === 'string' && (value in sizes);
}

const getSizeToRem = (propName: SizeKey | string) => {
  if (isSizeKey(propName))
    return getValue({ obj: sizesToRem, propName })
  return propName
}

export const utils = {
  sizes,
  sizesToRem,
  fs: (propName: string) => ({
    fontSize: getValue({ obj: utilsStyles.fontSizes, propName }),
    lineHeight: getValue({ obj: utilsStyles.lineHeights, propName }),
    letterSpacing: getValue({ obj: utilsStyles.letterSpacings, propName }),
  }),
  px: (propName: SizeKey | string) => ({
    paddingLeft: getSizeToRem(propName),
    paddingRight: getSizeToRem(propName),
  }),
  py: (propName: SizeKey | string) => ({
    paddingTop: getSizeToRem(propName),
    paddingBottom: getSizeToRem(propName),
  }),
  mx: (propName: SizeKey | string) => ({
    marginLeft: getSizeToRem(propName),
    marginRight: getSizeToRem(propName),
  }),
  my: (propName: SizeKey | string) => ({
    marginTop: getSizeToRem(propName),
    marginBottom: getSizeToRem(propName),
  }),
}
