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
    unlocks: {
      buildings: [
        { id: 'granary', name: 'Granary', description: 'Store food and grain in ceramic vessels', type: 'structure' },
        { id: 'kiln', name: 'Kiln', description: 'Fire ceramics and prepare materials', type: 'structure' },
      ],
      units: [
        { id: 'potter', name: 'Potter', description: 'Create ceramic goods for trade and use', type: 'role' },
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
    unlocks: {
      buildings: [
        { id: 'pasture', name: 'Pasture', description: 'Raise livestock for food and materials', type: 'structure' },
        { id: 'stable', name: 'Stable', description: 'House and care for working animals', type: 'structure' },
      ],
      units: [
        { id: 'shepherd', name: 'Shepherd', description: 'Tend and manage livestock herds', type: 'role' },
        { id: 'scout', name: 'Scout', description: 'Explore terrain with animal companions', type: 'role' },
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
    unlocks: {
      buildings: [
        { id: 'farm', name: 'Farm', description: 'Produce food from cultivated crops', type: 'structure' },
        { id: 'irrigation', name: 'Irrigation System', description: 'Deliver water to crops efficiently', type: 'system' },
      ],
      units: [
        { id: 'farmer', name: 'Farmer', description: 'Cultivate land and produce food', type: 'role' },
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
    unlocks: {
      buildings: [
        { id: 'mine', name: 'Mine', description: 'Extract ore and minerals from the earth', type: 'structure' },
        { id: 'quarry', name: 'Quarry', description: 'Extract stone for construction', type: 'structure' },
      ],
      units: [
        { id: 'miner', name: 'Miner', description: 'Extract valuable materials from the ground', type: 'role' },
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
    unlocks: {
      buildings: [
        { id: 'walls', name: 'Walls', description: 'Defensive stone walls for protection', type: 'structure' },
        { id: 'monument', name: 'Monument', description: 'Permanent stone structures for commemoration', type: 'structure' },
        { id: 'pyramid', name: 'Pyramid', description: 'Monumental stone structures (Wonder prerequisite)', type: 'structure' },
      ],
      units: [
        { id: 'mason', name: 'Mason', description: 'Build lasting stone structures', type: 'role' },
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
    unlocks: {
      buildings: [
        { id: 'archery-range', name: 'Archery Range', description: 'Train and practice ranged combat', type: 'structure' },
      ],
      units: [
        { id: 'archer', name: 'Archer', description: 'Skilled ranged combatant', type: 'role' },
        { id: 'hunter', name: 'Hunter', description: 'Hunt game with bow and arrow', type: 'role' },
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
    unlocks: {
      buildings: [
        { id: 'road', name: 'Road', description: 'Paved routes for wheeled transport', type: 'structure' },
        { id: 'water-wheel', name: 'Water Wheel', description: 'Harness water power for work', type: 'structure' },
      ],
      units: [
        { id: 'chariot', name: 'Chariot', description: 'Fast wheeled transport and combat vehicle', type: 'capability' },
        { id: 'cart-driver', name: 'Cart Driver', description: 'Transport goods by wheeled vehicle', type: 'role' },
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
    unlocks: {
      buildings: [
        { id: 'harbor', name: 'Harbor', description: 'Port facility for ships', type: 'structure' },
        { id: 'lighthouse', name: 'Lighthouse', description: 'Navigation aid for coastal waters', type: 'structure' },
      ],
      units: [
        { id: 'galley', name: 'Galley', description: 'Basic sailing vessel for coastal travel', type: 'capability' },
        { id: 'sailor', name: 'Sailor', description: 'Crew member skilled in ship operation', type: 'role' },
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
    unlocks: {
      buildings: [
        { id: 'library', name: 'Library', description: 'Store and preserve written knowledge', type: 'structure' },
        { id: 'archive', name: 'Archive', description: 'Maintain historical records', type: 'structure' },
      ],
      units: [
        { id: 'scribe', name: 'Scribe', description: 'Record and copy important documents', type: 'role' },
        { id: 'messenger', name: 'Messenger', description: 'Carry written communications', type: 'role' },
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
    unlocks: {
      buildings: [
        { id: 'sundial', name: 'Sundial', description: 'Track time using solar shadows', type: 'structure' },
        { id: 'observatory-basic', name: 'Observatory', description: 'Observe celestial events', type: 'structure' },
      ],
      units: [
        { id: 'astronomer-role', name: 'Astronomer', description: 'Study and predict celestial events', type: 'role' },
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
    unlocks: {
      buildings: [
        { id: 'foundry', name: 'Foundry', description: 'Smelt and cast metal objects', type: 'structure' },
        { id: 'armory', name: 'Armory', description: 'Produce bronze weapons and armor', type: 'structure' },
      ],
      units: [
        { id: 'spearman', name: 'Spearman', description: 'Warrior equipped with bronze weapons', type: 'role' },
        { id: 'metalsmith', name: 'Metalsmith', description: 'Craft bronze tools and objects', type: 'role' },
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
    unlocks: {
      buildings: [
        { id: 'forge', name: 'Forge', description: 'Work iron into tools and weapons', type: 'structure' },
        { id: 'blacksmith-shop', name: 'Blacksmith Shop', description: 'Produce iron goods for the community', type: 'structure' },
      ],
      units: [
        { id: 'swordsman', name: 'Swordsman', description: 'Warrior with iron sword and armor', type: 'role' },
        { id: 'blacksmith-role', name: 'Blacksmith', description: 'Master of iron forging', type: 'role' },
      ],
    },
  },
];
