function solution(priorities, location) {
  // 큐에서 프로세스를 하나 꺼냄
  // 대기 리스트에 우선순위가 더 높은 프로세스 탐색
  // > 있으면 다시 큐에 넣음
  // > 없으면 프로세스 실행함
  // 한 번 실행한 프로세스는 큐에 다시 넣지 않음

  // 우선순위를 정렬하여 location보다 우선순위가 높은 프로세스들을 모아 놓음
  // 우선순위가 높은 프로세스 숫자가 index:0에 위치하면 우선순위가 높은 프로세스 리스트에서 제외함
  // location이 순서가 될 때까지 탐색하지 않고 계속 큐에 다시 넣음
  // location모다 우선순위가 높은 프로세스가 없을 때 location의 index가 0이 될 때가 return 타이밍

  const highList = [...priorities].sort();

  const target = priorities[location];
  let count = 0; // 실행된 프로세스의 수

  while (true) {
    const checkingProcess = priorities.shift(); // 큐에서 프로세스를 꺼냄
    const highProcess = highList[highList.length - 1];

    if (highProcess > target) {
      if (checkingProcess === highProcess) {
        count++;
        highList.pop();
      } else {
        priorities.push(checkingProcess);
      }
    } else if (checkingProcess === highProcess) {
      if (location === 0) {
        return count + 1;
      } else {
        count++;
      }
    }

    location ? location-- : (location = priorities.length - 1);
  }
}

solution([1, 1, 9, 1, 1, 1], 0);
