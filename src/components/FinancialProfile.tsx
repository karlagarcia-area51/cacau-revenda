import { motion } from "framer-motion";
import { CreditCard, AlertTriangle, Banknote, PiggyBank } from "lucide-react";

const financialKPIs = [
  { icon: AlertTriangle, label: "Protesto", value: "0,09%", detail: "358 pessoas", color: "text-accent" },
  { icon: CreditCard, label: "Restrição SPC/Serasa", value: "0,15%", detail: "617 pessoas", color: "text-secondary" },
  { icon: Banknote, label: "Auxílio Emergencial", value: "42%", detail: "168K receberam", color: "text-primary" },
  { icon: PiggyBank, label: "Bolsa Família", value: "11%", detail: "44.1K recebem", color: "text-cacau-warm" },
];

const banks = [
  { name: "PicPay", value: 36300, highlight: true },
  { name: "Banco do Brasil", value: 34800, highlight: false },
  { name: "Itaú", value: 14700, highlight: false },
  { name: "Bradesco", value: 11700, highlight: false },
  { name: "Caixa", value: 9460, highlight: false },
  { name: "Santander", value: 7360, highlight: false },
];

const maxBank = Math.max(...banks.map((b) => b.value));

const socialClassIndividual = [
  { name: "A", value: 11100 },
  { name: "B", value: 34300 },
  { name: "C", value: 119000 },
  { name: "D", value: 135000 },
  { name: "E", value: 98000 },
];

const socialClassFamily = [
  { name: "A", value: 17000 },
  { name: "B", value: 90500 },
  { name: "C", value: 98100 },
  { name: "D", value: 24700 },
];

const maxClass = Math.max(
  ...socialClassIndividual.map((c) => c.value),
  ...socialClassFamily.map((c) => c.value)
);

export default function FinancialProfile() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Perfil Financeiro</h2>
        <p className="section-subtitle">
          Inadimplência quase zero, alta digitalização financeira e poder de compra familiar surpreendente
        </p>
      </motion.div>

      {/* Financial KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {financialKPIs.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="kpi-card text-center"
          >
            <kpi.icon className={`w-5 h-5 mx-auto mb-2 ${kpi.color}`} />
            <div className={`text-2xl font-display font-bold ${kpi.color}`}>{kpi.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{kpi.label}</div>
            <div className="text-xs text-muted-foreground/70">{kpi.detail}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Banks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="chart-container"
        >
          <h3 className="text-lg font-display font-semibold mb-4">Bancos Principais</h3>
          <div className="space-y-3">
            {banks.map((bank, i) => (
              <motion.div
                key={bank.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <span className="text-sm font-body w-28 text-right text-foreground">
                  {bank.name}
                  {bank.highlight && <span className="text-accent ml-1">★</span>}
                </span>
                <div className="flex-1 bg-muted rounded-full h-5 relative">
                  <motion.div
                    className={`h-5 rounded-full ${bank.highlight ? 'bg-accent' : 'bg-secondary'}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(bank.value / maxBank) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                  />
                </div>
                <span className="text-sm font-semibold text-foreground w-14">
                  {(bank.value / 1000).toFixed(1)}K
                </span>
              </motion.div>
            ))}
          </div>
          <div className="insight-box mt-4">
            <strong>PicPay é o banco #1</strong> — alta digitalização financeira. Pix/app são forma de pagamento natural.
          </div>
        </motion.div>

        {/* Social Class Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="chart-container"
        >
          <h3 className="text-lg font-display font-semibold mb-4">
            Classe Social: Individual vs. Familiar
          </h3>
          <div className="space-y-4">
            {["A", "B", "C", "D", "E"].map((cls) => {
              const ind = socialClassIndividual.find((c) => c.name === cls);
              const fam = socialClassFamily.find((c) => c.name === cls);
              return (
                <div key={cls} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-8 font-display font-bold text-foreground">
                      {cls}
                    </span>
                    <div className="flex-1 space-y-1">
                      {ind && (
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-muted rounded-full h-3">
                            <motion.div
                              className="bg-primary/60 rounded-full h-3"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(ind.value / maxClass) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground w-12">
                            {(ind.value / 1000).toFixed(0)}K
                          </span>
                        </div>
                      )}
                      {fam && (
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-muted rounded-full h-3">
                            <motion.div
                              className="bg-secondary rounded-full h-3"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(fam.value / maxClass) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.1 }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground w-12">
                            {(fam.value / 1000).toFixed(0)}K
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-primary/60" /> Individual
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-secondary" /> Familiar
              </span>
            </div>
          </div>
          <div className="insight-box mt-4">
            <strong>Individualmente C/D, mas familiarmente B/C</strong> — poder de compra familiar é maior do que a renda individual sugere.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
