// Evergreen Insurance — provided quote-calculation snippet (solution copy).
// Identical to js-snippets/quote-calc.js in the starter kit.

var ratePerThousand = {
  auto: 1.2,
  home: 0.9,
  renters: 0.4,
  condo:0.7,
};

// for now all states are marked as 1.0 but this can be updated later to reflect different state rates.
var rateperstate = {
  WA: 1.0,
};

const annualPremiumDiscount = 0.05; // 5% discount for annual premium

const minCoverageAmount = 50000; // Minimum coverage amount
const maxCoverageAmount = 500000; // Maximum coverage amount

function calculatePremium(coverageType, coverageAmount,state) {
  console.log("Calculating premium for coverage type: " + coverageType + ", coverage amount: " + coverageAmount + ", state: " + state);
  if (coverageAmount < minCoverageAmount || coverageAmount > maxCoverageAmount) {
    return 'Invalid Coverage Amount';
  }
  var rate = ratePerThousand[coverageType] || 1.0;
  var thousands = coverageAmount / 1000;
  var stateRate = rateperstate[state] || 1.0;
  return Math.round(rate * thousands * stateRate);
}

function calculateAnnualPremium(coveragemonthlyPremium) {
  var monthlyPremium =parseInt(coveragemonthlyPremium);
  return Math.round(monthlyPremium * 12 * (1-  annualPremiumDiscount)); 
}

// Export the functions for use in other modules
module.exports = {
  calculatePremium,
  calculateAnnualPremium,
};