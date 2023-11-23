const slidingWindow = (sequence, target, length) => {
  const result = [];
  let [left, right] = [0, length - 1];

  let memo = sequence.slice(0, length).reduce((a, b) => a + b, 0);
  while (right < sequence.length) {
    if (memo === target) {
      result.push([left, right]);
    }
    memo = -1 * sequence[left++] + memo + sequence[++right];
  }

  console.log(result);
};

slidingWindow([1, 1, 1, 2, 3, 4, 5], 6, 3);
