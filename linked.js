
import { addition, multiply } from '../new_Script1.js';

console.log('Addition: ', addition(2, 3));
console.log('Multiplication: ', multiply(2, 3));

document.getElementById('add').textContent = `Addition: ${addition(2, 3)}`;
document.getElementById('mul').textContent = `Multiplication: ${multiply(2, 3)}`;