import React from 'react'
import Breadcum from '../../components/Breadcum/Breadcum'
import CartComponent from '../../components/Cart/CartComponent'
import './Cart.css'
import PaymentComponent from './../../components/Cart/PaymentComponent';
import Discount from '../../components/Cart/Discount';
import TotalCart from '../../components/Cart/TotalCart';
function Cart() {
    return (
        <div className="cart-home">
            <div className="container">
                <Breadcum final={"Giỏ hàng"} />
                <TotalCart></TotalCart>
                <div class="grid__row grid__row-1">
                    <div class="grid__column-8">
                        <CartComponent />
                    </div>
                    <div class="grid__column-4">
                        <Discount></Discount>
                        <PaymentComponent></PaymentComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
