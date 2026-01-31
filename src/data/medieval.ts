import { Skill } from '../types';

export const medievalSkills: Skill[] = [
  {
    id: 'machinery',
    name: 'Machinery',
    era: 'medieval',
    modules: [
      { name: 'Cams/Cranks', description: 'Converting rotary to linear motion' },
      { name: 'Power Transmission', description: 'Transferring power between components' },
      { name: 'Tolerances', description: 'Precision and fit in mechanical systems' },
      { name: 'Maintenance', description: 'Keeping machinery operational' },
    ],
    partners: [
      { name: 'Makerspace', type: 'makerspace' },
    ],
    artifact: {
      description: 'Mechanism that converts motion reliably',
      requirements: [
        'Mechanism converts motion reliably',
      ],
    },
  },
  {
    id: 'compass',
    name: 'Compass',
    era: 'medieval',
    modules: [
      { name: 'Magnetism Basics', description: 'Understanding magnetic principles' },
      { name: 'Bearings', description: 'Taking and following bearings' },
      { name: 'Declination Concept', description: 'Magnetic vs true north' },
      { name: 'Route Planning', description: 'Planning routes using compass' },
    ],
    partners: [
      { name: 'Hiking Club', type: 'club' },
      { name: 'Sailing Club', type: 'club' },
    ],
    artifact: {
      description: 'Waypoint course without GPS with log',
      requirements: [
        'Waypoint course completed without GPS',
        'Navigation log maintained',
      ],
    },
  },
  {
    id: 'education',
    name: 'Education',
    era: 'medieval',
    modules: [
      { name: 'Learning How to Learn', description: 'Metacognition and learning strategies' },
      { name: 'Note Systems', description: 'Effective note-taking methods' },
      { name: 'Memory Drills', description: 'Memory techniques and practice' },
      { name: 'Teaching Others', description: 'Explaining concepts to others' },
    ],
    partners: [
      { name: 'Study Group/Pod', type: 'group' },
    ],
    artifact: {
      description: 'Teach a skill with learner results',
      requirements: [
        'Skill taught to another person',
        'Learner results documented',
      ],
    },
  },
  {
    id: 'theology',
    name: 'Theology',
    era: 'medieval',
    modules: [
      { name: 'Comparative Belief Systems', description: 'Understanding diverse religious traditions' },
      { name: 'Rituals', description: 'Religious practices and ceremonies' },
      { name: 'Ethics', description: 'Religious ethics and moral frameworks' },
      { name: 'Community Structures', description: 'Religious community organization' },
    ],
    partners: [
      { name: 'Museum', type: 'museum' },
      { name: 'Interfaith Center', type: 'center' },
    ],
    artifact: {
      description: 'Comparative map with respectful debate',
      requirements: [
        'Comparative map of belief systems',
        'Respectful debate conducted',
      ],
    },
  },
  {
    id: 'civil-service',
    name: 'Civil Service',
    era: 'medieval',
    modules: [
      { name: 'Bureaucracy', description: 'Administrative systems and processes' },
      { name: 'Forms', description: 'Form design and processing' },
      { name: 'Incentives', description: 'Designing effective incentive structures' },
      { name: 'Audits', description: 'Audit procedures and accountability' },
      { name: 'Public Records', description: 'Record keeping and transparency' },
    ],
    partners: [
      { name: 'Civic Org', type: 'organization' },
    ],
    artifact: {
      description: 'Run a micro-agency with intake, decisions, and logs',
      requirements: [
        'Micro-agency operated',
        'Intake process documented',
        'Decisions recorded',
        'Activity logs maintained',
      ],
    },
  },
  {
    id: 'chivalry',
    name: 'Chivalry',
    era: 'medieval',
    modules: [
      { name: 'Honor Codes', description: 'Personal codes of honor and integrity' },
      { name: 'Responsibility', description: 'Taking responsibility for actions' },
      { name: 'Restraint', description: 'Self-control and measured response' },
      { name: 'Service', description: 'Service to community and others' },
    ],
    partners: [
      { name: 'Martial Arts Club', type: 'club' },
      { name: 'Scouts', type: 'scouts' },
    ],
    artifact: {
      description: 'Service project with code and reflection',
      requirements: [
        'Service project completed',
        'Personal code written',
        'Reflection documented',
      ],
    },
  },
  {
    id: 'guilds',
    name: 'Guilds',
    era: 'medieval',
    modules: [
      { name: 'Apprenticeship', description: 'Learning through mentorship' },
      { name: 'Standards', description: 'Quality standards and benchmarks' },
      { name: 'Peer Review', description: 'Evaluation by peers' },
      { name: 'Pricing', description: 'Fair pricing practices' },
      { name: 'Reputation', description: 'Building and maintaining reputation' },
    ],
    partners: [
      { name: 'Makerspace', type: 'makerspace' },
      { name: 'Craft Guild', type: 'guild' },
    ],
    artifact: {
      description: 'Run a mini guild with peer certification',
      requirements: [
        'Mini guild organized',
        'Peer certification process established',
      ],
    },
  },
];
