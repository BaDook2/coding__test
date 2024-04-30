function solution(bandage, health, attacks) {
    const [castingTime, healingPerSec, additionalHealing] = bandage;
    let curHealth = health;
    let curTime = 0;
        
    for (const [attackTime, attackDamage] of attacks) {
        const timeGap = attackTime - curTime - 1;
        const successCastingCount = Math.floor(timeGap / castingTime);
        const healing = timeGap * healingPerSec +  successCastingCount * additionalHealing;
        curHealth += healing;
        if(curHealth > health) {
            curHealth = health;
        }
        curHealth -= attackDamage;
        if(curHealth <= 0) {
            return -1
        }
        curTime = attackTime;
    }
    return curHealth
}