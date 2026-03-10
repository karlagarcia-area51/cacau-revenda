import { motion } from "framer-motion";
import { Settings, MapPin, Megaphone, Rocket, BarChart3 } from "lucide-react";

const phases = [
  {
    icon: Settings,
    title: "Fase 1 — Modelo e Infraestrutura",
    weeks: "Semanas 1–2",
    items: [
      "Rodar score na base de 397.8K",
      "Gerar ranking por persona + score geográfico",
      "Landing page de cadastro responsiva",
      "Definir pedido mínimo por persona",
    ],
    criterion: "Mínimo 15.000 candidatas elegíveis mapeadas",
  },
  {
    icon: MapPin,
    title: "Fase 2 — Seleção de Praças",
    weeks: "Semanas 2–3",
    items: [
      "SP (centro + periferia), RJ, Fortaleza, Salvador, BH",
      "Identificar franqueado campeão local",
      "Treinar franqueado para onboarding",
    ],
    criterion: "5 franqueados confirmados com capacidade de estoque",
  },
  {
    icon: Megaphone,
    title: "Fase 3 — Recrutamento Ativo",
    weeks: "Semanas 3–6",
    items: [
      "Campanhas Meta Ads por praça e persona",
      "Open House nas 5 franquias",
      "Meta: 600 cadastros por praça = 3.000 total",
    ],
    criterion: "1.500 cadastros na semana 5",
  },
  {
    icon: Rocket,
    title: "Fase 4 — Ativação e Operação",
    weeks: "Semanas 6–10",
    items: [
      "Acompanhamento semanal de ativação",
      "Suporte via WhatsApp para primeiros pedidos",
      "Monitorar barreira geográfica",
    ],
    criterion: "≥ 35% taxa de ativação (1º pedido em 30 dias)",
  },
  {
    icon: BarChart3,
    title: "Fase 5 — Avaliação e Calibração",
    weeks: "Semanas 10–12",
    items: [
      "Relatório por praça, persona e canal",
      "Calcular LTV estimado por persona",
      "Decisão de escala: quais praças expandir",
    ],
    criterion: "Decisão Go/No-Go para escala nacional",
  },
];

const kpis = [
  { label: "Revendedoras Cadastradas", target: "3.000" },
  { label: "Taxa de Ativação", target: "≥ 35%" },
  { label: "Ticket Médio", target: "R$ 180–280" },
  { label: "Taxa de Recompra", target: "≥ 55%" },
  { label: "CAC", target: "< R$ 70" },
  { label: "NPS Revendedor", target: "≥ 55" },
];

export default function PilotTimeline() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Plano do Piloto — 90 Dias</h2>
        <p className="section-subtitle">
          5 fases com critérios claros de avanço e KPIs executivos
        </p>
      </motion.div>

      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="text-center p-3 bg-card rounded-xl border border-border"
          >
            <div className="font-display font-bold text-lg text-secondary">{kpi.target}</div>
            <div className="text-xs text-muted-foreground mt-1">{kpi.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
        <div className="space-y-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative md:pl-16"
            >
              <div className="hidden md:flex absolute left-0 w-12 h-12 rounded-full bg-primary items-center justify-center z-10">
                <phase.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="chart-container">
                <div className="flex items-center gap-3 mb-3">
                  <div className="md:hidden w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <phase.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{phase.title}</h3>
                    <span className="badge-tag">{phase.weeks}</span>
                  </div>
                </div>
                <ul className="space-y-1.5 ml-1">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 px-3 py-2 bg-secondary/10 rounded-lg text-sm">
                  <span className="font-semibold text-secondary">Critério: </span>
                  <span className="text-foreground/80">{phase.criterion}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
