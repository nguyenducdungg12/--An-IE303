import React from 'react';
import PropTypes from 'prop-types';


const Discount = () => {
    return (
        <div class="cart__cupon">
            <span class="cart__cupon-qr">Mã giảm giá / Phiếu mua hàng</span>
            <div class="cart__cupon-type">
                <input type="text" class="cart__cupon-type-input" placeholder="Nhập mã của bạn" />
                <button class="cart__cupon-type-btn">Áp dụng ngay</button>
            </div>
        </div>
    );
};


Discount.propTypes = {

};


export default Discount;
