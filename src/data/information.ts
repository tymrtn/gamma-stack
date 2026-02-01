import { Skill } from '../types';

export const informationSkills: Skill[] = [
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    era: 'information',
    prerequisites: ['computers', 'scientific-theory'],
    modules: [
      { name: 'Data', description: 'Data collection and preparation' },
      { name: 'Labels', description: 'Data labeling and annotation' },
      { name: 'Evaluation', description: 'Model evaluation metrics' },
      { name: 'Overfitting', description: 'Preventing and detecting overfitting' },
      { name: 'Embeddings', description: 'Vector embeddings and representations' },
    ],
    places: [
      { name: 'AI Research Lab', type: 'institution' },
      { name: 'Tech Company', type: 'facility' },
      { name: 'University ML Lab', type: 'institution' },
    ],
    partners: [
      { name: 'ML Engineer', type: 'professional' },
      { name: 'Data Scientist', type: 'professional' },
      { name: 'ML Mentor', type: 'mentor' },
    ],
    artifact: {
      description: 'Model that improves metric with failure report',
      requirements: [
        'Model improves target metric',
        'Failure report documenting edge cases',
      ],
    },
    unlocks: {
      buildings: [
        { id: 'ml-lab', name: 'ML Laboratory', description: 'Train and deploy machine learning models', type: 'structure' },
        { id: 'gpu-cluster', name: 'GPU Cluster', description: 'Compute infrastructure for AI training', type: 'structure' },
      ],
      units: [
        { id: 'ml-engineer', name: 'ML Engineer', description: 'Build machine learning systems', type: 'role' },
        { id: 'data-scientist', name: 'Data Scientist', description: 'Analyze data and build models', type: 'role' },
        { id: 'ai-agent', name: 'AI Agent', description: 'Autonomous intelligent system', type: 'capability' },
      ],
    },
  },
  {
    id: 'ai-governance',
    name: 'AI Governance',
    era: 'information',
    prerequisites: ['machine-learning', 'code-of-laws'],
    modules: [
      { name: 'Permissions', description: 'AI permission systems and access control' },
      { name: 'Audit Logs', description: 'Logging and monitoring AI systems' },
      { name: 'Red-teaming', description: 'Adversarial testing of AI systems' },
      { name: 'Safety Policies', description: 'AI safety policies and guidelines' },
    ],
    places: [
      { name: 'AI Safety Organization', type: 'institution' },
      { name: 'Policy Institute', type: 'institution' },
      { name: 'Tech Ethics Center', type: 'institution' },
    ],
    partners: [
      { name: 'Responsible AI Group', type: 'group' },
      { name: 'AI Policy Expert', type: 'professional' },
      { name: 'AI Safety Researcher', type: 'professional' },
    ],
    artifact: {
      description: 'Tool-using agent with eval harness and safety constitution',
      requirements: [
        'Tool-using agent built',
        'Eval harness created',
        'Safety constitution documented',
      ],
    },
    unlocks: {
      buildings: [
        { id: 'ai-safety-lab', name: 'AI Safety Lab', description: 'Test and validate AI systems', type: 'structure' },
        { id: 'ethics-board', name: 'Ethics Board', description: 'Oversee responsible AI development', type: 'structure' },
      ],
      units: [
        { id: 'ai-safety-researcher', name: 'AI Safety Researcher', description: 'Ensure AI systems are safe', type: 'role' },
        { id: 'ai-auditor', name: 'AI Auditor', description: 'Verify AI compliance and safety', type: 'certification' },
        { id: 'safe-ai-agent', name: 'Safe AI Agent', description: 'Governed autonomous system', type: 'capability' },
      ],
    },
  },
];
