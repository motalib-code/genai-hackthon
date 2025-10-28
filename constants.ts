
import { StudentProfile, Career, CareerMatch } from './types';

export const MOCK_STUDENT_PROFILE: StudentProfile = {
  studentId: 'student123',
  personalInfo: {
    fullName: 'Rohan Sharma',
    educationLevel: '12th',
    location: {
      city: 'Bengaluru',
      state: 'Karnataka',
    },
  },
  psychometricData: {
    interests: ['Technology', 'Problem Solving', 'Gaming'],
    aptitudeScores: {
      logical: 92,
      verbal: 78,
      numerical: 85,
      spatial: 88,
      creative: 80,
    },
    personalityType: 'INTJ',
  },
};

export const MOCK_CAREER_MATCHES: CareerMatch[] = [
  {
    matchScore: 95,
    career: {
      careerId: 'C001',
      careerName: 'AI & Machine Learning Engineer',
      category: 'Technology',
      marketData: {
        averageSalary: { fresher: 800000, midLevel: 1800000, senior: 3500000 },
        demandScore: 98,
      },
      requirements: { minimumEducation: "Bachelor's in Computer Science" },
    },
  },
  {
    matchScore: 92,
    career: {
      careerId: 'C002',
      careerName: 'Data Scientist',
      category: 'Technology',
      marketData: {
        averageSalary: { fresher: 700000, midLevel: 1600000, senior: 3200000 },
        demandScore: 96,
      },
      requirements: { minimumEducation: "Bachelor's in Statistics or CS" },
    },
  },
  {
    matchScore: 88,
    career: {
      careerId: 'C003',
      careerName: 'Cloud Solutions Architect',
      category: 'Technology',
      marketData: {
        averageSalary: { fresher: 900000, midLevel: 2000000, senior: 4000000 },
        demandScore: 97,
      },
      requirements: { minimumEducation: "Bachelor's in IT or related field" },
    },
  },
   {
    matchScore: 85,
    career: {
      careerId: 'C004',
      careerName: 'Cybersecurity Analyst',
      category: 'Technology',
      marketData: {
        averageSalary: { fresher: 600000, midLevel: 1400000, senior: 2800000 },
        demandScore: 95,
      },
      requirements: { minimumEducation: "Bachelor's Degree" },
    },
  },
];
