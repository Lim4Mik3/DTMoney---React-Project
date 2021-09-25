import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  category: string;
  amount: number;
  type: string;
  createdAt: string;  
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionInput) {
    api.post('transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      { children }
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const transactionsData = useContext(TransactionsContext);

  return transactionsData;
}