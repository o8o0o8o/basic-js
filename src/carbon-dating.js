const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {

  //check if input param:
  if (typeof sample !== "string" || //isn't a string
      /[A-Za-z]/.test(sample) || //has letters
      sample <= 0 || sample > MODERN_ACTIVITY) //is inadequate
  return false;

  let rate = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
  let years = Math.log(MODERN_ACTIVITY / parseFloat(sample)) / rate;
  return Math.ceil(years);
  
};
