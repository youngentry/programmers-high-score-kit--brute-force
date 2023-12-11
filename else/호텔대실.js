function getMinute(time) {
  const [hour, min] = time.split(":");
  return hour * 60 + Number(min);
}

function solution(book_time) {
  const timeTable = Array(60 * 60).fill(0);

  // [체크인시간, 퇴실시간+10] 구하기
  book_time.forEach((time) => {
    const checkInMinute = getMinute(time[0]);
    const checkOutMinute = getMinute(time[1]) + 10;

    for (let i = checkInMinute; i < checkOutMinute; i++) {
      timeTable[i]++;
    }
  });

  return Math.max(...timeTable);
}

solution([
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
]);

// 최소한의 객실만 사용
// 한 번 사용한 객실은 퇴실 시간을 기준으로 10분 청소 필요

// 퇴실 시간에 10분을 더함
// 겹치는 방의 수를 구함

// [시작시간, 퇴실시간 + 10]을 구한다.
// 3600개의 0을 지닌 배열을 만든다.
// 이중 for문으로 (시작시간)~(퇴실시간+10) 구간의 요소에 ++ 해준다.
// 최대 값을 Math.max()로 찾는다
