const isPrime = (number) => {
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const n = 10000;
const primes = Array(n)
  .fill(null)
  .map((_, index) => index + 1);

for (let i = 2; i * i <= n; i++) {
  if (isPrime(i - 1)) {
    for (let j = i * i; j < n; j += i) {
      primes[j - 1] = null;
    }
  }
}

console.log(primes);
