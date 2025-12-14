export type PeriodType = 'years' | 'months';
export type RateType = 'annual' | 'monthly';

export interface SimulationInput {
  initialValue: number;
  monthlyValue: number;
  interestRate: number;
  rateType: RateType;
  period: number;
  periodType: PeriodType;
}

export interface MonthlyResult {
  month: number;
  totalInvested: number;
  totalInterest: number;
  totalAccumulated: number;
  monthlyInterest: number;
}

export interface CalculationResult {
  summary: {
    totalInvested: number;
    totalInterest: number;
    totalFinal: number;
  };
  breakdown: MonthlyResult[];
}