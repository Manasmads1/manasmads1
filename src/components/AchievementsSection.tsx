import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, Plus } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { achievements, type Achievement } from "@/data/achievements";
import { EASE, viewportOnce } from "@/lib/motion";

const meta = (a: Achievement) =>
  [a.issuer, a.category, a.level, a.year].filter(Boolean).join(" · ");

const AchievementsSection = () => {
  const [openId, setOpenId] = useState<string | null>(achievements[0]?.id ?? null);
  const [lightbox, setLightbox] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="section-padding shell">
      <SectionHeading
        index="03"
        label="Achievements"
        title={
          <>
            Certificates, events &amp; <span className="text-gradient">recognition</span>
          </>
        }
      />

      <ol className="mt-14 border-t border-border">
        {achievements.map((a, i) => {
          const open = openId === a.id;
          return (
            <motion.li
              key={a.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.04 }}
              className="border-b border-border"
            >
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : a.id)}
                  aria-expanded={open}
                  aria-controls={`achievement-panel-${a.id}`}
                  className="group flex w-full items-center gap-5 py-6 text-left transition-colors md:gap-8 md:py-8"
                >
                  <span
                    className={`font-mono text-[11px] tracking-[0.2em] transition-colors ${
                      open ? "text-accent" : "text-muted-foreground group-hover:text-accent"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-heading text-xl font-semibold tracking-tight transition-transform duration-500 md:text-3xl ${
                        open ? "text-foreground" : "group-hover:translate-x-1.5"
                      }`}
                    >
                      {a.title}
                    </span>
                    <span className="mt-1.5 block text-[12.5px] text-muted-foreground md:hidden">
                      {meta(a)}
                    </span>
                  </span>

                  <span className="hidden shrink-0 text-[12.5px] text-muted-foreground md:block">
                    {meta(a)}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 ${
                      open
                        ? "rotate-45 border-accent bg-accent text-accent-foreground"
                        : "text-muted-foreground group-hover:border-accent group-hover:text-accent"
                    }`}
                  >
                    <Plus size={15} />
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={`achievement-panel-${a.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 pb-8 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-10 md:pl-[3.6rem]">
                      <div className="space-y-4">
                        {a.description && (
                          <p className="max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground">
                            {a.description}
                          </p>
                        )}
                        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px]">
                          {[
                            ["Issuer", a.issuer],
                            ["Category", a.category],
                            ["Level", a.level],
                            ["Year", a.year],
                          ]
                            .filter(([, v]) => Boolean(v))
                            .map(([k, v]) => (
                              <div key={k}>
                                <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                                  {k}
                                </dt>
                                <dd className="mt-1 font-medium text-foreground">{v}</dd>
                              </div>
                            ))}
                        </dl>
                      </div>

                      {a.image && (
                        <button
                          type="button"
                          onClick={() => setLightbox(a)}
                          className="group/img relative w-full overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-soft transition-shadow duration-500 hover:shadow-soft-md"
                          aria-label={`View ${a.title} certificate full size`}
                        >
                          <img
                            src={a.image}
                            alt={a.imageAlt ?? `${a.title} certificate`}
                            loading="lazy"
                            className="w-full rounded-xl object-cover"
                          />
                          <span className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-card/90 text-foreground opacity-0 shadow-soft transition-opacity duration-300 group-hover/img:opacity-100">
                            <Expand size={14} aria-hidden="true" />
                          </span>
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ol>

      <Dialog open={Boolean(lightbox)} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-3xl overflow-hidden p-3">
          <DialogTitle className="sr-only">{lightbox?.title ?? "Certificate"}</DialogTitle>
          {lightbox?.image && (
            <img
              src={lightbox.image}
              alt={lightbox.imageAlt ?? `${lightbox.title} certificate`}
              className="max-h-[80vh] w-full rounded-xl object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AchievementsSection;
