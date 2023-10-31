function solution(tickets) {
  const result = [];
  const map = {};
  const length = tickets.length + 1;

  for (let ticket of tickets) {
    const [go, to] = ticket;
    map[go] ? (map[go] = [...map[go], to]) : (map[go] = [to]);
  }

  // 정렬하여 알파벳 앞서는 공항 먼저 출발
  for (let each in map) {
    map[each].sort();
  }

  const backtrack = (next, arr, count) => {
    if (count === length) {
      if (arr.length === length) {
        console.log(arr);
        result.push(arr);
      }
      return;
    }
    if (!map[next][0]) {
      return;
    }

    for (let i = 0; i < map[next].length; i++) {
      const to = map[next][i]; // 다음 행선지
      map[next].splice(i, 1);
      arr.push(to);

      if (map?.[next]?.[i + 1] === to) {
        i++;
        continue;
      }

      backtrack(to, arr, count + 1);

      map[next].splice(i - 1, 0, to);
      arr.pop();
    }
  };

  backtrack("ICN", ["ICN"], 1);

  console.log(result);
  return result;
}

solution([
  ["ICN", "BOO"],
  ["ICN", "COO"],
  ["COO", "DOO"],
  ["DOO", "COO"],
  ["BOO", "DOO"],
  ["DOO", "BOO"],
  ["BOO", "ICN"],
  ["COO", "BOO"],
]);
