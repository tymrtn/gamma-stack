import { Skill } from '../types';

export const ancientSkills: Skill[] = [
  {
    id: 'pottery',
    name: 'Pottery',
    era: 'ancient',
    prerequisites: [],
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
    places: [
      { name: 'Pottery Studio', type: 'studio' },
      { name: 'Archaeology Museum', type: 'museum' },
    ],
    partners: [
      { name: 'Ceramics Guild', type: 'guild' },
      { name: 'Potter/Ceramicist', type: 'professional' },
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
    prerequisites: [],
    modules: [
      { name: 'Feeding/Water', description: 'Nutrition and hydration requirements' },
      { name: 'Shelter', description: 'Housing and environmental needs' },
      { name: 'Health Signs', description: 'Recognizing illness and wellness indicators' },
      { name: 'Ethics', description: 'Animal welfare and ethical treatment' },
      { name: 'Breeding Basics', description: 'Fundamentals of animal breeding' },
    ],
    places: [
      { name: 'Working Farm', type: 'facility' },
      { name: 'Stable/Ranch', type: 'facility' },
      { name: 'Veterinary Clinic', type: 'facility' },
    ],
    partners: [
      { name: 'Farmer', type: 'professional' },
      { name: 'Veterinarian', type: 'professional' },
      { name: '4-H Club', type: 'club' },
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
    prerequisites: [],
    modules: [
      { name: 'Soil/Compost', description: 'Soil composition and composting' },
      { name: 'Planting', description: 'Seeding and transplanting techniques' },
      { name: 'Watering', description: 'Irrigation and water management' },
      { name: 'Pests', description: 'Pest identification and management' },
      { name: 'Harvest', description: 'Harvesting techniques and timing' },
      { name: 'Storage', description: 'Proper storage and preservation' },
    ],
    places: [
      { name: 'Community Garden', type: 'outdoor' },
      { name: 'Working Farm', type: 'facility' },
      { name: 'Botanical Garden', type: 'institution' },
    ],
    partners: [
      { name: 'Master Gardener', type: 'mentor' },
      { name: 'Farmer', type: 'professional' },
      { name: 'Agricultural Extension', type: 'organization' },
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
    prerequisites: [],
    modules: [
      { name: 'Ore/Rock ID', description: 'Identifying minerals and ore types' },
      { name: 'Basic Excavation Safety', description: 'Safe excavation practices' },
      { name: 'Crushing/Sorting', description: 'Processing and sorting materials' },
      { name: 'Yield Estimation', description: 'Estimating material yields' },
    ],
    places: [
      { name: 'Geology Museum', type: 'museum' },
      { name: 'Supervised Quarry', type: 'facility' },
      { name: 'Mine Tour Site', type: 'historic-site' },
    ],
    partners: [
      { name: 'Mineral Club', type: 'club' },
      { name: 'Geologist', type: 'professional' },
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
    prerequisites: ['mining'],
    modules: [
      { name: 'Stone/Brick', description: 'Material selection and properties' },
      { name: 'Mortar Basics', description: 'Mixing and applying mortar' },
      { name: 'Leveling', description: 'Ensuring level and plumb construction' },
      { name: 'Load Paths', description: 'Understanding structural load distribution' },
      { name: 'Drainage', description: 'Water management and drainage' },
    ],
    places: [
      { name: 'Historic Stone Structure', type: 'historic-site' },
      { name: 'Masonry Workshop', type: 'workspace' },
    ],
    partners: [
      { name: 'Stonemason', type: 'professional' },
      { name: 'Builder', type: 'professional' },
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
    prerequisites: [],
    modules: [
      { name: 'Safety', description: 'Range safety and equipment handling' },
      { name: 'Stance', description: 'Proper shooting stance' },
      { name: 'Draw', description: 'Draw technique and anchor points' },
      { name: 'Aiming', description: 'Aiming methods and sight alignment' },
      { name: 'Maintenance', description: 'Bow and arrow maintenance' },
    ],
    places: [
      { name: 'Archery Range', type: 'facility' },
    ],
    partners: [
      { name: 'Archery Club', type: 'club' },
      { name: 'Archery Instructor', type: 'professional' },
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
    prerequisites: [],
    modules: [
      { name: 'Axle/Bearing Friction', description: 'Understanding friction and bearings' },
      { name: 'Alignment', description: 'Proper wheel alignment' },
      { name: 'Load Balance', description: 'Balancing loads for transport' },
      { name: 'Materials', description: 'Material selection for durability' },
    ],
    places: [
      { name: 'Bike Shop', type: 'workspace' },
      { name: 'Makerspace', type: 'workspace' },
      { name: 'Transportation Museum', type: 'museum' },
    ],
    partners: [
      { name: 'Bike Mechanic', type: 'professional' },
      { name: 'Maker Mentor', type: 'mentor' },
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
    prerequisites: [],
    modules: [
      { name: 'Knots', description: 'Essential sailing knots' },
      { name: 'Wind Forces', description: 'Understanding wind and sail interaction' },
      { name: 'Sail Trim', description: 'Adjusting sails for conditions' },
      { name: 'Safety', description: 'Water safety and emergency procedures' },
      { name: 'Basic Navigation', description: 'Fundamental navigation skills' },
    ],
    places: [
      { name: 'Marina/Harbor', type: 'facility' },
      { name: 'Sailing Center', type: 'facility' },
      { name: 'Maritime Museum', type: 'museum' },
    ],
    partners: [
      { name: 'Sailing Club', type: 'club' },
      { name: 'Sea Scouts', type: 'organization' },
      { name: 'Sailing Instructor', type: 'professional' },
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
    prerequisites: [],
    modules: [
      { name: 'Symbols', description: 'Understanding writing systems and symbols' },
      { name: 'Legibility', description: 'Clear and readable writing' },
      { name: 'Copying', description: 'Accurate transcription skills' },
      { name: 'Recordkeeping', description: 'Systematic record maintenance' },
      { name: 'Archiving', description: 'Long-term document preservation' },
    ],
    places: [
      { name: 'Library', type: 'institution' },
      { name: 'Writing/Script Museum', type: 'museum' },
      { name: 'Historical Archive', type: 'institution' },
    ],
    partners: [
      { name: 'Librarian', type: 'professional' },
      { name: 'Calligrapher', type: 'professional' },
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
    prerequisites: [],
    modules: [
      { name: 'Sun/Shadow', description: 'Solar position and shadow tracking' },
      { name: 'Seasons', description: 'Understanding seasonal cycles' },
      { name: 'Lunar Phases', description: 'Moon phase observation and prediction' },
      { name: 'Timekeeping Build', description: 'Constructing timekeeping devices' },
    ],
    places: [
      { name: 'Observatory', type: 'facility' },
      { name: 'Science Museum', type: 'museum' },
      { name: 'Stonehenge/Sundial Site', type: 'historic-site' },
    ],
    partners: [
      { name: 'Astronomy Club', type: 'club' },
      { name: 'Astronomer', type: 'professional' },
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
    prerequisites: ['mining', 'pottery'],
    modules: [
      { name: 'Furnace Safety', description: 'Safe furnace operation' },
      { name: 'Smelting/Casting Basics', description: 'Melting and casting metal' },
      { name: 'Molds', description: 'Mold creation and preparation' },
      { name: 'Alloy Ratios', description: 'Copper and tin proportions' },
      { name: 'Hardness Testing', description: 'Testing material properties' },
    ],
    places: [
      { name: 'Foundry/Metalworking Studio', type: 'studio' },
      { name: 'Bronze Age Museum', type: 'museum' },
    ],
    partners: [
      { name: 'Metalsmith', type: 'professional' },
      { name: 'Foundry Instructor', type: 'professional' },
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
    prerequisites: ['bronze-working'],
    modules: [
      { name: 'Bloomery/Forging Overview', description: 'Iron smelting and forging processes' },
      { name: 'Heat/Tempering', description: 'Heat treatment techniques' },
      { name: 'Tools', description: 'Blacksmithing tools and their use' },
      { name: 'Oxidation Control', description: 'Preventing and managing rust' },
    ],
    places: [
      { name: 'Blacksmith Shop', type: 'workspace' },
      { name: 'Living History Forge', type: 'historic-site' },
    ],
    partners: [
      { name: 'Blacksmith', type: 'professional' },
      { name: 'Metalworking Guild', type: 'guild' },
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
