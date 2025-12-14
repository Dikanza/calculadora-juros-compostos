import { SimulationInput, CalculationResult, MonthlyResult } from '../types';

export const calculateCompoundInterest = (input: SimulationInput): CalculationResult => {
  const { initialValue, monthlyValue, interestRate, rateType, period, periodType } = input;

  // Normalize time to months
  const totalMonths = periodType === 'years' ? period * 12 : period;

  // Normalize rate to monthly decimal
  // If annual: (1 + i_a)^(1/12) - 1
  // If monthly: i_m / 100
  let monthlyRate = 0;
  if (interestRate > 0) {
      if (rateType === 'annual') {
          monthlyRate = Math.pow(1 + interestRate / 100, 1 / 12) - 1;
      } else {
          monthlyRate = interestRate / 100;
      }
  }

  const breakdown: MonthlyResult[] = [];
  
  let currentAccumulated = initialValue;
  let totalInvested = initialValue;

  // Initial state (Month 0)
  breakdown.push({
    month: 0,
    totalInvested: initialValue,
    totalInterest: 0,
    totalAccumulated: initialValue,
    monthlyInterest: 0
  });

  for (let i = 1; i <= totalMonths; i++) {
    // Calculate interest for this month based on previous accumulated
    const interestEarned = currentAccumulated * monthlyRate;
    
    // Add interest and monthly contribution
    currentAccumulated += interestEarned + monthlyValue;
    totalInvested += monthlyValue;

    breakdown.push({
      month: i,
      totalInvested: Number(totalInvested.toFixed(2)),
      totalInterest: Number((currentAccumulated - totalInvested).toFixed(2)),
      totalAccumulated: Number(currentAccumulated.toFixed(2)),
      monthlyInterest: Number(interestEarned.toFixed(2))
    });
  }

  return {
    summary: {
      totalInvested: Number(totalInvested.toFixed(2)),
      totalInterest: Number((breakdown[breakdown.length - 1].totalInterest).toFixed(2)),
      totalFinal: Number(currentAccumulated.toFixed(2))
    },
    breakdown
  };
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-AO', {
    style: 'currency',
    currency: 'AOA',
  }).format(value);
};