const {
  calculatePremium,
  calculateAnnualPremium,
} = require('./quote-calc');

describe('calculatePremium', () => {
  test('calculates auto premium for WA', () => {
    expect(calculatePremium('auto', 5000, 'WA')).toBe(6);
  });

  test('calculates home premium for CA', () => {
    expect(calculatePremium('home', 10000, 'CA')).toBe(9);
  });

  test('calculates condo premium for TX', () => {
    expect(calculatePremium('condo', 10000, 'TX')).toBe(7);
  });

  test('calculates renters premium for NY', () => {
    expect(calculatePremium('renters', 2000, 'NY')).toBe(1);
  });

  test('calculates auto premium for FL', () => {
    expect(calculatePremium('auto', 2500, 'FL')).toBe(3);
  });

  test('uses default rate 1.0 for unsupported coverage type in IL', () => {
    expect(calculatePremium('other', 100000, 'IL')).toBe(100);
  });

  test('calculates premium below 50000 for CA since no boundary validation exists', () => {
    expect(calculatePremium('auto', 49999, 'CA')).toBe(60);
  });

  test('calculates premium above 500000 for TX since no boundary validation exists', () => {
    expect(calculatePremium('auto', 500001, 'TX')).toBe(600);
  });

  test('calculates premium for random state code ZZ using default state rate', () => {
    expect(calculatePremium('auto', 5000, 'ZZ')).toBe(6);
  });
});

describe('calculateAnnualPremium', () => {
  test('calculates annual premium with 5 percent discount', () => {
    expect(calculateAnnualPremium(100)).toBe(1140);
  });

  test('calculates annual premium from string input', () => {
    expect(calculateAnnualPremium('200')).toBe(2280);
  });

  test('parseInt truncates decimal string input', () => {
    expect(calculateAnnualPremium('100.99')).toBe(1140);
  });
});
