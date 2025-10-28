
import { GoogleGenAI } from "@google/genai";
import { StudentProfile, Career } from '../types';

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. Using a placeholder. The app will not function correctly.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || 'YOUR_API_KEY_HERE' });

export const generateCareerExplanation = async (
  studentProfile: StudentProfile,
  career: Career
): Promise<string> => {
  const model = 'gemini-2.5-flash';

  const prompt = `
    You are CareerMitra AI, a friendly and knowledgeable career advisor for Indian students.
    Your task is to generate a personalized, encouraging, and specific 100-word explanation of why a particular career is a great match for a student based on their profile.

    **Student Profile:**
    - **Interests:** ${studentProfile.psychometricData.interests.join(', ')}
    - **Top Aptitudes:** Logical: ${studentProfile.psychometricData.aptitudeScores.logical}, Creative: ${studentProfile.psychometricData.aptitudeScores.creative}
    - **Personality Type:** ${studentProfile.psychometricData.personalityType}
    - **Location:** ${studentProfile.personalInfo.location.city}, ${studentProfile.personalInfo.location.state}

    **Career to Explain:** ${career.careerName}

    **Instructions:**
    1.  Start by directly addressing the student's strengths.
    2.  Connect their interests and aptitudes specifically to the daily tasks of the career.
    3.  Mention how their personality type might be a good fit for the work environment or nature of the job.
    4.  Briefly touch upon the career's high demand, especially in their location if relevant.
    5.  Maintain a positive, motivational, and slightly informal tone suitable for a student.
    6.  The entire explanation must be under 120 words.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating career explanation:", error);
    return "We couldn't generate a personalized explanation at this time. However, based on your profile, this career seems like a strong match due to its alignment with your skills and interests.";
  }
};
