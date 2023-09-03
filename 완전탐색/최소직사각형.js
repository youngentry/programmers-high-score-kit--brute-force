const solution = (cards) => {
  let width = 0;
  let height = 0;

  cards.forEach((card) => {
    const [w, h] = card;
    const bigger = Math.max(w, h);
    const smaller = Math.min(w, h);

    if (width < bigger) width = bigger;
    if (height < smaller) height = smaller;
  });

  return width * height;
};

solution([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]);
