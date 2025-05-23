import data from './data.js'

/**
 * Calculate the threat level (health × damage) for each monster
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of objects with name and threatLevel properties
 */
export function calculateThreatLevels(monsters) {
  return Object.values(monsters.demons)
    .flat()
    .map((monster) => ({
      name: monster.name,
      threatLevel: monster.health * monster.damage,
    }))
}

/**
 * Extract all monster names into an array using Object methods
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of all monster names
 */
export function extractMonsterNames(monsters) {
  return Object.values(monsters.demons).flat.map((monster) => monster.name)
}

/**
 * Transform the data structure to organize monsters by threat level
 * @param {Object} monsters - The monsters data object
 * @return {Object} - Object with lowThreat, mediumThreat, and highThreat arrays
 */
export function organizeByThreatLevel(monsters) {
  const allMonsters = calculateThreatLevels(monsters)

  return {
    lowThreat: allMonsters.filter((monster) => monster.threatLevel < 10000),
    mediumThreat: allMonsters.filter((m) => m.threatLevel >= 10000 && m.threatLevel <= 50000),
    highThreat: allMonsters.filter((m) => m.threatLevel > 50000),
  }
}

export function sum(a, b) {
  return a + b
}
