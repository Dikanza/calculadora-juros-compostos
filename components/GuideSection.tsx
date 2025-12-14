import React from 'react';
import { Lightbulb, TrendingUp, AlertTriangle, BookOpen } from 'lucide-react';

const GuideSection: React.FC = () => {
  return (
    <div className="space-y-12">
      
      {/* Intro Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <BookOpen className="text-primary-600" />
          Como usar o Simulador
        </h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Esta ferramenta foi desenvolvida para ajudar você a planejar seu futuro financeiro. 
          Ao visualizar o "efeito bola de neve" dos juros compostos, você pode tomar decisões melhores hoje.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="font-bold text-primary-600 bg-primary-50 w-8 h-8 flex items-center justify-center rounded-full shrink-0">1</span>
              <div>
                <strong className="block text-slate-900">Aporte Inicial</strong>
                Quanto você tem hoje para começar? Se for zero, tudo bem!
              </div>
            </li>
            <li className="flex gap-3">
               <span className="font-bold text-primary-600 bg-primary-50 w-8 h-8 flex items-center justify-center rounded-full shrink-0">2</span>
              <div>
                <strong className="block text-slate-900">Aporte Mensal</strong>
                O segredo está na constância. Quanto você vai depositar todo mês?
              </div>
            </li>
          </ul>
          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-3">
               <span className="font-bold text-primary-600 bg-primary-50 w-8 h-8 flex items-center justify-center rounded-full shrink-0">3</span>
              <div>
                <strong className="block text-slate-900">Taxa de Juros</strong>
                A rentabilidade esperada. Pode ser a Selic, rendimento de FIIs ou CDBs.
              </div>
            </li>
            <li className="flex gap-3">
               <span className="font-bold text-primary-600 bg-primary-50 w-8 h-8 flex items-center justify-center rounded-full shrink-0">4</span>
              <div>
                <strong className="block text-slate-900">Tempo</strong>
                Juros compostos precisam de tempo. Quanto mais longo o prazo, maior o retorno.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Formula & Explanation */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 text-slate-100 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">A Fórmula Mágica</h3>
          <p className="mb-6 text-slate-300">
            A base matemática é exponencial. Diferente dos juros simples que crescem em linha reta, 
            os juros compostos crescem em uma curva ascendente.
          </p>
          <div className="bg-slate-800 p-6 rounded-lg font-mono text-center text-lg mb-6 border border-slate-700">
            M = C × (1 + i)<sup>t</sup>
          </div>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>M</span> <span>Montante Final</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>C</span> <span>Capital Inicial</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>i</span> <span>Taxa de Juros (decimal)</span>
            </li>
            <li className="flex justify-between">
              <span>t</span> <span>Tempo</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-emerald-800 mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Aliado nos Investimentos
            </h3>
            <p className="text-emerald-700 text-sm">
              Quando você investe, os juros compostos aceleram seus ganhos. Os rendimentos do mês passado 
              geram novos rendimentos neste mês. É o dinheiro trabalhando para você.
              <br/><br/>
              <em>Exemplos: Tesouro Direto, Ações (reinvestindo dividendos), Fundos Imobiliários.</em>
            </p>
          </div>

          <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Inimigo nas Dívidas
            </h3>
            <p className="text-red-700 text-sm">
              Nas dívidas, a lógica é a mesma, mas contra você. Se você não paga a fatura total do cartão, 
              os juros do próximo mês incidem sobre a dívida original MAIS os juros não pagos.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <div className="flex items-start gap-4">
           <div className="bg-amber-100 p-3 rounded-full text-amber-600 hidden md:block">
             <Lightbulb className="w-6 h-6" />
           </div>
           <div>
             <h3 className="text-xl font-bold text-slate-800 mb-4">Juros Simples vs. Compostos: O Exemplo Prático</h3>
             <p className="text-slate-600 mb-4">
               Imagine investir <strong>R$ 10.000</strong> a uma taxa de <strong>10% ao ano</strong> durante 3 anos.
             </p>
             <div className="grid md:grid-cols-2 gap-8 mt-6">
               <div className="border-l-4 border-slate-300 pl-4">
                 <h4 className="font-bold text-slate-700 mb-2">Juros Simples</h4>
                 <p className="text-sm text-slate-600 mb-2">Calculado apenas sobre o valor inicial.</p>
                 <ul className="text-sm space-y-1 text-slate-500">
                   <li>Ano 1: Ganha R$ 1.000</li>
                   <li>Ano 2: Ganha R$ 1.000</li>
                   <li>Ano 3: Ganha R$ 1.000</li>
                   <li className="font-bold text-slate-800 pt-2">Total: R$ 13.000</li>
                 </ul>
               </div>
               <div className="border-l-4 border-primary-500 pl-4">
                 <h4 className="font-bold text-primary-700 mb-2">Juros Compostos</h4>
                 <p className="text-sm text-slate-600 mb-2">Calculado sobre o acumulado.</p>
                 <ul className="text-sm space-y-1 text-slate-500">
                   <li>Ano 1: Ganha R$ 1.000 (Base R$ 10k)</li>
                   <li>Ano 2: Ganha R$ 1.100 (Base R$ 11k)</li>
                   <li>Ano 3: Ganha R$ 1.210 (Base R$ 12.1k)</li>
                   <li className="font-bold text-primary-700 pt-2">Total: R$ 13.310</li>
                 </ul>
               </div>
             </div>
             <p className="mt-6 text-sm italic text-slate-500">
               "Os juros compostos são a oitava maravilha do mundo. Aquele que entende, ganha. Aquele que não entende, paga." — Albert Einstein
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GuideSection;