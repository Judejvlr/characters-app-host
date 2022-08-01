import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { AppTheme } from '../theme/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from '../config/i18n'

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={AppTheme}>
        {children}
      </ThemeProvider>
    </I18nextProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }