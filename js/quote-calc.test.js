const {
  calculatePremium,
  calculateAnnualPremium,
} = require('./quote-calc');

describe('calculatePremium', () => {
  test('calculates auto premium at minimum coverage boundary for WA', () => {
    expect(calculatePremium('auto', 50000, 'WA')).toBe(60);
    // 1.2 * (50000/1000) * 1.0 = 1.2 * 50 = 60
  });

  test('calculates home premium for CA', () => {
    expect(calculatePremium('home', 100000, 'CA')).toBe(90);
    // 0.9 * (100000/1000) * 1.0 = 0.9 * 100 = 90
  });

  test('calculates condo premium for TX', () => {
    expect(calculatePremium('condo', 200000, 'TX')).toBe(140);
    // 0.7 * (200000/1000) * 1.0 = 0.7 * 200 = 140
  });

  test('calculates renters premium for NY', () => {
    expect(calculatePremium('renters', 300000, 'NY')).toBe(120);
    // 0.4 * (300000/1000) * 1.0 = 0.4 * 300 = 120
  });

  test('calculates auto premium at maximum coverage boundary for FL', () => {
    expect(calculatePremium('auto', 500000, 'FL')).toBe(600);
    // 1.2 * (500000/1000) * 1.0 = 1.2 * 500 = 600
  });

  test('uses default rate 1.0 for unsupported coverage type', () => {
    expect(calculatePremium('other', 100000, 'IL')).toBe(100);
    // 1.0 * (100000/1000) * 1.0 = 100
  });

  test('returns invalid when coverage amount is below minimum boundary', () => {
    expect(calculatePremium('auto', 40000, 'WA')).toBe('Invalid Coverage Amount');
  });

  test('returns invalid when coverage amount is above maximum boundary', () => {
    expect(calculatePremium('auto', 600000, 'CA')).toBe('Invalid Coverage Amount');
  });

  test('uses default state rate 1.0 for unknown state', () => {
    expect(calculatePremium('auto', 100000, 'ZZ')).toBe(120);
    // 1.2 * (100000/1000) * 1.0 = 120
  });
});

describe('calculateAnnualPremium', () => {
  test('calculates annual premium with 5 percent discount', () => {
    expect(calculateAnnualPremium(100)).toBe(1140);
  });

  test('calculates annual premium from string input', () => {
    expect(calculateAnnualPremium('200')).toBe(2280);
  });
});
