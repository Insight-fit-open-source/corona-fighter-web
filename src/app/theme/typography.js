import Knife from 'src/app/Knife';
import sizes from './sizes';

const typography = {
  htmlFontSize: sizes.fontSize,
  fontSize: sizes.fontSize,
  fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    ...Knife.getTypeStyles(
      sizes.fontSize,
      sizes.lineHeight,
      sizes.scaleFactor,
      5,
    ),
    fontWeight: 300,
    opacity: 1,
  },
  h2: {
    ...Knife.getTypeStyles(
      sizes.fontSize,
      sizes.lineHeight,
      sizes.scaleFactor,
      4,
    ),
    fontWeight: 300,
    opactiy: 0.9,
  },
  h3: {
    ...Knife.getTypeStyles(
      sizes.fontSize,
      sizes.lineHeight,
      sizes.scaleFactor,
      3,
    ),
    fontWeight: 500,
    opactiy: 0.9,
  },
  h4: {
    ...Knife.getTypeStyles(
      sizes.fontSize,
      sizes.lineHeight,
      sizes.scaleFactor,
      2,
    ),
    fontWeight: 500,
    opacity: 0.85,
  },
  h5: {
    ...Knife.getTypeStyles(
      sizes.fontSize,
      sizes.lineHeight,
      sizes.scaleFactor,
      1,
    ),
    fontWeight: 500,
    opacity: 0.8,
  },
  h6: {
    ...Knife.getTypeStyles(
      sizes.fontSize,
      sizes.lineHeight,
      sizes.scaleFactor,
      0,
    ),
    fontWeight: 500,
    letterSpacing: 0.5,
    opacity: 0.7,
  },
  body1: {
    ...Knife.getTypeStyles(
      sizes.fontSize,
      sizes.lineHeight,
      sizes.scaleFactor,
      0,
    ),
  },
  body2: {
    ...Knife.getTypeStyles(
      sizes.fontSize,
      sizes.lineHeight,
      sizes.scaleFactor,
      0,
    ),
  },
  subtitle1: {
    ...Knife.getTypeStyles(
      sizes.fontSize,
      sizes.lineHeight,
      sizes.scaleFactor,
      2,
    ),
    fontWeight: 400,
    letterSpacing: 1.5,
    opacity: 0.8,
  },
  subtitle2: {
    ...Knife.getTypeStyles(
      sizes.fontSize,
      sizes.lineHeight,
      sizes.scaleFactor,
      0,
    ),
    fontWeight: 300,
    letterSpacing: 0.75,
    opacity: 0.9,
  },
  caption: {
    fontSize: sizes.pxToRems(14),
    lineHeight: sizes.space(1),
    opacity: 0.8,
    fontWeight: 300,
    letterSpacing: 0.75,
  },
  overline: {
    fontSize: sizes.pxToRems(12),
    lineHeight: sizes.space(1),
    letterSpacing: 1.5,
    opacity: 0.7,
  },
  button: {
    fontSize: sizes.pxToRems(12),
    fontWeight: 500,
    letterSpacing: 1.25,
  },
};

export default typography;
