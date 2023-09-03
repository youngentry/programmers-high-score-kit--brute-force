const solution = (answer) => {
  let count = Array.from({ length: 3 }).fill(0);

  const a = [..."12345"];
  const b = [..."21232425"];
  const c = [..."3311224455"];

  answer.forEach((num, i) => {
    if (a[i % a.length] == num) count[0]++;
    if (b[i % b.length] == num) count[1]++;
    if (c[i % c.length] == num) count[2]++;
  });

  const highScore = Math.max(...count);

  const result = [];

  count.forEach((num, i) => {
    if (num === highScore) result.push(i + 1);
  });

  return result;
};

solution([1, 3, 2, 4, 2]);
