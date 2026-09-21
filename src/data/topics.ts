import { TopicMetric } from './types';

export const MOCK_TOPICS: TopicMetric[] = [
  // --- Mathematics Topics ---
  {
    id: 'topic-calculus',
    name: 'Calculus & Analysis',
    subject: 'Mathematics',
    priority: 'HIGH',
    chapter: 'Calculus',
    historicalQuestionsCount: 42,
    recentQuestionsCount: 14,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 24,
    subtopicPriorities: [
      { name: 'Application of Derivatives (Max/Min)', priority: 'HIGH', questionCount: 16 },
      { name: 'Definite Integration & Properties', priority: 'HIGH', questionCount: 12 },
      { name: 'Differential Equations (Linear & Homogeneous)', priority: 'HIGH', questionCount: 8 },
      { name: 'Limits & Continuity', priority: 'MEDIUM', questionCount: 4 },
      { name: 'Area Bounded by Curves', priority: 'MEDIUM', questionCount: 2 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 4 },
      { year: 2019, questionCount: 5 },
      { year: 2020, questionCount: 5 },
      { year: 2021, questionCount: 5 },
      { year: 2022, questionCount: 6 },
      { year: 2023, questionCount: 6 },
      { year: 2024, questionCount: 7 },
      { year: 2025, questionCount: 8 }
    ]
  },
  {
    id: 'topic-vectors-3d',
    name: 'Vectors & 3D Geometry',
    subject: 'Mathematics',
    priority: 'HIGH',
    chapter: 'Vectors & 3D Geometry',
    historicalQuestionsCount: 36,
    recentQuestionsCount: 11,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 18,
    subtopicPriorities: [
      { name: 'Shortest Distance Between Skew Lines', priority: 'HIGH', questionCount: 14 },
      { name: 'Coplanarity of Vectors & Scalar Triple Product', priority: 'MEDIUM', questionCount: 12 },
      { name: 'Angle Between Planes & Lines', priority: 'MEDIUM', questionCount: 10 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 3 },
      { year: 2019, questionCount: 4 },
      { year: 2020, questionCount: 4 },
      { year: 2021, questionCount: 5 },
      { year: 2022, questionCount: 5 },
      { year: 2023, questionCount: 5 },
      { year: 2024, questionCount: 6 },
      { year: 2025, questionCount: 6 }
    ]
  },
  {
    id: 'topic-probability',
    name: 'Probability & Distributions',
    subject: 'Mathematics',
    priority: 'HIGH',
    chapter: 'Algebra & Statistics',
    historicalQuestionsCount: 28,
    recentQuestionsCount: 8,
    lastActiveYear: 2025,
    trend: 'STABLE',
    trendPercentage: 5,
    subtopicPriorities: [
      { name: 'Bayes\' Theorem & Total Probability', priority: 'HIGH', questionCount: 12 },
      { name: 'Binomial Distribution & Expectation', priority: 'MEDIUM', questionCount: 10 },
      { name: 'Conditional Probability Basics', priority: 'LOW', questionCount: 6 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 3 },
      { year: 2019, questionCount: 3 },
      { year: 2020, questionCount: 4 },
      { year: 2021, questionCount: 3 },
      { year: 2022, questionCount: 4 },
      { year: 2023, questionCount: 4 },
      { year: 2024, questionCount: 4 },
      { year: 2025, questionCount: 4 }
    ]
  },
  {
    id: 'topic-matrices',
    name: 'Matrices & Determinants',
    subject: 'Mathematics',
    priority: 'MEDIUM',
    chapter: 'Algebra',
    historicalQuestionsCount: 24,
    recentQuestionsCount: 6,
    lastActiveYear: 2024,
    trend: 'STABLE',
    trendPercentage: 0,
    subtopicPriorities: [
      { name: 'System of Linear Equations (Cramer\'s / Matrix Method)', priority: 'HIGH', questionCount: 10 },
      { name: 'Adjoint & Inverse Properties of 3x3 Matrices', priority: 'MEDIUM', questionCount: 8 },
      { name: 'Skew-Symmetric & Determinant Expansions', priority: 'LOW', questionCount: 6 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 4 },
      { year: 2019, questionCount: 4 },
      { year: 2020, questionCount: 3 },
      { year: 2021, questionCount: 3 },
      { year: 2022, questionCount: 3 },
      { year: 2023, questionCount: 3 },
      { year: 2024, questionCount: 3 },
      { year: 2025, questionCount: 2 }
    ]
  },
  {
    id: 'topic-trigonometry',
    name: 'Inverse Trigonometric Functions',
    subject: 'Mathematics',
    priority: 'MEDIUM',
    chapter: 'Trigonometry',
    historicalQuestionsCount: 20,
    recentQuestionsCount: 5,
    lastActiveYear: 2024,
    trend: 'STABLE',
    trendPercentage: 2,
    subtopicPriorities: [
      { name: 'Principal Value Branches & Ranges', priority: 'HIGH', questionCount: 8 },
      { name: 'Sum & Difference Identities of Inverse Functions', priority: 'MEDIUM', questionCount: 8 },
      { name: 'Simplification of Composite Trigonometric Expressions', priority: 'LOW', questionCount: 4 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 2 },
      { year: 2019, questionCount: 3 },
      { year: 2020, questionCount: 2 },
      { year: 2021, questionCount: 3 },
      { year: 2022, questionCount: 2 },
      { year: 2023, questionCount: 3 },
      { year: 2024, questionCount: 3 },
      { year: 2025, questionCount: 2 }
    ]
  },
  {
    id: 'topic-algebra-relations',
    name: 'Relations, Functions & LPP',
    subject: 'Mathematics',
    priority: 'LOW',
    chapter: 'Relations & Functions',
    historicalQuestionsCount: 18,
    recentQuestionsCount: 3,
    lastActiveYear: 2023,
    trend: 'DECREASING',
    trendPercentage: -18,
    subtopicPriorities: [
      { name: 'Equivalence Relations & Partitions', priority: 'LOW', questionCount: 7 },
      { name: 'Linear Programming Feasible Regions', priority: 'LOW', questionCount: 6 },
      { name: 'Composition & Invertible Functions', priority: 'LOW', questionCount: 5 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 3 },
      { year: 2019, questionCount: 3 },
      { year: 2020, questionCount: 3 },
      { year: 2021, questionCount: 2 },
      { year: 2022, questionCount: 2 },
      { year: 2023, questionCount: 2 },
      { year: 2024, questionCount: 1 },
      { year: 2025, questionCount: 1 }
    ]
  },

  // --- Physics Topics ---
  {
    id: 'topic-electrostatics',
    name: 'Electrostatics & Capacitance',
    subject: 'Physics',
    priority: 'HIGH',
    chapter: 'Electromagnetism',
    historicalQuestionsCount: 38,
    recentQuestionsCount: 12,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 18,
    subtopicPriorities: [
      { name: 'Capacitance & Dielectric Combinations', priority: 'HIGH', questionCount: 14 },
      { name: 'Electric Potential & Equipotential Surfaces', priority: 'HIGH', questionCount: 11 },
      { name: 'Gauss\'s Law Applications', priority: 'MEDIUM', questionCount: 8 },
      { name: 'Coulomb\'s Law in Vector Form', priority: 'LOW', questionCount: 5 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 4 },
      { year: 2019, questionCount: 3 },
      { year: 2020, questionCount: 4 },
      { year: 2021, questionCount: 5 },
      { year: 2022, questionCount: 4 },
      { year: 2023, questionCount: 5 },
      { year: 2024, questionCount: 6 },
      { year: 2025, questionCount: 7 }
    ]
  },
  {
    id: 'topic-current-electricity',
    name: 'Current Electricity & Magnetism',
    subject: 'Physics',
    priority: 'HIGH',
    chapter: 'Electrodynamics',
    historicalQuestionsCount: 36,
    recentQuestionsCount: 11,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 15,
    subtopicPriorities: [
      { name: 'Potentiometer & Meter Bridge Sensitivity', priority: 'HIGH', questionCount: 14 },
      { name: 'Kirchhoff\'s Rules & Bridge Circuits', priority: 'HIGH', questionCount: 12 },
      { name: 'Biot-Savart Law & Axial Field of Loop', priority: 'MEDIUM', questionCount: 10 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 4 },
      { year: 2019, questionCount: 4 },
      { year: 2020, questionCount: 4 },
      { year: 2021, questionCount: 4 },
      { year: 2022, questionCount: 5 },
      { year: 2023, questionCount: 5 },
      { year: 2024, questionCount: 5 },
      { year: 2025, questionCount: 5 }
    ]
  },
  {
    id: 'topic-modern-physics',
    name: 'Modern Physics & Dual Nature',
    subject: 'Physics',
    priority: 'HIGH',
    chapter: 'Modern Physics',
    historicalQuestionsCount: 34,
    recentQuestionsCount: 12,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 22,
    subtopicPriorities: [
      { name: 'Photoelectric Effect & Einstein\'s Equation', priority: 'HIGH', questionCount: 15 },
      { name: 'Zener Diode & Semiconductor Rectifiers', priority: 'MEDIUM', questionCount: 11 },
      { name: 'De Broglie Wavelength & Bohr Atom Model', priority: 'MEDIUM', questionCount: 8 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 3 },
      { year: 2019, questionCount: 4 },
      { year: 2020, questionCount: 4 },
      { year: 2021, questionCount: 4 },
      { year: 2022, questionCount: 5 },
      { year: 2023, questionCount: 5 },
      { year: 2024, questionCount: 6 },
      { year: 2025, questionCount: 6 }
    ]
  },
  {
    id: 'topic-wave-optics',
    name: 'Wave Optics & Interference',
    subject: 'Physics',
    priority: 'HIGH',
    chapter: 'Optics',
    historicalQuestionsCount: 26,
    recentQuestionsCount: 8,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 12,
    subtopicPriorities: [
      { name: 'Young\'s Double Slit Fringe Width & Shift', priority: 'HIGH', questionCount: 14 },
      { name: 'Diffraction at a Single Slit', priority: 'MEDIUM', questionCount: 8 },
      { name: 'Resolving Power of Telescope & Microscope', priority: 'LOW', questionCount: 4 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 3 },
      { year: 2019, questionCount: 3 },
      { year: 2020, questionCount: 3 },
      { year: 2021, questionCount: 3 },
      { year: 2022, questionCount: 3 },
      { year: 2023, questionCount: 4 },
      { year: 2024, questionCount: 4 },
      { year: 2025, questionCount: 5 }
    ]
  },
  {
    id: 'topic-thermodynamics-phy',
    name: 'Thermal Physics & Thermodynamics',
    subject: 'Physics',
    priority: 'HIGH',
    chapter: 'Thermal Physics',
    historicalQuestionsCount: 28,
    recentQuestionsCount: 8,
    lastActiveYear: 2024,
    trend: 'STABLE',
    trendPercentage: 4,
    subtopicPriorities: [
      { name: 'Carnot Engine Efficiency & Refrigerator COP', priority: 'HIGH', questionCount: 12 },
      { name: 'First Law of Thermodynamics & Isothermal/Adiabatic', priority: 'MEDIUM', questionCount: 10 },
      { name: 'Doppler Effect in Sound Waves', priority: 'MEDIUM', questionCount: 6 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 3 },
      { year: 2019, questionCount: 3 },
      { year: 2020, questionCount: 4 },
      { year: 2021, questionCount: 3 },
      { year: 2022, questionCount: 4 },
      { year: 2023, questionCount: 4 },
      { year: 2024, questionCount: 4 },
      { year: 2025, questionCount: 3 }
    ]
  },
  {
    id: 'topic-mechanics',
    name: 'Rotational Motion & Gravitation',
    subject: 'Physics',
    priority: 'MEDIUM',
    chapter: 'Mechanics',
    historicalQuestionsCount: 25,
    recentQuestionsCount: 6,
    lastActiveYear: 2024,
    trend: 'STABLE',
    trendPercentage: 0,
    subtopicPriorities: [
      { name: 'Moment of Inertia Theorems & Cutout Discs', priority: 'MEDIUM', questionCount: 10 },
      { name: 'Escape Velocity & Satellite Orbital Speed', priority: 'MEDIUM', questionCount: 8 },
      { name: 'Rolling Motion Without Slipping on Incline', priority: 'LOW', questionCount: 7 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 3 },
      { year: 2019, questionCount: 3 },
      { year: 2020, questionCount: 3 },
      { year: 2021, questionCount: 3 },
      { year: 2022, questionCount: 4 },
      { year: 2023, questionCount: 3 },
      { year: 2024, questionCount: 4 },
      { year: 2025, questionCount: 2 }
    ]
  },

  // --- Chemistry Topics ---
  {
    id: 'topic-organic-chemistry',
    name: 'Organic Reaction Mechanisms',
    subject: 'Chemistry',
    priority: 'HIGH',
    chapter: 'Organic Chemistry',
    historicalQuestionsCount: 45,
    recentQuestionsCount: 15,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 20,
    subtopicPriorities: [
      { name: 'Aldehydes & Ketones (Cannizzaro & Aldol)', priority: 'HIGH', questionCount: 16 },
      { name: 'Amines & Diazonium Salts (Sandmeyer)', priority: 'HIGH', questionCount: 12 },
      { name: 'Haloalkanes Nucleophilic Substitution (SN1/SN2)', priority: 'MEDIUM', questionCount: 10 },
      { name: 'Biomolecules (D-Glucose Reactions)', priority: 'MEDIUM', questionCount: 7 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 5 },
      { year: 2019, questionCount: 5 },
      { year: 2020, questionCount: 5 },
      { year: 2021, questionCount: 6 },
      { year: 2022, questionCount: 6 },
      { year: 2023, questionCount: 6 },
      { year: 2024, questionCount: 7 },
      { year: 2025, questionCount: 8 }
    ]
  },
  {
    id: 'topic-coordination-compounds',
    name: 'Coordination Compounds',
    subject: 'Chemistry',
    priority: 'HIGH',
    chapter: 'Inorganic Chemistry',
    historicalQuestionsCount: 32,
    recentQuestionsCount: 11,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 22,
    subtopicPriorities: [
      { name: 'Crystal Field Theory & Magnetic Moments', priority: 'HIGH', questionCount: 15 },
      { name: 'Isomerism in Coordination Complexes', priority: 'MEDIUM', questionCount: 10 },
      { name: 'IUPAC Nomenclature & Werner\'s Theory', priority: 'LOW', questionCount: 7 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 3 },
      { year: 2019, questionCount: 3 },
      { year: 2020, questionCount: 4 },
      { year: 2021, questionCount: 4 },
      { year: 2022, questionCount: 4 },
      { year: 2023, questionCount: 5 },
      { year: 2024, questionCount: 5 },
      { year: 2025, questionCount: 5 }
    ]
  },
  {
    id: 'topic-electrochemistry',
    name: 'Electrochemistry & Galvanic Cells',
    subject: 'Chemistry',
    priority: 'HIGH',
    chapter: 'Physical Chemistry',
    historicalQuestionsCount: 30,
    recentQuestionsCount: 10,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 16,
    subtopicPriorities: [
      { name: 'Nernst Equation & Cell Potential', priority: 'HIGH', questionCount: 14 },
      { name: 'Kohlrausch\'s Law & Molar Conductivity', priority: 'MEDIUM', questionCount: 10 },
      { name: 'Electrolysis & Faraday\'s Laws', priority: 'LOW', questionCount: 6 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 3 },
      { year: 2019, questionCount: 3 },
      { year: 2020, questionCount: 4 },
      { year: 2021, questionCount: 4 },
      { year: 2022, questionCount: 4 },
      { year: 2023, questionCount: 4 },
      { year: 2024, questionCount: 5 },
      { year: 2025, questionCount: 5 }
    ]
  },
  {
    id: 'topic-chemical-kinetics',
    name: 'Chemical Kinetics & Solutions',
    subject: 'Chemistry',
    priority: 'HIGH',
    chapter: 'Physical Chemistry',
    historicalQuestionsCount: 34,
    recentQuestionsCount: 11,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 15,
    subtopicPriorities: [
      { name: 'Arrhenius Equation & Activation Energy', priority: 'HIGH', questionCount: 14 },
      { name: 'Van \'t Hoff Factor & Colligative Properties', priority: 'HIGH', questionCount: 12 },
      { name: 'First Order Integrated Rate Law & Half-Life', priority: 'MEDIUM', questionCount: 8 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 4 },
      { year: 2019, questionCount: 4 },
      { year: 2020, questionCount: 4 },
      { year: 2021, questionCount: 4 },
      { year: 2022, questionCount: 4 },
      { year: 2023, questionCount: 5 },
      { year: 2024, questionCount: 5 },
      { year: 2025, questionCount: 6 }
    ]
  },
  {
    id: 'topic-inorganic-pblock',
    name: 'p-Block Elements & Metallurgy',
    subject: 'Chemistry',
    priority: 'MEDIUM',
    chapter: 'Inorganic Chemistry',
    historicalQuestionsCount: 24,
    recentQuestionsCount: 5,
    lastActiveYear: 2024,
    trend: 'DECREASING',
    trendPercentage: -10,
    subtopicPriorities: [
      { name: 'Xenon Fluorides Geometry & Hydrolysis', priority: 'MEDIUM', questionCount: 10 },
      { name: 'Oxoacids of Phosphorus & Halogens', priority: 'MEDIUM', questionCount: 8 },
      { name: 'Ellingham Diagram Principles', priority: 'LOW', questionCount: 6 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 4 },
      { year: 2019, questionCount: 4 },
      { year: 2020, questionCount: 3 },
      { year: 2021, questionCount: 3 },
      { year: 2022, questionCount: 3 },
      { year: 2023, questionCount: 3 },
      { year: 2024, questionCount: 2 },
      { year: 2025, questionCount: 2 }
    ]
  },

  // --- Biology Topics ---
  {
    id: 'topic-genetics',
    name: 'Genetics & Molecular Biology',
    subject: 'Biology',
    priority: 'HIGH',
    chapter: 'Genetics',
    historicalQuestionsCount: 44,
    recentQuestionsCount: 15,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 25,
    subtopicPriorities: [
      { name: 'Lac Operon & Gene Regulation', priority: 'HIGH', questionCount: 16 },
      { name: 'DNA Replication & Enzymology', priority: 'HIGH', questionCount: 15 },
      { name: 'Mendelian Dihybrid Inheritance & Linkage', priority: 'HIGH', questionCount: 13 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 4 },
      { year: 2019, questionCount: 5 },
      { year: 2020, questionCount: 5 },
      { year: 2021, questionCount: 6 },
      { year: 2022, questionCount: 6 },
      { year: 2023, questionCount: 7 },
      { year: 2024, questionCount: 7 },
      { year: 2025, questionCount: 8 }
    ]
  },
  {
    id: 'topic-biotech',
    name: 'Biotechnology: Principles & Tools',
    subject: 'Biology',
    priority: 'HIGH',
    chapter: 'Biotechnology',
    historicalQuestionsCount: 32,
    recentQuestionsCount: 11,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 22,
    subtopicPriorities: [
      { name: 'PCR Cyclic Steps & Taq Polymerase', priority: 'HIGH', questionCount: 14 },
      { name: 'pBR322 Cloning Vectors & Selectable Markers', priority: 'HIGH', questionCount: 11 },
      { name: 'Restriction Endonucleases & Gel Electrophoresis', priority: 'MEDIUM', questionCount: 7 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 3 },
      { year: 2019, questionCount: 3 },
      { year: 2020, questionCount: 4 },
      { year: 2021, questionCount: 4 },
      { year: 2022, questionCount: 4 },
      { year: 2023, questionCount: 5 },
      { year: 2024, questionCount: 5 },
      { year: 2025, questionCount: 6 }
    ]
  },
  {
    id: 'topic-human-physiology',
    name: 'Human Physiology & Coordination',
    subject: 'Biology',
    priority: 'HIGH',
    chapter: 'Human Physiology',
    historicalQuestionsCount: 38,
    recentQuestionsCount: 12,
    lastActiveYear: 2025,
    trend: 'INCREASING',
    trendPercentage: 14,
    subtopicPriorities: [
      { name: 'Cardiac Cycle & ECG Waveforms', priority: 'HIGH', questionCount: 14 },
      { name: 'Synaptic Transmission & Action Potential', priority: 'MEDIUM', questionCount: 12 },
      { name: 'Gametogenesis & Hormonal Feedback Axes', priority: 'MEDIUM', questionCount: 12 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 4 },
      { year: 2019, questionCount: 4 },
      { year: 2020, questionCount: 4 },
      { year: 2021, questionCount: 5 },
      { year: 2022, questionCount: 5 },
      { year: 2023, questionCount: 5 },
      { year: 2024, questionCount: 6 },
      { year: 2025, questionCount: 6 }
    ]
  },
  {
    id: 'topic-plant-physiology',
    name: 'Plant Physiology & Photosynthesis',
    subject: 'Biology',
    priority: 'HIGH',
    chapter: 'Plant Physiology',
    historicalQuestionsCount: 30,
    recentQuestionsCount: 9,
    lastActiveYear: 2025,
    trend: 'STABLE',
    trendPercentage: 6,
    subtopicPriorities: [
      { name: 'Calvin C3/C4 Pathway Energetics', priority: 'HIGH', questionCount: 14 },
      { name: 'Transpiration Pull & Stomatal Mechanics', priority: 'MEDIUM', questionCount: 10 },
      { name: 'Plant Growth Regulators (Auxin/Gibberellin)', priority: 'MEDIUM', questionCount: 6 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 3 },
      { year: 2019, questionCount: 4 },
      { year: 2020, questionCount: 4 },
      { year: 2021, questionCount: 4 },
      { year: 2022, questionCount: 4 },
      { year: 2023, questionCount: 4 },
      { year: 2024, questionCount: 5 },
      { year: 2025, questionCount: 5 }
    ]
  },
  {
    id: 'topic-ecology',
    name: 'Ecology & Environment',
    subject: 'Biology',
    priority: 'MEDIUM',
    chapter: 'Ecology',
    historicalQuestionsCount: 26,
    recentQuestionsCount: 7,
    lastActiveYear: 2024,
    trend: 'STABLE',
    trendPercentage: 2,
    subtopicPriorities: [
      { name: 'Trophic Level 10% Energy Transfer', priority: 'MEDIUM', questionCount: 10 },
      { name: 'Ecological Succession & Nutrient Cycles', priority: 'MEDIUM', questionCount: 8 },
      { name: 'Biodiversity Hotspots & Conservation Strategies', priority: 'LOW', questionCount: 8 }
    ],
    annualActivity: [
      { year: 2018, questionCount: 3 },
      { year: 2019, questionCount: 3 },
      { year: 2020, questionCount: 3 },
      { year: 2021, questionCount: 4 },
      { year: 2022, questionCount: 4 },
      { year: 2023, questionCount: 4 },
      { year: 2024, questionCount: 4 },
      { year: 2025, questionCount: 3 }
    ]
  }
];
