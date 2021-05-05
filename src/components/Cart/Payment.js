import React from 'react';
import PropTypes from 'prop-types';


const Payment = () => {
    return (
        <div class="cart-pay">
            <span class="cart-pay-text">Thanh toán(Đã bao gồm VAT)</span>
            <div class="cart-pay-sum">
                <span class="cart-pay-sum-a">Tạm tính</span>
                <span class="cart-pay-sum-money">10.000.000 đ</span>
            </div>
            <div class="cart-pay-transport">
                <span class="cart-pay-transport-a">Phí vận chuyển</span>
                <span class="cart-pay-transport-money">0 đ</span>
            </div>
            <div class="cart-pay-sale">
                <span class="cart-pay-sale-a">Khuyến mãi</span>
                <span class="cart-pay-sale-money">1.000.000 đ</span>
            </div>
            <div class="cart-pay-check">
                <span class="cart-pay-check-a">Thành tiền</span>
                <span class="cart-pay-check-money">9.000.000 đ</span>
            </div>
            <button class="cart-pay-btn-pay">
                THANH TOÁN
                <div class="cart-pay-btn-pay__title">Bạn cần đăng nhập để tiếp tục</div>
            </button>
        </div>
    );
};


Payment.propTypes = {

};


export default Payment;
