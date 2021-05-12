import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PaymentChoosing = () => {
    const [type, settype] = useState(true);
    function renderInfoPayment() {
        if (type) {
            return <p className="payment__type__child__main">
                Thanh toán bằng hình thức chuyển khoản ATM hoặc ủy nhiệm chi. Quý khách có thể chuyển khoản vào các tài khoản sau, bằng cách ra ngân hàng gần nhất chuyển khoản theo phương thức ủy nhiệm chi hoặc qua thẻ ATM, Internet Banking, cổng thanh toán điện tử, ...
                <br/>
                Ngân Hàng ACB - CN Hồ Chí Minh
                <br/>
                Số tài khoản: 138826059
                <br/>
                Người thụ hưởng: Giang Thanh Hải
            </p>
        }
        else{
            return <p className="payment__type__child__main">
                Nhân viên giao hàng sẽ đến tận nơi ở của bạn và giao hàng. 
            </p>
        }
    }
    return (
        <div className="cart__cupon payment__info">
            <h3 className="cart__cupon-qr">Phương thức thanh toán</h3>
            <div className="payment__type">
                <div className="payment__type__child" onClick={()=>settype(true)}>
                    Thanh toán bằng thẻ
                </div>
                <div className="payment__type__child" onClick={()=>settype(false)}>
                    Thanh toán tận nơi
                </div>
            </div>
            {renderInfoPayment()}
        </div>
    );
};


PaymentChoosing.propTypes = {

};


export default PaymentChoosing;
