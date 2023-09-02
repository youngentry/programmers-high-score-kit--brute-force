const solution = (priorities, location) => {
  let max = Math.max(...priorities);
  let count = 0;

  while (priorities.length) {
    // 1. 큐에서 대기중인 프로세스 하나를 꺼냅니다.
    const check = priorities.shift(); // 프로세스 꺼내기

    // 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
    if (check < max) {
      priorities.push(check); // 프로세스 다시 넣기
      location === 0 ? (location = priorities.length - 1) : location--; // 바뀐 위치 설정

      // 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
    } else {
      count++; // 실행 횟수 증가

      // Return. 실행된 프로세스가 location의 프로세스라면 결과를 반환합니다.
      if (!location) return count;

      // 4. 그 다음으로 우선순위가 높은 프로세스를 찾습니다.
      location--; // 바뀐 위치 설정
      max = Math.max(...priorities); // 다음 우선순위 찾기
    }
  }
};
