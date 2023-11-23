function solution(sequence, k) {
  const list = [];
  let [left, right] = [0, 0];
  let sum = sequence[0];

  while (right < sequence.length) {
    console.log([left, right]);
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
  console.log(list);

  return list.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}
