function solution(array, commands) {
  const result = [];

  commands.forEach(([i, j, k], index) => {
    result.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  });

  return result;
}
