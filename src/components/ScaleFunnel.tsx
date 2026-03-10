import { motion } from "framer-motion";

const steps = [
  { label: "Base analisada", value: "397.8K", width: "100%", detail: "Revendedoras de cosméticos" },
  { label: "Alcançáveis via Meta", value: "309.3K", width: "78%", detail: "77,7% da base" },
  { label: "Elegíveis por proximidade", value: "A calcular", width: "60%", detail: "Pré-piloto" },
  { label: "Score ≥ 70 (alta propensão)", value: "150–200K", width: "45%", detail: "Estimativa" },
  { label: "Lookalike nacional", value: "3–5M", width: "35%", detail: "Mulher 40–65, MEI, score 700+" },
  { label: "Conversão conservadora", value: "30–50K", width: "20%", detail: "Revendedoras ativas" },
  { label: "Impacto em GMV anual", value: "R$52–88M", width: "15%", detail: "Ticket R$220 × 8 pedidos/ano" },
];

export default function ScaleFunnel() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Potencial de Escala</h2>
        <p className="section-subtitle">
          Do universo de 397.8K ao impacto financeiro estimado — funil de conversão
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <motion.div
              className="rounded-lg overflow-hidden"
              style={{ width: step.width, margin: "0 auto" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
            >
              <div
                className={`px-4 py-3 text-center ${
                  i === steps.length - 1
                    ? "bg-primary text-primary-foreground"
                    : i === steps.length - 2
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-primary/10 text-foreground"
                } rounded-lg`}
              >
                <div className="font-display font-bold text-lg">{step.value}</div>
                <div className="text-sm font-body">{step.label}</div>
                <div className="text-xs opacity-70">{step.detail}</div>
              </div>
            </motion.div>
            {i < steps.length - 1 && (
              <div className="flex justify-center my-1">
                <svg width="20" height="12" viewBox="0 0 20 12" className="text-muted-foreground/40">
                  <path d="M10 12 L0 0 L20 0 Z" fill="currentColor" />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
