import { motion } from "framer-motion";
import { Users, Target, Smartphone, ShieldCheck } from "lucide-react";

const kpis = [
  {
    icon: Users,
    value: "397.8K",
    label: "Revendedoras na Base",
    detail: "Universo total analisado",
    color: "text-primary",
  },
  {
    icon: Target,
    value: "309.3K",
    label: "Alcançáveis via Meta",
    detail: "77,7% da base",
    color: "text-secondary",
  },
  {
    icon: Smartphone,
    value: "83,7%",
    label: "Digitalmente Ativas",
    detail: "333K com comportamento digital",
    color: "text-cacau-warm",
  },
  {
    icon: ShieldCheck,
    value: "0,15%",
    label: "Restrição Financeira",
    detail: "Base praticamente sem inadimplência",
    color: "text-accent",
  },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {kpis.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="kpi-card group"
        >
          <div className="flex items-start justify-between mb-3">
            <kpi.icon className={`w-5 h-5 ${kpi.color} opacity-70`} />
            <span className="badge-tag">{kpi.detail}</span>
          </div>
          <div className={`kpi-value ${kpi.color}`}>{kpi.value}</div>
          <div className="kpi-label">{kpi.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
