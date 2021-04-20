import React from 'react';
import PropTypes from 'prop-types';


const CartItem = (props) => {
    const {item}=props;
    return (
        <div class="cart__item">
            <div class="cart__item-info">
                <img src="./img/lap4.webp" alt="" class="cart__item-img" />
                <div class="cart__item-info-list">
                    <span class="cart__item-name">
                        {item.name}
                    </span>
                    <span class="cart__item-name-qr">{item.id}</span>
                </div>
            </div>
            <div class="cart__item-detail">
                <div>
                    <button class="cart__item-remove">
                        <i class="far fa-trash-alt"></i>
                    </button>
                    <span class="cart__item-quantity">2</span>
                    <button class="cart__item-add">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="cart__item-price">
                <div class="cart__item-price-current">{item.pricenew}</div>
                <div class="cart__item-price-old">{item.priceold}</div>
            </div>
        </div>
    );
};
CartItem.defaultProps={
    item:{}
}

CartItem.propTypes = {

};


export default CartItem;
