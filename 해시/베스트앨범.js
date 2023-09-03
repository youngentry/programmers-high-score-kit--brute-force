// 장르배열 횟수로 우선정렬
// 장르 내에서 횟수로 우선정렬 고유번호 낮은게 앞으로 => 순서를 지키려면 Map

function solution(genres, plays) {
  const songMap = new Map();

  genres.forEach((genre, index) => {
    const genrePlays = songMap.get(genre); // 장르
    const play = plays[index]; // 재생 횟수
    songMap.set(genre, genrePlays ? [...genrePlays, [index, play]] : [[index, play]]); // map { 장르: [재생횟수1,재생횟수1] }
  });

  console.log(songMap);

  // 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
  const genreHighSorted = Array.from(songMap)
    .map((item) => item[1])
    // 장르 재생 횟수 합산 정렬
    .sort(
      (a, b) =>
        // 장르 재생 횟수 합산
        b.reduce((total, [_, curScore]) => total + curScore, 0) -
        a.reduce((total, [_, curScore]) => total + curScore, 0)
    );

  // 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
  const playsHighSorted = genreHighSorted.map((info) => info.sort((a, b) => b[1] - a[1]).slice(0, 2)); // 재생 횟수로 정렬을 한 뒤, 최대 2개만 남기기

  // 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
  const indexLowSorted = playsHighSorted.map(
    (item) => item.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : 0)) // 재생 횟수가 같다면 고유 번호가 낮은 노래를 앞으로
  );

  // 인덱스 순서를 반환합니다.
  return indexLowSorted.flat().map((index) => index[0]);
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);
