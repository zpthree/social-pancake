const colors = {
  black: `#393939`,
  brown: `#735a47`,
  cleargreen: `hsla(77, 52%, 42%, 0.7)`,
  clearred: `hsla(358, 59%, 37%, 0.85)`,
  darkgreen: `#74902d`,
  darkgrey: `#888`,
  darkoffwhite: `#f2f2f2`,
  darkred: `#8e2428`,
  green: `#84a333`,
  grey: `#aaa`,
  lightgreen: `#90ac47`,
  lightgrey: `#ccc`,
  lightred: `#ac2c31`,
  offwhite: `#f9f9f9`,
  red: `#98272b`,
  white: `#fefefe`,
};

const layout = {
  maxWidth: `1200px`,
  gutterS: `2rem`,
  gutterL: `4rem`,
};

const fontSizes = {
  fontSmaller: `1.35rem`,
  fontSmall: `1.6rem`,
  fontReg: `1.8rem`,
  fontBig: `2.7rem`,
  fontBigger: `3.6rem`,
  fontBiggest: `5.4rem`,
};

const fontFamilies = {};

const aesthetics = {
  br: `0`,
};

const theme = {
  ...colors,
  ...layout,
  ...fontSizes,
  ...fontFamilies,
  ...aesthetics,
};

export default theme;
