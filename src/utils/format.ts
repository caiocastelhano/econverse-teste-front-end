export const formatBRL = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const toBRLNumber = (n: number) => (n >= 1000 ? n / 100 : n);
