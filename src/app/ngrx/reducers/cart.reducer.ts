import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../models/product.interface";
import * as CartActions from '../actions/cart.action';


export interface CartState {
    products: IProduct[];
    totalPrice: number;
}

export const initalCartState: CartState = {
    products: [],
    totalPrice: 0
}

//Helper funtion which returns the updated products 
//param1 the currentState
//param2 updated products (Repersents tjhe new products array)
//Returns a CartState Object
export function updateCartState(currentState: CartState, updatedProductsArray: IProduct[]): CartState{

    // Calaculate total price outside return statement for better readability
    const updatedTotalPrice = calaculateTotalPrice(updatedProductsArray)

    return {
        //CartState Object
        ...currentState,
        products: updatedProductsArray,
        totalPrice: updatedTotalPrice
    }
}
//Helper function
export function calaculateTotalPrice(products: IProduct[]){
    return products.reduce((total, product) => total +(product.price * product.quantity), 0)
}

//Reducer Implementations
//param1 current array
//param2 new product to be added
//Returns new Array with new item added
export function addProductsToArray(productsArray: IProduct[], newProduct: IProduct) : IProduct[]{

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    //This spread operator basiclly makes a new copy of the array
    //Adds new item to newly expanded array
    return [...productsArray, newProduct]

}



export function incrementProductQauntityById(products: IProduct[], productId: number): IProduct[] {

    // either adding product to array or incrementing the product quantity
    // if product id == productid THEN productId.quantity + 1 
    // ELSE Add product to array 

    const updatedProducts: IProduct[] = [];

    for(const item of products){

        //If item is present in array, increase qauntity
        if(item.id === productId){

            //... makes sure we dont mutate the original object
            updatedProducts.push({...item, quantity: item.quantity + 1})
        }else{
            updatedProducts.push(item)
        }

    }
    return updatedProducts
}


export function decrementProductQauntityById(products: IProduct[], productId: number): IProduct[] {

    // either adding product to array or incrementing the product quantity
    // if product id == productid THEN productId.quantity + 1 
    // ELSE Add product to array 

    const updatedProducts: IProduct[] = [];

    for(const item of products){

        //If item is present in array, increase qauntity
        if(item.id === productId){

            //... makes sure we dont mutate the original object
            updatedProducts.push({...item, quantity: item.quantity - 1})
        }else{
            updatedProducts.push(item)
        }

    }
    return updatedProducts
}

export function removeProductById(products: IProduct[], productId: number): IProduct[] {
     return products.filter(product => product.id !== productId)
}


export const cartReducer = createReducer(
    initalCartState,
    
    on(CartActions.addToCart, (currentState, { product }) => {

        const updatedProductsArray = addProductsToArray(currentState.products, product);
        return updateCartState(currentState, updatedProductsArray)
    }),
    on(CartActions.incrementProductCount, (currentState, { productId } ) => {
     
        const updatedProductsArray = incrementProductQauntityById(currentState.products, productId);
        return updateCartState(currentState, updatedProductsArray);


    }),
    on(CartActions.decrementProductCount, (currentState, { productId } ) => {
        
        const updatedProductsArray = decrementProductQauntityById(currentState.products, productId);
        return updateCartState(currentState, updatedProductsArray)


    }),

    on(CartActions.removeItem, (currentState, { productId }) => {
        //T his call back func filters through the array add removes the product with the corrsponding ID
        const updatedProductsArray = removeProductById(currentState.products, productId);
        return updateCartState(currentState, updatedProductsArray);
    })

);

