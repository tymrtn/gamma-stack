import { Skill } from '../types';

export const classicalSkills: Skill[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    era: 'classical',
    prerequisites: ['writing', 'calendar'],
    modules: [
      { name: 'Measurement', description: 'Precise measurement techniques' },
      { name: 'Geometry', description: 'Shapes, angles, and spatial reasoning' },
      { name: 'Ratios', description: 'Proportions and scaling' },
      { name: 'Proof Habits', description: 'Logical reasoning and proof construction' },
      { name: 'Error Analysis', description: 'Understanding and quantifying errors' },
    ],
    places: [
      { name: 'Science Museum', type: 'museum' },
      { name: 'University Math Department', type: 'institution' },
    ],
    partners: [
      { name: 'Math Circle', type: 'club' },
      { name: 'Surveying Mentor', type: 'mentor' },
      { name: 'Math Teacher', type: 'professional' },
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
    prerequisites: ['masonry', 'the-wheel'],
    modules: [
      { name: 'Structural Members', description: 'Beams, columns, and load-bearing elements' },
      { name: 'Joints', description: 'Connection methods and joinery' },
      { name: 'Compressive vs Tensile', description: 'Understanding forces in materials' },
      { name: 'Scaffolding Safety', description: 'Safe use of scaffolding and platforms' },
    ],
    places: [
      { name: 'Builderspace/Makerspace', type: 'workspace' },
      { name: 'Carpentry Shop', type: 'workspace' },
      { name: 'Construction Site Tour', type: 'facility' },
    ],
    partners: [
      { name: 'Carpenter', type: 'professional' },
      { name: 'Structural Engineer', type: 'professional' },
      { name: 'Builder', type: 'professional' },
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
    prerequisites: ['the-wheel', 'mathematics'],
    modules: [
      { name: 'Pulleys/Gears/Levers', description: 'Simple machines and their applications' },
      { name: 'Mechanical Advantage', description: 'Force multiplication principles' },
      { name: 'Iteration', description: 'Iterative design and improvement' },
      { name: 'Testing', description: 'Systematic testing methodologies' },
    ],
    places: [
      { name: 'Makerspace', type: 'workspace' },
      { name: 'Engineering Museum', type: 'museum' },
      { name: 'University Engineering Lab', type: 'institution' },
    ],
    partners: [
      { name: 'Engineer Mentor', type: 'mentor' },
      { name: 'Maker Community', type: 'group' },
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
    prerequisites: ['writing', 'mining'],
    modules: [
      { name: 'Value', description: 'Understanding intrinsic and assigned value' },
      { name: 'Trust', description: 'Trust systems in exchange' },
      { name: 'Counterfeits', description: 'Detecting and preventing counterfeiting' },
      { name: 'Pricing', description: 'Determining fair prices' },
      { name: 'Exchange', description: 'Trade and exchange mechanisms' },
    ],
    places: [
      { name: 'Local Market/Farmers Market', type: 'facility' },
      { name: 'Numismatic Museum', type: 'museum' },
      { name: 'Federal Reserve/Mint', type: 'institution' },
    ],
    partners: [
      { name: 'Small Business Owner', type: 'mentor' },
      { name: 'Economist', type: 'professional' },
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
    prerequisites: ['writing'],
    modules: [
      { name: 'Rules/Enforcement', description: 'Creating and enforcing rules' },
      { name: 'Evidence', description: 'Evidence gathering and evaluation' },
      { name: 'Procedure', description: 'Due process and procedures' },
      { name: 'Appeals', description: 'Appeal processes and review' },
    ],
    places: [
      { name: 'Courthouse', type: 'institution' },
      { name: 'Law Library', type: 'institution' },
      { name: 'City Hall', type: 'institution' },
    ],
    partners: [
      { name: 'Debate Club', type: 'club' },
      { name: 'Civic Organization', type: 'organization' },
      { name: 'Lawyer/Judge', type: 'professional' },
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
    prerequisites: ['writing'],
    modules: [
      { name: 'Logic', description: 'Formal and informal logic' },
      { name: 'Ethics', description: 'Moral reasoning and ethical frameworks' },
      { name: 'Argument', description: 'Constructing and analyzing arguments' },
      { name: 'Steelmanning', description: 'Strengthening opposing arguments' },
    ],
    places: [
      { name: 'University Philosophy Department', type: 'institution' },
      { name: 'Philosophy Cafe/Salon', type: 'facility' },
    ],
    partners: [
      { name: 'Debate Club', type: 'club' },
      { name: 'Philosophy Professor', type: 'mentor' },
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
    prerequisites: ['writing'],
    modules: [
      { name: 'Script', description: 'Script writing and analysis' },
      { name: 'Rehearsal', description: 'Rehearsal techniques and preparation' },
      { name: 'Staging', description: 'Stage design and blocking' },
      { name: 'Performance Critique', description: 'Evaluating and improving performances' },
    ],
    places: [
      { name: 'Community Theater', type: 'facility' },
      { name: 'Amphitheater/Historic Theater', type: 'historic-site' },
    ],
    partners: [
      { name: 'Theater Group', type: 'group' },
      { name: 'Drama Teacher', type: 'professional' },
      { name: 'Director', type: 'professional' },
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
    prerequisites: ['writing'],
    modules: [
      { name: 'Narrative', description: 'Story structure and narrative techniques' },
      { name: 'Rhetoric', description: 'Persuasive writing and speaking' },
      { name: 'Editing', description: 'Revision and editing skills' },
      { name: 'Publishing', description: 'Publication process and distribution' },
    ],
    places: [
      { name: 'Library', type: 'institution' },
      { name: 'Bookstore', type: 'facility' },
      { name: 'Literary Museum', type: 'museum' },
    ],
    partners: [
      { name: 'Writing Circle', type: 'group' },
      { name: 'Author/Writer', type: 'professional' },
      { name: 'Editor', type: 'professional' },
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
    prerequisites: ['calendar', 'mathematics'],
    modules: [
      { name: 'Star Charts', description: 'Reading and creating star charts' },
      { name: 'Seasons', description: 'Celestial causes of seasons' },
      { name: 'Observation', description: 'Systematic sky observation' },
      { name: 'Prediction', description: 'Predicting celestial events' },
    ],
    places: [
      { name: 'Observatory', type: 'facility' },
      { name: 'Planetarium', type: 'facility' },
      { name: 'Dark Sky Site', type: 'outdoor' },
    ],
    partners: [
      { name: 'Astronomy Club', type: 'club' },
      { name: 'Astronomer', type: 'professional' },
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
    prerequisites: ['mathematics'],
    modules: [
      { name: 'Lenses', description: 'Lens types and properties' },
      { name: 'Magnification', description: 'Magnification principles' },
      { name: 'Light Paths', description: 'Light refraction and reflection' },
      { name: 'Measurement', description: 'Measuring optical properties' },
    ],
    places: [
      { name: 'Science Museum', type: 'museum' },
      { name: 'Optics Lab', type: 'facility' },
    ],
    partners: [
      { name: 'Optics Hobbyist', type: 'mentor' },
      { name: 'Optician', type: 'professional' },
      { name: 'Physics Teacher', type: 'professional' },
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
    prerequisites: ['animal-husbandry'],
    modules: [
      { name: 'Safety', description: 'Riding safety fundamentals' },
      { name: 'Handling', description: 'Horse handling and approach' },
      { name: 'Tack', description: 'Saddle and equipment use' },
      { name: 'Care', description: 'Basic horse care' },
      { name: 'Trail Control', description: 'Controlling horse on trails' },
    ],
    places: [
      { name: 'Riding Stable', type: 'facility' },
      { name: 'Ranch', type: 'facility' },
      { name: 'Equestrian Center', type: 'facility' },
    ],
    partners: [
      { name: 'Riding Instructor', type: 'professional' },
      { name: 'Equestrian Club', type: 'club' },
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
    prerequisites: ['animal-husbandry'],
    modules: [
      { name: 'Ethics', description: 'Ethical considerations in wildlife management' },
      { name: 'Habitats', description: 'Understanding animal habitats' },
      { name: 'Non-lethal Principles', description: 'Humane and non-lethal methods' },
      { name: 'Tracking', description: 'Animal tracking skills' },
      { name: 'Reporting', description: 'Wildlife observation reporting' },
    ],
    places: [
      { name: 'Wildlife Center', type: 'facility' },
      { name: 'Nature Reserve', type: 'outdoor' },
      { name: 'State/National Park', type: 'outdoor' },
    ],
    partners: [
      { name: 'Park Ranger', type: 'professional' },
      { name: 'Wildlife Biologist', type: 'professional' },
      { name: 'Naturalist Club', type: 'club' },
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
