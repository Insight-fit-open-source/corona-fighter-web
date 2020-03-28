const sizes = {
  fontSize: 16,
  lineHeight: 24,
  scaleFactor: 1.25,

  pxToRems: number => `${number / sizes.fontSize}rem`,
  space: number => `${(sizes.lineHeight / sizes.fontSize) * number}rem`,
};

export default sizes;
