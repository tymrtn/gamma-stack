import { Skill } from '../types';

export const modernSkills: Skill[] = [
  {
    id: 'radio',
    name: 'Radio',
    era: 'modern',
    prerequisites: ['electricity'],
    modules: [
      { name: 'Signals', description: 'Radio signal fundamentals' },
      { name: 'Encoding', description: 'Signal encoding methods' },
      { name: 'Protocols', description: 'Communication protocols' },
      { name: 'Interference', description: 'Managing interference' },
    ],
    places: [
      { name: 'Ham Radio Station', type: 'facility' },
      { name: 'Communications Museum', type: 'museum' },
      { name: 'Radio Tower Site', type: 'facility' },
    ],
    partners: [
      { name: 'Ham Radio Club', type: 'club' },
      { name: 'Radio Operator', type: 'professional' },
      { name: 'ARRL Mentor', type: 'mentor' },
    ],
    artifact: {
      description: 'Reliable comms link with log',
      requirements: [
        'Reliable communications link established',
        'Communication log maintained',
      ],
    },
  },
  {
    id: 'flight',
    name: 'Flight',
    era: 'modern',
    prerequisites: ['engineering', 'scientific-theory'],
    modules: [
      { name: 'Lift/Drag', description: 'Aerodynamic principles' },
      { name: 'Control Surfaces', description: 'Ailerons, elevators, rudders' },
      { name: 'Safety', description: 'Aviation safety practices' },
      { name: 'Weather', description: 'Weather effects on flight' },
    ],
    places: [
      { name: 'Aviation Museum', type: 'museum' },
      { name: 'Small Airport', type: 'facility' },
      { name: 'Glider Field', type: 'outdoor' },
    ],
    partners: [
      { name: 'Glider Club', type: 'club' },
      { name: 'Drone Club', type: 'club' },
      { name: 'Pilot', type: 'professional' },
      { name: 'Flight Instructor', type: 'professional' },
    ],
    artifact: {
      description: 'Stable controlled flight (model/glider) with tests',
      requirements: [
        'Stable controlled flight achieved (model or glider)',
        'Flight tests documented',
      ],
    },
  },
  {
    id: 'combustion',
    name: 'Combustion',
    era: 'modern',
    prerequisites: ['steam-power', 'scientific-theory'],
    modules: [
      { name: 'Engines', description: 'Internal combustion engine principles' },
      { name: 'Fuel/Air', description: 'Fuel-air mixture and combustion' },
      { name: 'Efficiency', description: 'Engine efficiency factors' },
      { name: 'Emissions', description: 'Emissions and environmental impact' },
    ],
    places: [
      { name: 'Auto Museum', type: 'museum' },
      { name: 'Auto Shop', type: 'workspace' },
      { name: 'Vintage Car Show', type: 'facility' },
    ],
    partners: [
      { name: 'Mechanic', type: 'professional' },
      { name: 'Automotive Engineer', type: 'professional' },
      { name: 'Car Club', type: 'club' },
    ],
    artifact: {
      description: 'Engine teardown report with performance model',
      requirements: [
        'Engine teardown report completed',
        'Performance model created',
      ],
    },
  },
  {
    id: 'plastics',
    name: 'Plastics',
    era: 'modern',
    prerequisites: ['scientific-theory'],
    modules: [
      { name: 'Polymers', description: 'Polymer chemistry basics' },
      { name: 'Molding', description: 'Plastic molding techniques' },
      { name: 'Material Tradeoffs', description: 'Choosing appropriate plastics' },
      { name: 'Recycling', description: 'Plastic recycling processes' },
    ],
    places: [
      { name: 'Fablab', type: 'workspace' },
      { name: 'Plastics Museum', type: 'museum' },
      { name: 'Recycling Facility', type: 'facility' },
    ],
    partners: [
      { name: 'Materials Scientist', type: 'professional' },
      { name: 'Industrial Designer', type: 'professional' },
      { name: 'Maker Mentor', type: 'mentor' },
    ],
    artifact: {
      description: 'Molded part with stress tests',
      requirements: [
        'Molded part created',
        'Stress tests performed and documented',
      ],
    },
  },
  {
    id: 'computers',
    name: 'Computers',
    era: 'modern',
    prerequisites: ['electricity', 'mathematics'],
    modules: [
      { name: 'Logic', description: 'Boolean logic and digital circuits' },
      { name: 'Programming', description: 'Writing and understanding code' },
      { name: 'Storage', description: 'Data storage concepts' },
      { name: 'Debugging', description: 'Finding and fixing errors' },
    ],
    places: [
      { name: 'Computer History Museum', type: 'museum' },
      { name: 'Hackerspace', type: 'workspace' },
      { name: 'University CS Lab', type: 'institution' },
    ],
    partners: [
      { name: 'Coding Club', type: 'club' },
      { name: 'Software Developer', type: 'professional' },
      { name: 'CS Teacher', type: 'professional' },
    ],
    artifact: {
      description: 'Working program with tests',
      requirements: [
        'Working program created',
        'Tests written and passing',
      ],
    },
  },
  {
    id: 'internet',
    name: 'Internet',
    era: 'modern',
    prerequisites: ['computers', 'radio'],
    modules: [
      { name: 'Client/Server', description: 'Client-server architecture' },
      { name: 'HTTP', description: 'HTTP protocol fundamentals' },
      { name: 'Auth', description: 'Authentication and authorization' },
      { name: 'Databases', description: 'Database fundamentals' },
      { name: 'Security Basics', description: 'Web security principles' },
    ],
    places: [
      { name: 'Data Center Tour', type: 'facility' },
      { name: 'Internet Archive', type: 'institution' },
      { name: 'Tech Company Visit', type: 'facility' },
    ],
    partners: [
      { name: 'Web Developer', type: 'professional' },
      { name: 'DevOps Engineer', type: 'professional' },
      { name: 'Tech Mentor', type: 'mentor' },
    ],
    artifact: {
      description: 'Deployed web app with uptime log',
      requirements: [
        'Web app deployed',
        'Uptime log maintained',
      ],
    },
  },
  {
    id: 'robotics',
    name: 'Robotics',
    era: 'modern',
    prerequisites: ['computers', 'machinery', 'electricity'],
    modules: [
      { name: 'Sensors', description: 'Sensor types and applications' },
      { name: 'Actuators', description: 'Motors and movement systems' },
      { name: 'Control Loops', description: 'Feedback control systems' },
      { name: 'Mechanical Design', description: 'Robot mechanical design' },
    ],
    places: [
      { name: 'Robotics Lab', type: 'workspace' },
      { name: 'Science Museum', type: 'museum' },
      { name: 'Manufacturing Facility', type: 'facility' },
    ],
    partners: [
      { name: 'Robotics Club', type: 'club' },
      { name: 'Robotics Engineer', type: 'professional' },
      { name: 'FIRST Mentor', type: 'mentor' },
    ],
    artifact: {
      description: 'Robot that performs task reliably',
      requirements: [
        'Robot performs task reliably',
      ],
    },
  },
];
