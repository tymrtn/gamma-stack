import { Skill } from '../types';

export const industrialSkills: Skill[] = [
  {
    id: 'scientific-theory',
    name: 'Scientific Theory',
    era: 'industrial',
    prerequisites: ['mathematics', 'philosophy'],
    modules: [
      { name: 'Controlled Experiments', description: 'Designing controlled experiments' },
      { name: 'Replication', description: 'Reproducibility and validation' },
      { name: 'Statistics Basics', description: 'Basic statistical analysis' },
    ],
    places: [
      { name: 'Science Museum', type: 'museum' },
      { name: 'University Lab', type: 'institution' },
      { name: 'Research Facility', type: 'facility' },
    ],
    partners: [
      { name: 'Scientist', type: 'professional' },
      { name: 'Science Teacher', type: 'professional' },
      { name: 'Research Mentor', type: 'mentor' },
    ],
    artifact: {
      description: 'Replicated experiment with writeup',
      requirements: ['Experiment replicated', 'Writeup documenting methodology and results'],
    },
    unlocks: {
      buildings: [
        { id: 'research-lab', name: 'Research Laboratory', description: 'Conduct scientific experiments', type: 'structure' },
        { id: 'science-academy', name: 'Science Academy', description: 'Train scientists and researchers', type: 'structure' },
      ],
      units: [
        { id: 'scientist', name: 'Scientist', description: 'Conduct research and experiments', type: 'role' },
        { id: 'researcher', name: 'Researcher', description: 'Investigate and document findings', type: 'role' },
      ],
    },
  },
  {
    id: 'steam-power',
    name: 'Steam Power',
    era: 'industrial',
    prerequisites: ['iron-working', 'scientific-theory'],
    modules: [
      { name: 'Heat→Work', description: 'Converting heat energy to mechanical work' },
      { name: 'Pressure Safety', description: 'Safe handling of pressure systems' },
      { name: 'Engines Overview', description: 'Steam engine types and operation' },
    ],
    places: [
      { name: 'Railroad Museum', type: 'museum' },
      { name: 'Industrial Heritage Site', type: 'historic-site' },
      { name: 'Working Steam Engine Site', type: 'facility' },
    ],
    partners: [
      { name: 'Steam Engineer', type: 'professional' },
      { name: 'Mechanical Engineer Mentor', type: 'mentor' },
      { name: 'Historical Society', type: 'organization' },
    ],
    artifact: {
      description: 'Safe steam model or demo with efficiency notes',
      requirements: ['Safe steam model or demonstration', 'Efficiency notes documented'],
    },
    unlocks: {
      buildings: [
        { id: 'factory', name: 'Factory', description: 'Mass production using steam power', type: 'structure' },
        { id: 'power-plant-steam', name: 'Steam Power Plant', description: 'Generate power from steam', type: 'structure' },
        { id: 'ironworks', name: 'Ironworks', description: 'Large-scale iron production', type: 'structure' },
      ],
      units: [
        { id: 'steam-engineer', name: 'Steam Engineer', description: 'Operate and maintain steam engines', type: 'role' },
        { id: 'factory-worker', name: 'Factory Worker', description: 'Operate industrial machinery', type: 'role' },
      ],
    },
  },
  {
    id: 'railroad',
    name: 'Railroad',
    era: 'industrial',
    prerequisites: ['steam-power', 'iron-working'],
    modules: [
      { name: 'Logistics', description: 'Transportation logistics principles' },
      { name: 'Scheduling', description: 'Train scheduling and timetables' },
      { name: 'Routing', description: 'Route optimization' },
      { name: 'Standard Gauges Concept', description: 'Standardization in rail systems' },
    ],
    places: [
      { name: 'Railroad Museum', type: 'museum' },
      { name: 'Train Station', type: 'facility' },
      { name: 'Historic Railroad', type: 'historic-site' },
    ],
    partners: [
      { name: 'Railroad Enthusiast Club', type: 'club' },
      { name: 'Logistics Professional', type: 'professional' },
      { name: 'Transit Authority', type: 'organization' },
    ],
    artifact: {
      description: 'Logistics plan with simulation results',
      requirements: ['Logistics plan created', 'Simulation results documented'],
    },
    unlocks: {
      buildings: [
        { id: 'train-station', name: 'Train Station', description: 'Hub for rail transport', type: 'structure' },
        { id: 'rail-yard', name: 'Rail Yard', description: 'Sort and organize rail cars', type: 'structure' },
        { id: 'depot', name: 'Depot', description: 'Store and maintain locomotives', type: 'structure' },
      ],
      units: [
        { id: 'train-engineer', name: 'Train Engineer', description: 'Operate locomotives', type: 'role' },
        { id: 'logistics-manager', name: 'Logistics Manager', description: 'Coordinate transport networks', type: 'role' },
      ],
    },
  },
  {
    id: 'electricity',
    name: 'Electricity',
    era: 'industrial',
    prerequisites: ['scientific-theory'],
    modules: [
      { name: 'Circuits', description: 'Basic circuit design and analysis' },
      { name: 'Motors', description: 'Electric motor principles' },
      { name: 'Generators', description: 'Electrical generation' },
      { name: 'Measurement', description: 'Electrical measurement tools' },
      { name: 'Safety', description: 'Electrical safety practices' },
    ],
    places: [
      { name: 'Electricity Museum', type: 'museum' },
      { name: 'Power Plant Tour', type: 'facility' },
      { name: 'Electronics Lab', type: 'workspace' },
    ],
    partners: [
      { name: 'Electronics Club', type: 'club' },
      { name: 'Electrician', type: 'professional' },
      { name: 'Electrical Engineer', type: 'professional' },
    ],
    artifact: {
      description: 'Powered device with measured output',
      requirements: ['Powered device built', 'Output measured and documented'],
    },
    unlocks: {
      buildings: [
        { id: 'power-plant', name: 'Power Plant', description: 'Generate electrical power', type: 'structure' },
        { id: 'power-grid', name: 'Power Grid', description: 'Distribute electricity', type: 'system' },
        { id: 'electric-workshop', name: 'Electric Workshop', description: 'Build electrical devices', type: 'structure' },
      ],
      units: [
        { id: 'electrician', name: 'Electrician', description: 'Wire and maintain electrical systems', type: 'role' },
        { id: 'electrical-engineer', name: 'Electrical Engineer', description: 'Design electrical systems', type: 'role' },
      ],
    },
  },
  {
    id: 'replaceable-parts',
    name: 'Replaceable Parts',
    era: 'industrial',
    prerequisites: ['machinery', 'scientific-theory'],
    modules: [
      { name: 'Jigs', description: 'Jig design and use for consistency' },
      { name: 'Standards', description: 'Manufacturing standards' },
      { name: 'QA Sampling', description: 'Quality assurance sampling methods' },
      { name: 'Tolerances', description: 'Manufacturing tolerances and fits' },
    ],
    places: [
      { name: 'Manufacturing Plant Tour', type: 'facility' },
      { name: 'Machine Shop', type: 'workspace' },
      { name: 'Industrial Museum', type: 'museum' },
    ],
    partners: [
      { name: 'Machinist', type: 'professional' },
      { name: 'Quality Engineer', type: 'professional' },
      { name: 'Manufacturing Mentor', type: 'mentor' },
    ],
    artifact: {
      description: '20 identical parts with QA report',
      requirements: ['20 identical parts manufactured', 'QA report documenting consistency'],
    },
    unlocks: {
      buildings: [
        { id: 'assembly-line', name: 'Assembly Line', description: 'Mass produce standardized goods', type: 'structure' },
        { id: 'qa-lab', name: 'QA Laboratory', description: 'Test and verify product quality', type: 'structure' },
      ],
      units: [
        { id: 'quality-inspector', name: 'Quality Inspector', description: 'Ensure product standards', type: 'role' },
        { id: 'assembly-worker', name: 'Assembly Worker', description: 'Assemble standardized products', type: 'role' },
      ],
    },
  },
];
