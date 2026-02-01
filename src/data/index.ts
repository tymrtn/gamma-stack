import { Curriculum, Skill, Era, EraId, Wonder } from '../types';
import { eras } from './eras';
import { ancientSkills } from './ancient';
import { classicalSkills } from './classical';
import { medievalSkills } from './medieval';
import { renaissanceSkills } from './renaissance';
import { industrialSkills } from './industrial';
import { modernSkills } from './modern';
import { informationSkills } from './information';
import { wonders } from './wonders';

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
 * Complete curriculum with all eras, skills, and wonders
 */
export const curriculum: Curriculum = {
  eras,
  skills: allSkills,
  wonders,
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

/**
 * Get all prerequisite links for the tech tree
 */
export function getTechTreeLinks(): Array<{ source: string; target: string }> {
  const links: Array<{ source: string; target: string }> = [];
  for (const skill of allSkills) {
    for (const prereq of skill.prerequisites) {
      links.push({ source: prereq, target: skill.id });
    }
  }
  return links;
}

/**
 * Get skills that have no prerequisites (root skills)
 */
export function getRootSkills(): Skill[] {
  return allSkills.filter((skill) => skill.prerequisites.length === 0);
}

/**
 * Get skills that depend on a given skill
 */
export function getDependentSkills(skillId: string): Skill[] {
  return allSkills.filter((skill) => skill.prerequisites.includes(skillId));
}

/**
 * Check if all prerequisites for a skill are met
 */
export function canUnlockSkill(skillId: string, completedSkills: string[]): boolean {
  const skill = getSkillById(skillId);
  if (!skill) return false;
  return skill.prerequisites.every((prereq) => completedSkills.includes(prereq));
}

/**
 * Get all wonders
 */
export function getAllWonders(): Wonder[] {
  return wonders;
}

/**
 * Get wonders by era
 */
export function getWondersByEra(era: EraId): Wonder[] {
  return wonders.filter((w) => w.era === era);
}

/**
 * Get wonders related to a specific skill
 */
export function getWondersForSkill(skillId: string): Wonder[] {
  return wonders.filter((w) => w.relatedSkills.includes(skillId));
}

/**
 * Get a wonder by ID
 */
export function getWonderById(id: string): Wonder | undefined {
  return wonders.find((w) => w.id === id);
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
export { wonders } from './wonders';
