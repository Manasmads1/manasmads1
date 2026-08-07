import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import certGenAI from "@/assets/cert-genai.jpg";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { reveal, stagger, viewportOnce } from "@/lib/motion";

const certificates = [
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill — Vaibhav Sisinty",
    image: certGenAI,
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding shell">
    <SectionHeading
      index="07"
      label="Achievements"
      title={
        <>
          Certifications &amp; <span className="text-gradient">recognition</span>
        </>
      }
    />

    <motion.div
      variants={stagger(0.05, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {certificates.map((cert) => (
        <motion.article key={cert.title} variants={reveal}>
          <TiltCard intensity={5}>
            <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-soft-lg">
              <div className="overflow-hidden border-b border-border bg-muted/60 p-4">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate issued by ${cert.issuer}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl object-cover shadow-soft transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start gap-3 p-6">
                <BadgeCheck size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.article>
      ))}
    </motion.div>
  </section>
);

export default AchievementsSection;
