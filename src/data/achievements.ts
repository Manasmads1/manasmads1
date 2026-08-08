import certGenAI from "@/assets/cert-genai.jpg";
import certTakumi from "@/assets/cert-takumi.jpg";
import certPowerBI from "@/assets/cert-powerbi.jpg";
import certSpaceQuiz from "@/assets/cert-space-quiz.jpg";

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
};

/**
 * Single source of truth for the Achievements section.
 * Append new entries here — the section renders any length without changes.
 */
export const achievements: Achievement[] = [
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
];