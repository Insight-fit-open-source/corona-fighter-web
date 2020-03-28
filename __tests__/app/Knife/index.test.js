import Knife from 'src/app/Knife';

const baseFontSize = 16;
const baseLineHeight = 24;
const scaleFactor = 1.25;

describe('Knife', () => {
  describe('#getFontSize', () => {
    it('returns the expected font size', () => {
      const resultZero = Knife.getFontSize(baseFontSize, scaleFactor, 0);
      const resultOne = Knife.getFontSize(baseFontSize, scaleFactor, 1);
      const resultTwo = Knife.getFontSize(baseFontSize, scaleFactor, 2);
      const resultThree = Knife.getFontSize(baseFontSize, scaleFactor, 3);

      expect(resultZero).toEqual(baseFontSize);
      expect(resultOne).toEqual(baseFontSize * scaleFactor);
      expect(resultTwo).toEqual(baseFontSize * scaleFactor * scaleFactor);
      expect(resultThree).toEqual(
        baseFontSize * scaleFactor * scaleFactor * scaleFactor,
      );
    });

    it('errors if it does not have the expected arguments', () => {
      const execute = () => Knife.getFontSize();
      expect(execute).toThrowError('invalid parameters specified');
    });
  });

  describe('#getLineHeight', () => {
    it('returns the expected line height', () => {
      const resultZero = Knife.getLineHeight(
        baseFontSize,
        baseLineHeight,
        scaleFactor,
        0,
      );
      const resultOne = Knife.getLineHeight(
        baseFontSize,
        baseLineHeight,
        scaleFactor,
        1,
      );
      const resultTwo = Knife.getLineHeight(
        baseFontSize,
        baseLineHeight,
        scaleFactor,
        2,
      );
      const resultFour = Knife.getLineHeight(
        baseFontSize,
        baseLineHeight,
        scaleFactor,
        4,
      );
      expect(resultZero).toEqual(baseLineHeight);
      expect(resultOne).toEqual(baseLineHeight);
      expect(resultTwo).toEqual(baseLineHeight * 1.5);
      expect(resultFour).toEqual(baseLineHeight * 2);
    });

    it('errors if it does not have the expected arguments', () => {
      const execute = () => Knife.getLineHeight();
      expect(execute).toThrowError('invalid parameters specified');
    });
  });

  describe('#getFontSizeInRems', () => {
    it('returns the expected font size in rems', () => {
      const resultZero = Knife.getFontSizeInRems(baseFontSize, scaleFactor, 0);
      const resultOne = Knife.getFontSizeInRems(baseFontSize, scaleFactor, 1);
      const resultTwo = Knife.getFontSizeInRems(baseFontSize, scaleFactor, 2);
      const resultThree = Knife.getFontSizeInRems(baseFontSize, scaleFactor, 3);

      expect(resultZero).toBe('1rem');
      expect(resultOne).toBe('1.25rem');
      expect(resultTwo).toBe('1.563rem');
      expect(resultThree).toBe('1.953rem');
    });

    it('errors if it does not have the expected arguments', () => {
      const execute = () => Knife.getFontSizeInRems();
      expect(execute).toThrowError('invalid parameters specified');
    });
  });

  describe('#getLineHeightInRems', () => {
    it('returns the expected line height in rems', () => {
      const resultZero = Knife.getLineHeightInRems(
        baseFontSize,
        baseLineHeight,
        scaleFactor,
        0,
      );
      const resultTwo = Knife.getLineHeightInRems(
        baseFontSize,
        baseLineHeight,
        scaleFactor,
        2,
      );
      const resultFour = Knife.getLineHeightInRems(
        baseFontSize,
        baseLineHeight,
        scaleFactor,
        4,
      );
      expect(resultZero).toBe('1.5rem');
      expect(resultTwo).toBe('2.25rem');
      expect(resultFour).toBe('3rem');
    });

    it('errors if it does not have the expected arguments', () => {
      const execute = () => Knife.getLineHeightInRems();
      expect(execute).toThrowError('invalid parameters specified');
    });
  });

  describe('#getSpacing', () => {
    it('returns default spacing', () => {
      const resultZero = Knife.getSpacing(baseFontSize, baseLineHeight);
      const resultOne = Knife.getSpacing(baseFontSize, baseLineHeight, 2);

      expect(resultZero).toEqual(1.5);
      expect(resultOne).toEqual(3);
    });

    it('errors if it does not have the expected arguments', () => {
      const execute = () => Knife.getSpacing();
      expect(execute).toThrowError('invalid parameters specified');
    });
  });

  describe('#getSpacingInRems', () => {
    it('returns default spacing', () => {
      const resultZero = Knife.getSpacingInRems(baseFontSize, baseLineHeight);
      const resultOne = Knife.getSpacingInRems(baseFontSize, baseLineHeight, 2);

      expect(resultZero).toEqual('1.5rem');
      expect(resultOne).toEqual('3rem');
    });

    it('errors if it does not have the expected arguments', () => {
      const execute = () => Knife.getSpacing();
      expect(execute).toThrowError('invalid parameters specified');
    });
  });

  describe('#getTypeStyles', () => {
    it('gets the expected type styles', () => {
      const resultZero = Knife.getTypeStyles(
        baseFontSize,
        baseLineHeight,
        scaleFactor,
        0,
      );
      const expectedZero = {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      };
      const resultOne = Knife.getTypeStyles(
        baseFontSize,
        baseLineHeight,
        scaleFactor,
        1,
      );
      const expectedOne = {
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
      };
      const resultTwo = Knife.getTypeStyles(
        baseFontSize,
        baseLineHeight,
        scaleFactor,
        2,
      );
      const expectedTwo = {
        fontSize: '1.563rem',
        lineHeight: '2.25rem',
      };

      expect(resultZero).toEqual(expectedZero);
      expect(resultOne).toEqual(expectedOne);
      expect(resultTwo).toEqual(expectedTwo);
    });

    it('errors if it does not have the expected arguments', () => {
      const execute = () => Knife.getTypeStyles();
      expect(execute).toThrowError('invalid parameters specified');
    });
  });
});
