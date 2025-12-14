import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResultsSection from './components/ResultsSection';
import GuideSection from './components/GuideSection';
import { SimulationInput, CalculationResult } from './types';
import { calculateCompoundInterest } from './utils/calculations';
import { LineChart } from 'lucide-react';

const App: React.FC = () => {
  const [results, setResults] = useState<CalculationResult | null>(null);

  const handleCalculate = (data: SimulationInput) => {
    const calculation = calculateCompoundInterest(data);
    setResults(calculation);
    
    // Smooth scroll to results on mobile
    setTimeout(() => {
      const resultsElement = document.getElementById('results-anchor');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleClear = () => {
    setResults(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary-700">
            <div className="bg-primary-100 p-2 rounded-lg">
               <LineChart className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">FinSim</h1>
          </div>
          <nav>
            <a href="#guide" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              Como funciona?
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Intro Text */}
        <section className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Simulador de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Juros Compostos</span>
          </h2>
          <p className="text-lg text-slate-600">
            Planeje sua independência financeira. Calcule quanto seus investimentos podem render ao longo do tempo.
          </p>
        </section>

        {/* Input Form */}
        <section>
          <InputForm onCalculate={handleCalculate} onClear={handleClear} />
        </section>

        {/* Results */}
        <div id="results-anchor" className="scroll-mt-24">
          {results && <ResultsSection results={results} />}
        </div>

        {/* Educational Content */}
        <section id="guide" className="pt-10 border-t border-slate-200">
          <GuideSection />
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4 text-sm">
            Nota: Este simulador é apenas para fins educativos e de planejamento. 
            Resultados passados ou simulações não garantem rentabilidade futura.
            Os cálculos não consideram inflação ou impostos (IR, IOF) a menos que especificado.
          </p>
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} FinSim. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;