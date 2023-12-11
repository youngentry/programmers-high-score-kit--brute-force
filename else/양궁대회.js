function solution(n, info) {
  // 라이언에게 불리한 규칙
  // 1. 유리한 사람(어피치)이 n발 다 쏘고 불리한 사람(라이언)이 n발을 쏜다
  // 2. 더 많은 화살을 k점에 맞힌 선수가 k점을 가져가는데, a=b이면 유리한 사람이 k점을 가져간다.
  // 3. 모든 과녁 점수에 대하여 최종 점수 계산하는데, 최종 점수가 동일할 경우 유리한 사람이 우승자
  // 4. 라이언이 어피치를 가장 큰 점수 차로 이기기 위해 어느 과녁 점수에 맞혀야 하는지 구하려 한다.

  // 화살 개수 n, 유리한 사람 점수 info
  // 무조건 지거나 비기는 경우 -1 반환

  // => 가장 큰 점수 차를 구해야 하니 완전탐색일 것이다.

  // 모든 score 배열을 구하기
  const scores = [];

  const backtrack = (i, array, n, shotCount) => {
    // 발사 횟수의 합이 n보다 클 경우엔 더 이상 검사할 필요 없으므로 선리턴
    if (shotCount > n) {
      return;
    }
    // n회의 발사가 끝났다면 배열에 추가
    if (i === array.length) {
      if (shotCount === n) {
        scores.push([...array]);
      }
      return;
    }

    // 모든 점수에 대해 발사
    for (let j = 0; j <= n; j++) {
      array[i] = j;
      backtrack(i + 1, array, n, shotCount + j);
      array[i] = 0;
    }
  };

  backtrack(0, new Array(11).fill(0), n, 0);

  // 가장 차이가 큰 배열 모으기
  let bigScores = [];
  let maxDifference = -1;

  scores.forEach((array) => {
    let good = 0;
    let bad = 0;

    // 차이 구하기
    array.forEach((score, index) => {
      if (score > info[index]) {
        bad += 10 - index;
      } else {
        if (info[index]) {
          good += 10 - index;
        }
      }
    });

    const biggerDifference = Math.max(maxDifference, bad - good);
    if (maxDifference !== biggerDifference) {
      bigScores = [];
      maxDifference = biggerDifference;
    }

    if (bad - good === maxDifference) {
      bigScores.push(array);
    }
  });

  // 가장 차이가 큰 배열이 여러개일 경우 가장 낮은 점수를 많이 맞힌 score 반환하기
  if (bigScores.length > 1) {
    let result;
    let maximum = -1;

    for (let i = info.length - 1; i > 0; i--) {
      for (let j = 0; j < bigScores.length; j++) {
        const score = bigScores[j][i];
        const bigScore = Math.max(score, maximum);
        if (score !== 0) {
          if (maximum < bigScore) {
            result = bigScores[j];
            maximum = bigScore;
          }
        }
      }
      if (result) break;
    }

    return result;
  }

  return maxDifference <= 0 ? [-1] : bigScores[0];
}

solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]);
