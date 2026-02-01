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
      requirements: ['Reliable communications link established', 'Communication log maintained'],
    },
    unlocks: {
      buildings: [
        { id: 'radio-station', name: 'Radio Station', description: 'Broadcast communications', type: 'structure' },
        { id: 'comms-tower', name: 'Communications Tower', description: 'Extend radio range', type: 'structure' },
      ],
      units: [
        { id: 'radio-operator', name: 'Radio Operator', description: 'Transmit and receive communications', type: 'role' },
        { id: 'ham-license', name: 'Amateur Radio License', description: 'Certified radio operator', type: 'certification' },
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
      requirements: ['Stable controlled flight achieved (model or glider)', 'Flight tests documented'],
    },
    unlocks: {
      buildings: [
        { id: 'airport', name: 'Airport', description: 'Hub for air travel', type: 'structure' },
        { id: 'hangar', name: 'Hangar', description: 'Store and maintain aircraft', type: 'structure' },
        { id: 'aerodrome', name: 'Aerodrome', description: 'Test and launch aircraft', type: 'structure' },
      ],
      units: [
        { id: 'pilot', name: 'Pilot', description: 'Fly aircraft', type: 'role' },
        { id: 'aircraft', name: 'Aircraft', description: 'Flying machine', type: 'capability' },
        { id: 'drone-operator', name: 'Drone Operator', description: 'Control unmanned aerial vehicles', type: 'role' },
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
      requirements: ['Engine teardown report completed', 'Performance model created'],
    },
    unlocks: {
      buildings: [
        { id: 'garage', name: 'Garage', description: 'Maintain and repair vehicles', type: 'structure' },
        { id: 'auto-plant', name: 'Automobile Plant', description: 'Manufacture vehicles', type: 'structure' },
        { id: 'gas-station', name: 'Gas Station', description: 'Fuel distribution', type: 'structure' },
      ],
      units: [
        { id: 'mechanic', name: 'Mechanic', description: 'Repair and maintain engines', type: 'role' },
        { id: 'automobile', name: 'Automobile', description: 'Self-powered vehicle', type: 'capability' },
        { id: 'tank', name: 'Tank', description: 'Armored combat vehicle', type: 'capability' },
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
      requirements: ['Molded part created', 'Stress tests performed and documented'],
    },
    unlocks: {
      buildings: [
        { id: 'plastics-factory', name: 'Plastics Factory', description: 'Produce plastic goods', type: 'structure' },
        { id: 'recycling-center', name: 'Recycling Center', description: 'Process recyclable materials', type: 'structure' },
      ],
      units: [
        { id: 'materials-engineer', name: 'Materials Engineer', description: 'Develop new materials', type: 'role' },
        { id: 'product-designer', name: 'Product Designer', description: 'Design consumer products', type: 'role' },
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
      requirements: ['Working program created', 'Tests written and passing'],
    },
    unlocks: {
      buildings: [
        { id: 'computer-lab', name: 'Computer Lab', description: 'Compute and process data', type: 'structure' },
        { id: 'data-center', name: 'Data Center', description: 'Store and process large amounts of data', type: 'structure' },
      ],
      units: [
        { id: 'programmer', name: 'Programmer', description: 'Write software', type: 'role' },
        { id: 'computer-scientist', name: 'Computer Scientist', description: 'Research computing', type: 'role' },
        { id: 'it-specialist', name: 'IT Specialist', description: 'Maintain computer systems', type: 'role' },
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
      requirements: ['Web app deployed', 'Uptime log maintained'],
    },
    unlocks: {
      buildings: [
        { id: 'server-farm', name: 'Server Farm', description: 'Host internet services', type: 'structure' },
        { id: 'isp', name: 'Internet Service Provider', description: 'Provide internet access', type: 'structure' },
        { id: 'startup-incubator', name: 'Startup Incubator', description: 'Launch internet businesses', type: 'structure' },
      ],
      units: [
        { id: 'web-developer', name: 'Web Developer', description: 'Build websites and apps', type: 'role' },
        { id: 'sysadmin', name: 'System Administrator', description: 'Manage servers and networks', type: 'role' },
        { id: 'security-analyst', name: 'Security Analyst', description: 'Protect digital systems', type: 'role' },
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
      requirements: ['Robot performs task reliably'],
    },
    unlocks: {
      buildings: [
        { id: 'robotics-lab', name: 'Robotics Lab', description: 'Develop robotic systems', type: 'structure' },
        { id: 'automated-factory', name: 'Automated Factory', description: 'Robot-driven manufacturing', type: 'structure' },
      ],
      units: [
        { id: 'robotics-engineer', name: 'Robotics Engineer', description: 'Design and build robots', type: 'role' },
        { id: 'robot', name: 'Robot', description: 'Autonomous machine', type: 'capability' },
        { id: 'drone', name: 'Drone', description: 'Autonomous flying machine', type: 'capability' },
      ],
    },
  },
];
