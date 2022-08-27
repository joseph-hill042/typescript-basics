const pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }];

// ---> ARROW FUNCTIONS AND IMPLICIT RETURN <---
{
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
