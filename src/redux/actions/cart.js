export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})

export function removeAllPizzas() {
  return {
    type: 'REMOVE_ALL_PIZZAS',
  };
}

export function removeOneTypePizza(pizzaObj) {
  return {
    type: 'REMOVE_ONE_TYPE_PIZZA',
    payload: pizzaObj,
  };
}

export function decrementPizza(pizzaObj) {
    return{
        type: 'REMOVE_ONE_PIZZA',
        payload: pizzaObj
    };
}

export function incrementPizza(pizzaObj) {
    return{
        type: 'ADD_ONE_PIZZA',
        payload: pizzaObj
    };
}