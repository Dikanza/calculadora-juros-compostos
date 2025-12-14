import React from 'react';
import { CalculationResult, MonthlyResult } from '../types';
import { formatCurrency } from '../utils/calculations';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, PiggyBank, Coins } from 'lucide-react';

interface ResultsSectionProps {
  results: CalculationResult;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ results }) => {
  
  // Downsample data for chart if it's too large to keep performance up
  const chartData = results.breakdown.filter((_, index) => {
      const totalPoints = results.breakdown.length;
      if (totalPoints < 30) return true;
      if (totalPoints < 100) return index % 2 === 0;
      return index % Math.ceil(totalPoints / 50) === 0;
  });

  return (
    <div className="space-y-8 animate-fade-in-up">
      <h2 className="text-2xl font-bold text-slate-800">Resultado</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary-600 text-white p-6 rounded-xl shadow-lg transform transition-transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-2 opacity-90">
             <TrendingUp className="w-5 h-5" />
             <span className="text-sm font-medium">Valor Total Final</span>
          </div>
          <p className="text-2xl md:text-3xl font-bold tracking-tight">
            {formatCurrency(results.summary.totalFinal)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <div className="flex items-center gap-3 mb-2 text-slate-500">
             <PiggyBank className="w-5 h-5" />
             <span className="text-sm font-medium">Total Investido</span>
          </div>
          <p className="text-2xl font-bold text-slate-800">
            {formatCurrency(results.summary.totalInvested)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-2 text-slate-500">
             <Coins className="w-5 h-5" />
             <span className="text-sm font-medium">Total em Juros</span>
          </div>
          <p className="text-2xl font-bold text-emerald-600">
            {formatCurrency(results.summary.totalInterest)}
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Evolução Patrimonial</h3>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#64748b" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#64748b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="month" 
                tick={{fontSize: 12, fill: '#64748b'}} 
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => val % 12 === 0 ? `Ano ${val/12}` : val}
                minTickGap={30}
              />
              <YAxis 
                tick={{fontSize: 12, fill: '#64748b'}} 
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => 
                  new Intl.NumberFormat('pt-BR', { notation: "compact", compactDisplay: "short" }).format(value)
                }
              />
              <Tooltip 
                formatter={(value: number) => formatCurrency(value)}
                labelFormatter={(label) => `Mês ${label}`}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Area 
                type="monotone" 
                dataKey="totalAccumulated" 
                name="Total Acumulado" 
                stroke="#0ea5e9" 
                fillOpacity={1} 
                fill="url(#colorTotal)" 
                strokeWidth={3}
              />
              <Area 
                type="monotone" 
                dataKey="totalInvested" 
                name="Valor Investido" 
                stroke="#64748b" 
                fillOpacity={1} 
                fill="url(#colorInvested)" 
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
           <h3 className="text-lg font-bold text-slate-800">Detalhamento Mensal</h3>
        </div>
        <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase font-semibold sticky top-0 z-10 shadow-sm">
              <tr>
                <th className="px-6 py-4">Mês</th>
                <th className="px-6 py-4">Juros (Mês)</th>
                <th className="px-6 py-4">Total Investido</th>
                <th className="px-6 py-4">Total Juros</th>
                <th className="px-6 py-4">Total Acumulado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {results.breakdown.map((row) => (
                <tr key={row.month} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-700">{row.month}</td>
                  <td className="px-6 py-4 text-emerald-600">+{formatCurrency(row.monthlyInterest)}</td>
                  <td className="px-6 py-4 text-slate-600">{formatCurrency(row.totalInvested)}</td>
                  <td className="px-6 py-4 text-slate-600">{formatCurrency(row.totalInterest)}</td>
                  <td className="px-6 py-4 font-bold text-slate-800">{formatCurrency(row.totalAccumulated)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;