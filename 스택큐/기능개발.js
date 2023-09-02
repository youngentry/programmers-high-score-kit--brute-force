function solution(progresses, speeds) {
  const result = [];

  // 개발진행 사항이 남아있다면
  while (progresses.length) {
    // 개발을 진행시키고
    for (let i = 0; i < speeds.length; i++) {
      progresses[i] += speeds[i];
    }

    // 개발이 완료된 것이 있다면
    let completedCount = 0;

    while (progresses[0] >= 100) {
      // 플랜에서 제외하고 count++
      progresses.shift();
      speeds.shift();
      completedCount++;
    }

    if (completedCount !== 0) {
      result.push(completedCount); // 배포 숫자 추가
    }
  }

  return result;
}
