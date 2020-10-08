import { theme, DefaultTheme } from '@chakra-ui/core'

interface ICustomThemeProps extends DefaultTheme {
  app: {
    background: string
    primaryTextColor: string
    secondaryTextColor: string
    primary: string
    secondary: string
  }
}

const customTheme: ICustomThemeProps = {
  ...theme,
  app: {
    background: '#f1f1f1',
    primaryTextColor: '#e1e1e4',
    secondaryTextColor: '#2e2e2e',
    primary: '#00b2a9',
    secondary: '#a626aa'
  },
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px'
  },
  fontSizes: {
    ...theme.fontSizes
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      200: '#f3f3f3'
    },
    green: {
      ...theme.colors.green,
      500: '#51cf23'
    }
  }
}

export default customTheme
