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

// ---> DESTRUCTURING <---
{
  const pizza = { name: 'Pepperoni', toppings: ['pepperoni'] };

  const order = ({ name: pizzaName, toppings: pizzaToppings }: { name: string; toppings: string[] }) => {
    return {
      pizzaName,
      pizzaToppings,
    };
  };

  const { pizzaName } = order(pizza);

  console.log(pizzaName);

  const toppings = ['pepperoni', 'chilli', 'bacon'];

  const [first, second, third] = toppings;

  console.log(first, second, third);

  const logToppings = ([first, second, third]: string[]) => {
    console.log(first, second, third);
  };

  logToppings(toppings);
}

// ---> NUMBER TYPES, ARGUMENTS AND FUNCTIONS <---
{
  const pizzaCost = 10;
  const pizzaToppings = 2;

  const calculatePrice = (cost: number, toppings: number): number => {
    return cost + 1.5 * toppings;
  };

  const price: number = calculatePrice(pizzaCost, pizzaToppings);

  console.log(`Pizza costs: $${price}`);
}

// ---> STRING TYPES, STRING LITERALS <---
{
  const coupon = 'pizza25';

  const normalizeCoupon = (code: string): string => {
    return code.toUpperCase();
  };

  const couponMessage = `Final coupon is ${normalizeCoupon(coupon)}`;

  console.log(couponMessage);
}

// ---> BOOLEAN TYPE, BOOLEAN LITERALS <---
{
  const pizzas = 5;
  const offerDiscount = (orders: number): boolean => {
    return orders >= 3;
  };

  if (offerDiscount(pizzas)) {
    console.log('Enjoy 25% discount');
  } else {
    console.log('Order more than 3 pizzas to get 25% discount');
  }
}

// ---> THE ANY TYPE <---
{
  let coupon;

  coupon = 25;
  coupon = 'pizza25';
  coupon = true;
}
