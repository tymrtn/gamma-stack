import { Skill } from '../types';

export const renaissanceSkills: Skill[] = [
  {
    id: 'printing-press',
    name: 'Printing Press',
    era: 'renaissance',
    prerequisites: ['writing', 'machinery'],
    modules: [
      { name: 'Typesetting/Printing', description: 'Setting type and printing processes' },
      { name: 'Layout', description: 'Page layout and design' },
      { name: 'Editing', description: 'Editorial process and proofreading' },
      { name: 'Distribution', description: 'Publication distribution methods' },
    ],
    places: [
      { name: 'Print Shop/Letterpress Studio', type: 'studio' },
      { name: 'Printing Museum', type: 'museum' },
      { name: 'School Fablab', type: 'workspace' },
    ],
    partners: [
      { name: 'Printer/Letterpress Artist', type: 'professional' },
      { name: 'Publisher', type: 'professional' },
      { name: 'Graphic Designer', type: 'professional' },
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
    prerequisites: ['currency', 'mathematics'],
    modules: [
      { name: 'Loans', description: 'Lending principles and practices' },
      { name: 'Interest', description: 'Interest calculations and concepts' },
      { name: 'Risk', description: 'Risk assessment and management' },
      { name: 'Ledgers', description: 'Double-entry bookkeeping' },
      { name: 'Fraud', description: 'Fraud detection and prevention' },
    ],
    places: [
      { name: 'Bank (Tour)', type: 'facility' },
      { name: 'Financial History Museum', type: 'museum' },
      { name: 'Stock Exchange', type: 'facility' },
    ],
    partners: [
      { name: 'Entrepreneur Mentor', type: 'mentor' },
      { name: 'Banker/Financial Advisor', type: 'professional' },
      { name: 'Accountant', type: 'professional' },
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
    prerequisites: ['iron-working'],
    modules: [
      { name: 'History', description: 'Historical development and impact' },
      { name: 'Chemistry Safety', description: 'Chemical safety principles' },
      { name: 'Pressure/Containment Theory', description: 'Understanding pressure physics (no explosives build)' },
    ],
    places: [
      { name: 'Military History Museum', type: 'museum' },
      { name: 'Chemistry Lab', type: 'facility' },
      { name: 'Historic Fort/Battlefield', type: 'historic-site' },
    ],
    partners: [
      { name: 'Chemistry Educator', type: 'professional' },
      { name: 'Historian', type: 'professional' },
      { name: 'Museum Curator', type: 'professional' },
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
    prerequisites: ['compass', 'astronomy', 'sailing'],
    modules: [
      { name: 'Charts', description: 'Reading and using nautical charts' },
      { name: 'Dead Reckoning', description: 'Position estimation from course and speed' },
      { name: 'Basic Celestial', description: 'Using celestial bodies for navigation' },
      { name: 'Weather', description: 'Weather interpretation for navigation' },
    ],
    places: [
      { name: 'Maritime Museum', type: 'museum' },
      { name: 'Sailing Center', type: 'facility' },
      { name: 'Historic Port/Harbor', type: 'historic-site' },
    ],
    partners: [
      { name: 'Sailing Club', type: 'club' },
      { name: 'Ship Captain', type: 'professional' },
      { name: 'Navigator', type: 'professional' },
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
    prerequisites: ['mathematics', 'navigation'],
    modules: [
      { name: 'Scale', description: 'Map scale and distance representation' },
      { name: 'Projection Basics', description: 'Understanding map projections' },
      { name: 'Symbols', description: 'Map symbols and legends' },
      { name: 'Surveying', description: 'Field surveying techniques' },
    ],
    places: [
      { name: 'Map Library', type: 'institution' },
      { name: 'Geography Museum', type: 'museum' },
      { name: 'USGS/Survey Office', type: 'institution' },
    ],
    partners: [
      { name: 'Mapping Group', type: 'group' },
      { name: 'Cartographer', type: 'professional' },
      { name: 'GIS Specialist', type: 'professional' },
    ],
    artifact: {
      description: 'Local atlas map set',
      requirements: [
        'Local atlas map set created',
      ],
    },
  },
];
