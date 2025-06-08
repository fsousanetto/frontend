import { ExchangeRate } from "./exchangeRate.inteface";
import { Transaction } from "./transaction.interface";

export interface MonthlySummary {
  month: string // Ex: Fan, Fev, Mar, etc ..
  income: number;
  expense: number;
}

export interface DashboardSummary {
  balance: number;
  recentTransactions: Transaction[];
  historyChart: MonthlySummary[];
  exchangeRates: ExchangeRate[];
}
