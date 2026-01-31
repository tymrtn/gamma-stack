import { Skill } from '../types';

export const medievalSkills: Skill[] = [
  {
    id: 'machinery',
    name: 'Machinery',
    era: 'medieval',
    prerequisites: ['engineering', 'the-wheel'],
    modules: [
      { name: 'Cams/Cranks', description: 'Converting rotary to linear motion' },
      { name: 'Power Transmission', description: 'Transferring power between components' },
      { name: 'Tolerances', description: 'Precision and fit in mechanical systems' },
      { name: 'Maintenance', description: 'Keeping machinery operational' },
    ],
    places: [
      { name: 'Makerspace', type: 'workspace' },
      { name: 'Industrial Museum', type: 'museum' },
      { name: 'Working Mill (Water/Wind)', type: 'historic-site' },
    ],
    partners: [
      { name: 'Machinist', type: 'professional' },
      { name: 'Mechanical Engineer', type: 'professional' },
      { name: 'Maker Mentor', type: 'mentor' },
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
    prerequisites: ['iron-working', 'sailing'],
    modules: [
      { name: 'Magnetism Basics', description: 'Understanding magnetic principles' },
      { name: 'Bearings', description: 'Taking and following bearings' },
      { name: 'Declination Concept', description: 'Magnetic vs true north' },
      { name: 'Route Planning', description: 'Planning routes using compass' },
    ],
    places: [
      { name: 'Navigation Museum', type: 'museum' },
      { name: 'Hiking Trail', type: 'outdoor' },
      { name: 'Orienteering Course', type: 'outdoor' },
    ],
    partners: [
      { name: 'Hiking Club', type: 'club' },
      { name: 'Sailing Club', type: 'club' },
      { name: 'Orienteering Club', type: 'club' },
      { name: 'Scout Leader', type: 'mentor' },
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
    prerequisites: ['writing', 'philosophy'],
    modules: [
      { name: 'Learning How to Learn', description: 'Metacognition and learning strategies' },
      { name: 'Note Systems', description: 'Effective note-taking methods' },
      { name: 'Memory Drills', description: 'Memory techniques and practice' },
      { name: 'Teaching Others', description: 'Explaining concepts to others' },
    ],
    places: [
      { name: 'Library', type: 'institution' },
      { name: 'University', type: 'institution' },
      { name: 'Historic Schoolhouse', type: 'historic-site' },
    ],
    partners: [
      { name: 'Study Group/Pod', type: 'group' },
      { name: 'Teacher/Professor', type: 'professional' },
      { name: 'Tutor', type: 'mentor' },
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
    prerequisites: ['writing', 'philosophy'],
    modules: [
      { name: 'Comparative Belief Systems', description: 'Understanding diverse religious traditions' },
      { name: 'Rituals', description: 'Religious practices and ceremonies' },
      { name: 'Ethics', description: 'Religious ethics and moral frameworks' },
      { name: 'Community Structures', description: 'Religious community organization' },
    ],
    places: [
      { name: 'Religious History Museum', type: 'museum' },
      { name: 'Historic Cathedral/Temple/Mosque', type: 'historic-site' },
      { name: 'Interfaith Center', type: 'institution' },
    ],
    partners: [
      { name: 'Interfaith Council', type: 'organization' },
      { name: 'Religious Scholar', type: 'professional' },
      { name: 'Clergy Member', type: 'professional' },
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
    prerequisites: ['code-of-laws', 'writing'],
    modules: [
      { name: 'Bureaucracy', description: 'Administrative systems and processes' },
      { name: 'Forms', description: 'Form design and processing' },
      { name: 'Incentives', description: 'Designing effective incentive structures' },
      { name: 'Audits', description: 'Audit procedures and accountability' },
      { name: 'Public Records', description: 'Record keeping and transparency' },
    ],
    places: [
      { name: 'City Hall', type: 'institution' },
      { name: 'Government Archives', type: 'institution' },
      { name: 'DMV/Post Office', type: 'facility' },
    ],
    partners: [
      { name: 'Civic Organization', type: 'organization' },
      { name: 'Government Employee', type: 'professional' },
      { name: 'City Council Member', type: 'professional' },
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
    prerequisites: ['horseback-riding', 'code-of-laws'],
    modules: [
      { name: 'Honor Codes', description: 'Personal codes of honor and integrity' },
      { name: 'Responsibility', description: 'Taking responsibility for actions' },
      { name: 'Restraint', description: 'Self-control and measured response' },
      { name: 'Service', description: 'Service to community and others' },
    ],
    places: [
      { name: 'Medieval Castle/Fortress', type: 'historic-site' },
      { name: 'Martial Arts Dojo', type: 'facility' },
      { name: 'Renaissance Faire', type: 'facility' },
    ],
    partners: [
      { name: 'Martial Arts Club', type: 'club' },
      { name: 'Scouts', type: 'organization' },
      { name: 'Service Organization', type: 'organization' },
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
    prerequisites: ['currency', 'education'],
    modules: [
      { name: 'Apprenticeship', description: 'Learning through mentorship' },
      { name: 'Standards', description: 'Quality standards and benchmarks' },
      { name: 'Peer Review', description: 'Evaluation by peers' },
      { name: 'Pricing', description: 'Fair pricing practices' },
      { name: 'Reputation', description: 'Building and maintaining reputation' },
    ],
    places: [
      { name: 'Makerspace', type: 'workspace' },
      { name: 'Guild Hall (Historic)', type: 'historic-site' },
      { name: 'Trade School', type: 'institution' },
    ],
    partners: [
      { name: 'Craft Guild', type: 'guild' },
      { name: 'Trade Association', type: 'organization' },
      { name: 'Master Craftsperson', type: 'professional' },
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
