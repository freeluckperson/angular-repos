export const productsList: product[] = [
  { id: 1, name: 'Lavandina', price: 10, description: 'Botella de 1 litro' },
  { id: 2, name: 'Limpia vidrio', price: 5, description: 'Rinde 100 lavados' },
  {
    id: 3,
    name: 'Quita grasa',
    price: 7,
    description: 'Arranca grasa efectivo',
  },
  { id: 4, name: 'perfumina', price: 8, description: 'Fresco aroma natural' },
  {
    id: 5,
    name: 'Detergente',
    price: 4,
    description: 'Nueva presentacion 3 kg',
  },
];

export interface product {
  id: number | string;
  name: string;
  price: number;
  description: string;
}
