function solution(orders, course) {
  const combination = {};

  const getCombination = (order, current, pick) => {
    // 더 이상 선택할 수 있는 문자가 없으면 반환
    if (pick === 0) {
      const sortedOrder = current.split("").sort().join("");

      combination[sortedOrder] = (combination[sortedOrder] || 0) + 1;
      return;
    }

    for (let i = 0; i < order.length; i++) {
      // order.slice()를 통해 남아 있는 문자에 대해서 조합 진행
      getCombination(order.slice(i + 1), current + order[i], pick - 1);
    }
    // ""으로부터 시작하여 ""+A, ""+B, ""+C, ""+D, ""+E 처럼 하나씩 가져와서 조합을 만들어 나간다.
    // current ex) ""+A  :  i=1-[A], i=2-[AB, AC, AD, AE], i=3-[ABC, ABD, ABE, ACD, ACE, ADE], i=4-...
  };

  // 모든 주문에 대해 조합 생성
  orders.forEach((order) => {
    course.forEach((pick) => {
      getCombination(order, "", pick);
    });
  });

  // 2번 이상 주문된 조합을 필터링하고 정렬
  const filteredList = Object.entries(combination)
    .filter((item) => item[1] >= 2)
    .sort((a, b) => b[1] - a[1]);

  // 같은 메뉴 갯수별로 최대 주문횟수를 가진 조합들을 담기
  let result = [];

  course.forEach((pick) => {
    // 최대 주문횟수
    let maxOrderCount = 0;

    filteredList.forEach((item) => {
      const [menus, orderCount] = item;

      // 같은 메뉴 구성끼리만 비교
      if (menus.length === pick) {
        maxOrderCount = Math.max(maxOrderCount, orderCount);

        // 최대 주문 횟수인 조합일 경우 결과에 추가
        if (orderCount === maxOrderCount) {
          result.push(menus);
        }
      }
    });
  });

  return result.sort(); // 결과 정렬하여 반환
}

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);
