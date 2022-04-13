const theme = {
  font: {
    semibase: '14px',
    base: '16px',
    semimedium: '18px',
    medium: '24px',
    semilarge: '30px',
    large: '36px',
  },
  color: {
    black: '#000000',
    white: '#ffffff',
    grey: '#222222',
    lightGrey: '#f4f4f4',
    darkGrey: '#adadad',
    backgroundGrey: '#F2F2F2',
    blue: '#302E82',
    darkBlue: '#2D2D44',
    lightBlue: '#3f3ccb',
    green: '#4EB543',
    lightGreen: '#57c74b',
    error: '#D10000',
    orange: '#e45f21',
  },
  viewportSize: {
    middle: '779px',
    large: '1050px',
  },
};

type ThemeType = typeof theme;

export default theme;
export type { ThemeType };
