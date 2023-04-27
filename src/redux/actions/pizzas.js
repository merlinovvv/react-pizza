import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    const mainUrl = 'http://192.168.0.103:3001/pizzas';
    const categoryUrl = `?${category === null ? '' : `category=${category}`}`;
    const sortUrl = `&_sort=${sortBy}&_order=${sortBy === 'name' ? 'asc' : 'desc'}`;
    axios.get(mainUrl + categoryUrl + sortUrl).then(({ data }) => {
        dispatch(setPizzas(data));
    });
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})

