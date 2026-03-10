import { motion } from "framer-motion";
import {
  Smartphone, Store, GraduationCap, Cpu, BookOpen, 
  Trophy, Film, Plane, Coins, Gamepad2, Wine, Gem,
} from "lucide-react";

const affinities = [
  { icon: Smartphone, label: "Comportamento Digital", value: "83,7%", count: "333K", highlight: true },
  { icon: Store, label: "Franqueadas", value: "9%", count: "35.6K", highlight: true },
  { icon: GraduationCap, label: "Pós-graduação", value: "9%", count: "35.6K", highlight: false },
  { icon: Cpu, label: "Entusiasta de Tecnologia", value: "~40%", count: "Decil 3+", highlight: false },
  { icon: BookOpen, label: "Leitora Digital", value: "Alta", count: "Decil 4–5", highlight: false },
  { icon: Trophy, label: "Amante de Futebol", value: "~40%", count: "Decil 4–5", highlight: false },
  { icon: Film, label: "Amante de Cinema", value: "~30%", count: "Decil 5", highlight: false },
  { icon: Plane, label: "Viagens e Turismo", value: "~25%", count: "Decil 4–5", highlight: false },
  { icon: Coins, label: "Tomadora de Empréstimo", value: "Geral", count: "50K+ todos decis", highlight: false },
  { icon: Gamepad2, label: "Aposta Online", value: "6,4%", count: "25.3K", highlight: false },
  { icon: Wine, label: "Clube do Vinho", value: "Nicho", count: "Decil 5–6", highlight: false },
  { icon: Gem, label: "Consumo de Luxo", value: "~5%", count: "Minoria", highlight: false },
];

export default function AffinityGrid() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Modelos de Afinidade</h2>
        <p className="section-subtitle">
          O que a base mais gosta — insights para comunicação e recrutamento
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {affinities.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
              a.highlight
                ? "bg-primary/5 border-primary/20"
                : "bg-card border-border"
            }`}
          >
            <a.icon className={`w-5 h-5 mb-2 ${a.highlight ? "text-primary" : "text-muted-foreground"}`} />
            <div className="font-display font-bold text-lg text-foreground">{a.value}</div>
            <div className="text-sm font-body font-medium text-foreground">{a.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{a.count}</div>
          </motion.div>
        ))}
      </div>

      <div className="insight-box">
        <strong>35.6K já são franqueadas (9%)</strong> — são as melhores candidatas, já conhecem o modelo Cacau Show. 
        Perfil de leitora digital intensa responde bem a conteúdo em WhatsApp, Instagram e grupos online.
      </div>
    </div>
  );
}
