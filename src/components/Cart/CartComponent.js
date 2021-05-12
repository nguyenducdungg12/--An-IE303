import React, { useState } from 'react'
import CartEmpty from './CartEmpty';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './../../actions/index';
import transferPrice from '../../helper/TransferPrice'
function CartItemComponent(props) {
    const {data}=props;
    const dispatch=useDispatch();
    return (
        <div class="cart__item">
            <div class="cart__item-info">
                <img src={data.image} alt="" class="cart__item-img" />
                <div class="cart__item-info-list">
                    <span class="cart__item-name">
                        {data.title}</span>
                    <span class="cart__item-name-qr">{data.id}</span>
                </div>
            </div>
            <div class="cart__item-detail">
                <div>
                    <button className="cart__item-remove" onClick={() => dispatch(actions.changeQuantityCart(-1,data))}>
                        <i class={`${data.soluong == 1 ? 'far fa-trash-alt' : 'fas fa-minus'}`}></i>
                    </button>
                    <span class="cart__item-quantity">{data.soluong}</span>
                    <button class="cart__item-add" onClick={() => dispatch(actions.changeQuantityCart(1,data))}>
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="cart__item-price">
                <div class="cart__item-price-current">{transferPrice(data.newprice * data.soluong)}đ</div>
                <div class="cart__item-price-old">{transferPrice(data.oldprice * data.soluong)}đ</div>
            </div>
        </div>
    )
}

function CartComponent(props) {
    const ListCart=useSelector(state=>state.cart);
    function renderListCart() {
        var content = [];
        if (ListCart && ListCart.length > 0)
            content = ListCart.map((item, stt) => <CartItemComponent data={item} key={stt} />);
        else
            content = (<CartEmpty></CartEmpty>);
        return content;
    }
    return (
        <div>
            {renderListCart()}
        </div>
    )
}

export default CartComponent
