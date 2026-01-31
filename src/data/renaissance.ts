import { Skill } from '../types';

export const renaissanceSkills: Skill[] = [
  {
    id: 'printing-press',
    name: 'Printing Press',
    era: 'renaissance',
    modules: [
      { name: 'Typesetting/Printing', description: 'Setting type and printing processes' },
      { name: 'Layout', description: 'Page layout and design' },
      { name: 'Editing', description: 'Editorial process and proofreading' },
      { name: 'Distribution', description: 'Publication distribution methods' },
    ],
    partners: [
      { name: 'Print Shop', type: 'workshop' },
      { name: 'School Fablab', type: 'fablab' },
    ],
    artifact: {
      description: 'Printed newspaper or zine run with readership notes',
      requirements: [
        'Newspaper or zine printed',
        'Print run completed',
        'Readership notes documented',
      ],
    },
  },
  {
    id: 'banking',
    name: 'Banking',
    era: 'renaissance',
    modules: [
      { name: 'Loans', description: 'Lending principles and practices' },
      { name: 'Interest', description: 'Interest calculations and concepts' },
      { name: 'Risk', description: 'Risk assessment and management' },
      { name: 'Ledgers', description: 'Double-entry bookkeeping' },
      { name: 'Fraud', description: 'Fraud detection and prevention' },
    ],
    partners: [
      { name: 'Entrepreneur Mentor', type: 'mentor' },
    ],
    artifact: {
      description: 'Simulated bank with audits and defaults handling',
      requirements: [
        'Simulated bank operated',
        'Audits conducted',
        'Defaults handling documented',
      ],
    },
  },
  {
    id: 'gunpowder',
    name: 'Gunpowder',
    era: 'renaissance',
    modules: [
      { name: 'History', description: 'Historical development and impact' },
      { name: 'Chemistry Safety', description: 'Chemical safety principles' },
      { name: 'Pressure/Containment Theory', description: 'Understanding pressure physics (no explosives build)' },
    ],
    partners: [
      { name: 'Museum', type: 'museum' },
      { name: 'Chemistry Educator', type: 'educator' },
    ],
    artifact: {
      description: 'Safety report with historical analysis and pressure demos (safe)',
      requirements: [
        'Safety report completed',
        'Historical analysis written',
        'Safe pressure demonstrations conducted',
      ],
    },
  },
  {
    id: 'navigation',
    name: 'Navigation',
    era: 'renaissance',
    modules: [
      { name: 'Charts', description: 'Reading and using nautical charts' },
      { name: 'Dead Reckoning', description: 'Position estimation from course and speed' },
      { name: 'Basic Celestial', description: 'Using celestial bodies for navigation' },
      { name: 'Weather', description: 'Weather interpretation for navigation' },
    ],
    partners: [
      { name: 'Sailing Club', type: 'club' },
    ],
    artifact: {
      description: 'Planned route executed with error analysis',
      requirements: [
        'Route planned',
        'Route executed',
        'Error analysis documented',
      ],
    },
  },
  {
    id: 'cartography',
    name: 'Cartography',
    era: 'renaissance',
    modules: [
      { name: 'Scale', description: 'Map scale and distance representation' },
      { name: 'Projection Basics', description: 'Understanding map projections' },
      { name: 'Symbols', description: 'Map symbols and legends' },
      { name: 'Surveying', description: 'Field surveying techniques' },
    ],
    partners: [
      { name: 'Mapping Group', type: 'group' },
    ],
    artifact: {
      description: 'Local atlas map set',
      requirements: [
        'Local atlas map set created',
      ],
    },
  },
];
