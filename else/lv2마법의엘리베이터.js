function solution(storey) {
  const splittedStorey = storey.toString().split("").map(Number);
  let count = 0;

  for (let i = splittedStorey.length - 1; i >= 0; i--) {
    // 올라가는게 빠른 경우 : 현재 층계가 5 또는 현재 층계가 5이고 다음 층계가 5이상일 때
    if (splittedStorey[i] > 5 || (splittedStorey[i] === 5 && splittedStorey[i - 1] >= 5)) {
      count += 10 - splittedStorey[i];
      splittedStorey[i] = 10;

      // 현재 층계를 0으로 만들고 다음 층계에 +1
      while (splittedStorey.includes(10)) {
        const storeyIndex = splittedStorey.lastIndexOf(10);
        splittedStorey[storeyIndex] = 0;
        splittedStorey[storeyIndex - 1] ? splittedStorey[storeyIndex - 1]++ : splittedStorey.unshift(1);
        i++;
      }
      continue;
    }

    // 내려가는게 빠른 경우 : 나머지는 내려가는게 빠름
    if (splittedStorey[i]) {
      count += splittedStorey[i];
      splittedStorey[i] = 0;
    }
  }

  return count;
}

solution(999);

// -1, +1, -10, +10, -100, +100 등과 같이 절댓값이 10c (c ≥ 0 인 정수) 형태인 정수들이 적힌 버튼
// 엘리베이터가 위치해 있는 층과 버튼의 값을 더한 결과가 0보다 작으면 엘리베이터는 움직이지 않습니다.
// 0층으로 가기 위해 최소 버튼 누르는 횟수는?

// n의 자릿수를 가장 빠르게 0으로 만드는 방법
// 값이 커졌다면 다음 자릿수를 +1 해주기
// 해당 자릿수가 9 + 1 이면 10이 될 때는 해당 자릿수를 0으로 바꾸고, 하나 더 큰 자릿수를 +1 해준다.
// 4 5 4 3
