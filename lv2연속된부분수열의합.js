function solution(sequence, k) {
  const list = [];
  let [left, right] = [0, 0];
  let sum = sequence[0];

  while (right < sequence.length) {
    // sum보다 k가 작으면
    if (sum > k) {
      sum -= sequence[left++];
      // sum보다 k가 크면
    } else if (sum < k) {
      sum += sequence[++right];
      // sum이 k면
    } else {
      list.push([left, right]);
      sum += sequence[++right];
      sum -= sequence[left++];
    }
  }

  return list.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}

solution([1, 2, 3, 4, 5], 7);
solution([1, 1, 1, 2, 3, 4, 5], 5);
