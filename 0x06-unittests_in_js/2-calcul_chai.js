/**
 *
 * @param {Number} a - first integer
 * @param {Number} b - second integer
 * @param {String} type - type of operations
 * @returns- Sum of the two integers
 */
function calculateNumber (type, a, b) {
  if (type === 'SUM') return Math.round(a) + Math.round(b);
  if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
  if (type === 'DIVIDE') {
    if (Math.round(b) === 0) return 'Error';
    return Math.round(a) / Math.round(b);
  }
}

module.exports = calculateNumber;
