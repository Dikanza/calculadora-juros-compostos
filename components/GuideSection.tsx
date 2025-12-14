import React from 'react';
import { Lightbulb, TrendingUp, AlertTriangle, BookOpen, PiggyBank } from 'lucide-react';

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
                A rentabilidade esperada. Pode ser a taxa Luibor, Bilhetes do Tesouro ou depósitos a prazo.
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

      {/* Savings Advice & Explanation */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 text-slate-100 rounded-2xl p-8 shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <PiggyBank className="text-primary-400" />
              A Regra de Ouro: Pague-se Primeiro
            </h3>
            <p className="mb-6 text-slate-300 leading-relaxed">
              Muitas pessoas tentam poupar o que sobra no fim do mês, mas a verdade é que quase nunca sobra. 
              O segredo da riqueza não é ganhar mais, é saber separar uma parte antes de gastar.
            </p>
            
            <div className="bg-slate-800 p-6 rounded-lg mb-6 border border-slate-700 text-center">
               <p className="text-slate-400 text-sm mb-2">Mentalidade Comum (Errada)</p>
               <p className="line-through text-slate-500 mb-4">Renda - Gastos = Poupança</p>
               
               <p className="text-primary-400 text-sm mb-2 font-bold">Mentalidade de Investidor (Certa)</p>
               <p className="text-xl font-bold text-white">Renda - Poupança = Gastos</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">Dicas para começar hoje:</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> 
                  Defina uma meta fixa (ex: 10% do salário).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> 
                  Transfira esse valor assim que o dinheiro cair na conta.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> 
                  Viva com o restante, ajustando seu padrão de vida.
                </li>
              </ul>
            </div>
          </div>
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
              <em>Exemplos: Depósitos a Prazo, Títulos do Tesouro de Angola, Fundos de Investimento.</em>
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
               Imagine investir <strong>Kz 10.000</strong> a uma taxa de <strong>10% ao ano</strong> durante 3 anos.
             </p>
             <div className="grid md:grid-cols-2 gap-8 mt-6">
               <div className="border-l-4 border-slate-300 pl-4">
                 <h4 className="font-bold text-slate-700 mb-2">Juros Simples</h4>
                 <p className="text-sm text-slate-600 mb-2">Calculado apenas sobre o valor inicial.</p>
                 <ul className="text-sm space-y-1 text-slate-500">
                   <li>Ano 1: Ganha Kz 1.000</li>
                   <li>Ano 2: Ganha Kz 1.000</li>
                   <li>Ano 3: Ganha Kz 1.000</li>
                   <li className="font-bold text-slate-800 pt-2">Total: Kz 13.000</li>
                 </ul>
               </div>
               <div className="border-l-4 border-primary-500 pl-4">
                 <h4 className="font-bold text-primary-700 mb-2">Juros Compostos</h4>
                 <p className="text-sm text-slate-600 mb-2">Calculado sobre o acumulado.</p>
                 <ul className="text-sm space-y-1 text-slate-500">
                   <li>Ano 1: Ganha Kz 1.000 (Base Kz 10k)</li>
                   <li>Ano 2: Ganha Kz 1.100 (Base Kz 11k)</li>
                   <li>Ano 3: Ganha Kz 1.210 (Base Kz 12.1k)</li>
                   <li className="font-bold text-primary-700 pt-2">Total: Kz 13.310</li>
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