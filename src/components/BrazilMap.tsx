import { motion } from "framer-motion";

const cities = [
  { name: "São Paulo", value: 35600, x: 370, y: 380, rank: 1 },
  { name: "Rio de Janeiro", value: 20400, x: 420, y: 360, rank: 2 },
  { name: "Belo Horizonte", value: 9840, x: 390, y: 320, rank: 5 },
  { name: "Fortaleza", value: 11900, x: 470, y: 130, rank: 3 },
  { name: "Salvador", value: 9260, x: 460, y: 240, rank: 4 },
];

const maxVal = Math.max(...cities.map((c) => c.value));

export default function BrazilMap() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Concentração Geográfica</h2>
        <p className="section-subtitle">
          Top 5 cidades com maior concentração na base — tamanho proporcional à quantidade
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="chart-container flex items-center justify-center"
        >
          <svg viewBox="0 0 600 550" className="w-full max-w-md">
            {/* Simplified Brazil silhouette */}
            <path
              d="M280 40 C300 30 370 20 430 50 C470 70 510 100 500 120 
                 C490 140 480 160 490 180 C500 200 510 210 490 240 
                 C480 260 470 280 460 300 C450 320 440 340 450 360 
                 C460 370 440 390 420 400 C400 410 390 420 370 430 
                 C350 440 330 450 310 440 C290 430 280 420 260 430 
                 C240 440 220 450 200 440 C180 430 170 410 160 390 
                 C150 370 140 350 150 330 C160 310 170 290 160 270 
                 C150 250 140 230 150 210 C160 190 170 170 180 150 
                 C190 130 200 110 210 90 C220 70 240 50 280 40Z"
              fill="hsl(30 20% 90%)"
              stroke="hsl(30 20% 80%)"
              strokeWidth="2"
            />
            
            {/* City bubbles */}
            {cities.map((city, i) => {
              const r = 12 + (city.value / maxVal) * 30;
              return (
                <motion.g
                  key={city.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                >
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={r}
                    fill="hsl(30 95% 20% / 0.7)"
                    stroke="hsl(38 88% 40%)"
                    strokeWidth="2"
                  />
                  <text
                    x={city.x}
                    y={city.y + 3}
                    textAnchor="middle"
                    fill="hsl(35 60% 95%)"
                    fontSize="10"
                    fontWeight="bold"
                    fontFamily="DM Sans"
                  >
                    {(city.value / 1000).toFixed(1)}K
                  </text>
                  <text
                    x={city.x}
                    y={city.y + r + 14}
                    textAnchor="middle"
                    fill="hsl(20 20% 15%)"
                    fontSize="11"
                    fontFamily="DM Sans"
                    fontWeight="500"
                  >
                    {city.name}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        </motion.div>

        {/* City ranking */}
        <div className="space-y-4">
          {cities
            .sort((a, b) => a.rank - b.rank)
            .map((city, i) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                  {city.rank}
                </div>
                <div className="flex-1">
                  <h4 className="font-body font-semibold text-foreground">{city.name}</h4>
                  <div className="w-full bg-muted rounded-full h-2 mt-1">
                    <motion.div
                      className="bg-secondary rounded-full h-2"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(city.value / maxVal) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                    />
                  </div>
                </div>
                <span className="font-display font-bold text-lg text-primary">
                  {(city.value / 1000).toFixed(1)}K
                </span>
              </motion.div>
            ))}

          <div className="insight-box">
            <strong>Nordeste desproporcional:</strong> Fortaleza + Salvador = 21K pessoas — penetração de venda direta especialmente forte na região.
          </div>
        </div>
      </div>
    </div>
  );
}
