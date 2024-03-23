import { CartState } from "../reducers/cart.reducer"
import { CounterState } from "../reducers/counter.reducer"
import { ProductDetailsState } from "../reducers/product-details-reducer"
import { ProductListState } from "../reducers/product-list.reducer"



export interface AppState {

    counter: CounterState

    productList: ProductListState

    productDetails: ProductDetailsState

    cart: CartState

    



}