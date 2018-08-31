const bg = '#f5f5f5';
const font = {
  family: '"Kanit", sans-serif',
  color: {
    default: '#656d7d',
    light: '#c3c3c3',
    dark: '#4b505a',
    title: '#2e3440',
  },
  size: {
    default: '1rem',
    small: '0.75rem',
    mainTitle: '2rem',
    title: '1.5rem',
    subTitle: '1.25',
  },
  weight: {
    light: '300',
    normal: '300',
    bold: '500',
  },
};

const gutter = {
  default: '15px',
  small: '8px',
  large: '30px',
  table: '.75rem'
};

const colors = {
  primary: {
    default: '#3469b1',
    dark: '#275490',
    light: '#528ad7',
  },
  success: {
    default: '#4DB698',
    light: '#66cc99',
  },
  info: {
    default: '#22a7f0',
  },
  danger: {
    default: '#E74C3C',
  },
  warning: {
    default: '#f7be38',
  },
  second: {
    default: '#2c9bb3',
  },
  purple: {
    default: '#9B59B6',
  },
  blue: {
    default: '#009dc6',
  },
  white: '#ffffff',
  gray: {
    light: '#f5f5f5',
    dark: '#d6d8d9',
  },
};

const link = {
  color: '#1a237e',
  decoration: 'none',
};

const borderRadius = {
  default: '4px',
};
const borderStyle = '1px solid';
const border = {
  default: '1px solid #ddd',
  success: `${borderStyle} ${colors.second.default}`,
};

const screen = {
  xs: {
    max: '575.98px',
  },
  sm: {
    up: '576px',
    max: '767.98px',
  },
  md: {
    up: '768px',
    max: '991.98px',
  },
  lg: {
    up: '992px',
    max: '1199.98px',
  },
  xl: {
    up: '1200px',
    max: '1399.98px',
  },
  hd: {
    up: '1400px',
  },
};

const contentGutter = '2rem';
const headerPadding = '15px 30px';
const delay = 'all 0.3s ease-in-out';

export {
  bg,
  font,
  gutter,
  colors,
  link,
  border,
  borderRadius,
  contentGutter,
  headerPadding,
  screen,
  delay,
};
