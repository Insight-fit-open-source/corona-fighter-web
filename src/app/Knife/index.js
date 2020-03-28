class Knife {
  static convertToRemVal(baseInPx, val) {
    return val / baseInPx;
  }

  static getFontSize(baseFontSize, scaleFactor, scaleDegree) {
    if (!baseFontSize || !scaleFactor)
      throw new Error('invalid parameters specified');

    let newSize = baseFontSize;
    for (let i = 0; i < scaleDegree; i += 1) {
      // eslint-disable-next-line operator-assignment
      newSize = newSize * scaleFactor;
    }
    return newSize;
  }

  static getLineHeight(baseFontSize, baseLineHeight, scaleFactor, scaleDegree) {
    if (!baseFontSize || !baseLineHeight || !scaleFactor)
      throw new Error('invalid parameters specified');

    const fontSize = Knife.getFontSize(baseFontSize, scaleFactor, scaleDegree);
    const lineHeightPX = baseLineHeight / 2;
    return Math.ceil(fontSize / lineHeightPX) * lineHeightPX;
  }

  static getFontSizeInRems(baseFontSize, scaleFactor, scaleDegree) {
    if (!baseFontSize || !scaleFactor)
      throw new Error('invalid parameters specified');

    const px = Knife.getFontSize(baseFontSize, scaleFactor, scaleDegree);
    const rems = px / baseFontSize;
    return `${Math.round(rems * 1000) / 1000}rem`;
  }

  static getLineHeightInRems(
    baseFontSize,
    baseLineHeight,
    scaleFactor,
    scaleDegree,
  ) {
    if (!baseFontSize || !scaleFactor)
      throw new Error('invalid parameters specified');

    const px = Knife.getLineHeight(
      baseFontSize,
      baseLineHeight,
      scaleFactor,
      scaleDegree,
    );

    const rems = Knife.convertToRemVal(baseFontSize, px);
    return `${Math.round(rems * 1000) / 1000}rem`;
  }

  static getSpacing(baseFontSize, baseLineHeight, multiplier = 1) {
    if (!baseFontSize || !baseLineHeight)
      throw new Error('invalid parameters specified');

    return (baseLineHeight * multiplier) / baseFontSize;
  }

  static getSpacingInRems(baseFontSize, baseLineHeight, multiplier = 1) {
    return `${this.getSpacing(baseFontSize, baseLineHeight, multiplier)}rem`;
  }

  static getTypeStyles(baseFontSize, baseLineHeight, scaleFactor, scaleDegree) {
    if (!baseFontSize || !baseLineHeight)
      throw new Error('invalid parameters specified');

    const fontSizeInRems = Knife.getFontSizeInRems(
      baseFontSize,
      scaleFactor,
      scaleDegree,
    );
    const lineHeightInRems = Knife.getLineHeightInRems(
      baseFontSize,
      baseLineHeight,
      scaleFactor,
      scaleDegree,
    );

    return {
      fontSize: fontSizeInRems,
      lineHeight: lineHeightInRems,
    };
  }
}

export default Knife;
