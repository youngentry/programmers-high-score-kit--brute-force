function solution(numbers) {
  const isPrime = (number) => {
    if (number === 2) {
      return true;
    }
    if (number < 2 || number % 2 === 0) {
      return false;
    }
    for (let i = 3; i * i <= number; i += 2) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const numberArray = numbers.split("");
  const foundPrimeSet = new Set();
  const permutation = (i, array, pick) => {
    if (i === pick) {
      const toCheckNumber = Number(array.slice(0, i).join(""));
      const isPrimeNumber = isPrime(toCheckNumber);
      if (isPrimeNumber) {
        return foundPrimeSet.add(toCheckNumber);
      }
    }
    for (let j = i; j < array.length; j++) {
      [array[i], array[j]] = [array[j], array[i]];
      permutation(i + 1, array, pick);
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  for (let pick = 1; pick <= numberArray.length; pick++) {
    permutation(0, numberArray, pick);
  }

  return foundPrimeSet.size;
}

solution("011");
