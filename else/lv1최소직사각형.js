const solution = (card) => {
  let walletWidth = 0,
    walletHeight = 0;

  card.forEach((el) => {
    const [cardWidth, cardHeight] = el;
    if (walletWidth < Math.max(cardWidth, cardHeight)) walletWidth = Math.max(cardWidth, cardHeight);
    if (walletHeight < Math.min(cardWidth, cardHeight)) walletHeight = Math.min(cardWidth, cardHeight);
  });

  return walletWidth * walletHeight;
};

solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]);
