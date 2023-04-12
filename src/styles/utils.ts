
export const utilsStyles = {
    fontSizes: {
      sm: '0.75rem',
      md: '0.875rem',
      lg: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
    },

    lineHeights: {
      sm: 0.75,
      md: 0.875,
      lg: 1,
      xl: 1.25,
      '2xl': 1.5,
      '3xl': 2,
      '4xl': 2.5,
      '5xl': 3,
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

const getValue = ({ obj, propName }: { obj: any, propName: string}) =>
    Object.getOwnPropertyDescriptor(obj, propName)?.value

export const utils = {
  fs: (propName: string) => ({
    fontSize: getValue({ obj: utilsStyles.fontSizes, propName }),
    lineHeight: getValue({ obj: utilsStyles.lineHeights, propName }),
    letterSpacing: getValue({ obj: utilsStyles.letterSpacings, propName })
  })
}
