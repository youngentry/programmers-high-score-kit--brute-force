function solution(length, weight, trucks) {
  trucks.reverse(); // pop()이 shift()보다 성능이 좋기 때문에 출발할 트럭 배열을 뒤집습니다.

  let onBridge = []; // [트럭무게, 다리 건너기까지 남은 시간][]

  let currentWeight = 0; // 다리 하중
  let time = 0; // 경과 시간

  // 모든 트럭이 건널 때까지 진행합니다.
  while (trucks.length || onBridge.length) {
    console.log(onBridge);
    time++;

    // 다리 위의 트럭들의 "다리 건너기까지 남은 시간"을 -1 해줍니다.
    for (let i = 0; i < onBridge.length; i++) {
      onBridge[i][1]--;
    }

    // 다리의 제일 앞에 있는 트럭이 다 건넜다면 다리 하중에서 제일 앞의 트럭 무게만큼 빼줍니다.
    if (onBridge.length && !onBridge[0][1]) {
      currentWeight -= onBridge.shift()[0];
    }

    // 다리에 올라갈 수 있으면 트럭 올라갑니다.
    if (currentWeight + trucks[trucks.length - 1] <= weight) {
      const truckWeight = trucks.pop(); // 출발한 트럭 무게
      onBridge.push([truckWeight, length]); // 다리 배열에 트럭 [7, 2] 추가
      currentWeight += truckWeight; // 다리 하중에서 트럭 무게만큼 더하기
    }
  }

  return time;
}

solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
