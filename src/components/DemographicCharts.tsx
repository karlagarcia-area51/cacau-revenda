import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";

const ageData = [
  { name: "Até 25", value: 167, fill: "hsl(30 20% 80%)" },
  { name: "25–30", value: 153, fill: "hsl(30 20% 80%)" },
  { name: "30–35", value: 14300, fill: "hsl(30 40% 65%)" },
  { name: "35–45", value: 121000, fill: "hsl(38 88% 40%)" },
  { name: "45–60", value: 151000, fill: "hsl(30 95% 20%)" },
  { name: "60+", value: 111000, fill: "hsl(355 85% 42%)" },
];

const genderData = [
  { name: "Feminino", value: 347000, fill: "hsl(30 95% 20%)" },
  { name: "Masculino", value: 49600, fill: "hsl(38 88% 40%)" },
  { name: "Indefinido", value: 1530, fill: "hsl(30 20% 80%)" },
];

const educationData = [
  { name: "Fund. Incomp.", value: 3990 },
  { name: "Fund. Comp.", value: 18700 },
  { name: "Médio Incomp.", value: 6940 },
  { name: "Médio Comp.", value: 116000 },
  { name: "Sup. Incomp.", value: 13700 },
  { name: "Superior", value: 157000 },
  { name: "Pós/Mestrado", value: 5159 },
];

const creditData = [
  { name: "0–299", value: 17300, fill: "hsl(355 85% 42%)" },
  { name: "300–499", value: 51800, fill: "hsl(30 60% 55%)" },
  { name: "500–699", value: 3970, fill: "hsl(38 60% 55%)" },
  { name: "700–899", value: 286000, fill: "hsl(38 88% 40%)" },
  { name: "900–1000", value: 37500, fill: "hsl(30 95% 20%)" },
];

const formatNumber = (n: number) => {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K`;
  return n.toString();
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
      <p className="font-body text-sm font-medium text-foreground">{label}</p>
      <p className="text-sm text-secondary font-semibold">
        {payload[0].value.toLocaleString("pt-BR")}
      </p>
    </div>
  );
};

export default function DemographicCharts() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Retrato Demográfico</h2>
        <p className="section-subtitle">
          Perfil real baseado em dados de 397.8K revendedoras de cosméticos ativas
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gender Donut */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="chart-container"
        >
          <h3 className="text-lg font-display font-semibold mb-4">Gênero</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                >
                  {genderData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => v.toLocaleString("pt-BR")} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="insight-box mt-4">
            <strong>87,2% feminino</strong> — a base é esmagadoramente feminina. Comunicação deve ser centrada na mulher empreendedora.
          </div>
        </motion.div>

        {/* Age Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="chart-container"
        >
          <h3 className="text-lg font-display font-semibold mb-4">Faixa Etária</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData} layout="vertical" margin={{ left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(30 20% 88%)" />
                <XAxis type="number" tickFormatter={formatNumber} />
                <YAxis type="category" dataKey="name" width={55} tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {ageData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="insight-box mt-4">
            <strong>Grupo 60+ tem 111K pessoas</strong> — mais numeroso que o grupo 30–35. A comunicação deve contemplar mulheres acima de 55 anos.
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="chart-container"
        >
          <h3 className="text-lg font-display font-semibold mb-4">Escolaridade</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={educationData} margin={{ left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(30 20% 88%)" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis tickFormatter={formatNumber} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" fill="hsl(38 88% 40%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="insight-box mt-4">
            <strong>Superior completo é o maior grupo (157K / 39,5%)</strong> — linguagem de recrutamento deve ser sofisticada, para mulher instruída.
          </div>
        </motion.div>

        {/* Credit Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="chart-container"
        >
          <h3 className="text-lg font-display font-semibold mb-4">Score de Crédito</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={creditData} margin={{ left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(30 20% 88%)" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={formatNumber} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {creditData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="insight-box mt-4">
            <strong>71,9% com score 700–899 (bom)</strong> — refuta a narrativa de "baixa renda e crédito restrito". Base com capacidade real de investimento.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
