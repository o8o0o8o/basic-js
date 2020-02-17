module.exports = function getSeason(date) {
  if (!date) { return 'Unable to determine the time of year!'; }

  try { date.getTime(); } catch(e) { throw new Error(e); }

  let m = date.getMonth() + 1;

  if ((m >= 1 && m <= 2) || m == 12) return 'winter';
  if (m >= 3 && m <= 5) return 'spring';
  if (m >= 6 && m <= 8) return 'summer';
  if (m >= 9 && m <= 11) return 'autumn';
};
