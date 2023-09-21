const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('Should test positive floating number', () => {
      expect(calculateNumber('SUM', 1.3, 2.5)).to.equal(4);
    });

    it('Should test negative floating number', () => {
      expect(calculateNumber('SUM', -1.3, -2.5)).to.equal(-3);
    });

    it('Should test two decimal point number', () => {
      expect(calculateNumber('SUM', 1.35, 5.66)).to.equal(7);
    });

    it('Should test two mixed type', () => {
      expect(calculateNumber('SUM', '3.5', 5.66)).to.equal(10);
    });
  });
});

describe('SUBTRACT', () => {
  it('Should test positive floating number', () => {
    expect(calculateNumber('SUBTRACT', 1.3, 2.5)).to.equal(-2);
  });

  it('Should test negative floating number', () => {
    expect(calculateNumber('SUBTRACT', -1.3, -2.5)).to.equal(1);
  });

  it('Should test two decimal point number', () => {
    expect(calculateNumber('SUBTRACT', 5.66, 2.56)).to.equal(3);
  });

  it('Should test two mixed type', () => {
    expect(calculateNumber('SUBTRACT', '5.66', 2.0)).to.equal(4);
  });
});

describe('DIVIDE', () => {
  it('Should test positive floating number', () => {
    expect(calculateNumber('DIVIDE', 1.3, 2.5)).to.equal(0.3333333333333333);
  });

  it('Should test positive floating number', () => {
    expect(calculateNumber('DIVIDE', 6.4, 2.4)).to.equal(3.0);
  });

  it('Should test negative floating number', () => {
    expect(calculateNumber('DIVIDE', -6.4, -2.4)).to.equal(3.0);
  });

  it('Should test for Zero division', () => {
    expect(calculateNumber('DIVIDE', 1.3, 0.4)).to.equal('Error');
  });

  it('Should test for string type', () => {
    expect(calculateNumber('DIVIDE', 10.6, '2.4')).to.equal(5.5);
  });
});
