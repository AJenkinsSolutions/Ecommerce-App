//This interface will have all the fields for our order summary 

//Shipping details will come from the order form
//name
//address

//item details will come from the Cart
//list of items

// additonal fields for order status 

export interface OrderSummary {

    id: number
    totalPrice: number
    status: string
    shippingInformation: IShippingInform

}



//Populated from the form
export interface IShippingInform {
    name: string
    address: string
    email: string
}