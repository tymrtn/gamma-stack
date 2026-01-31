import { Skill } from '../types';

export const modernSkills: Skill[] = [
  {
    id: 'radio',
    name: 'Radio',
    era: 'modern',
    modules: [
      { name: 'Signals', description: 'Radio signal fundamentals' },
      { name: 'Encoding', description: 'Signal encoding methods' },
      { name: 'Protocols', description: 'Communication protocols' },
      { name: 'Interference', description: 'Managing interference' },
    ],
    partners: [
      { name: 'Ham Radio Club', type: 'club' },
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
    modules: [
      { name: 'Lift/Drag', description: 'Aerodynamic principles' },
      { name: 'Control Surfaces', description: 'Ailerons, elevators, rudders' },
      { name: 'Safety', description: 'Aviation safety practices' },
      { name: 'Weather', description: 'Weather effects on flight' },
    ],
    partners: [
      { name: 'Glider Club', type: 'club' },
      { name: 'Drone Club', type: 'club' },
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
    modules: [
      { name: 'Engines', description: 'Internal combustion engine principles' },
      { name: 'Fuel/Air', description: 'Fuel-air mixture and combustion' },
      { name: 'Efficiency', description: 'Engine efficiency factors' },
      { name: 'Emissions', description: 'Emissions and environmental impact' },
    ],
    partners: [
      { name: 'Mechanic Mentor', type: 'mentor' },
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
    modules: [
      { name: 'Polymers', description: 'Polymer chemistry basics' },
      { name: 'Molding', description: 'Plastic molding techniques' },
      { name: 'Material Tradeoffs', description: 'Choosing appropriate plastics' },
      { name: 'Recycling', description: 'Plastic recycling processes' },
    ],
    partners: [
      { name: 'Fablab', type: 'fablab' },
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
    modules: [
      { name: 'Logic', description: 'Boolean logic and digital circuits' },
      { name: 'Programming', description: 'Writing and understanding code' },
      { name: 'Storage', description: 'Data storage concepts' },
      { name: 'Debugging', description: 'Finding and fixing errors' },
    ],
    partners: [
      { name: 'Coding Club', type: 'club' },
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
    modules: [
      { name: 'Client/Server', description: 'Client-server architecture' },
      { name: 'HTTP', description: 'HTTP protocol fundamentals' },
      { name: 'Auth', description: 'Authentication and authorization' },
      { name: 'Databases', description: 'Database fundamentals' },
      { name: 'Security Basics', description: 'Web security principles' },
    ],
    partners: [
      { name: 'Mentor', type: 'mentor' },
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
    modules: [
      { name: 'Sensors', description: 'Sensor types and applications' },
      { name: 'Actuators', description: 'Motors and movement systems' },
      { name: 'Control Loops', description: 'Feedback control systems' },
      { name: 'Mechanical Design', description: 'Robot mechanical design' },
    ],
    partners: [
      { name: 'Robotics Club', type: 'club' },
    ],
    artifact: {
      description: 'Robot that performs task reliably',
      requirements: [
        'Robot performs task reliably',
      ],
    },
  },
];
