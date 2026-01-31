import { Curriculum, Skill, Era, EraId } from '../types';
import { eras } from './eras';
import { ancientSkills } from './ancient';
import { classicalSkills } from './classical';
import { medievalSkills } from './medieval';
import { renaissanceSkills } from './renaissance';
import { industrialSkills } from './industrial';
import { modernSkills } from './modern';
import { informationSkills } from './information';

/**
 * All skills from all eras combined
 */
export const allSkills: Skill[] = [
  ...ancientSkills,
  ...classicalSkills,
  ...medievalSkills,
  ...renaissanceSkills,
  ...industrialSkills,
  ...modernSkills,
  ...informationSkills,
];

/**
 * Complete curriculum with all eras and skills
 */
export const curriculum: Curriculum = {
  eras,
  skills: allSkills,
};

/**
 * Get all skills for a specific era
 */
export function getSkillsByEra(era: EraId): Skill[] {
  return allSkills.filter((skill) => skill.era === era);
}

/**
 * Get a skill by its ID
 */
export function getSkillById(id: string): Skill | undefined {
  return allSkills.find((skill) => skill.id === id);
}

/**
 * Get an era by its ID
 */
export function getEraById(id: EraId): Era | undefined {
  return eras.find((era) => era.id === id);
}

/**
 * Get eras sorted by chronological order
 */
export function getErasInOrder(): Era[] {
  return [...eras].sort((a, b) => a.order - b.order);
}

/**
 * Get skill count per era
 */
export function getSkillCountByEra(): Record<EraId, number> {
  const counts: Record<EraId, number> = {
    ancient: 0,
    classical: 0,
    medieval: 0,
    renaissance: 0,
    industrial: 0,
    modern: 0,
    information: 0,
  };

  for (const skill of allSkills) {
    counts[skill.era]++;
  }

  return counts;
}

/**
 * Get total number of modules across all skills
 */
export function getTotalModuleCount(): number {
  return allSkills.reduce((total, skill) => total + skill.modules.length, 0);
}

// Re-export era-specific skills for direct access
export { eras } from './eras';
export { ancientSkills } from './ancient';
export { classicalSkills } from './classical';
export { medievalSkills } from './medieval';
export { renaissanceSkills } from './renaissance';
export { industrialSkills } from './industrial';
export { modernSkills } from './modern';
export { informationSkills } from './information';
