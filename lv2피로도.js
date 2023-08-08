// 피로도는 0이상의 정수
// 탐험시작에는 최소필요도
// 마쳤을 때 소모 피로도

// ex) 최소 80 소모 20 이려면 => 80이상 남아야 하고 20이 소모됨

// 2차원 배열 route => 최대 route 수는?

// 피로도가 최소필요도보다 높다면 => 해당 던전을 돌고 다음 던전을 탐색 => 끝날때까지 반복

// 모든 순열에 실행

function solution(k, dungeons) {
  const backtrack1 = (i, array, result) => {
    if (i === array.length) {
      result.push([...array]);
      return;
    }
    for (let j = i; j < array.length; j++) {
      [array[i], array[j]] = [array[j], array[i]];
      backtrack1(i + 1, array, result);
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const permutation = (array) => {
    const result = [];
    backtrack1(0, array, result);
    return result;
  };

  console.log(permutation(dungeons));

  const backtrack2 = (array, visitedArray, currentPermutation, result) => {
    if (currentPermutation.length === array.length) {
      result.push([...currentPermutation]);
      return;
    }
    for (let i = 0; i < array.length; i++) {
      if (!visitedArray[i]) {
        visitedArray[i] = true;
        currentPermutation.push(array[i]);
        backtrack2(array, visitedArray, currentPermutation, result);
        currentPermutation.pop();
        visitedArray[i] = false;
      }
    }
  };

  const permute = (array) => {
    const result = [];
    const visitedArray = Array(array.length).fill(false); // 방문 여부를 저장하는 배열
    backtrack2(array, visitedArray, [], result);
    return result;
  };

  const dungeonPlans = permute(dungeons);

  let maximumDungeonCount = 0;

  for (let dungeonPlan of dungeonPlans) {
    let currentStamina = k;
    let dungeonTryCount = 0;

    for (let route of dungeonPlan) {
      const toEnterDungeonStamina = route[0];
      const usageStamina = route[1];
      if (currentStamina >= toEnterDungeonStamina) {
        currentStamina -= usageStamina;
        dungeonTryCount++;
      }
    }

    maximumDungeonCount = Math.max(maximumDungeonCount, dungeonTryCount);
  }

  return maximumDungeonCount;
}

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
