import { useState, useEffect } from "react";

const sections = [
  { id: "kpi", label: "KPIs" },
  { id: "demo", label: "Demográfico" },
  { id: "financial", label: "Financeiro" },
  { id: "personas", label: "Personas" },
  { id: "affinity", label: "Afinidades" },
  { id: "geo", label: "Geográfico" },
  { id: "strategy", label: "Estratégia" },
  { id: "pilot", label: "Piloto 90d" },
  { id: "funnel", label: "Escala" },
];

export default function DashboardNav() {
  const [active, setActive] = useState("kpi");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6 overflow-x-auto">
        <h1 className="font-display font-bold text-lg text-primary whitespace-nowrap">
          Cacau Show
        </h1>
        <span className="text-border">|</span>
        <div className="flex gap-1 overflow-x-auto">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`nav-pill whitespace-nowrap ${active === s.id ? "nav-pill-active" : ""}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
