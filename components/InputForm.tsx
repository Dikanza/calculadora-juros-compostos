import React, { useState } from 'react';
import { SimulationInput, PeriodType, RateType } from '../types';
import { Calculator, Trash2 } from 'lucide-react';

interface InputFormProps {
  onCalculate: (data: SimulationInput) => void;
  onClear: () => void;
}

const InputForm: React.FC<InputFormProps> = ({ onCalculate, onClear }) => {
  const [initialValue, setInitialValue] = useState<string>('1000');
  const [monthlyValue, setMonthlyValue] = useState<string>('500');
  const [interestRate, setInterestRate] = useState<string>('10');
  const [rateType, setRateType] = useState<RateType>('annual');
  const [period, setPeriod] = useState<string>('10');
  const [periodType, setPeriodType] = useState<PeriodType>('years');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate({
      initialValue: Number(initialValue) || 0,
      monthlyValue: Number(monthlyValue) || 0,
      interestRate: Number(interestRate) || 0,
      rateType,
      period: Number(period) || 0,
      periodType
    });
  };

  const handleClear = () => {
    setInitialValue('');
    setMonthlyValue('');
    setInterestRate('');
    setPeriod('');
    onClear();
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-6 text-primary-700">
        <Calculator className="w-6 h-6" />
        <h2 className="text-xl font-bold">Simulador de Juros Compostos</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Valor Inicial */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-600">Valor inicial</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">R$</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={initialValue}
                onChange={(e) => setInitialValue(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white text-slate-900 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none placeholder-slate-400"
                placeholder="0,00"
              />
            </div>
          </div>

          {/* Valor Mensal */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-600">Valor mensal</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">R$</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={monthlyValue}
                onChange={(e) => setMonthlyValue(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white text-slate-900 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none placeholder-slate-400"
                placeholder="0,00"
              />
            </div>
          </div>

          {/* Taxa de Juros */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-600">Taxa de juros</label>
            <div className="flex rounded-lg border border-slate-300 overflow-hidden bg-white focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500 transition-all">
              <div className="relative flex-grow">
                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">%</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-none outline-none focus:ring-0 bg-transparent text-slate-900 placeholder-slate-400"
                  placeholder="0,00"
                />
              </div>
              <select
                value={rateType}
                onChange={(e) => setRateType(e.target.value as RateType)}
                className="bg-slate-50 border-l border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 outline-none hover:bg-slate-100 cursor-pointer"
              >
                <option value="annual">anual</option>
                <option value="monthly">mensal</option>
              </select>
            </div>
          </div>

          {/* Período */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-600">Período</label>
            <div className="flex rounded-lg border border-slate-300 overflow-hidden bg-white focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500 transition-all">
              <input
                type="number"
                min="1"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="w-full px-4 py-3 border-none outline-none focus:ring-0 bg-transparent text-slate-900 placeholder-slate-400"
                placeholder="0"
              />
              <select
                value={periodType}
                onChange={(e) => setPeriodType(e.target.value as PeriodType)}
                className="bg-slate-50 border-l border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 outline-none hover:bg-slate-100 cursor-pointer"
              >
                <option value="years">anos</option>
                <option value="months">meses</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform transition-all active:scale-95"
          >
            Calcular
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-2 text-slate-500 hover:text-red-500 font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;