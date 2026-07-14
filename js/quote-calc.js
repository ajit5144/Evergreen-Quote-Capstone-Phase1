// Evergreen Insurance — provided quote-calculation snippet (solution copy).
// Identical to js-snippets/quote-calc.js in the starter kit.

var ratePerThousand = {
  auto: 1.2,
  home: 0.9,
  renters: 0.4,
  condo:0.7,
};


var rateperstate = {
  WA: 1.0,
  OR: 1.1,
  CA: 1.2,
  ID: 0.9,
  TX: 1.3,
  MA: 1.4,
};

const annualPremiumDiscount = 0.05; // 5% discount for annual premium

function calculatePremium(coverageType, coverageAmount,state) {
  var rate = ratePerThousand[coverageType] || 1.0;
  var thousands = coverageAmount / 1000;
  var stateRate = rateperstate[state] || 1.0;
  return Math.round(rate * thousands * stateRate);
}

function calculateAnnualPremium(coveragemonthlyPremium) {
  var monthlyPremium =parseInt(coveragemonthlyPremium);
  
  return Math.round(monthlyPremium * 12 * (1-  annualPremiumDiscount)); 
}
