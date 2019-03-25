export const COLORS = {
  DARK: '#272822',
  DARK_TINT: '#49483E',
  GREY: '#75715e',
  BLUE: '#16b1d0',
  PURPLE: '#9c66ff',
  PALE_WHITE: '#d2d0c6',
  WHITE: '#ffffff',
  OFF_WHITE: '#efefef',
  RED: '#f9065f',
  RED_DARK: '#960050',
  YELLOW: '#c3b322',
}

export const THEME = {
  BACKGROUND: COLORS.OFF_WHITE,
  FONT: COLORS.DARK_TINT,
}

const generateShadow = ({
  distance = 2,
  blur = 5,
  spread = 0,
  colour = '#999999',
}) => `
  -webkit-box-shadow: ${distance}px ${distance}px ${blur}px ${spread}px ${colour};
  -moz-box-shadow: ${distance}px ${distance}px ${blur}px ${spread}px ${colour};
  box-shadow: ${distance}px ${distance}px ${blur}px ${spread}px ${colour};
`

export const generateMobileOveride = (styles = ``) => `
  @media only screen and (max-width: 30rem) {
    ${styles}
  }
`

export const SHADOWS = {
  LOW: generateShadow({
    distance: 1,
    blur: 3,
  }),
  MEDIUM: generateShadow({
    distance: 4,
    blur: 10,
  }),
  HIGH: generateShadow({
    distance: 6,
    blur: 20,
  }),
}
