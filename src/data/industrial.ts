import { Skill } from '../types';

export const industrialSkills: Skill[] = [
  {
    id: 'scientific-theory',
    name: 'Scientific Theory',
    era: 'industrial',
    modules: [
      { name: 'Controlled Experiments', description: 'Designing controlled experiments' },
      { name: 'Replication', description: 'Reproducibility and validation' },
      { name: 'Statistics Basics', description: 'Basic statistical analysis' },
    ],
    partners: [
      { name: 'Lab/Museum', type: 'laboratory' },
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
    modules: [
      { name: 'Heat→Work', description: 'Converting heat energy to mechanical work' },
      { name: 'Pressure Safety', description: 'Safe handling of pressure systems' },
      { name: 'Engines Overview', description: 'Steam engine types and operation' },
    ],
    partners: [
      { name: 'Museum', type: 'museum' },
      { name: 'Engineer Mentor', type: 'mentor' },
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
    modules: [
      { name: 'Logistics', description: 'Transportation logistics principles' },
      { name: 'Scheduling', description: 'Train scheduling and timetables' },
      { name: 'Routing', description: 'Route optimization' },
      { name: 'Standard Gauges Concept', description: 'Standardization in rail systems' },
    ],
    partners: [
      { name: 'Transit Visit', type: 'field-trip' },
      { name: 'Operations Sim', type: 'simulation' },
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
    modules: [
      { name: 'Circuits', description: 'Basic circuit design and analysis' },
      { name: 'Motors', description: 'Electric motor principles' },
      { name: 'Generators', description: 'Electrical generation' },
      { name: 'Measurement', description: 'Electrical measurement tools' },
      { name: 'Safety', description: 'Electrical safety practices' },
    ],
    partners: [
      { name: 'Electronics Club', type: 'club' },
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
    modules: [
      { name: 'Jigs', description: 'Jig design and use for consistency' },
      { name: 'Standards', description: 'Manufacturing standards' },
      { name: 'QA Sampling', description: 'Quality assurance sampling methods' },
      { name: 'Tolerances', description: 'Manufacturing tolerances and fits' },
    ],
    partners: [
      { name: 'Workshop', type: 'workshop' },
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
