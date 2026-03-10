import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import personaEmpreendedora from "@/assets/persona-empreendedora.jpg";
import personaMulticatalogo from "@/assets/persona-multicatalogo.jpg";
import personaPopular from "@/assets/persona-popular.jpg";
import personaSenior from "@/assets/persona-senior.jpg";

const personas = [
  {
    name: "Empreendedora Estabelecida",
    image: personaEmpreendedora,
    share: "~40%",
    count: "~155–160K",
    age: "45–65 anos",
    education: "Superior completo",
    credit: "700–899",
    socialClass: "C/B familiar",
    occupation: "Sócia / MEI / Autônoma",
    motivation: "Diversificar o negócio com marca reconhecida",
    message: "Adicione o produto mais desejado do Brasil ao seu portfólio",
    channel: "Meta Ads (Instagram) + WhatsApp Business",
    products: "Kits presenteáveis R$80–250, Linhas sazonais",
    barrier: "Burocracia do cadastro e distância da franquia",
    color: "border-primary",
    bgColor: "bg-primary/5",
  },
  {
    name: "Multicatálogo Digital",
    image: personaMulticatalogo,
    share: "~20%",
    count: "~75–80K",
    age: "30–45 anos",
    education: "Superior / Pós-graduação",
    credit: "700–899",
    socialClass: "B/C familiar",
    occupation: "Multi-marcas profissional",
    motivation: "Escalar o negócio com âncora de calendário",
    message: "Seja a revendedora Cacau Show da sua região",
    channel: "Instagram Ads + Influenciadoras de empreendedorismo feminino",
    products: "Linha premium, edições especiais, kits de presente",
    barrier: "Expectativa alta de suporte, margem e exclusividade",
    color: "border-secondary",
    bgColor: "bg-secondary/5",
  },
  {
    name: "Popular Conectada",
    image: personaPopular,
    share: "~25%",
    count: "~95–100K",
    age: "35–55 anos",
    education: "Médio completo",
    credit: "700+ (surpreendente)",
    socialClass: "D ind. / C familiar",
    occupation: "Autônoma de bairro",
    motivation: "Renda complementar estável com produto que vende sozinho",
    message: "Venda para quem você conhece. Produto que todo mundo ama.",
    channel: "Meta Ads (Facebook) + Ativação presencial",
    products: "Unitários R$5–40, Combos até R$80",
    barrier: "Distância da franquia e pedido mínimo alto",
    color: "border-accent",
    bgColor: "bg-accent/5",
  },
  {
    name: "Sênior de Rede",
    image: personaSenior,
    share: "~25–28%",
    count: "~105–115K",
    age: "60+ anos",
    education: "Médio completo",
    credit: "700–899",
    socialClass: "C/D ind., B/C familiar",
    occupation: "Aposentada / Pensionista",
    motivation: "Ocupação, renda complementar e pertencimento",
    message: "Com Cacau Show, você presenteia e ainda ganha.",
    channel: "WhatsApp (grupos) + Open House na franquia",
    products: "Caixas de presente, datas comemorativas",
    barrier: "Processo digital pode ser obstáculo",
    color: "border-cacau-warm",
    bgColor: "bg-cacau-warm/5",
  },
];

export default function PersonaCards() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">As 4 Personas</h2>
        <p className="section-subtitle">
          Perfis revisados com dados reais — clique para ver detalhes de cada persona
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {personas.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`persona-card border-l-4 ${p.color}`}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="flex gap-4 p-5">
              <img
                src={p.image}
                alt={p.name}
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-bold text-lg text-foreground truncate">
                    {p.name}
                  </h3>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="badge-tag">{p.share} da base</span>
                  <span className="badge-tag">{p.age}</span>
                  <span className="badge-tag">{p.count}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  "{p.message}"
                </p>
              </div>
            </div>

            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`px-5 pb-5 space-y-3 ${p.bgColor} mx-3 mb-3 rounded-lg p-4`}>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <Detail label="Escolaridade" value={p.education} />
                      <Detail label="Score Crédito" value={p.credit} />
                      <Detail label="Classe Social" value={p.socialClass} />
                      <Detail label="Ocupação" value={p.occupation} />
                    </div>
                    <div className="space-y-2 text-sm">
                      <Detail label="Motivação" value={p.motivation} />
                      <Detail label="Canal de Recrutamento" value={p.channel} />
                      <Detail label="Produtos Ideais" value={p.products} />
                      <Detail label="Barreira Principal" value={p.barrier} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-muted-foreground font-medium">{label}: </span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
