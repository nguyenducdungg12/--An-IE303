import React from 'react'
import Breadcum from '../../components/Breadcum/Breadcum'
import CartEmpty from '../../components/Cart/CartEmpty'
import CartComponent from '../../components/Cart/CartComponent'
import './Cart.css'
function Cart() {
    const FakeCart = [{
        image:"https://i0.wp.com/prolap.vn/wp-content/uploads/2020/10/mua-surface-laptop-go.jpg?fit=1000%2C1000&ssl=1",
        title:"Laptop xịn",
        oldPrice:125,
        newPrice:110,
        id:"abd12",
        quantity:15,
    },{
        image:"https://i0.wp.com/prolap.vn/wp-content/uploads/2020/10/mua-surface-laptop-go.jpg?fit=1000%2C1000&ssl=1",
        title:"Laptop xịn",
        oldPrice:125,
        newPrice:110,
        id:"abd12",
        quantity:15,
    },{
        image:"https://i0.wp.com/prolap.vn/wp-content/uploads/2020/10/mua-surface-laptop-go.jpg?fit=1000%2C1000&ssl=1",
        title:'Laptop Dell Inspiron 15 3593-70211826 (15.6" FHD/i7-1065G7/8GB/512GB SSD/GeForce MX230/Win10/2.2kg)',
        oldPrice:125,
        newPrice:110,
        id:"abd12",
        quantity:15,
    }]
    return (
        <div className="cart-home">
            <div className="container">
                <Breadcum final={"Giỏ hàng"}/>
                <CartComponent ListCart = {FakeCart}/>
            </div>
        </div>
    )
}

export default Cart
