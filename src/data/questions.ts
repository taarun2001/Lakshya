import { Question } from './types';

export const MOCK_QUESTIONS: Question[] = [
  // ==========================================
  // MATHEMATICS (22 Questions)
  // ==========================================

  // --- Mathematics: HIGH Priority (6) ---
  {
    id: 'q-math-aod-max-min',
    code: 'MATH-AOD-01',
    priority: 'HIGH',
    subject: 'Mathematics',
    chapter: 'Calculus',
    topicId: 'topic-calculus',
    topicName: 'Application of Derivatives',
    text: 'A cylinder is inscribed in a given right circular cone of height h and semi-vertical angle α. Find the maximum volume of the cylinder in terms of h and α.',
    options: [
      'V = (4/27) π h³ tan²α',
      'V = (2/9) π h³ tan α',
      'V = (4/9) π h² tan²α',
      'V = (1/3) π h³ tan²α'
    ],
    historicalAppearancesCount: 5,
    lastAppearanceYear: 2024,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Strong historical recurrence combined with recent relevance. Similar concepts have appeared repeatedly, including recent papers, while several variations have been observed.',
    patternConsistencyIndex: 72,
    studied: false,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Medium',
      questionVariation: 'High',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.42' },
      { year: 2019, type: 'NONE' },
      { year: 2020, type: 'SIMILAR', paperSession: 'KCET-2020', questionRef: 'Q.38' },
      { year: 2021, type: 'NONE' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.45' },
      { year: 2023, type: 'NONE' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.41' },
      { year: 2025, type: 'NONE' }
    ],
    variations: [
      {
        id: 'var-aod-01',
        variationNumber: 'Variation 01',
        label: 'Direct calculation',
        concept: 'Inscribed cylinder with explicit numerical dimensions h=12cm, r=6cm to find max volume value.',
        snippet: 'Calculate the radius of cylinder inscribed in cone of height 12cm that yields maximum volume.',
        frequency: 'Appeared in 2018 & 2024'
      },
      {
        id: 'var-aod-02',
        variationNumber: 'Variation 02',
        label: 'Conceptual application',
        concept: 'Ratio of maximum volume of cone inscribed in a given sphere of radius R to the sphere volume.',
        snippet: 'Show that the altitude of the right circular cone of maximum volume inscribed in sphere is 4R/3.',
        frequency: 'Appeared in 2020 & 2022'
      }
    ]
  },
  {
    id: 'q-math-def-integral-king',
    code: 'MATH-INT-04',
    priority: 'HIGH',
    subject: 'Mathematics',
    chapter: 'Calculus',
    topicId: 'topic-calculus',
    topicName: 'Definite Integration',
    text: 'Evaluate the definite integral I = ∫₀^(π/2) [ (sinⁿ x) / (sinⁿ x + cosⁿ x) ] dx for any positive integer n.',
    options: ['π / 4', 'π / 2', 'π', '0'],
    historicalAppearancesCount: 7,
    lastAppearanceYear: 2024,
    recentActivity: 'High',
    variationsCount: 4,
    whyPrioritized: 'King\'s property (∫ f(a+b-x) dx) has appeared in 7 out of the last 8 cycles with symmetrical algebraic variations.',
    patternConsistencyIndex: 76,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Medium',
      questionVariation: 'High',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.50' },
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.48' },
      { year: 2020, type: 'NONE' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.53' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.49' },
      { year: 2023, type: 'SIMILAR', paperSession: 'KCET-2023', questionRef: 'Q.51' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.47' },
      { year: 2025, type: 'NONE' }
    ],
    variations: [
      {
        id: 'var-int-01',
        variationNumber: 'Variation 01',
        label: 'Direct calculation',
        concept: 'Fractional power variation with n = 1/2 (square roots) or n = 3/2.',
        snippet: 'Evaluate ∫₀^(π/2) [ √sin x / (√sin x + √cos x) ] dx.',
        frequency: 'Appeared in 2018, 2022, 2024'
      }
    ]
  },
  {
    id: 'q-math-bayes-probability',
    code: 'MATH-PROB-08',
    priority: 'HIGH',
    subject: 'Mathematics',
    chapter: 'Algebra & Statistics',
    topicId: 'topic-probability',
    topicName: 'Probability & Distributions',
    text: 'A factory has three machines A, B, and C producing 50%, 30%, and 20% of bolts respectively. 2%, 3%, and 4% of their outputs are defective. If a bolt drawn at random is defective, find the probability that it was manufactured by machine B.',
    options: ['9 / 37', '27 / 73', '15 / 53', '12 / 41'],
    historicalAppearancesCount: 5,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Bayes\' Theorem word problems on defective machinery or medical screening recur almost every exam cycle with high scoring weight.',
    patternConsistencyIndex: 75,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'High',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.58' },
      { year: 2019, type: 'NONE' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.56' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.59' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.58' },
      { year: 2023, type: 'NONE' },
      { year: 2024, type: 'SIMILAR', paperSession: 'KCET-2024', questionRef: 'Q.57' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.55' }
    ],
    variations: [
      {
        id: 'var-prob-01',
        variationNumber: 'Variation 01',
        label: 'Direct calculation',
        concept: 'Two urns containing distinct numbers of white and black balls with transfer step.',
        snippet: 'A ball is drawn from Urn I and transferred to Urn II before drawing.',
        frequency: 'Appeared in 2020 & 2022'
      }
    ]
  },
  {
    id: 'q-math-vectors-shortest-dist',
    code: 'MATH-VEC-02',
    priority: 'HIGH',
    subject: 'Mathematics',
    chapter: 'Vectors & 3D Geometry',
    topicId: 'topic-vectors-3d',
    topicName: 'Vectors & 3D Geometry',
    text: 'Find the shortest distance between the skew lines given by r = (i + 2j + k) + λ(i - j + k) and r = (2i - j - k) + μ(2i + j + 2k).',
    options: ['3 / √2', '3√2 / 2', '√3 / 2', '1 / √6'],
    historicalAppearancesCount: 6,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Shortest distance between skew lines using cross product formula d = |(a2 - a1) · (b1 × b2)| / |b1 × b2| is an absolute staple in 3D geometry.',
    patternConsistencyIndex: 77,
    studied: true,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.52' },
      { year: 2020, type: 'SIMILAR', paperSession: 'KCET-2020', questionRef: 'Q.51' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.49' },
      { year: 2022, type: 'NONE' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.54' },
      { year: 2024, type: 'SIMILAR', paperSession: 'KCET-2024', questionRef: 'Q.53' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.51' }
    ],
    variations: [
      {
        id: 'var-vec-01',
        variationNumber: 'Variation 01',
        label: 'Cartesian form conversion',
        concept: 'Lines presented in symmetric cartesian equation form (x-x1)/a1 = (y-y1)/b1 = (z-z1)/c1.',
        snippet: 'Find distance between (x-1)/2 = (y-2)/3 = (z-3)/4 and (x-2)/3 = (y-4)/4 = (z-5)/5.',
        frequency: 'Appeared in 2021 & 2023'
      }
    ]
  },
  {
    id: 'q-math-diff-eq-linear',
    code: 'MATH-DE-05',
    priority: 'HIGH',
    subject: 'Mathematics',
    chapter: 'Calculus',
    topicId: 'topic-calculus',
    topicName: 'Differential Equations',
    text: 'Find the general solution of the first-order linear differential equation x (dy/dx) + 2y = x² log x, for x > 0.',
    options: [
      'y = (x²/4) log x - (x²/16) + C/x²',
      'y = (x²/3) log x + C/x²',
      'y = x² log x - x² + C',
      'y = (x/2) log x - x/4 + C/x'
    ],
    historicalAppearancesCount: 5,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 2,
    whyPrioritized: 'Linear differential equations with integrating factor IF = e^(∫ P dx) = e^(∫ 2/x dx) = x² appear reliably every exam cycle.',
    patternConsistencyIndex: 73,
    studied: false,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.44' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.46' },
      { year: 2022, type: 'SIMILAR', paperSession: 'KCET-2022', questionRef: 'Q.43' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.45' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.48' }
    ],
    variations: [
      {
        id: 'var-de-01',
        variationNumber: 'Variation 01',
        label: 'Trigonometric integrating factor',
        concept: 'Equations of the form dy/dx + y sec x = tan x yielding IF = sec x + tan x.',
        snippet: 'Solve (cos²x) dy/dx + y = tan x.',
        frequency: 'Appeared in 2020 & 2024'
      }
    ]
  },
  {
    id: 'q-math-matrix-cramer',
    code: 'MATH-MAT-06',
    priority: 'HIGH',
    subject: 'Mathematics',
    chapter: 'Algebra',
    topicId: 'topic-matrices',
    topicName: 'Matrices & Determinants',
    text: 'For what value of k does the system of equations x + y + z = 6, x + 2y + 3z = 10, and x + 2y + kz = 12 have no solution?',
    options: ['k = 3', 'k = 2', 'k = 0', 'k = -3'],
    historicalAppearancesCount: 5,
    lastAppearanceYear: 2024,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Consistency and non-trivial/inconsistent conditions using determinant Δ = 0 and Δ_z ≠ 0 have consistently high frequency in state entrance tests.',
    patternConsistencyIndex: 71,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Medium',
      questionVariation: 'High',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.12' },
      { year: 2020, type: 'SIMILAR', paperSession: 'KCET-2020', questionRef: 'Q.15' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.11' },
      { year: 2023, type: 'SIMILAR', paperSession: 'KCET-2023', questionRef: 'Q.14' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.16' }
    ],
    variations: [
      {
        id: 'var-mat-cramer-01',
        variationNumber: 'Variation 01',
        label: 'Infinite solutions parameter',
        concept: 'Determine parameter values λ and μ such that system possesses infinitely many solutions.',
        snippet: 'Condition Δ = Δx = Δy = Δz = 0 for consistency with dependent planes.',
        frequency: 'Appeared in 2022 & 2023'
      }
    ]
  },

  // --- Mathematics: MEDIUM Priority (6) ---
  {
    id: 'q-math-matrix-adjoint',
    code: 'MATH-MAT-09',
    priority: 'MEDIUM',
    subject: 'Mathematics',
    chapter: 'Algebra',
    topicId: 'topic-matrices',
    topicName: 'Matrices & Determinants',
    text: 'If A is a non-singular square matrix of order 3 such that |A| = 4, evaluate the determinant of the adjoint of the adjoint matrix, |adj(adj A)|.',
    options: ['256', '64', '16', '1024'],
    historicalAppearancesCount: 3,
    lastAppearanceYear: 2023,
    recentActivity: 'Medium',
    variationsCount: 1,
    whyPrioritized: 'Standard determinant property |adj(adj A)| = |A|^{(n-1)²} tested frequently in algebra sections.',
    patternConsistencyIndex: 64,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Low',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.11' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.13' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.15' }
    ],
    variations: [
      {
        id: 'var-mat-01',
        variationNumber: 'Variation 01',
        label: 'Direct calculation',
        concept: 'Property |adj(adj A)| = |A|^{(n-1)²} where n=3 gives |A|⁴ = 4⁴ = 256.',
        snippet: 'Formula derivation for arbitrary order n square matrices.',
        frequency: 'Appeared in 2019 & 2023'
      }
    ]
  },
  {
    id: 'q-math-inv-trig-sum',
    code: 'MATH-ITF-03',
    priority: 'MEDIUM',
    subject: 'Mathematics',
    chapter: 'Trigonometry',
    topicId: 'topic-trigonometry',
    topicName: 'Inverse Trigonometric Functions',
    text: 'Evaluate the exact principal value of tan⁻¹(1/2) + tan⁻¹(1/3) + tan⁻¹(1/5) + tan⁻¹(1/7).',
    options: ['π / 4', 'π / 2', 'π / 3', 'π / 6'],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Successive addition using tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1-xy)) produces standard angle simplification.',
    patternConsistencyIndex: 66,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'SIMILAR', paperSession: 'KCET-2019', questionRef: 'Q.08' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.09' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.10' }
    ],
    variations: [
      {
        id: 'var-itf-01',
        variationNumber: 'Variation 01',
        label: 'Identity simplification',
        concept: 'Pairwise grouping to yield tan⁻¹(1) = π/4.',
        snippet: 'tan⁻¹(1/2)+tan⁻¹(1/3) = tan⁻¹(5/5) = π/4.',
        frequency: 'Appeared in 2021 & 2024'
      }
    ]
  },
  {
    id: 'q-math-continuity-piecewise',
    code: 'MATH-CONT-07',
    priority: 'MEDIUM',
    subject: 'Mathematics',
    chapter: 'Calculus',
    topicId: 'topic-calculus',
    topicName: 'Continuity & Differentiability',
    text: 'If f(x) = (1 - cos 4x)/(8x²) for x ≠ 0 and f(0) = k is continuous at x = 0, find the value of k.',
    options: ['1', '2', '1/2', '4'],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2023,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Piecewise continuity matching limit x->0 (2 sin² 2x)/(8x²) = 1 to the function value k.',
    patternConsistencyIndex: 68,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.33' },
      { year: 2020, type: 'SIMILAR', paperSession: 'KCET-2020', questionRef: 'Q.35' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.32' }
    ],
    variations: [
      {
        id: 'var-cont-01',
        variationNumber: 'Variation 01',
        label: 'Exponential / logarithmic limit',
        concept: 'Piecewise function using (e^(3x) - 1)/x as x approaches 0.',
        snippet: 'Find k such that f(x)=(e^(3x)-1)/2x is continuous at 0.',
        frequency: 'Appeared in 2020'
      }
    ]
  },
  {
    id: 'q-math-binomial-dist',
    code: 'MATH-PROB-10',
    priority: 'MEDIUM',
    subject: 'Mathematics',
    chapter: 'Algebra & Statistics',
    topicId: 'topic-probability',
    topicName: 'Probability & Distributions',
    text: 'In a binomial distribution B(n, p), the sum and product of mean and variance are 8 and 15 respectively. Find the number of trials n.',
    options: ['25', '16', '20', '30'],
    historicalAppearancesCount: 3,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Mean np and variance npq quadratic relation equations frequently test binomial distribution properties.',
    patternConsistencyIndex: 63,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'SIMILAR', paperSession: 'KCET-2019', questionRef: 'Q.57' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.59' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.58' }
    ],
    variations: [
      {
        id: 'var-binom-01',
        variationNumber: 'Variation 01',
        label: 'Dice rolling trial counts',
        concept: 'Finding probability of obtaining at least 5 successes in 6 throws of a fair die.',
        snippet: 'Evaluate P(X >= 5) when p = 1/6 and n = 6.',
        frequency: 'Appeared in 2022'
      }
    ]
  },
  {
    id: 'q-math-area-curves',
    code: 'MATH-CALC-11',
    priority: 'MEDIUM',
    subject: 'Mathematics',
    chapter: 'Calculus',
    topicId: 'topic-calculus',
    topicName: 'Application of Integrals',
    text: 'Find the area of the region bounded by the parabola y² = 4ax and the line y = mx.',
    options: ['8a² / (3m³)', '4a² / (3m²)', '8a² / (3m)', '16a² / (3m³)'],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2023,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Standard enclosed area between standard conic section and passing line with formula 8a²/(3m³).',
    patternConsistencyIndex: 67,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.48' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.47' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.46' }
    ],
    variations: [
      {
        id: 'var-area-01',
        variationNumber: 'Variation 01',
        label: 'Numerical parabola-line area',
        concept: 'Area enclosed between y = x² and line y = 4.',
        snippet: 'Evaluate ∫_{-2}^{2} (4 - x²) dx = 32/3 sq units.',
        frequency: 'Appeared in 2021'
      }
    ]
  },
  {
    id: 'q-math-vector-coplanar',
    code: 'MATH-VEC-12',
    priority: 'MEDIUM',
    subject: 'Mathematics',
    chapter: 'Vectors & 3D Geometry',
    topicId: 'topic-vectors-3d',
    topicName: 'Vectors & 3D Geometry',
    text: 'If the vectors a = 2i - j + k, b = i + 2j - 3k, and c = 3i + λj + 5k are coplanar, find the real parameter λ.',
    options: ['-4', '2', '-2', '4'],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Scalar triple product box [a b c] = 0 condition for coplanarity represents a recurring medium-weight vector problem.',
    patternConsistencyIndex: 65,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.49' },
      { year: 2022, type: 'SIMILAR', paperSession: 'KCET-2022', questionRef: 'Q.52' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.50' }
    ],
    variations: [
      {
        id: 'var-vec-cop-01',
        variationNumber: 'Variation 01',
        label: 'Four coplanar position points',
        concept: 'Form relative displacement vectors AB, AC, AD and evaluate 3x3 determinant.',
        snippet: 'Show points A(1,2,3), B(3,4,7), C(-3,-2,-5) and D lie on common plane.',
        frequency: 'Appeared in 2022'
      }
    ]
  },

  // --- Mathematics: LOW Priority (5) ---
  {
    id: 'q-math-linear-programming',
    code: 'MATH-LPP-13',
    priority: 'LOW',
    subject: 'Mathematics',
    chapter: 'Linear Programming',
    topicId: 'topic-algebra-relations',
    topicName: 'Linear Programming',
    text: 'The corner points of the bounded feasible region determined by linear constraints are (0, 0), (5, 0), (3, 4), and (0, 5). Maximize Z = 4x + 3y.',
    options: ['24 at (3, 4)', '20 at (5, 0)', '15 at (0, 5)', '25 at (3, 4)'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2021,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Simple corner-point evaluation carries low conceptual weight and has seen decreasing frequency in recent cycles.',
    patternConsistencyIndex: 45,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.60' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.60' }
    ],
    variations: [
      {
        id: 'var-lpp-01',
        variationNumber: 'Variation 01',
        label: 'Unbounded region optimal point',
        concept: 'Determine if open half-plane intersects feasible polygon.',
        snippet: 'Verify unbounded region optimality with additional inequality.',
        frequency: 'Appeared in 2018'
      }
    ]
  },
  {
    id: 'q-math-relations-equiv',
    code: 'MATH-REL-14',
    priority: 'LOW',
    subject: 'Mathematics',
    chapter: 'Relations & Functions',
    topicId: 'topic-algebra-relations',
    topicName: 'Relations & Functions',
    text: 'Let R be a relation on the set of integers Z defined by (a, b) ∈ R if and only if (a - b) is divisible by 5. What kind of relation is R?',
    options: ['Equivalence relation', 'Reflexive and symmetric only', 'Transitive only', 'Partial order relation'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2020,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Basic definition verification of equivalence relations appears infrequently in recent state question papers.',
    patternConsistencyIndex: 43,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.01' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.02' }
    ],
    variations: [
      {
        id: 'var-rel-01',
        variationNumber: 'Variation 01',
        label: 'Divisibility relation on natural numbers',
        concept: 'Check partial ordering of a|b relation.',
        snippet: 'Divisibility is reflexive, antisymmetric, and transitive.',
        frequency: 'Appeared in 2019'
      }
    ]
  },
  {
    id: 'q-math-rolle-lagrange',
    code: 'MATH-CALC-15',
    priority: 'LOW',
    subject: 'Mathematics',
    chapter: 'Calculus',
    topicId: 'topic-calculus',
    topicName: 'Application of Derivatives',
    text: 'Verify Rolle\'s theorem for f(x) = x² - 4x + 3 in the closed interval [1, 3] and determine the intermediate point c ∈ (1, 3).',
    options: ['c = 2', 'c = 1.5', 'c = 2.5', 'c = √3'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2021,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Mean Value Theorem condition verification has diminished in recent KCET test patterns.',
    patternConsistencyIndex: 44,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.37' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.39' }
    ],
    variations: [
      {
        id: 'var-mvt-01',
        variationNumber: 'Variation 01',
        label: 'Lagrange Mean Value Theorem',
        concept: 'Determine c such that f\'(c) = (f(b)-f(a))/(b-a) for cubic polynomial.',
        snippet: 'Find c for f(x) = x³ - 5x² in [1, 4].',
        frequency: 'Appeared in 2018'
      }
    ]
  },
  {
    id: 'q-math-determinant-vanish',
    code: 'MATH-DET-16',
    priority: 'LOW',
    subject: 'Mathematics',
    chapter: 'Algebra',
    topicId: 'topic-matrices',
    topicName: 'Matrices & Determinants',
    text: 'Without expansion, evaluate the determinant of the 3x3 skew-symmetric matrix with diagonal zeroes and off-diagonals a, -a, b, -b, c, -c.',
    options: ['0', 'abc', '2abc', 'a² + b² + c²'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2019,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Standard property that any odd-order skew-symmetric matrix has determinant 0 is rarely tested as a standalone question anymore.',
    patternConsistencyIndex: 40,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.14' },
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.16' }
    ],
    variations: [
      {
        id: 'var-det-01',
        variationNumber: 'Variation 01',
        label: 'Even-order skew-symmetric determinant',
        concept: 'Square of pfaffian property for 4x4 matrices.',
        snippet: 'Show |A| is a perfect square when n is even.',
        frequency: 'Appeared in 2018'
      }
    ]
  },
  {
    id: 'q-math-tangent-normal',
    code: 'MATH-CALC-17',
    priority: 'LOW',
    subject: 'Mathematics',
    chapter: 'Calculus',
    topicId: 'topic-calculus',
    topicName: 'Application of Derivatives',
    text: 'Find the slope of the normal to the curve x = 1 - a sin θ, y = b cos² θ at θ = π/2.',
    options: ['-a / (2b)', '2b / a', 'a / (2b)', '-2b / a'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2020,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Parametric tangent/normal slope evaluation has low difficulty and low recurrence weight in current exam blueprints.',
    patternConsistencyIndex: 41,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.36' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.34' }
    ],
    variations: [
      {
        id: 'var-norm-01',
        variationNumber: 'Variation 01',
        label: 'Tangent parallel to coordinate axes',
        concept: 'Points where dy/dx = 0 or dx/dy = 0.',
        snippet: 'Find points on curve x² + y² - 2x - 3 = 0 where tangents are parallel to x-axis.',
        frequency: 'Appeared in 2019'
      }
    ]
  },

  // --- Mathematics: INSUFFICIENT EVIDENCE (5) ---
  {
    id: 'q-math-lebesgue-measure',
    code: 'MATH-MOD-18',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Mathematics',
    chapter: 'Advanced Analysis',
    topicId: 'topic-calculus',
    topicName: 'Modern Integration Theory',
    text: 'Determine the Lebesgue outer measure m*(E) of the Cantor ternary set formed on the closed unit interval [0, 1].',
    options: ['0', '1', '1/3', '1/2'],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Not enough historical data to confidently prioritize this question. Appears in only 1 revised pilot syllabus paper.',
    insufficientEvidenceReason: 'Only 1 appearance in newly introduced university entrance curriculum (KCET 2025 exploratory section).',
    patternConsistencyIndex: 32,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.60' }
    ],
    variations: []
  },
  {
    id: 'q-math-bernoulli-numbers',
    code: 'MATH-NUM-19',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Mathematics',
    chapter: 'Number Theory',
    topicId: 'topic-calculus',
    topicName: 'Series & Special Functions',
    text: 'Express the sum of powers S_k(n) = ∑_{r=1}^{n} r^k in closed form using the Bernoulli polynomials B_{k+1}(n).',
    options: [
      'S_k(n) = (B_{k+1}(n+1) - B_{k+1}(0)) / (k + 1)',
      'S_k(n) = B_k(n) / k',
      'S_k(n) = (B_k(n+1) + 1) / (k - 1)',
      'S_k(n) = B_{k+1}(n) / (k + 1)'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Not enough historical examination evidence to establish pattern regularity.',
    insufficientEvidenceReason: 'Advanced summation concept introduced in 2025 sample question model.',
    patternConsistencyIndex: 28,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'SIMILAR', paperSession: 'KCET-2025', questionRef: 'Q.59' }
    ],
    variations: []
  },
  {
    id: 'q-math-discrete-groups',
    code: 'MATH-ALG-20',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Mathematics',
    chapter: 'Abstract Algebra',
    topicId: 'topic-algebra-relations',
    topicName: 'Group Theory',
    text: 'Let G be a finite group and H be a subgroup of index 2 in G. Prove that H is a normal subgroup of G and identify the quotient group G/H.',
    options: ['G/H ≅ Z₂', 'G/H ≅ Z_n', 'G/H is non-abelian', 'G/H is trivial'],
    historicalAppearancesCount: 0,
    lastAppearanceYear: 2024,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Insufficient dataset instances across historical state entrance examination logs.',
    insufficientEvidenceReason: 'Concept is outside standard core syllabus and appears solely in university honors bridge papers.',
    patternConsistencyIndex: 25,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Insufficient',
      recencyGap: 'High',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2024, type: 'SIMILAR', paperSession: 'KEA-Model-2024', questionRef: 'Q.04' }
    ],
    variations: []
  },
  {
    id: 'q-math-spline-interpolation',
    code: 'MATH-NUM-21',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Mathematics',
    chapter: 'Numerical Methods',
    topicId: 'topic-calculus',
    topicName: 'Computational Mathematics',
    text: 'Formulate the natural boundary conditions at the endpoints x₀ and x_n for a cubic spline interpolation polynomial S(x).',
    options: [
      'S\'\'(x₀) = 0 and S\'\'(x_n) = 0',
      'S\'(x₀) = 0 and S\'(x_n) = 0',
      'S(x₀) = S(x_n)',
      'S\'\'\'(x₀) = 1'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Insufficient recurrence evidence; tested only once as a pilot applied computational math question.',
    insufficientEvidenceReason: 'Only 1 historical sample point available in dataset (KCET 2025 draft supplementary).',
    patternConsistencyIndex: 30,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.58' }
    ],
    variations: []
  },
  {
    id: 'q-math-stochastic-diff',
    code: 'MATH-STOCH-22',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Mathematics',
    chapter: 'Probability & Statistics',
    topicId: 'topic-probability',
    topicName: 'Continuous Random Processes',
    text: 'Apply Ito\'s lemma to compute the differential df(S, t) where f(S, t) = log S and dS = μS dt + σS dW.',
    options: [
      'df = (μ - σ²/2) dt + σ dW',
      'df = μ dt + σ dW',
      'df = (μ + σ²) dt + σ dW',
      'df = (1/S) dS'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Insufficient evidence due to single appearance in high-order statistics optional test.',
    insufficientEvidenceReason: 'No prior paper occurrences between 2018 and 2024.',
    patternConsistencyIndex: 26,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.57' }
    ],
    variations: []
  },

  // ==========================================
  // PHYSICS (22 Questions)
  // ==========================================

  // --- Physics: HIGH Priority (6) ---
  {
    id: 'q-phy-capacitance-dielectric',
    code: 'PHY-CAP-02',
    priority: 'HIGH',
    subject: 'Physics',
    chapter: 'Electromagnetism',
    topicId: 'topic-electrostatics',
    topicName: 'Electrostatics',
    text: 'A parallel plate capacitor of capacitance C is charged to potential V and then disconnected from battery. A dielectric slab of constant K is inserted between plates. Determine the change in stored electrostatic energy.',
    options: [
      'ΔU = (1/2) CV² (1/K - 1)',
      'ΔU = (1/2) CV² (K - 1)',
      'ΔU = (1/2) CV² (1 - K²)',
      'ΔU = CV² (1/K)'
    ],
    historicalAppearancesCount: 6,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 4,
    whyPrioritized: 'Persistent recurrence across both 2023 and 2025 papers with dielectric boundary variations and strong topic weighting.',
    patternConsistencyIndex: 74,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'High',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'NONE' },
      { year: 2019, type: 'SIMILAR', paperSession: 'KCET-2019', questionRef: 'Q.14' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.19' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.17' },
      { year: 2022, type: 'NONE' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.22' },
      { year: 2024, type: 'NONE' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.16' }
    ],
    variations: [
      {
        id: 'var-cap-01',
        variationNumber: 'Variation 01',
        label: 'Direct calculation',
        concept: 'Work done in inserting dielectric with battery continuously connected vs disconnected.',
        snippet: 'Battery remains connected: energy increases by factor of K; disconnected: energy decreases.',
        frequency: 'Appeared in 2020 & 2025'
      }
    ]
  },
  {
    id: 'q-phy-potentiometer-ratio',
    code: 'PHY-CURR-07',
    priority: 'HIGH',
    subject: 'Physics',
    chapter: 'Electrodynamics',
    topicId: 'topic-current-electricity',
    topicName: 'Current Electricity',
    text: 'In a potentiometer experiment, a cell of EMF E₁ is balanced at 380 cm. When another cell of EMF E₂ is connected in series with E₁ in supporting and opposing mode, balance points are 480 cm and 120 cm respectively. Find E₁ / E₂.',
    options: ['5 / 3', '3 / 2', '4 / 3', '2 / 1'],
    historicalAppearancesCount: 6,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Potentiometer comparison of EMFs (E1+E2)/(E1-E2) = l1/l2 remains a core scoring benchmark in state physics examinations.',
    patternConsistencyIndex: 78,
    studied: false,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.16' },
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.18' },
      { year: 2020, type: 'NONE' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.21' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.19' },
      { year: 2023, type: 'NONE' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.20' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.18' }
    ],
    variations: [
      {
        id: 'var-pot-01',
        variationNumber: 'Variation 01',
        label: 'Direct calculation',
        concept: 'Formula (E1+E2)/(E1-E2) = 480/120 = 4 gives E1/E2 = 5/3.',
        snippet: 'Direct ratio evaluation using component sum and difference lengths.',
        frequency: 'Appeared in 2018 & 2024'
      }
    ]
  },
  {
    id: 'q-phy-photoelectric-einstein',
    code: 'PHY-MOD-01',
    priority: 'HIGH',
    subject: 'Physics',
    chapter: 'Modern Physics',
    topicId: 'topic-modern-physics',
    topicName: 'Dual Nature of Radiation',
    text: 'When radiation of frequency ν is incident on a photosensitive metal, stopping potential is V₀. When frequency is doubled to 2ν, the new stopping potential is observed to be:',
    options: [
      'Greater than 2V₀',
      'Equal to 2V₀',
      'Less than 2V₀',
      'Equal to V₀/2'
    ],
    historicalAppearancesCount: 6,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Einstein\'s photoelectric equation eV₀ = hν - Φ with frequency doubling is consistently repeated across all recent papers.',
    patternConsistencyIndex: 76,
    studied: true,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'High',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.39' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.41' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.40' },
      { year: 2023, type: 'SIMILAR', paperSession: 'KCET-2023', questionRef: 'Q.43' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.42' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.39' }
    ],
    variations: [
      {
        id: 'var-pe-01',
        variationNumber: 'Variation 01',
        label: 'Stopping potential calculation',
        concept: 'eV\'₀ = 2hν - Φ = 2(hν - Φ) + Φ = 2eV₀ + Φ > 2eV₀.',
        snippet: 'Stopping potential increases by more than double due to positive work function.',
        frequency: 'Appeared in 2022 & 2025'
      }
    ]
  },
  {
    id: 'q-phy-em-induction-motional',
    code: 'PHY-EMI-03',
    priority: 'HIGH',
    subject: 'Physics',
    chapter: 'Electromagnetism',
    topicId: 'topic-electrostatics',
    topicName: 'Electromagnetic Induction',
    text: 'A metal rod of length l rotates at constant angular speed ω about an axis perpendicular to uniform magnetic field B through one end. What is the induced EMF between the ends?',
    options: ['e = (1/2) B ω l²', 'e = B ω l²', 'e = 2 B ω l²', 'e = (1/4) B ω l²'],
    historicalAppearancesCount: 5,
    lastAppearanceYear: 2024,
    recentActivity: 'High',
    variationsCount: 2,
    whyPrioritized: 'Motional EMF integration e = ∫ B (ωr) dr = 1/2 B ω l² recurs reliably in electromagnetic induction sections.',
    patternConsistencyIndex: 73,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.24' },
      { year: 2020, type: 'SIMILAR', paperSession: 'KCET-2020', questionRef: 'Q.26' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.25' },
      { year: 2023, type: 'SIMILAR', paperSession: 'KCET-2023', questionRef: 'Q.27' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.23' }
    ],
    variations: [
      {
        id: 'var-emi-01',
        variationNumber: 'Variation 01',
        label: 'Wheel spokes in Earth\'s magnetic field',
        concept: 'Conducting wheel with N metallic spokes rotating in magnetic meridian.',
        snippet: 'Induced EMF across rim remains 1/2 B ω l² independent of number of spokes N.',
        frequency: 'Appeared in 2020 & 2024'
      }
    ]
  },
  {
    id: 'q-phy-ydse-fringe',
    code: 'PHY-OPT-04',
    priority: 'HIGH',
    subject: 'Physics',
    chapter: 'Optics',
    topicId: 'topic-wave-optics',
    topicName: 'Wave Optics',
    text: 'In Young\'s Double Slit Experiment, when a thin transparent mica sheet of thickness t and refractive index μ is placed in front of one slit, the fringe shift is given by:',
    options: [
      'Δy = (D / d) (μ - 1) t',
      'Δy = (d / D) (μ - 1) t',
      'Δy = (D / d) μ t',
      'Δy = (λ D / d) (μ - 1)'
    ],
    historicalAppearancesCount: 5,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Fringe shift formula and path difference introduction (μ-1)t is consistently tested in KCET Wave Optics.',
    patternConsistencyIndex: 75,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.28' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.30' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.29' },
      { year: 2024, type: 'SIMILAR', paperSession: 'KCET-2024', questionRef: 'Q.31' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.28' }
    ],
    variations: [
      {
        id: 'var-ydse-01',
        variationNumber: 'Variation 01',
        label: 'Fringe displacement number',
        concept: 'Determine number of fringes shifted n = (μ - 1)t / λ.',
        snippet: 'Calculate thickness t given shift equal to 5 bright fringe widths.',
        frequency: 'Appeared in 2023 & 2025'
      }
    ]
  },
  {
    id: 'q-phy-carnot-efficiency',
    code: 'PHY-THERM-05',
    priority: 'HIGH',
    subject: 'Physics',
    chapter: 'Thermal Physics',
    topicId: 'topic-thermodynamics-phy',
    topicName: 'Thermodynamics',
    text: 'A Carnot engine has efficiency 40% when sink temperature is 300 K. By how much must source temperature be increased to raise efficiency to 50%?',
    options: ['100 K', '50 K', '150 K', '200 K'],
    historicalAppearancesCount: 5,
    lastAppearanceYear: 2024,
    recentActivity: 'High',
    variationsCount: 2,
    whyPrioritized: 'Carnot efficiency η = 1 - T_sink/T_source two-stage calculation is an annual favorite in thermodynamics.',
    patternConsistencyIndex: 72,
    studied: false,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.10' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.12' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.14' },
      { year: 2023, type: 'SIMILAR', paperSession: 'KCET-2023', questionRef: 'Q.13' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.11' }
    ],
    variations: [
      {
        id: 'var-carnot-01',
        variationNumber: 'Variation 01',
        label: 'Coefficient of performance (COP)',
        concept: 'Refrigerator COP β = T2 / (T1 - T2) = (1 - η) / η.',
        snippet: 'Compute work required to freeze 1 kg of water using Carnot refrigerator.',
        frequency: 'Appeared in 2020 & 2024'
      }
    ]
  },

  // --- Physics: MEDIUM Priority (6) ---
  {
    id: 'q-phy-biot-savart-loop',
    code: 'PHY-MAG-06',
    priority: 'MEDIUM',
    subject: 'Physics',
    chapter: 'Electromagnetism',
    topicId: 'topic-current-electricity',
    topicName: 'Magnetic Effects of Current',
    text: 'At what axial distance x from the center of a circular current loop of radius R does the magnetic field drop to 1/8th of its value at the center?',
    options: ['x = √3 R', 'x = 2 R', 'x = R / √3', 'x = 2√2 R'],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'B_axis = μ₀ i R² / (2(R² + x²)^(3/2)) compared with B_center = μ₀ i / (2R) requires clean index manipulation.',
    patternConsistencyIndex: 67,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.21' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.24' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.22' }
    ],
    variations: [
      {
        id: 'var-mag-01',
        variationNumber: 'Variation 01',
        label: 'Direct calculation',
        concept: '(1 + x²/R²)^(3/2) = 8 => 1 + x²/R² = 4 => x = √3 R.',
        snippet: 'Ratio reduction for circular loop axial magnetic profile.',
        frequency: 'Appeared in 2019 & 2024'
      }
    ]
  },
  {
    id: 'q-phy-lcr-resonance',
    code: 'PHY-AC-07',
    priority: 'MEDIUM',
    subject: 'Physics',
    chapter: 'Electromagnetism',
    topicId: 'topic-current-electricity',
    topicName: 'Alternating Current',
    text: 'In a series LCR circuit with L = 2.0 H, C = 32 μF, and R = 10 Ω, calculate the resonance angular frequency ω₀ and Quality factor Q.',
    options: [
      'ω₀ = 125 rad/s, Q = 25',
      'ω₀ = 250 rad/s, Q = 12.5',
      'ω₀ = 125 rad/s, Q = 10',
      'ω₀ = 50 rad/s, Q = 5'
    ],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2023,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'LCR resonance formula ω₀ = 1/√(LC) and sharpness factor Q = (ω₀ L)/R are standard test questions.',
    patternConsistencyIndex: 65,
    studied: false,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.26' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.28' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.25' }
    ],
    variations: [
      {
        id: 'var-lcr-01',
        variationNumber: 'Variation 01',
        label: 'Bandwidth determination',
        concept: 'Determine bandwidth Δω = R/L and half-power frequencies.',
        snippet: 'Calculate upper and lower cutoff frequencies ω1 and ω2.',
        frequency: 'Appeared in 2020 & 2023'
      }
    ]
  },
  {
    id: 'q-phy-semiconductor-diode',
    code: 'PHY-SEMI-08',
    priority: 'MEDIUM',
    subject: 'Physics',
    chapter: 'Modern Physics',
    topicId: 'topic-modern-physics',
    topicName: 'Semiconductor Electronics',
    text: 'A Zener diode of breakdown voltage V_z = 6.0 V is used in a voltage regulator circuit with input unregulated DC voltage 10.0 V and load resistance 1.0 kΩ. If series resistor is R_s = 200 Ω, find the Zener diode current I_z.',
    options: ['14 mA', '20 mA', '6 mA', '10 mA'],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Zener diode voltage regulator KCL I_s = I_z + I_L with constant load voltage across breakdown region.',
    patternConsistencyIndex: 68,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.44' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.46' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.43' }
    ],
    variations: [
      {
        id: 'var-semi-01',
        variationNumber: 'Variation 01',
        label: 'Logic gate combination',
        concept: 'De Morgan truth table identification for universal NAND and NOR networks.',
        snippet: 'Identify Boolean output Y for configured dual-input gate array.',
        frequency: 'Appeared in 2021'
      }
    ]
  },
  {
    id: 'q-phy-doppler-sound',
    code: 'PHY-WAVE-09',
    priority: 'MEDIUM',
    subject: 'Physics',
    chapter: 'Oscillations & Waves',
    topicId: 'topic-thermodynamics-phy',
    topicName: 'Wave Motion & Sound',
    text: 'A train moving at 20 m/s towards a stationary observer blows a whistle of frequency 640 Hz. Taking speed of sound in air as 340 m/s, what is the apparent frequency heard by the observer?',
    options: ['680 Hz', '600 Hz', '720 Hz', '660 Hz'],
    historicalAppearancesCount: 3,
    lastAppearanceYear: 2023,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Apparent frequency shift f\' = f [v / (v - v_s)] is a standard calculation in sound waves.',
    patternConsistencyIndex: 63,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.15' },
      { year: 2020, type: 'SIMILAR', paperSession: 'KCET-2020', questionRef: 'Q.17' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.16' }
    ],
    variations: [
      {
        id: 'var-dop-01',
        variationNumber: 'Variation 01',
        label: 'Echo reflection from moving wall',
        concept: 'Two-stage shift: source to reflector, then reflector acting as secondary source.',
        snippet: 'Calculate beat frequency between original whistle and reflected echo.',
        frequency: 'Appeared in 2020'
      }
    ]
  },
  {
    id: 'q-phy-rotational-moi',
    code: 'PHY-MECH-10',
    priority: 'MEDIUM',
    subject: 'Physics',
    chapter: 'Mechanics',
    topicId: 'topic-mechanics',
    topicName: 'Rotational Motion',
    text: 'From a uniform circular disc of radius R and mass 9M, a small disc of radius R/3 is cut out tangent to the boundary. Find the moment of inertia of the remaining disc about the central perpendicular axis.',
    options: ['4 MR²', '9/2 MR²', '7/2 MR²', '5 MR²'],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Negative mass method with parallel axis theorem I_rem = I_total - (I_cm + m d²) is a classic medium-tier physics staple.',
    patternConsistencyIndex: 66,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'SIMILAR', paperSession: 'KCET-2019', questionRef: 'Q.05' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.07' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.06' }
    ],
    variations: [
      {
        id: 'var-moi-01',
        variationNumber: 'Variation 01',
        label: 'Rolling without slipping down incline',
        concept: 'Acceleration a = g sin θ / (1 + k²/r²) for cylinder vs ring vs solid sphere.',
        snippet: 'Determine race winner among rolling bodies down smooth inclined plane.',
        frequency: 'Appeared in 2022'
      }
    ]
  },
  {
    id: 'q-phy-gravitation-escape',
    code: 'PHY-GRAV-11',
    priority: 'MEDIUM',
    subject: 'Physics',
    chapter: 'Mechanics',
    topicId: 'topic-mechanics',
    topicName: 'Gravitation',
    text: 'If the radius of the Earth contracts to half its present value while its mass remains unchanged, what will be the new escape velocity from the surface? (Current escape velocity = v_e)',
    options: ['√2 v_e', '2 v_e', 'v_e / √2', 'v_e / 2'],
    historicalAppearancesCount: 3,
    lastAppearanceYear: 2023,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Escape velocity proportionality v_e = √(2GM/R) ∝ 1/√R yields factor √2 directly.',
    patternConsistencyIndex: 64,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.08' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.09' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.07' }
    ],
    variations: [
      {
        id: 'var-grav-01',
        variationNumber: 'Variation 01',
        label: 'Orbital period of satellite',
        concept: 'Kepler\'s third law T² ∝ r³ variation for dual planetary radii.',
        snippet: 'Calculate ratio of orbital periods given satellite altitudes.',
        frequency: 'Appeared in 2021'
      }
    ]
  },

  // --- Physics: LOW Priority (5) ---
  {
    id: 'q-phy-wave-optics-resolving',
    code: 'PHY-OPT-10',
    priority: 'LOW',
    subject: 'Physics',
    chapter: 'Optics',
    topicId: 'topic-wave-optics',
    topicName: 'Wave Optics',
    text: 'State Rayleigh\'s criterion and express the resolving limit dθ of an astronomical telescope with objective aperture diameter D and wavelength λ.',
    options: [
      'dθ = 1.22 λ / D',
      'dθ = 0.61 λ / D',
      'dθ = 2 λ / D',
      'dθ = 1.22 D / λ'
    ],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2020,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Resolving power has seen declining frequency as syllabus updates placed heavier emphasis on Young\'s Double Slit interference.',
    patternConsistencyIndex: 42,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.25' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.27' }
    ],
    variations: [
      {
        id: 'var-opt-01',
        variationNumber: 'Variation 01',
        label: 'Conceptual application',
        concept: 'Effect of submerging telescope objective in immersion oil on limit of resolution.',
        snippet: 'Resolving power proportional to refractive index μ.',
        frequency: 'Appeared in 2018'
      }
    ]
  },
  {
    id: 'q-phy-cyclotron-freq',
    code: 'PHY-MAG-12',
    priority: 'LOW',
    subject: 'Physics',
    chapter: 'Electromagnetism',
    topicId: 'topic-current-electricity',
    topicName: 'Magnetic Effects of Current',
    text: 'In a cyclotron, what is the relation between the cyclotron frequency f and the radius r of the circulating trajectory of the charged particle?',
    options: [
      'f is independent of r',
      'f ∝ r',
      'f ∝ 1/r',
      'f ∝ r²'
    ],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2019,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Cyclotron operation is largely curtailed in recent syllabus revisions, resulting in low exam priority.',
    patternConsistencyIndex: 38,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.21' },
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.23' }
    ],
    variations: [
      {
        id: 'var-cyc-01',
        variationNumber: 'Variation 01',
        label: 'Relativistic mass correction',
        concept: 'Frequency breakdown at relativistic velocities v ~ c.',
        snippet: 'Upper speed limit constraint leading to synchrotron design.',
        frequency: 'Appeared in 2018'
      }
    ]
  },
  {
    id: 'q-phy-viscosity-stokes',
    code: 'PHY-FLUID-13',
    priority: 'LOW',
    subject: 'Physics',
    chapter: 'Fluid Mechanics',
    topicId: 'topic-thermodynamics-phy',
    topicName: 'Properties of Matter',
    text: 'A spherical raindrop of radius r falls in air with terminal velocity v_t. What is the terminal velocity of a droplet with radius 2r?',
    options: ['4 v_t', '2 v_t', '8 v_t', 'v_t / 2'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2021,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Stokes\' law terminal speed relation v_t ∝ r² appears rarely compared to thermodynamics or electrostatics.',
    patternConsistencyIndex: 43,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2019, type: 'SIMILAR', paperSession: 'KCET-2019', questionRef: 'Q.09' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.11' }
    ],
    variations: [
      {
        id: 'var-stokes-01',
        variationNumber: 'Variation 01',
        label: 'Coalescence of droplet drops',
        concept: 'Terminal speed of combined single droplet formed from n small droplets.',
        snippet: 'New radius R = n^(1/3) r gives v_T\' = n^(2/3) v_T.',
        frequency: 'Appeared in 2019'
      }
    ]
  },
  {
    id: 'q-phy-radioactive-decay',
    code: 'PHY-NUC-14',
    priority: 'LOW',
    subject: 'Physics',
    chapter: 'Modern Physics',
    topicId: 'topic-modern-physics',
    topicName: 'Nuclear Physics',
    text: 'The half-life of a radioactive isotope is 20 days. If the initial activity is 1600 dps, what will be the activity after 80 days?',
    options: ['100 dps', '200 dps', '50 dps', '400 dps'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2020,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Direct half-life step calculations A = A₀ (1/2)^n with n = 80/20 = 4 have low difficulty and low recurrence.',
    patternConsistencyIndex: 41,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.43' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.44' }
    ],
    variations: [
      {
        id: 'var-nuc-01',
        variationNumber: 'Variation 01',
        label: 'Decay constant relation',
        concept: 'Conversion between half-life T_1/2 and mean life τ = 1/λ = T_1/2 / 0.693.',
        snippet: 'Formula derivation relating fractional undecayed nuclei.',
        frequency: 'Appeared in 2018'
      }
    ]
  },
  {
    id: 'q-phy-surface-tension-excess',
    code: 'PHY-MAT-15',
    priority: 'LOW',
    subject: 'Physics',
    chapter: 'Properties of Matter',
    topicId: 'topic-thermodynamics-phy',
    topicName: 'Properties of Fluids',
    text: 'What is the excess pressure inside a soap bubble of radius R and surface tension T blown in air?',
    options: ['ΔP = 4T / R', 'ΔP = 2T / R', 'ΔP = T / R', 'ΔP = 8T / R'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2021,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Basic single-formula recall for excess bubble pressure has seen marginal representation in modern exams.',
    patternConsistencyIndex: 39,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.07' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.08' }
    ],
    variations: [
      {
        id: 'var-surf-01',
        variationNumber: 'Variation 01',
        label: 'Liquid drop vs soap bubble',
        concept: 'Two free surfaces in bubble (4T/R) versus single surface in drop (2T/R).',
        snippet: 'Comparison of internal gauge pressures.',
        frequency: 'Appeared in 2019'
      }
    ]
  },

  // --- Physics: INSUFFICIENT EVIDENCE (5) ---
  {
    id: 'q-phy-quantum-tunneling',
    code: 'PHY-MOD-11',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Physics',
    chapter: 'Modern Physics',
    topicId: 'topic-modern-physics',
    topicName: 'Emerging Quantum Dynamics',
    text: 'Analyze the transmission coefficient T for an electron of energy E incident upon a rectangular potential barrier of height V₀ and thickness L when E < V₀.',
    options: [
      'T ≈ 16(E/V₀)(1 - E/V₀) e^(-2βL)',
      'T = 1 - (V₀²/4E(V₀-E))',
      'T = e^(-βL)',
      'T = (E/V₀)²'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Not enough historical data to confidently prioritize this question. Only 1 relevant revised syllabus paper is available in the current dataset.',
    insufficientEvidenceReason: 'Only 1 relevant syllabus paper available in dataset (KCET 2025).',
    patternConsistencyIndex: 30,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.44' }
    ],
    variations: []
  },
  {
    id: 'q-phy-graphene-dirac',
    code: 'PHY-COND-17',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Physics',
    chapter: 'Condensed Matter Physics',
    topicId: 'topic-modern-physics',
    topicName: 'Nanotechnology & Graphene',
    text: 'For electrons in monolayer graphene near the K points, the dispersion relation is linear E(k) = ℏ v_F |k|. What is the effective cyclotron mass of these charge carriers?',
    options: [
      'm* = ℏ |k| / v_F',
      'm* = 0 everywhere',
      'm* = ℏ² k² / (2m_e)',
      'm* = 2m_e'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Sparse statistical history with insufficient exam recurrences.',
    insufficientEvidenceReason: 'Novel conceptual question piloted in 2025 exam model curriculum.',
    patternConsistencyIndex: 29,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'SIMILAR', paperSession: 'KCET-2025', questionRef: 'Q.45' }
    ],
    variations: []
  },
  {
    id: 'q-phy-spintronics-gmr',
    code: 'PHY-EM-18',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Physics',
    chapter: 'Advanced Electromagnetism',
    topicId: 'topic-electrostatics',
    topicName: 'Magnetic Nanostructures',
    text: 'In a Giant Magnetoresistance (GMR) spin valve multilayers, compare the electrical resistance when magnetic moments of adjacent ferromagnetic layers are parallel vs anti-parallel.',
    options: [
      'R_parallel < R_antiparallel',
      'R_parallel > R_antiparallel',
      'R_parallel = R_antiparallel',
      'Resistance is independent of relative spin alignment'
    ],
    historicalAppearancesCount: 0,
    lastAppearanceYear: 2024,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Zero confirmed prior occurrences across standardized test sessions.',
    insufficientEvidenceReason: 'Appeared exclusively in non-mandated advanced preview questions.',
    patternConsistencyIndex: 24,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Insufficient',
      recencyGap: 'High',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2024, type: 'SIMILAR', paperSession: 'KEA-Model-2024', questionRef: 'Q.26' }
    ],
    variations: []
  },
  {
    id: 'q-phy-topological-insulator',
    code: 'PHY-TOP-19',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Physics',
    chapter: 'Solid State Physics',
    topicId: 'topic-modern-physics',
    topicName: 'Topological Quantum States',
    text: 'What fundamental electronic characteristic differentiates a 2D topological insulator from an ordinary band insulator?',
    options: [
      'Conducting gapless helical edge states with time-reversal symmetry',
      'Zero bandgap throughout the bulk',
      'High superconductivity critical temperature',
      'Absence of Fermi level'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Insufficient dataset sample points for statistical confidence.',
    insufficientEvidenceReason: 'Only 1 appearance in recent syllabus trial testing.',
    patternConsistencyIndex: 27,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.46' }
    ],
    variations: []
  },
  {
    id: 'q-phy-plasma-debye',
    code: 'PHY-PLAS-20',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Physics',
    chapter: 'Plasma Physics',
    topicId: 'topic-electrostatics',
    topicName: 'Ionized Media Dynamics',
    text: 'Calculate the Debye screening length λ_D for an ionized gas with electron density n_e = 10¹⁸ m⁻³ and thermal electron temperature T_e = 10⁴ K.',
    options: [
      'λ_D = √(ε₀ k_B T_e / (n_e e²))',
      'λ_D = ε₀ T_e / (n_e e)',
      'λ_D = n_e e² / (ε₀ k_B T_e)',
      'λ_D = √(n_e / ε₀)'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Insufficient recurrence evidence across past 8 examination cycles.',
    insufficientEvidenceReason: 'New elective topic with insufficient historical tracking data.',
    patternConsistencyIndex: 25,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.47' }
    ],
    variations: []
  },

  // ==========================================
  // CHEMISTRY (22 Questions)
  // ==========================================

  // --- Chemistry: HIGH Priority (6) ---
  {
    id: 'q-chem-coordination-cft',
    code: 'CHEM-COORD-03',
    priority: 'HIGH',
    subject: 'Chemistry',
    chapter: 'Inorganic Chemistry',
    topicId: 'topic-coordination-compounds',
    topicName: 'Coordination Compounds',
    text: 'For the hexafluoridocobaltate(III) ion [CoF₆]³⁻, determine the hybridization, geometry, and magnetic behavior using Crystal Field Theory (CFT).',
    options: [
      'sp³d², Octahedral, Paramagnetic (μ = 4.9 BM)',
      'd²sp³, Octahedral, Diamagnetic (μ = 0 BM)',
      'sp³d², Octahedral, Diamagnetic (μ = 0 BM)',
      'dsp², Square planar, Paramagnetic'
    ],
    historicalAppearancesCount: 5,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Consistently tested coordination geometry with strong recent recurrence in KEA answer keys and high topic importance.',
    patternConsistencyIndex: 70,
    studied: false,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.29' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.31' },
      { year: 2022, type: 'SIMILAR', paperSession: 'KCET-2022', questionRef: 'Q.28' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.34' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.32' }
    ],
    variations: [
      {
        id: 'var-cft-01',
        variationNumber: 'Variation 01',
        label: 'Direct calculation',
        concept: 'Spin-only magnetic moment calculation using μ = √(n(n+2)) Bohr Magnetons.',
        snippet: 'Calculate spin-only magnetic moment for Co(III) weak-field complex with 4 unpaired electrons.',
        frequency: 'Appeared in 2023 & 2025'
      }
    ]
  },
  {
    id: 'q-chem-cannizzaro',
    code: 'CHEM-ORG-06',
    priority: 'HIGH',
    subject: 'Chemistry',
    chapter: 'Organic Chemistry',
    topicId: 'topic-organic-chemistry',
    topicName: 'Aldehydes, Ketones & Carboxylic Acids',
    text: 'When benzaldehyde is heated with concentrated (50%) NaOH solution, disproportionation occurs to yield:',
    options: [
      'Benzyl alcohol and Sodium benzoate',
      'Benzoic acid and Benzal chloride',
      'Benzene and Sodium formate',
      'Cinnamic acid and Sodium phenoxide'
    ],
    historicalAppearancesCount: 6,
    lastAppearanceYear: 2024,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Cannizzaro redox disproportionation of aldehydes lacking α-hydrogen has appeared in 6 of the last 7 KCET papers.',
    patternConsistencyIndex: 75,
    studied: true,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Medium',
      questionVariation: 'High',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.34' },
      { year: 2019, type: 'SIMILAR', paperSession: 'KCET-2019', questionRef: 'Q.37' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.35' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.33' },
      { year: 2023, type: 'SIMILAR', paperSession: 'KCET-2023', questionRef: 'Q.39' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.36' }
    ],
    variations: [
      {
        id: 'var-can-01',
        variationNumber: 'Variation 01',
        label: 'Crossed Cannizzaro mechanism',
        concept: 'Benzaldehyde reacting with formaldehyde in conc. NaOH.',
        snippet: 'Formaldehyde is preferentially oxidized to sodium formate while benzaldehyde is reduced.',
        frequency: 'Appeared in 2019 & 2023'
      }
    ]
  },
  {
    id: 'q-chem-electrochem-nernst',
    code: 'CHEM-ELEC-01',
    priority: 'HIGH',
    subject: 'Chemistry',
    chapter: 'Physical Chemistry',
    topicId: 'topic-electrochemistry',
    topicName: 'Electrochemistry',
    text: 'Calculate the EMF of the Daniel cell Zn(s) | Zn²⁺(0.01 M) || Cu²⁺(1.0 M) | Cu(s) at 298 K, given E°_cell = 1.10 V.',
    options: ['1.159 V', '1.041 V', '1.100 V', '1.218 V'],
    historicalAppearancesCount: 6,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Nernst equation E_cell = E° - (0.0591/n) log ([Zn²⁺]/[Cu²⁺]) with 10⁻² ratio provides a consistent KCET numerical.',
    patternConsistencyIndex: 77,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.22' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.24' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.23' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.26' },
      { year: 2024, type: 'SIMILAR', paperSession: 'KCET-2024', questionRef: 'Q.25' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.23' }
    ],
    variations: [
      {
        id: 'var-nernst-01',
        variationNumber: 'Variation 01',
        label: 'Equilibrium constant calculation',
        concept: 'Determine log K_c = n E°_cell / 0.0591 at standard conditions.',
        snippet: 'Calculate Gibbs free energy change ΔG° = -n F E°_cell.',
        frequency: 'Appeared in 2020 & 2023'
      }
    ]
  },
  {
    id: 'q-chem-kinetics-arrhenius',
    code: 'CHEM-KIN-02',
    priority: 'HIGH',
    subject: 'Chemistry',
    chapter: 'Physical Chemistry',
    topicId: 'topic-chemical-kinetics',
    topicName: 'Chemical Kinetics',
    text: 'The rate constant of a first order reaction doubles when temperature is raised from 300 K to 310 K. Calculate the activation energy Ea (R = 8.314 J K⁻¹ mol⁻¹, log 2 = 0.3010).',
    options: ['53.6 kJ/mol', '104.2 kJ/mol', '32.4 kJ/mol', '75.8 kJ/mol'],
    historicalAppearancesCount: 5,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Temperature coefficient and Arrhenius two-point equation log(k2/k1) = (Ea/2.303R) [1/T1 - 1/T2] is highly recurrent.',
    patternConsistencyIndex: 74,
    studied: false,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.27' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.28' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.26' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.27' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.26' }
    ],
    variations: [
      {
        id: 'var-kin-01',
        variationNumber: 'Variation 01',
        label: 'First order half-life relation',
        concept: 'Determine time required for 99.9% completion t_99.9% = 10 × t_1/2.',
        snippet: 'Show relation between t_75% and t_50% for first order decay.',
        frequency: 'Appeared in 2021 & 2024'
      }
    ]
  },
  {
    id: 'q-chem-solutions-colligative',
    code: 'CHEM-SOL-04',
    priority: 'HIGH',
    subject: 'Chemistry',
    chapter: 'Physical Chemistry',
    topicId: 'topic-chemical-kinetics',
    topicName: 'Solutions',
    text: 'A 0.1 m aqueous solution of potassium ferrocyanide K₄[Fe(CN)₆] is 80% ionized. What is the observed Van \'t Hoff factor i?',
    options: ['4.2', '3.6', '5.0', '4.8'],
    historicalAppearancesCount: 5,
    lastAppearanceYear: 2024,
    recentActivity: 'High',
    variationsCount: 2,
    whyPrioritized: 'Degree of dissociation α = (i - 1)/(n - 1) with n = 5 yielding i = 1 + 4(0.8) = 4.2 has strong perennial appearance.',
    patternConsistencyIndex: 73,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.19' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.21' },
      { year: 2022, type: 'SIMILAR', paperSession: 'KCET-2022', questionRef: 'Q.20' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.22' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.21' }
    ],
    variations: [
      {
        id: 'var-sol-01',
        variationNumber: 'Variation 01',
        label: 'Elevation in boiling point',
        concept: 'Calculate ΔT_b = i K_b m for electrolyte solutions.',
        snippet: 'Comparison of boiling points for equimolar NaCl, BaCl2, and glucose.',
        frequency: 'Appeared in 2020 & 2023'
      }
    ]
  },
  {
    id: 'q-chem-aldol-condensation',
    code: 'CHEM-ORG-05',
    priority: 'HIGH',
    subject: 'Chemistry',
    chapter: 'Organic Chemistry',
    topicId: 'topic-organic-chemistry',
    topicName: 'Aldehydes, Ketones & Carboxylic Acids',
    text: 'What major product is obtained when acetaldehyde (ethanal) is treated with dilute NaOH followed by heating?',
    options: [
      'But-2-enal (Crotonaldehyde)',
      'Butan-1-ol',
      '3-Hydroxybutanal (Aldol)',
      'Ethyl acetate'
    ],
    historicalAppearancesCount: 5,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 2,
    whyPrioritized: 'Aldol condensation step involving formation of β-hydroxyaldehyde followed by dehydration to α,β-unsaturated aldehyde is tested repeatedly.',
    patternConsistencyIndex: 76,
    studied: false,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.38' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.37' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.35' },
      { year: 2024, type: 'SIMILAR', paperSession: 'KCET-2024', questionRef: 'Q.37' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.35' }
    ],
    variations: [
      {
        id: 'var-ald-01',
        variationNumber: 'Variation 01',
        label: 'Cross-aldol between ethanal and propanal',
        concept: 'Determine the mixture of 4 possible condensation products.',
        snippet: 'Self-aldol vs cross-aldol electrophilic addition products.',
        frequency: 'Appeared in 2021 & 2024'
      }
    ]
  },

  // --- Chemistry: MEDIUM Priority (6) ---
  {
    id: 'q-chem-amines-diazonium',
    code: 'CHEM-AMINE-07',
    priority: 'MEDIUM',
    subject: 'Chemistry',
    chapter: 'Organic Chemistry',
    topicId: 'topic-organic-chemistry',
    topicName: 'Amines & Diazonium Salts',
    text: 'When aniline is treated with NaNO₂ and dilute HCl at 273–278 K followed by reaction with Cu₂Cl₂/HCl, what product is formed?',
    options: ['Chlorobenzene', 'Phenol', 'Nitrobenzene', 'Benzamide'],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Sandmeyer reaction via benzenediazonium chloride is a high-yield organic synthesis path in KCET Chemistry.',
    patternConsistencyIndex: 68,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.41' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.42' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.40' }
    ],
    variations: [
      {
        id: 'var-amine-01',
        variationNumber: 'Variation 01',
        label: 'Azo dye coupling reaction',
        concept: 'Coupling of benzenediazonium chloride with alkaline phenol to yield p-hydroxyazobenzene.',
        snippet: 'Formation of orange/yellow dye in weak basic medium.',
        frequency: 'Appeared in 2021 & 2024'
      }
    ]
  },
  {
    id: 'q-chem-pblock-xenon',
    code: 'CHEM-PBLOCK-08',
    priority: 'MEDIUM',
    subject: 'Chemistry',
    chapter: 'Inorganic Chemistry',
    topicId: 'topic-inorganic-pblock',
    topicName: 'p-Block Elements',
    text: 'Determine the molecular shape and the number of lone pairs on the central Xenon atom in Xenon tetrafluoride (XeF₄).',
    options: [
      'Square planar, 2 lone pairs',
      'Tetrahedral, 0 lone pairs',
      'See-saw, 1 lone pair',
      'Square pyramidal, 1 lone pair'
    ],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2023,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'VSEPR geometry sp³d² with 2 axial lone pairs and 4 equatorial fluorines is repeatedly questioned.',
    patternConsistencyIndex: 66,
    studied: false,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.32' },
      { year: 2020, type: 'SIMILAR', paperSession: 'KCET-2020', questionRef: 'Q.33' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.31' }
    ],
    variations: [
      {
        id: 'var-xe-01',
        variationNumber: 'Variation 01',
        label: 'Hydrolysis products of XeF6',
        concept: 'Complete hydrolysis to XeO3 and partial hydrolysis to XeOF4.',
        snippet: 'Equations: XeF6 + H2O -> XeOF4 + 2HF.',
        frequency: 'Appeared in 2020'
      }
    ]
  },
  {
    id: 'q-chem-biomolecules-glucose',
    code: 'CHEM-BIO-09',
    priority: 'MEDIUM',
    subject: 'Chemistry',
    chapter: 'Biomolecules',
    topicId: 'topic-organic-chemistry',
    topicName: 'Biomolecules',
    text: 'What product is formed when D-glucose is oxidized with mild oxidizing agent bromine water (Br₂/H₂O)?',
    options: ['Gluconic acid', 'Glucaric (Saccharic) acid', 'Sorbitol', 'n-Hexane'],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Selective oxidation of aldehyde group to carboxylic acid proving presence of -CHO group in glucose structure.',
    patternConsistencyIndex: 67,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.46' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.48' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.45' }
    ],
    variations: [
      {
        id: 'var-glu-01',
        variationNumber: 'Variation 01',
        label: 'Nitric acid oxidation',
        concept: 'Strong oxidation with conc. HNO3 yielding dicarboxylic saccharic acid.',
        snippet: 'Proves presence of terminal primary alcoholic -CH2OH group.',
        frequency: 'Appeared in 2021'
      }
    ]
  },
  {
    id: 'q-chem-thermo-gibbs',
    code: 'CHEM-THERM-10',
    priority: 'MEDIUM',
    subject: 'Chemistry',
    chapter: 'Physical Chemistry',
    topicId: 'topic-chemical-kinetics',
    topicName: 'Chemical Thermodynamics',
    text: 'For a reaction at 300 K, ΔH = -10.0 kJ mol⁻¹ and ΔS = -40 J K⁻¹ mol⁻¹. At what temperature will the reaction attain equilibrium (ΔG = 0)?',
    options: ['250 K', '400 K', '300 K', '500 K'],
    historicalAppearancesCount: 3,
    lastAppearanceYear: 2023,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'T_eq = ΔH / ΔS = (-10000 J) / (-40 J/K) = 250 K Gibbs equilibrium temperature calculation.',
    patternConsistencyIndex: 64,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'SIMILAR', paperSession: 'KCET-2019', questionRef: 'Q.17' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.19' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.18' }
    ],
    variations: [
      {
        id: 'var-gibbs-01',
        variationNumber: 'Variation 01',
        label: 'Spontaneity conditions',
        concept: 'Determine temperature threshold where ΔG becomes negative.',
        snippet: 'Reaction is spontaneous below 250 K.',
        frequency: 'Appeared in 2021'
      }
    ]
  },
  {
    id: 'q-chem-coordination-isomerism',
    code: 'CHEM-COORD-11',
    priority: 'MEDIUM',
    subject: 'Chemistry',
    chapter: 'Inorganic Chemistry',
    topicId: 'topic-coordination-compounds',
    topicName: 'Coordination Compounds',
    text: 'Which type of isomerism is exhibited by the pair of coordination compounds [Co(NH₃)₅(SO₄)]Br and [Co(NH₃)₅Br]SO₄?',
    options: ['Ionization isomerism', 'Linkage isomerism', 'Coordination isomerism', 'Hydrate isomerism'],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Exchange of counter-ion with coordinating ligand yielding different precipitates with BaCl2 and AgNO3.',
    patternConsistencyIndex: 66,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.31' },
      { year: 2020, type: 'SIMILAR', paperSession: 'KCET-2020', questionRef: 'Q.30' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.33' }
    ],
    variations: [
      {
        id: 'var-iso-01',
        variationNumber: 'Variation 01',
        label: 'Linkage isomerism with ambidentate ligand',
        concept: 'Nitro (-NO2) vs nitrito (-ONO) coordination through N vs O.',
        snippet: 'Pair [Co(NH3)5(NO2)]Cl2 and [Co(NH3)5(ONO)]Cl2.',
        frequency: 'Appeared in 2020'
      }
    ]
  },
  {
    id: 'q-chem-sn1-sn2-haloalkanes',
    code: 'CHEM-HALO-12',
    priority: 'MEDIUM',
    subject: 'Chemistry',
    chapter: 'Organic Chemistry',
    topicId: 'topic-organic-chemistry',
    topicName: 'Haloalkanes & Haloarenes',
    text: 'Arrange the following alkyl halides in decreasing order of reactivity towards SN2 nucleophilic substitution: 1-Bromobutane, 2-Bromobutane, 2-Bromo-2-methylpropane.',
    options: [
      '1-Bromobutane > 2-Bromobutane > 2-Bromo-2-methylpropane',
      '2-Bromo-2-methylpropane > 2-Bromobutane > 1-Bromobutane',
      '2-Bromobutane > 1-Bromobutane > 2-Bromo-2-methylpropane',
      'All have identical reactivity'
    ],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Steric hindrance ordering 1° > 2° > 3° in bimolecular SN2 vs carbocation stability 3° > 2° > 1° in SN1.',
    patternConsistencyIndex: 69,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'SIMILAR', paperSession: 'KCET-2019', questionRef: 'Q.35' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.32' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.34' }
    ],
    variations: [
      {
        id: 'var-sn-01',
        variationNumber: 'Variation 01',
        label: 'Stereochemical outcome comparison',
        concept: 'Inversion of configuration (Walden inversion) in SN2 vs partial racemization in SN1.',
        snippet: 'Optically active 2-bromooctane conversion with OH-.',
        frequency: 'Appeared in 2022'
      }
    ]
  },

  // --- Chemistry: LOW Priority (5) ---
  {
    id: 'q-chem-metallurgy-ellirgham',
    code: 'CHEM-MET-13',
    priority: 'LOW',
    subject: 'Chemistry',
    chapter: 'Inorganic Chemistry',
    topicId: 'topic-inorganic-pblock',
    topicName: 'General Principles of Metallurgy',
    text: 'According to the Ellingham diagram, at temperatures above 1073 K, which reducing agent is thermodynamically more favorable for reducing FeO to Fe?',
    options: ['C (forming CO)', 'CO (forming CO₂)', 'Al', 'H₂'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2020,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'General principles of metallurgy has been phased out from core questions in recent state curricula.',
    patternConsistencyIndex: 39,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.25' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.27' }
    ],
    variations: [
      {
        id: 'var-ell-01',
        variationNumber: 'Variation 01',
        label: 'Slope interpretation',
        concept: 'Negative slope of C + 1/2 O2 -> CO due to increase in entropy.',
        snippet: 'Comparison of line intersection points on ΔG° vs T axes.',
        frequency: 'Appeared in 2018'
      }
    ]
  },
  {
    id: 'q-chem-polymers-nylon',
    code: 'CHEM-POLY-14',
    priority: 'LOW',
    subject: 'Chemistry',
    chapter: 'Polymers',
    topicId: 'topic-organic-chemistry',
    topicName: 'Polymers',
    text: 'Identify the repeating monomers required for the condensation polymerization synthesis of Nylon 6,6.',
    options: [
      'Hexamethylenediamine and Adipic acid',
      'Caprolactam and Terephthalic acid',
      'Ethylene glycol and Phthalic acid',
      'Phenol and Formaldehyde'
    ],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2021,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Polymers unit removed from revised syllabus sections, resulting in low future priority.',
    patternConsistencyIndex: 37,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.45' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.47' }
    ],
    variations: [
      {
        id: 'var-poly-01',
        variationNumber: 'Variation 01',
        label: 'Buna-S copolymerization',
        concept: 'Monomers of Buna-S: 1,3-butadiene and styrene.',
        snippet: 'Free radical addition polymerization identification.',
        frequency: 'Appeared in 2019'
      }
    ]
  },
  {
    id: 'q-chem-surface-adsorption',
    code: 'CHEM-SURF-15',
    priority: 'LOW',
    subject: 'Chemistry',
    chapter: 'Physical Chemistry',
    topicId: 'topic-chemical-kinetics',
    topicName: 'Surface Chemistry',
    text: 'In the Freundlich adsorption isotherm x/m = k P^(1/n), what are the limits of the exponent 1/n under normal physical conditions?',
    options: ['Between 0 and 1', 'Always equal to 1', 'Greater than 2', 'Between -1 and 0'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2020,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Surface Chemistry has reduced blueprint weighting with minimal complex problem variations.',
    patternConsistencyIndex: 40,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.24' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.25' }
    ],
    variations: [
      {
        id: 'var-surf-chem-01',
        variationNumber: 'Variation 01',
        label: 'Logarithmic plot slope',
        concept: 'Slope of log(x/m) vs log P equals 1/n and intercept equals log k.',
        snippet: 'Graphical determination of empirical constants.',
        frequency: 'Appeared in 2018'
      }
    ]
  },
  {
    id: 'q-chem-solid-state-bragg',
    code: 'CHEM-SOLID-16',
    priority: 'LOW',
    subject: 'Chemistry',
    chapter: 'Physical Chemistry',
    topicId: 'topic-chemical-kinetics',
    topicName: 'Solid State',
    text: 'An element crystallizes in a face-centered cubic (FCC) lattice with edge length a = 400 pm. What is the radius r of the constituent atom?',
    options: ['r = 141.4 pm', 'r = 173.2 pm', 'r = 200.0 pm', 'r = 100.0 pm'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2021,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Solid state geometry formula r = a / (2√2) carries diminished frequency in current examination patterns.',
    patternConsistencyIndex: 41,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2019, type: 'SIMILAR', paperSession: 'KCET-2019', questionRef: 'Q.20' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.22' }
    ],
    variations: [
      {
        id: 'var-fcc-01',
        variationNumber: 'Variation 01',
        label: 'Density calculation of unit cell',
        concept: 'Formula d = (z M) / (a³ N_A) with z=4 for FCC structure.',
        snippet: 'Determine atomic mass given crystal density.',
        frequency: 'Appeared in 2019'
      }
    ]
  },
  {
    id: 'q-chem-environmental-smog',
    code: 'CHEM-ENV-17',
    priority: 'LOW',
    subject: 'Chemistry',
    chapter: 'Environmental Chemistry',
    topicId: 'topic-organic-chemistry',
    topicName: 'Environmental Chemistry',
    text: 'Which among the following is NOT a primary component of classical (London) reducing smog?',
    options: ['Peroxyacetyl nitrate (PAN)', 'Sulfur dioxide (SO₂)', 'Smoke particulates', 'Fog droplets'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2020,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Descriptive environmental pollution questions have low discriminating value in rank calculation.',
    patternConsistencyIndex: 38,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.48' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.50' }
    ],
    variations: [
      {
        id: 'var-env-01',
        variationNumber: 'Variation 01',
        label: 'Ozone depletion catalytic cycle',
        concept: 'Chlorine free radical catalytic breakdown of stratospheric ozone.',
        snippet: 'Role of CFCs and reactive chlorine monoxide ClO intermediate.',
        frequency: 'Appeared in 2018'
      }
    ]
  },

  // --- Chemistry: INSUFFICIENT EVIDENCE (5) ---
  {
    id: 'q-chem-metallocene-sandwich',
    code: 'CHEM-ORGANO-18',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Chemistry',
    chapter: 'Inorganic Chemistry',
    topicId: 'topic-coordination-compounds',
    topicName: 'Organometallic Chemistry',
    text: 'According to the 18-electron rule, determine the hapticity η and oxidation state of Iron in neutral ferrocene Fe(C₅H₅)₂.',
    options: [
      'Fe(II), η⁵-cyclopentadienyl rings',
      'Fe(III), η³-cyclopentadienyl rings',
      'Fe(0), η⁶-rings',
      'Fe(IV), η¹-rings'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Single exploratory appearance in revised 2025 question pool with insufficient historical recurrence.',
    insufficientEvidenceReason: 'Only 1 historical occurrence in KCET 2025 prototype sample paper.',
    patternConsistencyIndex: 28,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.37' }
    ],
    variations: []
  },
  {
    id: 'q-chem-asymmetric-catalysis',
    code: 'CHEM-CAT-19',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Chemistry',
    chapter: 'Organic Synthesis',
    topicId: 'topic-organic-chemistry',
    topicName: 'Asymmetric Catalysis',
    text: 'In the Noyori asymmetric hydrogenation of prochiral ketones, what is the role of the BINAP chiral diphosphine ruthenium complex?',
    options: [
      'Induces enantioselective hydride transfer to yield optical isomers',
      'Acts as a phase transfer catalyst',
      'Prevents enolization by neutralizing acid',
      'Oxidizes ketone to ester via Baeyer-Villiger mechanism'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Insufficient recurrence data; tested once in higher-tier advanced test model.',
    insufficientEvidenceReason: 'No prior paper occurrences in past 7 years.',
    patternConsistencyIndex: 25,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'SIMILAR', paperSession: 'KCET-2025', questionRef: 'Q.38' }
    ],
    variations: []
  },
  {
    id: 'q-chem-green-photocatalysis',
    code: 'CHEM-PHOTO-20',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Chemistry',
    chapter: 'Applied Chemistry',
    topicId: 'topic-chemical-kinetics',
    topicName: 'Green Chemistry & Nanomaterials',
    text: 'Calculate the theoretical threshold wavelength λ_max of light required to excite electron-hole pairs across the 3.2 eV bandgap of anatase TiO₂ nanoparticles.',
    options: ['387.5 nm', '520.0 nm', '250.0 nm', '650.0 nm'],
    historicalAppearancesCount: 0,
    lastAppearanceYear: 2024,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Lack of verified recurring pattern in standardized entrance exams.',
    insufficientEvidenceReason: 'Appeared solely in pilot model assessment.',
    patternConsistencyIndex: 23,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Insufficient',
      recencyGap: 'High',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2024, type: 'SIMILAR', paperSession: 'KEA-Model-2024', questionRef: 'Q.30' }
    ],
    variations: []
  },
  {
    id: 'q-chem-supramolecular-cage',
    code: 'CHEM-SUPRA-21',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Chemistry',
    chapter: 'Modern Chemistry',
    topicId: 'topic-coordination-compounds',
    topicName: 'Supramolecular Host-Guest Chemistry',
    text: 'Which alkali metal cation is selectively encapsulated inside the cavity of 18-crown-6 ether due to optimal ionic radius match?',
    options: ['K⁺ (Potassium)', 'Li⁺ (Lithium)', 'Na⁺ (Sodium)', 'Cs⁺ (Cesium)'],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Insufficient dataset instances to determine reliable recurrence.',
    insufficientEvidenceReason: 'Only 1 appearance in 2025 supplementary blueprint.',
    patternConsistencyIndex: 30,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.40' }
    ],
    variations: []
  },
  {
    id: 'q-chem-spectroscopy-nmr',
    code: 'CHEM-SPEC-22',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Chemistry',
    chapter: 'Analytical Chemistry',
    topicId: 'topic-organic-chemistry',
    topicName: 'Spectroscopic Methods',
    text: 'Predict the number of peaks and splitting multiplicity observed in the ¹H-NMR spectrum of pure 1,1-dibromoethane (CH₃-CHBr₂).',
    options: [
      'Two signals: a doublet for -CH₃ and a quartet for -CH-',
      'One singlet signal only',
      'Two singlets',
      'A triplet and a quartet'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Insufficient evidence due to single occurrence in trial syllabus module.',
    insufficientEvidenceReason: 'Introduced as advanced concept in 2025 testing cycle.',
    patternConsistencyIndex: 26,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.41' }
    ],
    variations: []
  },

  // ==========================================
  // BIOLOGY (22 Questions)
  // ==========================================

  // --- Biology: HIGH Priority (6) ---
  {
    id: 'q-bio-lac-operon',
    code: 'BIO-GEN-05',
    priority: 'HIGH',
    subject: 'Biology',
    chapter: 'Genetics',
    topicId: 'topic-genetics',
    topicName: 'Genetics & Molecular Biology',
    text: 'In the lac operon of Escherichia coli, what occurs when lactose (allolactose) binds to the repressor protein produced by the i-gene?',
    options: [
      'Repressor is inactivated, detaches from operator, enabling RNA polymerase transcription',
      'Repressor is activated, binding tightly to promoter to block operator',
      'Corepressor terminates polycistronic mRNA transcription prematurely',
      'Inducer binds directly to RNA polymerase to stimulate promoter clearance'
    ],
    historicalAppearancesCount: 6,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'High topic weighting and recurrent examination pattern across multiple years (2019, 2021, 2023, 2025).',
    patternConsistencyIndex: 76,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.42' },
      { year: 2020, type: 'NONE' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.45' },
      { year: 2022, type: 'NONE' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.48' },
      { year: 2024, type: 'NONE' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.43' }
    ],
    variations: [
      {
        id: 'var-lac-01',
        variationNumber: 'Variation 01',
        label: 'Direct calculation',
        concept: 'Identify the structural genes z, y, a and their respective enzymatic products (β-galactosidase, permease, transacetylase).',
        snippet: 'Which enzyme is encoded by the lacZ gene in the operon?',
        frequency: 'Appeared in 2019 & 2023'
      }
    ]
  },
  {
    id: 'q-bio-dna-replication-enzymes',
    code: 'BIO-MOL-01',
    priority: 'HIGH',
    subject: 'Biology',
    chapter: 'Molecular Biology',
    topicId: 'topic-genetics',
    topicName: 'Genetics & Molecular Biology',
    text: 'During semi-conservative DNA replication in prokaryotes, which enzyme synthesizes the short RNA primer required to initiate synthesis on both strands?',
    options: ['RNA Primase', 'DNA Ligase', 'DNA Polymerase I', 'Helicase'],
    historicalAppearancesCount: 6,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Enzyme functions during DNA replication (Helicase, Primase, Polymerase III, Ligase) have recurrent presence in biology papers.',
    patternConsistencyIndex: 78,
    studied: true,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'High',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.44' },
      { year: 2020, type: 'SIMILAR', paperSession: 'KCET-2020', questionRef: 'Q.46' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.42' },
      { year: 2023, type: 'SIMILAR', paperSession: 'KCET-2023', questionRef: 'Q.45' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.43' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.41' }
    ],
    variations: [
      {
        id: 'var-dna-01',
        variationNumber: 'Variation 01',
        label: 'Okazaki fragment joining',
        concept: 'Role of DNA Ligase in joining discontinuously synthesized fragments on lagging strand.',
        snippet: 'Phosphodiester bond creation between 3\'-OH and 5\'-phosphate.',
        frequency: 'Appeared in 2020 & 2024'
      }
    ]
  },
  {
    id: 'q-bio-mendelian-dihybrid',
    code: 'BIO-MEND-02',
    priority: 'HIGH',
    subject: 'Biology',
    chapter: 'Genetics',
    topicId: 'topic-genetics',
    topicName: 'Principles of Inheritance',
    text: 'In Mendel\'s dihybrid cross between homozygous round yellow (RRYY) and wrinkled green (rryy) pea plants, what proportion of F₂ progeny are recombinant phenotypes?',
    options: ['6 / 16 (37.5%)', '9 / 16 (56.25%)', '10 / 16 (62.5%)', '2 / 16 (12.5%)'],
    historicalAppearancesCount: 6,
    lastAppearanceYear: 2024,
    recentActivity: 'High',
    variationsCount: 3,
    whyPrioritized: 'Mendel\'s 9:3:3:1 phenotypic dihybrid ratio with 3/16 round green + 3/16 wrinkled yellow recombinants is an absolute staple.',
    patternConsistencyIndex: 77,
    studied: false,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.39' },
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.40' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.41' },
      { year: 2022, type: 'SIMILAR', paperSession: 'KCET-2022', questionRef: 'Q.44' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.42' }
    ],
    variations: [
      {
        id: 'var-mend-01',
        variationNumber: 'Variation 01',
        label: 'Genotypic frequency of double heterozygotes',
        concept: 'Proportion of RrYy plants in F2 equals 4/16 (25%).',
        snippet: 'Calculation of exact homozygous vs heterozygous combinations.',
        frequency: 'Appeared in 2019 & 2021'
      }
    ]
  },
  {
    id: 'q-bio-biotech-pcr',
    code: 'BIO-TECH-03',
    priority: 'HIGH',
    subject: 'Biology',
    chapter: 'Biotechnology',
    topicId: 'topic-biotech',
    topicName: 'Biotechnology: Principles & Processes',
    text: 'What is the correct sequential order of the three main cyclic steps in Polymerase Chain Reaction (PCR)?',
    options: [
      'Denaturation -> Annealing -> Extension',
      'Annealing -> Denaturation -> Extension',
      'Extension -> Annealing -> Denaturation',
      'Denaturation -> Extension -> Ligation'
    ],
    historicalAppearancesCount: 6,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 2,
    whyPrioritized: 'PCR reaction sequence and thermostable Taq DNA polymerase isolated from Thermus aquaticus appear consistently every session.',
    patternConsistencyIndex: 79,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'Low',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.51' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.53' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.52' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.55' },
      { year: 2024, type: 'SIMILAR', paperSession: 'KCET-2024', questionRef: 'Q.54' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.52' }
    ],
    variations: [
      {
        id: 'var-pcr-01',
        variationNumber: 'Variation 01',
        label: 'Thermal parameter match',
        concept: 'Denaturation (~94°C), Annealing (~54°C), and Extension (~72°C).',
        snippet: 'Identify specific temperatures matching each stage.',
        frequency: 'Appeared in 2020 & 2025'
      }
    ]
  },
  {
    id: 'q-bio-photosynthesis-calvin',
    code: 'BIO-PLANT-04',
    priority: 'HIGH',
    subject: 'Biology',
    chapter: 'Plant Physiology',
    topicId: 'topic-plant-physiology',
    topicName: 'Photosynthesis in Higher Plants',
    text: 'In the Calvin cycle (C3 pathway), how many ATP and NADPH molecules are consumed in total to synthesize one single molecule of glucose?',
    options: ['18 ATP and 12 NADPH', '12 ATP and 18 NADPH', '36 ATP and 12 NADPH', '24 ATP and 16 NADPH'],
    historicalAppearancesCount: 5,
    lastAppearanceYear: 2025,
    recentActivity: 'High',
    variationsCount: 2,
    whyPrioritized: 'Quantitative energetics of the C3 and C4 pathways (3 ATP + 2 NADPH per CO2 fixed x 6 cycles = 18 ATP + 12 NADPH) is tested perennially.',
    patternConsistencyIndex: 75,
    studied: false,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Low',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.26' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.27' },
      { year: 2022, type: 'EXACT', paperSession: 'KCET-2022', questionRef: 'Q.29' },
      { year: 2024, type: 'SIMILAR', paperSession: 'KCET-2024', questionRef: 'Q.28' },
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.27' }
    ],
    variations: [
      {
        id: 'var-calvin-01',
        variationNumber: 'Variation 01',
        label: 'C4 pathway energetic comparison',
        concept: 'C4 requires additional 12 ATP (total 30 ATP) due to PEP regeneration.',
        snippet: 'Contrast energetic cost between C3 and C4 plants for hexose synthesis.',
        frequency: 'Appeared in 2021 & 2024'
      }
    ]
  },
  {
    id: 'q-bio-cardiac-cycle-ecg',
    code: 'BIO-PHYS-05',
    priority: 'HIGH',
    subject: 'Biology',
    chapter: 'Human Physiology',
    topicId: 'topic-human-physiology',
    topicName: 'Circulation & Body Fluids',
    text: 'In a standard standard electrocardiogram (ECG), what physiological cardiac event does the QRS complex represent?',
    options: [
      'Depolarization of ventricles (ventricular contraction)',
      'Depolarization of atria',
      'Repolarization of ventricles',
      'Repolarization of atria'
    ],
    historicalAppearancesCount: 6,
    lastAppearanceYear: 2024,
    recentActivity: 'High',
    variationsCount: 2,
    whyPrioritized: 'ECG wave interpretation (P wave = atrial depolarization, QRS = ventricular depolarization, T wave = ventricular repolarization) is a high-yield question.',
    patternConsistencyIndex: 78,
    studied: true,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'High',
      recentRelevance: 'High',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'High'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.32' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.34' },
      { year: 2021, type: 'SIMILAR', paperSession: 'KCET-2021', questionRef: 'Q.33' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.36' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.35' }
    ],
    variations: [
      {
        id: 'var-ecg-01',
        variationNumber: 'Variation 01',
        label: 'Heart rate determination from QRS count',
        concept: 'Counting number of QRS complexes in a given time interval to determine pulse.',
        snippet: 'Clinical calculation of cardiac output = stroke volume × heart rate.',
        frequency: 'Appeared in 2020 & 2023'
      }
    ]
  },

  // --- Biology: MEDIUM Priority (6) ---
  {
    id: 'q-bio-recombinant-cloning-vector',
    code: 'BIO-TECH-06',
    priority: 'MEDIUM',
    subject: 'Biology',
    chapter: 'Biotechnology',
    topicId: 'topic-biotech',
    topicName: 'Biotechnology: Principles & Processes',
    text: 'In the artificial cloning vector pBR322, if foreign DNA is ligated at the BamHI site within the tetracycline resistance gene (tetR), what is the resulting recombinant phenotype?',
    options: [
      'Ampicillin resistant and Tetracycline sensitive',
      'Ampicillin sensitive and Tetracycline resistant',
      'Resistant to both Ampicillin and Tetracycline',
      'Sensitive to both antibiotics'
    ],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Insertional inactivation selection mechanism in pBR322 is a standard recurring question in modern genetics/biotech.',
    patternConsistencyIndex: 69,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.53' },
      { year: 2022, type: 'SIMILAR', paperSession: 'KCET-2022', questionRef: 'Q.55' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.52' }
    ],
    variations: [
      {
        id: 'var-vec-pbr-01',
        variationNumber: 'Variation 01',
        label: 'PstI insertion in ampR gene',
        concept: 'Insertional inactivation of ampicillin resistance with PstI cleavage.',
        snippet: 'Recombinant grows on tetracycline agar but dies on ampicillin plate.',
        frequency: 'Appeared in 2022'
      }
    ]
  },
  {
    id: 'q-bio-neural-synapse',
    code: 'BIO-PHYS-07',
    priority: 'MEDIUM',
    subject: 'Biology',
    chapter: 'Human Physiology',
    topicId: 'topic-human-physiology',
    topicName: 'Neural Control & Coordination',
    text: 'What specific ion influx triggers synaptic vesicles to fuse with the pre-synaptic membrane and release acetylcholine into the synaptic cleft?',
    options: ['Ca²⁺ (Calcium)', 'Na⁺ (Sodium)', 'K⁺ (Potassium)', 'Cl⁻ (Chloride)'],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2023,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Voltage-gated calcium channels opening at axon terminal to mediate exocytosis of neurotransmitters.',
    patternConsistencyIndex: 67,
    studied: false,
    saved: true,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.35' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.37' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.38' }
    ],
    variations: [
      {
        id: 'var-syn-01',
        variationNumber: 'Variation 01',
        label: 'Action potential repolarization ion',
        concept: 'Efflux of K+ ions causing return to resting membrane potential (-70 mV).',
        snippet: 'Sodium-potassium pump restores resting chemical gradients (3 Na+ out, 2 K+ in).',
        frequency: 'Appeared in 2020'
      }
    ]
  },
  {
    id: 'q-bio-gametogenesis-meiosis',
    code: 'BIO-REP-08',
    priority: 'MEDIUM',
    subject: 'Biology',
    chapter: 'Human Reproduction',
    topicId: 'topic-human-physiology',
    topicName: 'Human Reproduction',
    text: 'At which stage of cell division is the primary oocyte temporarily arrested until ovulation occurs at puberty?',
    options: [
      'Prophase I (Diplotene) of Meiosis I',
      'Metaphase II of Meiosis II',
      'Anaphase I of Meiosis I',
      'Telophase II'
    ],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Meiotic arrest points (Diplotene in primary oocyte; Metaphase II in secondary oocyte until fertilization) are tested routinely.',
    patternConsistencyIndex: 68,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'SIMILAR', paperSession: 'KCET-2019', questionRef: 'Q.33' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.36' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.32' }
    ],
    variations: [
      {
        id: 'var-ooc-01',
        variationNumber: 'Variation 01',
        label: 'Secondary oocyte completion trigger',
        concept: 'Sperm entry through zona pellucida triggers breakdown of MPF and completion of Meiosis II.',
        snippet: 'Extrusion of second polar body upon fertilization.',
        frequency: 'Appeared in 2021'
      }
    ]
  },
  {
    id: 'q-bio-ecology-food-chain',
    code: 'BIO-ECO-09',
    priority: 'MEDIUM',
    subject: 'Biology',
    chapter: 'Ecology',
    topicId: 'topic-ecology',
    topicName: 'Ecology & Environment',
    text: 'According to Lindeman\'s 10% law of energy transfer, if 20,000 J of solar energy is captured by primary producers (plants), how much energy reaches secondary consumers (carnivores)?',
    options: ['200 J', '20 J', '2,000 J', '2 J'],
    historicalAppearancesCount: 4,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Trophic level calculation (Producers 20,000 J -> Herbivores 2,000 J -> Carnivores 200 J) is a classic medium-tier KCET question.',
    patternConsistencyIndex: 66,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.57' },
      { year: 2022, type: 'SIMILAR', paperSession: 'KCET-2022', questionRef: 'Q.58' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.57' }
    ],
    variations: [
      {
        id: 'var-eco-01',
        variationNumber: 'Variation 01',
        label: 'Inverted ecological pyramids',
        concept: 'Inverted pyramid of biomass in aquatic ecosystem (phytoplankton < zooplankton < small fish).',
        snippet: 'Contrast upright grassland pyramid with inverted marine standing crop.',
        frequency: 'Appeared in 2022'
      }
    ]
  },
  {
    id: 'q-bio-endocrine-feedback',
    code: 'BIO-PHYS-10',
    priority: 'MEDIUM',
    subject: 'Biology',
    chapter: 'Human Physiology',
    topicId: 'topic-human-physiology',
    topicName: 'Chemical Coordination & Integration',
    text: 'Which pituitary hormone stimulates the Leydig cells of the testes to synthesize and secrete androgens (testosterone)?',
    options: [
      'Luteinizing Hormone (LH / ICSH)',
      'Follicle Stimulating Hormone (FSH)',
      'Prolactin',
      'Adrenocorticotropic Hormone (ACTH)'
    ],
    historicalAppearancesCount: 3,
    lastAppearanceYear: 2023,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Feedback axis GnRH -> LH stimulates Leydig cells, whereas FSH acts on Sertoli cells for spermiogenesis.',
    patternConsistencyIndex: 65,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2019, type: 'SIMILAR', paperSession: 'KCET-2019', questionRef: 'Q.36' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.38' },
      { year: 2023, type: 'EXACT', paperSession: 'KCET-2023', questionRef: 'Q.39' }
    ],
    variations: [
      {
        id: 'var-endo-01',
        variationNumber: 'Variation 01',
        label: 'Sertoli cell inhibin feedback',
        concept: 'Inhibin peptide secreted by Sertoli cells selectively suppresses FSH secretion.',
        snippet: 'Negative feedback loop regulating spermatogenesis rate.',
        frequency: 'Appeared in 2021'
      }
    ]
  },
  {
    id: 'q-bio-plant-transport-xylem',
    code: 'BIO-PLANT-11',
    priority: 'MEDIUM',
    subject: 'Biology',
    chapter: 'Plant Physiology',
    topicId: 'topic-plant-physiology',
    topicName: 'Transport in Plants',
    text: 'According to Dixon and Joly\'s Cohesion-Tension theory, what physical properties of water molecules maintain the continuous sap column in xylem vessels?',
    options: [
      'Cohesion, Adhesion, and Surface tension',
      'Active proton pumping and ATP hydrolysis',
      'Osmotic root pressure alone',
      'Guttation and phloem loading'
    ],
    historicalAppearancesCount: 3,
    lastAppearanceYear: 2024,
    recentActivity: 'Medium',
    variationsCount: 2,
    whyPrioritized: 'Physical properties of water enabling transpiration pull up to 130 meters without cavitation.',
    patternConsistencyIndex: 64,
    studied: true,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Medium',
      recentRelevance: 'Medium',
      recencyGap: 'Medium',
      questionVariation: 'Medium',
      topicRelevance: 'Medium'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.22' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.24' },
      { year: 2024, type: 'EXACT', paperSession: 'KCET-2024', questionRef: 'Q.26' }
    ],
    variations: [
      {
        id: 'var-xylem-01',
        variationNumber: 'Variation 01',
        label: 'Stomatal opening mechanism',
        concept: 'K+ ion influx and malate synthesis in guard cells creating endosmosis.',
        snippet: 'Proton-potassium pump theory of Levitt.',
        frequency: 'Appeared in 2020'
      }
    ]
  },

  // --- Biology: LOW Priority (5) ---
  {
    id: 'q-bio-evolution-hardy-weinberg',
    code: 'BIO-EVO-12',
    priority: 'LOW',
    subject: 'Biology',
    chapter: 'Evolution',
    topicId: 'topic-genetics',
    topicName: 'Evolutionary Biology',
    text: 'In a population at Hardy-Weinberg equilibrium, the frequency of homozygous recessive individuals (q²) is 0.04. What is the percentage frequency of heterozygous carriers (2pq)?',
    options: ['32%', '16%', '64%', '48%'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2020,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'q² = 0.04 => q = 0.2, p = 0.8, 2pq = 2(0.8)(0.2) = 0.32 (32%). While standard, this mathematical genetic calculation has diminished in frequency.',
    patternConsistencyIndex: 42,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.47' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.49' }
    ],
    variations: [
      {
        id: 'var-hw-01',
        variationNumber: 'Variation 01',
        label: 'Factors disrupting equilibrium',
        concept: 'Five forces: gene flow, genetic drift, mutation, genetic recombination, natural selection.',
        snippet: 'Effect of Founder effect and genetic bottleneck on allele frequencies.',
        frequency: 'Appeared in 2018'
      }
    ]
  },
  {
    id: 'q-bio-microbes-sewage',
    code: 'BIO-MIC-13',
    priority: 'LOW',
    subject: 'Biology',
    chapter: 'Microbes in Human Welfare',
    topicId: 'topic-ecology',
    topicName: 'Microbes in Human Welfare',
    text: 'In secondary (biological) sewage treatment, what is the primary diagnostic biological indicator that wastewater pollution has significantly decreased?',
    options: [
      'Sharp reduction in Biochemical Oxygen Demand (BOD)',
      'Increase in anaerobic methanogens in aeration tank',
      'Formation of primary sludge precipitate',
      'Chlorination of effluent'
    ],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2021,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Descriptive microbial sewage treatment questions carry low conceptual difficulty and reduced paper allocation.',
    patternConsistencyIndex: 40,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.50' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.51' }
    ],
    variations: [
      {
        id: 'var-sew-01',
        variationNumber: 'Variation 01',
        label: 'Biogas composition in anaerobic digester',
        concept: 'Methanobacterium producing biogas (CH4, CO2, H2S).',
        snippet: 'Activated sludge digestion by methanogenic archaea.',
        frequency: 'Appeared in 2019'
      }
    ]
  },
  {
    id: 'q-bio-plant-morphology-placentation',
    code: 'BIO-MORPH-14',
    priority: 'LOW',
    subject: 'Biology',
    chapter: 'Morphology of Flowering Plants',
    topicId: 'topic-plant-physiology',
    topicName: 'Morphology of Flowering Plants',
    text: 'In which of the following plants is free-central placentation observed, where ovules develop on a central axis without septa?',
    options: ['Dianthus and Primrose', 'Pea and Bean', 'Tomato and Lemon', 'Mustard and Argemone'],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2019,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Direct memorization of botanical placentation examples appears infrequently in modern KCET question papers.',
    patternConsistencyIndex: 38,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2018, type: 'SIMILAR', paperSession: 'KCET-2018', questionRef: 'Q.17' },
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.19' }
    ],
    variations: [
      {
        id: 'var-plac-01',
        variationNumber: 'Variation 01',
        label: 'Parietal placentation with false septum',
        concept: 'Ovules born on inner wall of ovary with replum development.',
        snippet: 'Cruciferae (Mustard family) diagnostic characteristic.',
        frequency: 'Appeared in 2018'
      }
    ]
  },
  {
    id: 'q-bio-cell-organelle-golgi',
    code: 'BIO-CELL-15',
    priority: 'LOW',
    subject: 'Biology',
    chapter: 'Cell Biology',
    topicId: 'topic-genetics',
    topicName: 'Cell: The Unit of Life',
    text: 'Which face of the Golgi apparatus receives vesicles budding from the endoplasmic reticulum, and which face releases mature secretory cisternae?',
    options: [
      'Cis face (forming face) receives; Trans face (maturing face) releases',
      'Trans face receives; Cis face releases',
      'Both faces receive and discharge vesicles equally',
      'Medial cisternae alone perform vesicle fusion'
    ],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2020,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Structural polar organization of Golgi apparatus has seen minimal variation across exam series.',
    patternConsistencyIndex: 39,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2018, type: 'EXACT', paperSession: 'KCET-2018', questionRef: 'Q.11' },
      { year: 2020, type: 'EXACT', paperSession: 'KCET-2020', questionRef: 'Q.13' }
    ],
    variations: [
      {
        id: 'var-golgi-01',
        variationNumber: 'Variation 01',
        label: 'Post-translational glycosylation',
        concept: 'Site of formation of glycoproteins and glycolipids.',
        snippet: 'Modification of proteins synthesized by ribosomes on rough ER.',
        frequency: 'Appeared in 2018'
      }
    ]
  },
  {
    id: 'q-bio-biodiversity-hotspots',
    code: 'BIO-ECOL-16',
    priority: 'LOW',
    subject: 'Biology',
    chapter: 'Biodiversity & Conservation',
    topicId: 'topic-ecology',
    topicName: 'Biodiversity & Conservation',
    text: 'Which two major global biodiversity hotspots are located within or span across Indian territory?',
    options: [
      'Western Ghats-Sri Lanka and Eastern Himalaya',
      'Sunderbans and Thar Desert',
      'Aravalli Range and Deccan Plateau',
      'Gangetic Plains and Rann of Kutch'
    ],
    historicalAppearancesCount: 2,
    lastAppearanceYear: 2021,
    recentActivity: 'Low',
    variationsCount: 1,
    whyPrioritized: 'Criteria for Norman Myers biodiversity hotspots (high species endemism and habitat threat) is straightforward recall.',
    patternConsistencyIndex: 41,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Low',
      recentRelevance: 'Low',
      recencyGap: 'High',
      questionVariation: 'Low',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2019, type: 'EXACT', paperSession: 'KCET-2019', questionRef: 'Q.58' },
      { year: 2021, type: 'EXACT', paperSession: 'KCET-2021', questionRef: 'Q.59' }
    ],
    variations: [
      {
        id: 'var-hot-01',
        variationNumber: 'Variation 01',
        label: 'In-situ vs ex-situ conservation methods',
        concept: 'Biosphere reserves vs zoological parks and cryopreservation.',
        snippet: 'Classification of biodiversity preservation sanctuaries.',
        frequency: 'Appeared in 2019'
      }
    ]
  },

  // --- Biology: INSUFFICIENT EVIDENCE (5) ---
  {
    id: 'q-bio-crispr-cas9',
    code: 'BIO-GENOM-17',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Biology',
    chapter: 'Biotechnology',
    topicId: 'topic-biotech',
    topicName: 'Modern Gene Editing',
    text: 'In the CRISPR-Cas9 genome editing system, what component guides the Cas9 endonuclease to generate double-strand DNA breaks at specific genomic loci?',
    options: [
      'Single guide RNA (sgRNA) complementary to target sequence',
      'DNA ligase IV adapter sequence',
      'Restriction endonuclease cofactor',
      'Histone acetyltransferase'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Insufficient historical data; newly introduced biotechnology question in the revised 2025 model test series.',
    insufficientEvidenceReason: 'Only 1 historical sample point available in dataset (KCET 2025 model test).',
    patternConsistencyIndex: 30,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.56' }
    ],
    variations: []
  },
  {
    id: 'q-bio-epigenetic-methylation',
    code: 'BIO-EPI-18',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Biology',
    chapter: 'Genetics',
    topicId: 'topic-genetics',
    topicName: 'Epigenetics & Gene Silencing',
    text: 'What biochemical modification of cytosine bases in promoter CpG islands typically results in long-term transcriptional silencing of mammalian genes?',
    options: [
      'DNA 5-methylcytosine hypermethylation',
      'Histone H3K4 trimethylation',
      'Phosphorylation of serine residues',
      'Ubiquitination of RNA polymerase'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Insufficient evidence due to novel inclusion in revised elective chapters.',
    insufficientEvidenceReason: 'No prior paper occurrences from 2018 to 2024.',
    patternConsistencyIndex: 28,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'SIMILAR', paperSession: 'KCET-2025', questionRef: 'Q.57' }
    ],
    variations: []
  },
  {
    id: 'q-bio-synthetic-biology-chassis',
    code: 'BIO-SYN-19',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Biology',
    chapter: 'Biotechnology',
    topicId: 'topic-biotech',
    topicName: 'Synthetic Biology',
    text: 'Which organism served as the biological chassis for the synthesis of the first self-replicating synthetic genome (JCVI-syn1.0)?',
    options: [
      'Mycoplasma mycoides',
      'Escherichia coli',
      'Bacillus subtilis',
      'Saccharomyces cerevisiae'
    ],
    historicalAppearancesCount: 0,
    lastAppearanceYear: 2024,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Lack of verified recurring pattern in past state entrance examinations.',
    insufficientEvidenceReason: 'Included only in supplementary honors sample blueprint.',
    patternConsistencyIndex: 22,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Insufficient',
      recencyGap: 'High',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2024, type: 'SIMILAR', paperSession: 'KEA-Model-2024', questionRef: 'Q.54' }
    ],
    variations: []
  },
  {
    id: 'q-bio-single-cell-transcriptomics',
    code: 'BIO-GENOM-20',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Biology',
    chapter: 'Molecular Biology',
    topicId: 'topic-genetics',
    topicName: 'Functional Genomics',
    text: 'What is the purpose of Unique Molecular Identifiers (UMIs) added during single-cell RNA sequencing (scRNA-seq)?',
    options: [
      'Disentangle PCR amplification bias from absolute cellular transcript counts',
      'Sort cells into microfluidic droplets',
      'Facilitate reverse transcriptase primer binding',
      'Degrade ribosomal RNA contaminants'
    ],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Insufficient dataset instances to establish priority weighting.',
    insufficientEvidenceReason: 'Only 1 appearance in 2025 syllabus pilot.',
    patternConsistencyIndex: 27,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.58' }
    ],
    variations: []
  },
  {
    id: 'q-bio-car-t-cell-therapy',
    code: 'BIO-IMMUNO-21',
    priority: 'INSUFFICIENT_EVIDENCE',
    subject: 'Biology',
    chapter: 'Human Health & Disease',
    topicId: 'topic-human-physiology',
    topicName: 'Immunology & Therapeutics',
    text: 'In Chimeric Antigen Receptor (CAR) T-cell therapy against B-cell acute lymphoblastic leukemia, which cell-surface antigen is specifically targeted?',
    options: ['CD19', 'CD4', 'CD8', 'HER2'],
    historicalAppearancesCount: 1,
    lastAppearanceYear: 2025,
    recentActivity: 'Low',
    variationsCount: 0,
    whyPrioritized: 'Insufficient recurrence data across historical examination archives.',
    insufficientEvidenceReason: 'Experimental medical topic tested once in 2025 model series.',
    patternConsistencyIndex: 29,
    studied: false,
    saved: false,
    signalBreakdown: {
      historicalRecurrence: 'Insufficient',
      recentRelevance: 'Low',
      recencyGap: 'Low',
      questionVariation: 'Insufficient',
      topicRelevance: 'Low'
    },
    timeline: [
      { year: 2025, type: 'EXACT', paperSession: 'KCET-2025', questionRef: 'Q.59' }
    ],
    variations: []
  }
];
