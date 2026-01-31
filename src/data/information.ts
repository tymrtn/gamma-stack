import { Skill } from '../types';

export const informationSkills: Skill[] = [
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    era: 'information',
    modules: [
      { name: 'Data', description: 'Data collection and preparation' },
      { name: 'Labels', description: 'Data labeling and annotation' },
      { name: 'Evaluation', description: 'Model evaluation metrics' },
      { name: 'Overfitting', description: 'Preventing and detecting overfitting' },
      { name: 'Embeddings', description: 'Vector embeddings and representations' },
    ],
    partners: [
      { name: 'ML Mentor', type: 'mentor' },
    ],
    artifact: {
      description: 'Model that improves metric with failure report',
      requirements: [
        'Model improves target metric',
        'Failure report documenting edge cases',
      ],
    },
  },
  {
    id: 'ai-governance',
    name: 'AI Governance',
    era: 'information',
    modules: [
      { name: 'Permissions', description: 'AI permission systems and access control' },
      { name: 'Audit Logs', description: 'Logging and monitoring AI systems' },
      { name: 'Red-teaming', description: 'Adversarial testing of AI systems' },
      { name: 'Safety Policies', description: 'AI safety policies and guidelines' },
    ],
    partners: [
      { name: 'Responsible AI Group', type: 'group' },
    ],
    artifact: {
      description: 'Tool-using agent with eval harness and safety constitution',
      requirements: [
        'Tool-using agent built',
        'Eval harness created',
        'Safety constitution documented',
      ],
    },
  },
];
