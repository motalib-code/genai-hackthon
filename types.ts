
export interface StudentProfile {
  studentId: string;
  personalInfo: {
    fullName: string;
    educationLevel: '10th' | '12th' | 'undergraduate' | 'postgraduate';
    location: {
      city: string;
      state: string;
    };
  };
  psychometricData: {
    interests: string[];
    aptitudeScores: {
      logical: number;
      verbal: number;
      numerical: number;
      spatial: number;
      creative: number;
    };
    personalityType: string;
  };
}

export interface Career {
  careerId: string;
  careerName: string;
  category: string;
  marketData: {
    averageSalary: {
      fresher: number;
      midLevel: number;
      senior: number;
    };
    demandScore: number;
  };
  requirements: {
    minimumEducation: string;
  };
}

export interface CareerMatch {
  career: Career;
  matchScore: number;
}

export interface EnrichedRecommendation extends Career {
  matchScore: number;
  explanation: string;
}
