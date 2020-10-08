import React from 'react'
import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/core'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

import GlobalStyles from '../../styles'

import theme from '../../styles/theme'

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <ChakraThemeProvider theme={theme}>
        <ColorModeProvider>
          <EmotionThemeProvider theme={theme}>
            <CSSReset />
            <GlobalStyles />
            {children}
          </EmotionThemeProvider>
        </ColorModeProvider>
      </ChakraThemeProvider>
    </StyledThemeProvider>
  )
}

export default ThemeContainer
