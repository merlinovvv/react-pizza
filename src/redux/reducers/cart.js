const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : [
                    ...state.items[action.payload.id],
                    action.payload
                ]
            }
            const allPizzas = [].concat.apply([], Object.values(newItems));
            const totalPrice = allPizzas.reduce((acc, item) => acc + item.price, 0)
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            }
        }
        case 'REMOVE_ALL_PIZZAS':
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0
            };
        case 'REMOVE_ONE_TYPE_PIZZA':

            const { id, size, type } = action.payload[0];
            const newState = Object.values(state.items);
            const updatedItems = newState.map((arr) =>
                arr.filter((obj) => !(obj.id === id && obj.type === type && obj.size === size))
            ).filter((arr) => arr.length > 0);

            const allPizzasAfterRemoving = [].concat.apply([], updatedItems);
            const totalCount = allPizzasAfterRemoving.length;
            const totalPrice = allPizzasAfterRemoving.reduce((acc, item) => acc + item.price, 0);

            return {
                ...state,
                items: Object.fromEntries(updatedItems.entries()),
                totalCount,
                totalPrice
            };
        case 'ADD_ONE_PIZZA': {
            const item = action.payload;
            const newState = Object.values(state.items)
            var currentPizza = null;
            for (let i = 0; i < newState.length; i++) {
                const index = newState[i];
                for (let j = 0; j < index.length; j++) {
                    if (index[j].id === item[0].id && index[j].size === item[0].size && index[j].type === item[0].type) {
                        currentPizza = index[j];
                        index.push(index[j])
                        break
                    }
                }
            }
            return {
                ...state,
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + currentPizza.price,
            };
        }
        case 'REMOVE_ONE_PIZZA': {
            const item = action.payload;
            const newState = Object.values(state.items);
            let currentPizza = null;
            for (let i = 0; i < newState.length; i++) {
                const index = newState[i];
                for (let j = 0; j < index.length; j++) {
                    if (index[j].id === item[0].id && index[j].size === item[0].size && index[j].type === item[0].type) {
                        currentPizza = index[j];
                        index.splice(j, 1);
                        break;
                    }
                }
                if (currentPizza) {
                    break;
                }
            }
            const newItems = newState.filter(item => item.length > 0);
            return {
                ...state,
                items: newItems,
                totalCount: state.totalCount - 1,
                totalPrice: state.totalPrice - (currentPizza ? currentPizza.price : 0),
            };
        }
        default:
            return state;
    }
}

export default cart;