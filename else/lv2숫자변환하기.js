function solution(x, y, n) {
  let result = [];

  const dfs = (num, count) => {
    // 더 작게 만들 수 없으면 종료
    const minNum = Math.min(num / 2, num / 3, num - n);
    if (num < minNum) {
      return;
    }

    // x를 만들었으면 해당 count 기록
    if (num === x) {
      return result.push(count);
    }

    if (num % 2 === 0) dfs(num / 2, count++);
    if (num % 3 === 0) dfs(num / 3, count++);
    if (num - n > 0) dfs(num - n, count++);
  };

  dfs(y, 0);

  // 가작 작은 count 반환
  return result.length ? Math.min(...result.filter(Boolean)) : -1;
}

solution(2, 5, 4);

function solution(x, y, n) {
  const dp = Array(y + 1).fill(Infinity);
  console.log(dp);
  dp[x] = 0;

  for (let i = x + 1; i < y + 1; i++) {
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i - n >= x) dp[i] = Math.min(dp[i], dp[i - n] + 1);
  }
  console.log(dp);
  return dp[y] === Infinity ? -1 : dp[y];
}

solution(1, 17, 1);
