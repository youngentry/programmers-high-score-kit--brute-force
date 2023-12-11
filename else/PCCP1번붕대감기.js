function solution(bandage, health, attacks) {
  const [castTime, baseHeal, additionalHeal] = bandage;
  const lastTime = attacks[attacks.length - 1][0];

  const remainAttacks = attacks.reverse(); // shift대신 pop 이용

  let currentHealth = health;
  let continuousTime = 0;

  for (let i = 1; i <= lastTime; i++) {
    // 공격
    if (remainAttacks[remainAttacks.length - 1][0] === i) {
      const damage = remainAttacks.pop()[1];
      currentHealth -= damage; // 체력 감소
      continuousTime = 0; // 연속 성공 시간이 0으로 초기화

      if (currentHealth <= 0) {
        return -1; // 현재 체력이 0 이하가 되면 캐릭터가 죽으며 더 이상 체력을 회복할 수 없음
      }
      continue; // 붕대 감기 기술이 취소, 체력을 회복할 수 없음
    }

    // 붕대 감기
    if (++continuousTime === castTime) {
      currentHealth += baseHeal + additionalHeal;
      continuousTime = 0; // 연속 성공 카운트 초기화
    } else {
      currentHealth += baseHeal;
    }

    if (currentHealth > health) {
      currentHealth = health; // 최대 체력 넘을 수 없음
    }
  }

  return currentHealth;
}
