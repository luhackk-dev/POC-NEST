import { Product } from '../entities/product.entity';

export const productsMock: Product[] = [
  {
    id: 1,
    name: 'Notebook Asus',
    description: 'Notebook Dell Inspiron 15 polegadas',
    price: 3500.0,
    quantity: 10,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
    yearAt: new Date('2025')
  },
  {
    id: 2,
    name: 'Mouse Logitech',
    description: 'Mouse sem fio Logitech MX Master 3',
    price: 450.0,
    quantity: 25,
    createdAt: new Date('2025-01-05'),
    updatedAt: new Date('2025-01-05'),
    yearAt: new Date('2025'),
  },
  {
    id: 3,
    name: 'Teclado Mecânico',
    description: 'Teclado mecânico RGB switches blue',
    price: 280.0,
    quantity: 15,
    createdAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-10'),
    yearAt: new Date('2025'),
  },
];
