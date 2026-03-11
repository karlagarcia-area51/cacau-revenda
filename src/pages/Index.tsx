import DashboardNav from "@/components/DashboardNav";
import KPICards from "@/components/KPICards";
import DemographicCharts from "@/components/DemographicCharts";
import FinancialProfile from "@/components/FinancialProfile";
import PersonaCards from "@/components/PersonaCards";
import AffinityGrid from "@/components/AffinityGrid";
import BrazilMap from "@/components/BrazilMap";
import ActivationStrategy from "@/components/ActivationStrategy";
import PilotTimeline from "@/components/PilotTimeline";
import ScaleFunnel from "@/components/ScaleFunnel";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-20">
        {/* Hero */}
        <section id="kpi" className="pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Venda Direta <span className="gradient-text">Cacau Show22</span>
            </h1>
            <p className="section-subtitle mt-3">
              Plano Estratégico de Recrutamento de Revendedores — Versão 2.0 com dados reais de 397.8K revendedoras
            </p>
          </motion.div>
          <KPICards />
        </section>

        <section id="demo">
          <DemographicCharts />
        </section>

        <section id="financial">
          <FinancialProfile />
        </section>

        <section id="personas">
          <PersonaCards />
        </section>

        <section id="affinity">
          <AffinityGrid />
        </section>

        <section id="geo">
          <BrazilMap />
        </section>

        <section id="strategy">
          <ActivationStrategy />
        </section>

        <section id="pilot">
          <PilotTimeline />
        </section>

        <section id="funnel">
          <ScaleFunnel />
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border">
          <p className="text-sm text-muted-foreground font-body">
            Cacau Show — Venda Direta · Plano Estratégico v2.0 · Dados reais de 397.8K revendedoras
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
