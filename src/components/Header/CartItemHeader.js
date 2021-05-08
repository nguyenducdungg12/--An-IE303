import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {deleteCartItem} from './../../actions/index';
import { toast } from 'react-toastify';
const CartItemHeader = (props) => {
    const {product} =props;
    const dispatch=useDispatch();
    return (
        <li class="contain-cart-item">
            <img alt="" src={product.image} class="contain-cart__img" />
            <div class="contain-cart__contain">
                <span class="contain-cart__text">{product.title}</span>
                <div class='contain-cart-price'>
                    <span class="contain-cart__count">Số lượng: {product.soluong}</span>
                    <span class="contain-cart__money">Thành Tiền: {product.soluong*product.newprice}</span>
                </div>
            </div>
            <span class="contain-cart-item-close" onClick={()=>{dispatch(deleteCartItem(product));toast.error("Xóa sản phẩm thành công");}}>
                <i class="fas fa-times icon-item-close"></i>
            </span>
        </li>
    );
};


CartItemHeader.propTypes = {

};


export default CartItemHeader;
