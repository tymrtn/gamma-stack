import { Skill } from '../types';

export const ancientSkills: Skill[] = [
  {
    id: 'pottery',
    name: 'Pottery',
    era: 'ancient',
    modules: [
      { name: 'Fire Basics', description: 'Understanding fire creation and management' },
      { name: 'Kiln Basics', description: 'Kiln construction and temperature control' },
      { name: 'Clay Sourcing/Prep', description: 'Finding and preparing clay materials' },
      { name: 'Forming', description: 'Hand-building and wheel techniques' },
      { name: 'Drying/Cracking', description: 'Proper drying to prevent cracking' },
      { name: 'Firing', description: 'Kiln firing processes and schedules' },
      { name: 'Sealing/Glaze Optional', description: 'Glazing and sealing techniques' },
      { name: 'Liquid Containment Physics', description: 'Understanding waterproofing and containment' },
    ],
    partners: [
      { name: 'Pottery Studio', type: 'workshop' },
      { name: 'Ceramics Guild', type: 'guild' },
      { name: 'Archaeology Museum', type: 'museum' },
    ],
    artifact: {
      description: 'Fired vessel that holds water for 24 hours with iteration log',
      requirements: [
        'Fired vessel holds water 24h',
        '3-iteration log documenting improvements',
      ],
    },
  },
  {
    id: 'animal-husbandry',
    name: 'Animal Husbandry',
    era: 'ancient',
    modules: [
      { name: 'Feeding/Water', description: 'Nutrition and hydration requirements' },
      { name: 'Shelter', description: 'Housing and environmental needs' },
      { name: 'Health Signs', description: 'Recognizing illness and wellness indicators' },
      { name: 'Ethics', description: 'Animal welfare and ethical treatment' },
      { name: 'Breeding Basics', description: 'Fundamentals of animal breeding' },
    ],
    partners: [
      { name: 'Farm', type: 'farm' },
      { name: 'Stable', type: 'stable' },
      { name: 'Vet Visit', type: 'veterinary' },
    ],
    artifact: {
      description: '30-day care log with cost plan',
      requirements: [
        '30-day care log',
        'Cost plan for ongoing care',
      ],
    },
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    era: 'ancient',
    modules: [
      { name: 'Soil/Compost', description: 'Soil composition and composting' },
      { name: 'Planting', description: 'Seeding and transplanting techniques' },
      { name: 'Watering', description: 'Irrigation and water management' },
      { name: 'Pests', description: 'Pest identification and management' },
      { name: 'Harvest', description: 'Harvesting techniques and timing' },
      { name: 'Storage', description: 'Proper storage and preservation' },
    ],
    partners: [
      { name: 'Community Garden', type: 'garden' },
      { name: 'Farm', type: 'farm' },
      { name: 'Botanical Garden', type: 'garden' },
    ],
    artifact: {
      description: 'Edible harvest with yield log',
      requirements: [
        'Edible harvest produced',
        'Yield log documenting growth',
      ],
    },
  },
  {
    id: 'mining',
    name: 'Mining',
    era: 'ancient',
    modules: [
      { name: 'Ore/Rock ID', description: 'Identifying minerals and ore types' },
      { name: 'Basic Excavation Safety', description: 'Safe excavation practices' },
      { name: 'Crushing/Sorting', description: 'Processing and sorting materials' },
      { name: 'Yield Estimation', description: 'Estimating material yields' },
    ],
    partners: [
      { name: 'Geology Museum', type: 'museum' },
      { name: 'Mineral Club', type: 'club' },
      { name: 'Supervised Quarry Visit', type: 'field-trip' },
    ],
    artifact: {
      description: 'Labeled collection with rock to metal map',
      requirements: [
        'Labeled collection of samples',
        '"From rock to metal" process map',
      ],
    },
  },
  {
    id: 'masonry',
    name: 'Masonry',
    era: 'ancient',
    modules: [
      { name: 'Stone/Brick', description: 'Material selection and properties' },
      { name: 'Mortar Basics', description: 'Mixing and applying mortar' },
      { name: 'Leveling', description: 'Ensuring level and plumb construction' },
      { name: 'Load Paths', description: 'Understanding structural load distribution' },
      { name: 'Drainage', description: 'Water management and drainage' },
    ],
    partners: [
      { name: 'Builder/Stonemason', type: 'craftsperson' },
      { name: 'Historic Site', type: 'historic-site' },
    ],
    artifact: {
      description: 'Small structure that survives rain and load test',
      requirements: [
        'Small structure built',
        'Survives rain test',
        'Passes load test',
      ],
    },
  },
  {
    id: 'archery',
    name: 'Archery',
    era: 'ancient',
    modules: [
      { name: 'Safety', description: 'Range safety and equipment handling' },
      { name: 'Stance', description: 'Proper shooting stance' },
      { name: 'Draw', description: 'Draw technique and anchor points' },
      { name: 'Aiming', description: 'Aiming methods and sight alignment' },
      { name: 'Maintenance', description: 'Bow and arrow maintenance' },
    ],
    partners: [
      { name: 'Archery Club', type: 'club' },
    ],
    artifact: {
      description: 'Hit targets at set distances with safety certification',
      requirements: [
        'Hit targets at set distances',
        'Safety certification earned',
      ],
    },
  },
  {
    id: 'the-wheel',
    name: 'The Wheel',
    era: 'ancient',
    modules: [
      { name: 'Axle/Bearing Friction', description: 'Understanding friction and bearings' },
      { name: 'Alignment', description: 'Proper wheel alignment' },
      { name: 'Load Balance', description: 'Balancing loads for transport' },
      { name: 'Materials', description: 'Material selection for durability' },
    ],
    partners: [
      { name: 'Bike Shop', type: 'shop' },
      { name: 'Makerspace', type: 'makerspace' },
    ],
    artifact: {
      description: 'Cart that moves load reliably',
      requirements: [
        'Cart moves load reliably',
      ],
    },
  },
  {
    id: 'sailing',
    name: 'Sailing',
    era: 'ancient',
    modules: [
      { name: 'Knots', description: 'Essential sailing knots' },
      { name: 'Wind Forces', description: 'Understanding wind and sail interaction' },
      { name: 'Sail Trim', description: 'Adjusting sails for conditions' },
      { name: 'Safety', description: 'Water safety and emergency procedures' },
      { name: 'Basic Navigation', description: 'Fundamental navigation skills' },
    ],
    partners: [
      { name: 'Sailing Club', type: 'club' },
      { name: 'Sea Scouts', type: 'scouts' },
    ],
    artifact: {
      description: 'Logbook with basic maneuvers demonstrated',
      requirements: [
        'Logbook maintained',
        'Basic maneuvers demonstrated',
      ],
    },
  },
  {
    id: 'writing',
    name: 'Writing',
    era: 'ancient',
    modules: [
      { name: 'Symbols', description: 'Understanding writing systems and symbols' },
      { name: 'Legibility', description: 'Clear and readable writing' },
      { name: 'Copying', description: 'Accurate transcription skills' },
      { name: 'Recordkeeping', description: 'Systematic record maintenance' },
      { name: 'Archiving', description: 'Long-term document preservation' },
    ],
    partners: [
      { name: 'Library', type: 'library' },
      { name: 'Museum', type: 'museum' },
    ],
    artifact: {
      description: 'Readable ledger with 30-day records',
      requirements: [
        'Readable ledger created',
        '30-day records maintained',
      ],
    },
  },
  {
    id: 'calendar',
    name: 'Calendar',
    era: 'ancient',
    modules: [
      { name: 'Sun/Shadow', description: 'Solar position and shadow tracking' },
      { name: 'Seasons', description: 'Understanding seasonal cycles' },
      { name: 'Lunar Phases', description: 'Moon phase observation and prediction' },
      { name: 'Timekeeping Build', description: 'Constructing timekeeping devices' },
    ],
    partners: [
      { name: 'Observatory', type: 'observatory' },
      { name: 'Science Museum', type: 'museum' },
    ],
    artifact: {
      description: 'Working calendar with observation log',
      requirements: [
        'Working calendar created',
        'Observation log maintained',
      ],
    },
  },
  {
    id: 'bronze-working',
    name: 'Bronze Working',
    era: 'ancient',
    modules: [
      { name: 'Furnace Safety', description: 'Safe furnace operation' },
      { name: 'Smelting/Casting Basics', description: 'Melting and casting metal' },
      { name: 'Molds', description: 'Mold creation and preparation' },
      { name: 'Alloy Ratios', description: 'Copper and tin proportions' },
      { name: 'Hardness Testing', description: 'Testing material properties' },
    ],
    partners: [
      { name: 'Metalworking Studio/Foundry Class', type: 'workshop' },
    ],
    artifact: {
      description: 'Cast bronze object with test notes',
      requirements: [
        'Cast bronze object created',
        'Test notes documenting hardness and quality',
      ],
    },
  },
  {
    id: 'iron-working',
    name: 'Iron Working',
    era: 'ancient',
    modules: [
      { name: 'Bloomery/Forging Overview', description: 'Iron smelting and forging processes' },
      { name: 'Heat/Tempering', description: 'Heat treatment techniques' },
      { name: 'Tools', description: 'Blacksmithing tools and their use' },
      { name: 'Oxidation Control', description: 'Preventing and managing rust' },
    ],
    partners: [
      { name: 'Blacksmith', type: 'craftsperson' },
      { name: 'Forge Workshop', type: 'workshop' },
    ],
    artifact: {
      description: 'Forged iron tool with hardness comparison',
      requirements: [
        'Forged iron tool created',
        'Hardness comparison documented',
      ],
    },
  },
];
