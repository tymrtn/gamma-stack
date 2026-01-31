import { Skill } from '../types';

export const classicalSkills: Skill[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    era: 'classical',
    modules: [
      { name: 'Measurement', description: 'Precise measurement techniques' },
      { name: 'Geometry', description: 'Shapes, angles, and spatial reasoning' },
      { name: 'Ratios', description: 'Proportions and scaling' },
      { name: 'Proof Habits', description: 'Logical reasoning and proof construction' },
      { name: 'Error Analysis', description: 'Understanding and quantifying errors' },
    ],
    partners: [
      { name: 'Math Circle', type: 'club' },
      { name: 'Surveying Mentor', type: 'mentor' },
    ],
    artifact: {
      description: 'Measured map with tolerances report',
      requirements: [
        'Measured map created',
        'Tolerances report documenting accuracy',
      ],
    },
  },
  {
    id: 'construction',
    name: 'Construction',
    era: 'classical',
    modules: [
      { name: 'Structural Members', description: 'Beams, columns, and load-bearing elements' },
      { name: 'Joints', description: 'Connection methods and joinery' },
      { name: 'Compressive vs Tensile', description: 'Understanding forces in materials' },
      { name: 'Scaffolding Safety', description: 'Safe use of scaffolding and platforms' },
    ],
    partners: [
      { name: 'Builderspace', type: 'makerspace' },
      { name: 'Carpentry Shop', type: 'workshop' },
    ],
    artifact: {
      description: 'Bridge or structure that holds defined load',
      requirements: [
        'Bridge or structure built',
        'Holds defined load safely',
      ],
    },
  },
  {
    id: 'engineering',
    name: 'Engineering',
    era: 'classical',
    modules: [
      { name: 'Pulleys/Gears/Levers', description: 'Simple machines and their applications' },
      { name: 'Mechanical Advantage', description: 'Force multiplication principles' },
      { name: 'Iteration', description: 'Iterative design and improvement' },
      { name: 'Testing', description: 'Systematic testing methodologies' },
    ],
    partners: [
      { name: 'Makerspace', type: 'makerspace' },
    ],
    artifact: {
      description: 'Machine that does measurable work',
      requirements: [
        'Machine performs measurable work',
      ],
    },
  },
  {
    id: 'currency',
    name: 'Currency',
    era: 'classical',
    modules: [
      { name: 'Value', description: 'Understanding intrinsic and assigned value' },
      { name: 'Trust', description: 'Trust systems in exchange' },
      { name: 'Counterfeits', description: 'Detecting and preventing counterfeiting' },
      { name: 'Pricing', description: 'Determining fair prices' },
      { name: 'Exchange', description: 'Trade and exchange mechanisms' },
    ],
    partners: [
      { name: 'Local Market', type: 'market' },
      { name: 'Small Business Owner', type: 'mentor' },
    ],
    artifact: {
      description: 'Working token system with market day',
      requirements: [
        'Working token system created',
        'Market day conducted successfully',
      ],
    },
  },
  {
    id: 'code-of-laws',
    name: 'Code of Laws',
    era: 'classical',
    modules: [
      { name: 'Rules/Enforcement', description: 'Creating and enforcing rules' },
      { name: 'Evidence', description: 'Evidence gathering and evaluation' },
      { name: 'Procedure', description: 'Due process and procedures' },
      { name: 'Appeals', description: 'Appeal processes and review' },
    ],
    partners: [
      { name: 'Debate Club', type: 'club' },
      { name: 'Civic Org', type: 'organization' },
    ],
    artifact: {
      description: 'Constitution with 3 resolved disputes and rulings',
      requirements: [
        'Constitution drafted',
        '3 disputes resolved',
        'Rulings documented',
      ],
    },
  },
  {
    id: 'philosophy',
    name: 'Philosophy',
    era: 'classical',
    modules: [
      { name: 'Logic', description: 'Formal and informal logic' },
      { name: 'Ethics', description: 'Moral reasoning and ethical frameworks' },
      { name: 'Argument', description: 'Constructing and analyzing arguments' },
      { name: 'Steelmanning', description: 'Strengthening opposing arguments' },
    ],
    partners: [
      { name: 'Debate Club', type: 'club' },
    ],
    artifact: {
      description: 'Defended position with revised essay',
      requirements: [
        'Position defended in debate',
        'Revised essay incorporating feedback',
      ],
    },
  },
  {
    id: 'drama',
    name: 'Drama',
    era: 'classical',
    modules: [
      { name: 'Script', description: 'Script writing and analysis' },
      { name: 'Rehearsal', description: 'Rehearsal techniques and preparation' },
      { name: 'Staging', description: 'Stage design and blocking' },
      { name: 'Performance Critique', description: 'Evaluating and improving performances' },
    ],
    partners: [
      { name: 'Theater Group', type: 'group' },
    ],
    artifact: {
      description: 'Performed short play with director notes',
      requirements: [
        'Short play performed',
        'Director notes documenting process',
      ],
    },
  },
  {
    id: 'literature',
    name: 'Literature',
    era: 'classical',
    modules: [
      { name: 'Narrative', description: 'Story structure and narrative techniques' },
      { name: 'Rhetoric', description: 'Persuasive writing and speaking' },
      { name: 'Editing', description: 'Revision and editing skills' },
      { name: 'Publishing', description: 'Publication process and distribution' },
    ],
    partners: [
      { name: 'Writing Circle', type: 'group' },
      { name: 'Library', type: 'library' },
    ],
    artifact: {
      description: 'Published story with revision history',
      requirements: [
        'Story published',
        'Revision history documented',
      ],
    },
  },
  {
    id: 'astronomy',
    name: 'Astronomy',
    era: 'classical',
    modules: [
      { name: 'Star Charts', description: 'Reading and creating star charts' },
      { name: 'Seasons', description: 'Celestial causes of seasons' },
      { name: 'Observation', description: 'Systematic sky observation' },
      { name: 'Prediction', description: 'Predicting celestial events' },
    ],
    partners: [
      { name: 'Astronomy Club', type: 'club' },
    ],
    artifact: {
      description: 'Night-sky log with accurate prediction',
      requirements: [
        'Night-sky observation log',
        'Accurate celestial prediction made',
      ],
    },
  },
  {
    id: 'optics',
    name: 'Optics',
    era: 'classical',
    modules: [
      { name: 'Lenses', description: 'Lens types and properties' },
      { name: 'Magnification', description: 'Magnification principles' },
      { name: 'Light Paths', description: 'Light refraction and reflection' },
      { name: 'Measurement', description: 'Measuring optical properties' },
    ],
    partners: [
      { name: 'Science Museum', type: 'museum' },
      { name: 'Optics Hobbyist', type: 'mentor' },
    ],
    artifact: {
      description: 'Simple telescope or microscope with tests',
      requirements: [
        'Simple telescope or microscope built',
        'Tests documenting magnification',
      ],
    },
  },
  {
    id: 'horseback-riding',
    name: 'Horseback Riding',
    era: 'classical',
    modules: [
      { name: 'Safety', description: 'Riding safety fundamentals' },
      { name: 'Handling', description: 'Horse handling and approach' },
      { name: 'Tack', description: 'Saddle and equipment use' },
      { name: 'Care', description: 'Basic horse care' },
      { name: 'Trail Control', description: 'Controlling horse on trails' },
    ],
    partners: [
      { name: 'Stable', type: 'stable' },
    ],
    artifact: {
      description: 'Ride competency with care log',
      requirements: [
        'Ride competency demonstrated',
        'Care log maintained',
      ],
    },
  },
  {
    id: 'trapping',
    name: 'Trapping',
    era: 'classical',
    modules: [
      { name: 'Ethics', description: 'Ethical considerations in wildlife management' },
      { name: 'Habitats', description: 'Understanding animal habitats' },
      { name: 'Non-lethal Principles', description: 'Humane and non-lethal methods' },
      { name: 'Tracking', description: 'Animal tracking skills' },
      { name: 'Reporting', description: 'Wildlife observation reporting' },
    ],
    partners: [
      { name: 'Wildlife Center', type: 'center' },
      { name: 'Ranger Talk', type: 'educational' },
    ],
    artifact: {
      description: 'Tracking journal with habitat map',
      requirements: [
        'Tracking journal maintained',
        'Habitat map created',
      ],
    },
  },
];
