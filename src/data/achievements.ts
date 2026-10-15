import certGenAI from "@/assets/cert-genai.jpg";
import certTakumi from "@/assets/cert-takumi.jpg";
import certPowerBI from "@/assets/cert-powerbi.jpg";
import certSpaceQuiz from "@/assets/cert-space-quiz.jpg";
import certOverclockDelhi from "@/assets/cert-overclock-delhi.png";
import certWebsiteDevelopmentInternship from "@/assets/cert-website-development-internship.png";
import certCyberSecurity from "@/assets/cert-cyber-security.jpg";

export type Achievement = {
  id: string;
  title: string;
  /** Short factual context. */
  description?: string;
  category?: string;
  issuer?: string;
  year?: string;
  level?: string;
  image?: string;
  imageAlt?: string;
  documentUrl?: string;
};

/**
 * Single source of truth for the Achievements section.
 * Append new entries here — the section renders any length without changes.
 */
export const achievements: Achievement[] = [
  {
    id: "certified-website-developer",
    title: "Certified Website Developer (Frontend + Backend)",
    description:
      "Completed the Website Design and Development Internship at Internship Studio from 15 July to 18 October 2026.",
    issuer: "Internship Studio",
    category: "Internship Certificate",
    year: "2026",
    level: "Frontend + Backend",
    image: certWebsiteDevelopmentInternship,
    imageAlt: "Internship Studio certificate for the Website Design and Development Internship, awarded to Manas",
    documentUrl: "/certificates/certified-website-developer-frontend-backend.pdf",
  },
  {
    id: "overclock-delhi-2026",
    title: "Overclock Delhi — 1st Place",
    description:
      "Secured 1st position at OVERCLOCK DELHI, an Alternate Reality Game × Hackathon event celebrating exploration, teamwork, and problem-solving.",
    issuer: "Overclock Delhi",
    category: "Competition",
    year: "2026",
    level: "1st Place",
    image: certOverclockDelhi,
    imageAlt: "Certificate of achievement for 1st place at Overclock Delhi, dated 30 August 2026",
  },
  {
    id: "genai-mastermind",
    title: "Generative AI Mastermind",
    issuer: "Outskill — Vaibhav Sisinty",
    category: "Certificate",
    level: "Workshop",
    image: certGenAI,
    imageAlt: "Generative AI Mastermind certificate issued by Outskill",
  },
  {
    id: "power-bi",
    title: "PowerBI Workshop",
    description:
      "Certificate of completion for the PowerBI workshop, covering AI-powered interactive dashboards.",
    issuer: "OfficeMaster",
    category: "Certificate",
    year: "2025",
    level: "Workshop",
    image: certPowerBI,
    imageAlt: "PowerBI Workshop certificate of completion issued by OfficeMaster",
  },
  {
    id: "takumi-delhi",
    title: "TAKUMI Delhi 2026",
    description:
      "Certificate of participation as part of Team Code Crushers, organized at R.D.E. (East), Directorate of Education, I.P. Extension, Delhi.",
    issuer: "Directorate of Education, Delhi",
    category: "Participation",
    year: "2026",
    level: "Interstate",
    image: certTakumi,
    imageAlt: "TAKUMI Delhi 2026 certificate of participation",
  },
  {
    id: "national-space-day-quiz",
    title: "National Space Day Quiz",
    description: "Certificate of participation in the National Space Day Quiz.",
    issuer: "ISRO & MyGov",
    category: "Quiz",
    level: "National",
    image: certSpaceQuiz,
    imageAlt: "National Space Day Quiz certificate of participation from ISRO and MyGov",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description:
      "Completed the online session “Password and Wi-Fi Security: Securing Digital Space”, conducted by C-DAC, Noida in association with CERT-In and sponsored by the Ministry of Electronics and Information Technology during Cyber Security Awareness Month in October 2021.",
    issuer: "C-DAC, Noida · CERT-In",
    category: "Certificate of Appreciation",
    year: "2021",
    level: "Online Session",
    image: certCyberSecurity,
    imageAlt:
      "C-DAC and CERT-In certificate of appreciation for the Password and Wi-Fi Security online session",
  },
];
