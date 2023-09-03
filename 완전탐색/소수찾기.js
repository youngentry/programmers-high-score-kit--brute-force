const isPrime = (num) => {
  if (num === 2) return true;
  if (num === 1 || num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

function solution(numbers) {
  const nums = [...numbers];

  const permutationSet = new Set();

  const getPermutation = (arr, i, pick) => {
    if (i === pick) {
      const number = Number(arr.slice(0, i).join(""));

      if (isPrime(number)) {
        permutationSet.add(number);
      }
    }

    for (let j = i; j < nums.length; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      getPermutation(arr, i + 1, pick);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  for (let pick = 1; pick <= nums.length; pick++) {
    getPermutation(nums, 0, pick);
  }

  return permutationSet.size;
}

solution("1231");
