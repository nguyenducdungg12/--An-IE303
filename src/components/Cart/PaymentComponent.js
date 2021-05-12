import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import transferPrice from '../../helper/TransferPrice'
import { Link } from 'react-router-dom';

const PaymentComponent = (props) => {
    const ListCart = useSelector(state => state.cart);
    function renderTotalMoney(){
        var total=0;
        if(ListCart.length>0){
            ListCart.forEach((item)=>{
                total += item.soluong*item.newprice;
            })
        }
        return total;
    }
    return (
        <div class="cart-pay">
            <span class="cart-pay-text">Thanh toán(Đã bao gồm VAT)</span>
            <div class="cart-pay-sum">
                <span class="cart-pay-sum-a">Tạm tính</span>
                <span class="cart-pay-sum-money">{transferPrice(renderTotalMoney())}đ</span>
            </div>
            <div class="cart-pay-transport">
                <span class="cart-pay-transport-a">Phí vận chuyển</span>
                <span class="cart-pay-transport-money">30.000 đ</span>
            </div>
            <div class="cart-pay-sale">
                <span class="cart-pay-sale-a">Khuyến mãi</span>
                <span class="cart-pay-sale-money">0.000.000 đ</span>
            </div>
            <div class="cart-pay-check">
                <span class="cart-pay-check-a">Thành tiền</span>
                <span class="cart-pay-check-money">{transferPrice(renderTotalMoney() + 30000)} đ</span>
            </div>
            <Link to='/payment' class="cart-pay-btn-pay link-cart-pay-btn-pay">
                THANH TOÁN
                <div class="cart-pay-btn-pay__title">Bạn cần đăng nhập để tiếp tục</div>
            </Link>
        </div>
    );
};


PaymentComponent.propTypes = {

};


export default PaymentComponent;
