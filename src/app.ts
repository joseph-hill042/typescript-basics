// ---> ARROW FUNCTIONS AND IMPLICIT RETURN <---
{
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
}
// ---> DEFAULT FUNCTION PARAMETERS <---
{
  const multiply = (x: number, y = 25) => x * y;

  console.log(multiply(5));
  console.log(multiply(5, 10));
}
// ---> OBJECT LITERAL IMPROVEMENTS <---
{
  const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName() {
      return this.name;
    },
  };

  console.log(pizza.getName());

  const toppings = ['pepperoni'];

  const createOrder = (pizza: { name: string; price: number }, toppings: string[]) => {
    return {
      pizza,
      toppings,
    };
  };

  console.log(createOrder(pizza, toppings));
}

// ---> REST PARAMETERS <---
{
  const sum = (...numbers: number[]) => {
    return numbers.reduce((a, b) => a + b);
  };

  console.log(sum(1, 2, 3, 4, 5));
}

// ---> SPREAD OPERATOR <---
{
  const toppings = ['bacon', 'chilli'];

  const newToppings = ['pepperoni'];

  const allToppings = [...toppings, ...newToppings];

  console.log(allToppings);
}

{
  const pizza = { name: 'Pepperoni', price: 15 };

  const toppings = ['pepperoni'];

  // old way using Object.assign
  const order = Object.assign({}, pizza, { toppings });

  // new way using spread operator
  const spreadOrder = { ...pizza, toppings };

  console.log(order, spreadOrder);
}
