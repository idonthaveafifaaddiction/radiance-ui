import PropTypes from 'prop-types';

const SECONDARY_COLORS = {
  primary: '#2D2926',
  primaryTint1: '#2D2926',
  primaryTint2: '#2D2926',
  primaryTint3: '#2D2926',
  primaryTint4: '#F2F0EF',
  secondary: '#F3EA5D',
  secondaryTint1: '#FCF4A8',
  secondaryTint2: '#FDF7BE',
  secondaryTint3: '#FDF9D3',
  secondaryTint4: '#FEFCE5',
  tertiary: '#CBC5BF',
  tertiaryTint1: '#D8D3CF',
  tertiaryTint2: '#E5E2DF',
  tertiaryTint3: '#F2F0EF',
  tertiaryTint4: '#F2F0EF',
  default: '#2C2A25',
  defaultLight: '#F0EEEC',
  defaultBorder: '#F0EEEC',
  success: '#406237',
  successLight: '#ECEFEB',
  successBorder: '#ECEFEB',
  error: '#A33F29',
  errorLight: '#F6ECEA',
  errorBorder: '#F6ECEA',
  info: '#2C2A25',
  infoLight: '#FDF9D3',
  infoBorder: '#FDF9D3',
  background: '#FFFDF2',
  backgroundDark: '#C4BFB7',
  overlay: 'rgba(45, 41, 38, 0.7)',
  overlaySolid: '#2D2926',
  border: '#E5E2DF',
  textDisabled: '#CBC5BF',
  black: '#2D2926',
  white: '#FFFDF2',
  transparent: 'transparent',
} as const;

export const SECONDARY_COLORS_PROP_TYPES = PropTypes.oneOf(
  Object.values(SECONDARY_COLORS),
);

export default SECONDARY_COLORS;
