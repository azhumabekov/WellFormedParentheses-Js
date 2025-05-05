function countWellFormedParenthesis(n) {
  if (n < 0 || n > 15) throw new Error("n must be between 0 and 15");

  const factorial = (num) => {
    let res = 1n;
    for (let i = 2n; i <= BigInt(num); i++) {
      res *= i;
    }
    return res;
  };

  const twoNFact = factorial(2 * n);
  const nFact = factorial(n);
  const nPlusOneFact = factorial(n + 1);

  const catalan = twoNFact / (nPlusOneFact * nFact);
  return Number(catalan);
}

module.exports = countWellFormedParenthesis;