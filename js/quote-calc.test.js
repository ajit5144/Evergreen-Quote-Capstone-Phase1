const {
  calculatePremium,
  calculateAnnualPremium,
} = require('./quote-calc');

describe('calculatePremium', () => {
  test('calculates Auto premium for WA at minimum boundary', () => {
    expect(calculatePremium('Auto', 50000, 'WA')).toBe(60);
  });

  test('calculates Home premium for CA', () => {
    expect(calculatePremium('Home', 100000, 'CA')).toBe(99);
  });

  test('calculates Condo premium for TX', () => {
    expect(calculatePremium('Condo', 100000, 'TX')).toBe(67);
  });

  test('calculates Renters premium for NY', () => {
    expect(calculatePremium('Renters', 100000, 'NY')).toBe(48);
  });

  test('calculates Auto premium for FL at maximum boundary', () => {
    expect(calculatePremium('Auto', 500000, 'FL')).toBe(630);
  });

  test('returns invalid result for unsupported coverage type', () => {
    expect(calculatePremium('Other', 100000, 'WA')).toBe('Invalid Coverage Type');
  });

  test('returns invalid when coverage amount is below minimum boundary', () => {
    expect(calculatePremium('Auto', 49999, 'WA')).toBe('Invalid Coverage Amount');
  });

  test('returns invalid when coverage amount is above maximum boundary', () => {
    expect(calculatePremium('Auto', 500001, 'WA')).toBe('Invalid Coverage Amount');
  });

  test('returns invalid for unknown state', () => {
    expect(calculatePremium('Auto', 100000, 'ZZ')).toBe('Invalid State');
  });
});

describe('calculateAnnualPremium', () => {
  test('calculates annual premium with 5% discount', () => {
    expect(calculateAnnualPremium(100)).toBe(1140);
  });

  test('calculates annual premium from string input', () => {
    expect(calculateAnnualPremium('200')).toBe(2280);
  });
});
