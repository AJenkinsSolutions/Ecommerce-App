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

export function calaculateTotalPrice(products: IProduct[]){
    return products.reduce((total, product) => total +(product.price * product.quantity), 0)
}



export const cartReducer = createReducer(
    initalCartState,
    
    on(CartActions.addToCart, (state, { product }) => {
        const updatedProducts = [...state.products, product];
        return {
            ...state,
            products: updatedProducts,
            totalPrice: calaculateTotalPrice(updatedProducts)
        }

    }),

    //UPDATE
    on(CartActions.incrementProductCount, (state, { productId } ) => {
        console.log(state)
        console.log(productId)
        //the map method returns find the object with the correct id, then we are incrementing its qauntity property
        const updatedProducts = state.products.map((product) => 
            product.id === productId 
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return {
            ...state,
            products: updatedProducts,
            totalPrice: calaculateTotalPrice(updatedProducts)
        };


    }),
    //UPDATE
    on(CartActions.decrementProductCount, (state, { productId } ) => {
        console.log(state)
        console.log(productId)
        //the map method returns find the object with the correct id, then we are incrementing its qauntity property
        const updatedProducts = state.products.map((product) => 
            product.id === productId 
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
        return {
            ...state,
            products: updatedProducts,
            totalPrice: calaculateTotalPrice(updatedProducts)
        };


    }),
    //DELETE
    on(CartActions.removeItem, (state, { productId }) => {
        //T his call back func filters through the array add removes the product with the corrsponding ID
        const updatedProducts = state.products.filter((product) => product.id !== productId)

        return {
            ...state,
            products: updatedProducts,
            totalPrice: calaculateTotalPrice(updatedProducts)
        }

    })


    
    
);

