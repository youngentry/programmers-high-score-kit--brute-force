const solution = (k, dungeons) => {
  // 필요 피로도가 80 minimum
  // 소모 피로도가 20--

  const allPlans = []; // 모든 던전 탐색 플랜
  const dungeonLength = dungeons.length; // 던전 길이

  const dfs = (array, i) => {
    if (i === dungeonLength) {
      // 던전 길이만큼 플랜에 추가했다면
      allPlans.push([...array]); // 해당 플랜을 던전 탐색 방법 추가
      return;
    }

    // 모든 가짓수 탐색
    for (let j = i; j < dungeonLength; j++) {
      [array[i], array[j]] = [array[j], array[i]];
      dfs(array, i + 1);
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  dfs(dungeons, 0);

  let result = 0;

  while (allPlans.length) {
    // 플랜이 남지 않을 때까지 진행
    let stamina = k; // 현재 피로도
    let count = 0; // 탐색 횟수

    const dungeon = allPlans.pop(); // 현재 플랜

    for (let room of dungeon) {
      const [min, use] = room; // [방에 입장하기 위한 최소 피로도, 사용할 피로도]
      if (stamina >= min) {
        // 입장할 수 있다면,
        stamina -= use; // 피로도를 소모하고
        count++; // 탐색 횟수를 +1 한다.
      }
    }

    result = Math.max(result, count);
  }

  return result;
};

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
