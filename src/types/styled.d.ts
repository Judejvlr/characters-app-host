import 'styled-components';

export interface Variant {
  variant?: string
}

interface PaletteVariant {
  dark: string,
  light: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      background: PaletteVariant,
      text: PaletteVariant,
      primary: string
      secondary: string
    }
  }
}