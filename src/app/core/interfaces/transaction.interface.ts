export type TransactionType = 'income' | 'expense';

export interface Category {
  id: string;
  name: string;
  type: TransactionType; // 'income' or 'expense'
  color?: string; // Cor para gráficos
}

export interface Transaction {
  id?: string;
  userId: string;
  type: TransactionType; // 'income' or 'expense'
  amount: number;
  description?: string;
  category: Category;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
