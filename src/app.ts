const pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
  name: 'Blazing Inferno',
  getName() {
    return this.name;
  },
};

console.log(pizza.getName());

function multiply(x: number, y = 25) {
  return x * y;
}

console.log(multiply(5));
console.log(multiply(5, 10));
