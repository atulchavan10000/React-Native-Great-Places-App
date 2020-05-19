import { FETCH_PRODUCTS } from '../actions/products';
const initialState = {
    products: { id: 1, productName: "hello this is the demo product"}
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) { 
        case FETCH_PRODUCTS: {
            return {
                products: action.products
            }
        }
    }
    return state;
}
export default productsReducer;