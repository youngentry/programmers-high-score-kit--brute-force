const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const getPermutations = (array, pick) => {
  const permutations = [];

  const permute = (current, remaining) => {
    if (current.length === pick) {
      permutations.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const next = [...current, remaining[i]];
      const rest = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
      permute(next, rest);
    }
  };

  permute([], array);
  return permutations;
};

const findPrimePermutations = (numbers) => {
  const primeSet = new Set();

  for (let pick = 1; pick <= numbers.length; pick++) {
    const permutations = getPermutations(numbers, pick);
    for (const permutation of permutations) {
      const number = parseInt(permutation.join(""));
      if (isPrime(number)) {
        primeSet.add(number);
      }
    }
  }

  console.log(primeSet, "찾은소수", primeSet.size, "개");
  return primeSet.size;
};

const numbers = [1, 2, 3];
console.log(findPrimePermutations("011"));
