export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = (id)=>{
    let products = {id: 123, productName: "this is the product name"};
    dispatch({ type: FETCH_PRODUCTS, products: products });  
}

