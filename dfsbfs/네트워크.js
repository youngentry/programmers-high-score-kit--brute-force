const solution = (n, computers) => {
  const visited = Array(computers.length).fill(0);

  let answer = 0;

  computers.forEach((_, i) => {
    if (!visited[i]) {
      const stack = [i];

      while (stack.length) {
        const index = stack.pop();
        if (!visited[index]) {
          visited[index] = 1;

          computers[index].forEach((computer, j) => {
            console.log(computer, visited[j]);
            if (computer && !visited[j]) {
              stack.push(computer);
            }
          });
        }
      }
      answer++;
    }
  });
  console.log(answer);
};

solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
