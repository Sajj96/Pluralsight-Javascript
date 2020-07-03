import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0, 0.00')
// eslint-disable-next-line no-console
console.log(`I would pay ${courseValue} for this awesome course`)