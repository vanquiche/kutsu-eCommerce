import { v4 } from 'uuid';
import { dinero, toFormat } from 'dinero.js';
import {USD} from '@dinero.js/currencies';

export let list: any[] = [];
const productName = [
  'puma slipstream',
  'grounds aurora',
  'lebron xix',
  'new balance uxc72kw',
  'salomon speedcross',
  'converse all-stars',
  'ugg animal lyte',
  'cloudnova superstar',
  'puma ralph sampson',
  'chrome dima 3.0',
  'kyrie infinity ep',
  'gtx gel-lyte',
  'starlight freelance',
  'astir original',
  'forum low-runners',
  'panther blaze',
  'atmos cloudaway',
  'shinpei gel-quantum',
  'eames club c-85',
  'terrascape instapump',
];

const productLink = [
  'https://assets.atmos-tokyo.com/items/S/385802-01-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/fw21-4jw2-r112a-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/cz0203-002-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/uxc72kw-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/dh1085-700-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/26-98989-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/26-98992-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/gx5788-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/1134980-wbzb-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/1201a504-020-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/gx8550-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/gx8549-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/dh1085-001-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/384342-01-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/gx6341-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/dh2973-200-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/c35000-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/387207-03-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/1201a453-200-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/1202a306-102-1s.jpg',
];

function formatPrice(price: number) {
  const d = dinero({amount: price, currency: USD})
  const format = toFormat(d, ({amount}) => `${amount}`)
  return format
}

function Product(item: string, image: string) {
  const random = Math.floor(Math.random() * 10000);
  return {
    item,
    image,
    id: v4(),
    reviews: Math.floor(Math.random() * 20),
    rating: Math.floor(Math.random() * 5) + 1,
    stock: Math.floor(Math.random() * 20) + 1,
    price: random,
    format: formatPrice(random),
    qty: 1,
  };
}

(function createProduct() {
  for (let i = 0; i < 20; i++) {
    const item = Product(productName[i], productLink[i]);
    list.push(item);
  }
})();

