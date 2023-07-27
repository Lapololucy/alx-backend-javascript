import Pricing from './4-pricing';
import Currency from './3-currency';

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p); // Output: Pricing { _amount: 100, _currency: Currency { _code: 'EUR', _name: 'Euro' } }
console.log(p.displayFullPrice()); // Output: 100 Euro (EUR)

const convertedPrice = Pricing.convertPrice(100, 0.85);
console.log(convertedPrice); // Output: 85
