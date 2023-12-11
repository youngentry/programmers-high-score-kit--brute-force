function solution(scoville, k) {
  // const mixed = (low1) + (low2 *2)
  // 불가능하면 -1

  // 합칠 때마다 2개가 사라지고, 1개가 새로 생긴다. => 배열 길이가 1씩 줄어든다
  // 새로 합친놈을 queue에 추가한다.
  // queue에서 새로 합친놈과 비교해 높으면 queue에 계속 추가한다.
  // 낮으면 low2랑 queue에서 꺼낸 놈이랑 합치고 queue 추가한다.
  // 제일 작은 놈이 K보다 크면 종료한다.

  scoville.sort((a, b) => b - a);

  let count = 0;
  let mixed = [];
  while (scoville.length > 1 || mixed.length > 1) {
    console.log(mixed, scoville);
    let ing = [null, null];

    for (let i = 0; i < 2; i++) {
      console.log(mixed.length, scoville.length);
      if (mixed.length && scoville.length) {
        if (mixed[mixed.length - 1] <= scoville[scoville.length - 1]) {
          ing[i] = mixed.pop();
          console.log("!!!!!", ing);
        } else {
          ing[i] = scoville.pop();
        }
      } else {
        if (scoville.length) {
          ing[i] = scoville.pop();
        }

        if (mixed.length) {
          ing[i] = mixed.pop();
        }
      }
    }

    console.log(ing, "ing");
    if (ing[0] >= k) {
      console.log(count);
      return count;
    }
    count++;
    mixed.unshift(ing[0] + ing[1] * 2);
  }

  console.log(-1);
  return -1;
}

solution([1, 2, 3, 9, 10, 12], 7);
