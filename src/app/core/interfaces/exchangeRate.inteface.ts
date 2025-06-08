export interface ExchangeRate {
  currency: string; // Ex: USD, BRL, EUR, etc.
  flagUrl?: string;
  buy: number;
  sell: number;
}
