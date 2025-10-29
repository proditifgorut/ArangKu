import { faker } from '@faker-js/faker';
import { Product } from '../types';

const categories = [
  'Arang BBQ',
  'Arang Shisha',
  'Arang Industri',
  'Arang Premium'
];

const productNames = [
  'Arang Tempurung Kelapa Premium',
  'Arang Tempurung BBQ Grade A',
  'Arang Tempurung Shisha Premium',
  'Arang Tempurung Industri',
  'Arang Tempurung Hexagonal',
  'Arang Tempurung Cube Premium',
  'Arang Tempurung Natural',
  'Arang Tempurung Quick Light',
  'Arang Tempurung Long Burning',
  'Arang Tempurung Restaurant Grade',
  'Arang Tempurung Export Quality',
  'Arang Tempurung Eco-Friendly'
];

const imageUrls = [
  'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&h=600&fit=crop'
];

export const generateProducts = (): Product[] => {
  return productNames.map((name, index) => ({
    id: `prod-${index + 1}`,
    name,
    description: faker.commerce.productDescription(),
    price: Number(faker.commerce.price({ min: 50000, max: 500000 })),
    image: imageUrls[index % imageUrls.length],
    category: categories[index % categories.length],
    stock: faker.number.int({ min: 10, max: 500 }),
    rating: Number(faker.number.float({ min: 4, max: 5, fractionDigits: 1 })),
    reviews: faker.number.int({ min: 10, max: 200 }),
    weight: `${faker.number.int({ min: 1, max: 10 })} kg`,
    specifications: [
      { label: 'Bahan', value: 'Tempurung Kelapa' },
      { label: 'Kadar Air', value: `${faker.number.int({ min: 3, max: 8 })}%` },
      { label: 'Kadar Abu', value: `${faker.number.int({ min: 2, max: 5 })}%` },
      { label: 'Waktu Bakar', value: `${faker.number.int({ min: 2, max: 4 })} jam` },
      { label: 'Negara Asal', value: 'Indonesia' }
    ]
  }));
};

export const products = generateProducts();
