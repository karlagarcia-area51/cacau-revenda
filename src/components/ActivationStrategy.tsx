import { motion } from "framer-motion";

const strategies = [
  {
    persona: "Empreendedora Estabelecida",
    channel1: "Meta Ads (Instagram)",
    channel2: "WhatsApp Business",
    message: "Expanda seu negócio com o produto mais vendido do Brasil",
    color: "border-l-primary",
  },
  {
    persona: "Multicatálogo Digital",
    channel1: "Instagram / Influenciadoras",
    channel2: "Eventos em franquias",
    message: "Seja a revendedora Cacau Show da sua região",
    color: "border-l-secondary",
  },
  {
    persona: "Popular Conectada",
    channel1: "Meta Ads (Facebook)",
    channel2: "Ativação presencial (salões)",
    message: "Venda para quem você conhece. Produto que todo mundo ama.",
    color: "border-l-accent",
  },
  {
    persona: "Sênior de Rede",
    channel1: "WhatsApp (grupos)",
    channel2: "Open House na franquia",
    message: "Presenteie e ainda ganhe. Simples como sempre foi.",
    color: "border-l-cacau-warm",
  },
];

const competitors = [
  { name: "Natura / Avon", advantage: "Cacau Show é complemento, não substituto" },
  { name: "Herbalife", advantage: "Chocolate não exige evangelização" },
  { name: "O Boticário", advantage: "Sazonalidade superior (Páscoa, Natal)" },
  { name: "Doce artesanal", advantage: "Marca = garantia de qualidade" },
];

export default function ActivationStrategy() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Estratégia de Ativação</h2>
        <p className="section-subtitle">
          Canal primário: Digital (Meta Ads) — 77,7% alcançável, 83,7% digitalmente ativas
        </p>
      </motion.div>

      {/* Strategy per persona */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {strategies.map((s, i) => (
          <motion.div
            key={s.persona}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`bg-card rounded-xl border border-border p-5 border-l-4 ${s.color}`}
          >
            <h3 className="font-display font-bold text-foreground mb-2">{s.persona}</h3>
            <div className="flex gap-2 flex-wrap mb-3">
              <span className="badge-tag">{s.channel1}</span>
              <span className="badge-tag">{s.channel2}</span>
            </div>
            <p className="text-sm text-foreground/80 italic">"{s.message}"</p>
          </motion.div>
        ))}
      </div>

      {/* Competitive analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="chart-container"
      >
        <h3 className="text-lg font-display font-semibold mb-4">Análise Competitiva</h3>
        <div className="space-y-3">
          {competitors.map((c) => (
            <div key={c.name} className="flex items-start gap-3 text-sm">
              <span className="font-semibold text-foreground min-w-32">{c.name}</span>
              <span className="text-foreground/70">→ {c.advantage}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <p className="text-sm text-foreground italic font-medium text-center">
            "Você não para o que já faz. Cacau Show é o único produto que seus clientes já pedem antes mesmo de você oferecer."
          </p>
        </div>
      </motion.div>
    </div>
  );
}
