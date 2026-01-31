/**
 * Historical Skills Curriculum
 *
 * A comprehensive curriculum spanning from Ancient Era to Information Era,
 * organizing practical skills with learning modules, community partners,
 * and demonstration artifacts.
 *
 * @example
 * ```typescript
 * import { curriculum, getSkillsByEra, getSkillById } from 'gamma-stack-historical-skills-curriculum';
 *
 * // Get all skills in the Ancient Era
 * const ancientSkills = getSkillsByEra('ancient');
 *
 * // Get a specific skill
 * const pottery = getSkillById('pottery');
 *
 * // Access the full curriculum
 * console.log(`Total eras: ${curriculum.eras.length}`);
 * console.log(`Total skills: ${curriculum.skills.length}`);
 * ```
 */

// Export types
export type {
  EraId,
  Era,
  Module,
  Partner,
  Artifact,
  Skill,
  Curriculum,
  SkillsByEra,
  GetSkillsByEra,
} from './types';

// Export data and utilities
export {
  curriculum,
  allSkills,
  eras,
  ancientSkills,
  classicalSkills,
  medievalSkills,
  renaissanceSkills,
  industrialSkills,
  modernSkills,
  informationSkills,
  getSkillsByEra,
  getSkillById,
  getEraById,
  getErasInOrder,
  getSkillCountByEra,
  getTotalModuleCount,
} from './data';
