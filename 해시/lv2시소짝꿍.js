function solution(weights) {
  weights.sort((a, b) => a - b);
  const weightCounts = {};
  const units = [1, 2 / 3, 2 / 4, 3 / 4];

  let count = 0;

  for (let weight of weights) {
    for (let unit of units) {
      if (weightCounts[weight * unit]) {
        count += weightCounts[weight * unit];
      }
    }

    weightCounts[weight] ? weightCounts[weight]++ : (weightCounts[weight] = 1);
  }

  return count;
}

solution([100, 180, 360, 100, 270]);

// 탑승한 사람의 무게와 시소 축과 좌석 간의 거리의 곱이 양쪽 다 같다면 시소 짝꿍이라고 할 수 있습니다.

// 2/3 2/4 3/4
// 해시에 저장하고
// 존재하면 추가
