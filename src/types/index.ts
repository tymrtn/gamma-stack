/**
 * Historical Skills Curriculum Type Definitions
 *
 * This curriculum spans from Ancient Era to Information Era,
 * organizing practical skills with their learning modules,
 * community partners, and demonstration artifacts.
 */

/**
 * Era identifiers for the historical skills curriculum
 */
export type EraId =
  | 'ancient'
  | 'classical'
  | 'medieval'
  | 'renaissance'
  | 'industrial'
  | 'modern'
  | 'information';

/**
 * Era metadata with display information
 */
export interface Era {
  id: EraId;
  name: string;
  description: string;
  order: number;
}

/**
 * A learning module within a skill
 */
export interface Module {
  name: string;
  description?: string;
}

/**
 * A place to visit for hands-on learning
 */
export interface Place {
  name: string;
  type: 'museum' | 'historic-site' | 'studio' | 'facility' | 'outdoor' | 'institution' | 'workspace';
}

/**
 * A community partner or mentor for skill development
 */
export interface Partner {
  name: string;
  type: 'mentor' | 'club' | 'guild' | 'organization' | 'professional' | 'group';
}

/**
 * Artifact requirements for demonstrating skill mastery
 */
export interface Artifact {
  description: string;
  requirements: string[];
}

/**
 * A building/capability unlocked by mastering a skill
 * In Civ terms: what you can build after researching a tech
 * In real terms: what capability or project you can now undertake
 */
export interface Building {
  id: string;
  name: string;
  description: string;
  type: 'structure' | 'system' | 'capability' | 'certification';
}

/**
 * A unit/role unlocked by mastering a skill
 * In Civ terms: what units you can train after researching a tech
 * In real terms: what roles or activities you can now perform
 */
export interface Unit {
  id: string;
  name: string;
  description: string;
  type: 'role' | 'activity' | 'certification' | 'capability';
}

/**
 * What gets unlocked when a skill is mastered
 */
export interface Unlocks {
  buildings: Building[];
  units: Unit[];
}

/**
 * A Wonder - special achievement tied to visiting iconic locations
 */
export interface Wonder {
  id: string;
  name: string;
  location: string;
  country: string;
  coordinates?: { lat: number; lng: number };
  description: string;
  relatedSkills: string[];
  challenge: string;
  era: EraId;
}

/**
 * A complete skill definition with all learning components
 */
export interface Skill {
  id: string;
  name: string;
  era: EraId;
  prerequisites: string[];
  modules: Module[];
  places: Place[];
  partners: Partner[];
  artifact: Artifact;
  unlocks: Unlocks;
}

/**
 * Complete curriculum containing all eras, skills, and wonders
 */
export interface Curriculum {
  eras: Era[];
  skills: Skill[];
  wonders: Wonder[];
}

/**
 * Tech tree node for D3 visualization
 */
export interface TechTreeNode {
  id: string;
  name: string;
  era: EraId;
  eraOrder: number;
  x?: number;
  y?: number;
}

/**
 * Tech tree link for D3 visualization
 */
export interface TechTreeLink {
  source: string;
  target: string;
}

/**
 * Helper type to get skills for a specific era
 */
export type SkillsByEra<E extends EraId> = Skill & { era: E };

/**
 * Utility function type for filtering skills by era
 */
export type GetSkillsByEra = (curriculum: Curriculum, era: EraId) => Skill[];
