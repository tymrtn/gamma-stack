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
      requirements: [
        'Experiment replicated',
        'Writeup documenting methodology and results',
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
      requirements: [
        'Safe steam model or demonstration',
        'Efficiency notes documented',
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
      requirements: [
        'Logistics plan created',
        'Simulation results documented',
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
      requirements: [
        'Powered device built',
        'Output measured and documented',
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
      requirements: [
        '20 identical parts manufactured',
        'QA report documenting consistency',
      ],
    },
  },
];
