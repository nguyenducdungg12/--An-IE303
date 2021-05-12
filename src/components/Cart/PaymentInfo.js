import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Local from '../../assets/local.json';
const PaymentInfo = (props) => {
    const {handleForm,edit}=props;
    const [formPayment, setformPayment] = useState({
        name: "",
        phone: "",
        diachi: "",
        thanhpho: "",
        quanhuyen: "",
        phuongxa: ""
    });
    const [keylocal, setkeylocal] = useState({
        city: null,
        district: null
    });
    useEffect(() => {
        if(edit){
            setformPayment(edit.form);
            setkeylocal(edit.key);
        }
    }, []);
    function onHandleChange(e) {
        setformPayment({
            ...formPayment,
            [e.target.name]: e.target.value
        })
        if (e.target.name == "thanhpho") {
            setkeylocal({
                ...keylocal,
                city: parseInt(e.target[e.target.selectedIndex].getAttribute("data-id"))
            })
        }
        else if (e.target.name == "quanhuyen") {
            setkeylocal({
                ...keylocal,
                district: parseInt(e.target[e.target.selectedIndex].getAttribute("data-id"))
            })
        }
    }
    function handlingFormCity() {
        var result = null;
        result = Local.map((city, index) => {
            return <option value={city.name} data-id={index} key={index}>{city.name}</option>
        })
        return result;
    }
    function handlingFormDistrict() {
        var result = null;
        if (keylocal.city != null) {
            result = Local[keylocal.city].districts.map((district, index) => {
                return <option value={district.name} data-id={index} key={index}>{district.name}</option>
            })
        }
        return result;
    }
    function handlingFormWards() {
        var result = null;
        if (keylocal.district != null) {
            result = Local[keylocal.city].districts[keylocal.district].wards.map((district, index) => {
                return <option value={district.name} data-id={index} key={index}>{district.name}</option>
            })
        }
        return result;
    }
    function onHandleSubmit(e){
        e.preventDefault();
        handleForm(formPayment,keylocal);
    }
    console.log(formPayment);
    return (
        <div className="cart__cupon payment__info">
            <h2 className="cart__cupon-qr">Thông tin thanh toán</h2>
            <form className="payment__form" onSubmit={onHandleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="payment__form__title">Tên</h3>
                        <input type="text" className="cart__cupon-type-input payment__form--input" required placeholder="Nhập tên của bạn" value={formPayment.name} onChange={onHandleChange} name="name"></input>
                        <h3 className="payment__form__title">Số điện thoại</h3>
                        <input type="text" className="cart__cupon-type-input payment__form--input" required placeholder="Nhập số điện thoại của bạn " value={formPayment.phone} onChange={onHandleChange} name="phone"></input>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="payment__form__title">Địa chỉ nhận hàng</h3>
                        <input type="text" className="cart__cupon-type-input payment__form--input" required placeholder="Nhập địa chỉ nhận hàng của bạn" value={formPayment.diachi} onChange={onHandleChange} name="diachi"></input>
                        <h3 className="payment__form__title">Tỉnh/Thành phố</h3>
                        <select className="cart__cupon-type-input payment__form--input"
                            // options={formPayment.thanhpho}
                            onChange={onHandleChange}
                            name="thanhpho"
                            value={formPayment.thanhpho}
                            required
                        >
                            <option disabled selected value=""> --Thành phố--</option>
                            {handlingFormCity()}
                        </select>
                        <h3 className="payment__form__title">Quận/Huyện</h3>
                        <select className="cart__cupon-type-input payment__form--input" disabled={formPayment.thanhpho == "" ? 'disabled' : null}
                            // options={formPayment.quanhuyen}
                            value={formPayment.quanhuyen}
                            onChange={onHandleChange}
                            name="quanhuyen"
                            required
                        >
                            <option disabled selected value=""> --Quận/Huyện--</option>
                            {handlingFormDistrict()}
                        </select>
                        <h3 className="payment__form__title">Phường/Xã</h3>
                        <select className="cart__cupon-type-input payment__form--input" disabled={formPayment.quanhuyen == "" ? 'disabled' : null}
                            // options={formPayment.phuongxa}
                            value={formPayment.phuongxa}
                            onChange={onHandleChange}
                            name="phuongxa"
                            required
                        >
                            <option disabled selected value=""> --Phường/Xã--</option>
                            {handlingFormWards()}
                        </select>
                        <div className="btn__payment_contain">
                            <button className="payment__btn__submit" type="submit">Lưu thông tin</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};


PaymentInfo.propTypes = {

};


export default PaymentInfo;
