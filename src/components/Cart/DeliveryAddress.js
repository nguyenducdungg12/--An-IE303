import React, { useState } from 'react';
import PropTypes from 'prop-types';


const DeliveryAddress = (props) => {
    const {formData,edit} =props;
    function onHandleEdit() {
        edit();
    }
    function onHandleSpecificEdit(){

    }
    return (
        <div className="cart__cupon payment__info">
            <h2 className="cart__cupon-qr payment__info-qr">Địa chỉ nhận hàng</h2>
            <div className="payment__address">
                <div>
                    <div className="payment__form__address">
                        <i class="fas fa-file-signature"></i>
                        <span className="payment__form__title">Tên :</span>
                        <span className="payment__form__content">{formData.name}</span>
                        {/* <i class="far fa-edit payment__form__address__edit-icon" onClick={onHandleSpecificEdit}></i> */}
                    </div>
                </div>
                <div>
                    <div className="payment__form__address">
                        <i class="fas fa-phone"></i>
                        <span className="payment__form__title">Số điện thoại:</span>
                        <span className="payment__form__content">{formData.phone}</span>
                        {/* <i class="far fa-edit payment__form__address__edit-icon" onClick={onHandleSpecificEdit}></i> */}
                    </div>
                </div>
                <div>
                    <div className="payment__form__address">
                        <i class="fas fa-map-marker-alt"></i>
                        <span className="payment__form__title">Địa chỉ nhận hàng:</span>
                        <span className="payment__form__content">{formData.diachi}</span>
                        {/* <i class="far fa-edit payment__form__address__edit-icon" onClick={onHandleSpecificEdit}></i> */}
                    </div>
                </div>
                <div>
                    <div className="payment__form__address">
                        <i class="fas fa-map-marker-alt"></i>
                        <span className="payment__form__title">Nơi ở:</span>
                        <span className="payment__form__content">{formData.phuongxa},{formData.quanhuyen},{formData.thanhpho}</span>
                        {/* <i class="far fa-edit payment__form__address__edit-icon " onClick={onHandleSpecificEdit}></i> */}
                    </div>
                </div>
                <div className="payment__form__address__btn">
                    <button className="payment__btn__submit" onClick={onHandleEdit}>Chỉnh sửa</button>
                </div>
            </div>
        </div>
    );
};


DeliveryAddress.propTypes = {

};


export default DeliveryAddress;
