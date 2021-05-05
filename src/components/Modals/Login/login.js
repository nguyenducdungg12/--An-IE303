import React from 'react';
import PropTypes from 'prop-types';

const login = (props) => {
    const {display,closeModal}= props;
    return (
        <div style={display==1 ? {display:"block"}:{display:"none"}}>
            <h1 class="modal-main__title">Đăng nhập</h1>
            <div class="modal__body__sign-in__form modal__body__sign-in__form__DN" style={display==1 ? {display:"flex"}:{display:"none"}}>
                <input type="text" class="modal__body__sign-in__form-input" placeholder="Email/Số Điện Thoại/Tên Tài Khoản" />
                <input type="password" class="modal__body__sign-in__form-input" placeholder="Mật Khẩu" />
                <div class="modal__body__sign-in__form-support">
                    <a href="#" class="modal__body__sign-in__form-helps__forget">Quên Mật Khẩu</a>
                    <a href="" class="modal__body__sign-in__form-helps__help">Cần Trợ giúp?</a>
                </div>
                <div class="modal__body__sign-in__form-button">
                    <button class="modol__body__sign-in__form-button-back" onClick={closeModal}>
                        Trở lại
                    </button>
                    <button class="modol__body__sign-in__form-button-signin">
                        Đăng nhập
                    </button>
                </div>
            </div>
            <div class="modal__body__footer">
                <ul class="modal__body__footer__list">
                    <li class="modal__body__footer__list-item">
                        <a href="" class="modal__body__footer__list-item-link" style={{ background: "green" }}>
                            <i class="fas fa-sms"></i>
                            <span>SMS</span>
                        </a>
                    </li>
                    <li class="modal__body__footer__list-item">
                        <a href="" class="modal__body__footer__list-item-link" style={{ background: "rgb(34, 34, 138)" }}>
                            <i class="fab fa-facebook-square"></i>
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li class="modal__body__footer__list-item">
                        <a href="" class="modal__body__footer__list-item-link" style={{ background: "#fff", color: "black", display: "flex;" }}>
                            <img src="./img/google.png"  style={{width: "20px", objectFit: "cover",  marginRight: "30px" }} alt="" />
                            <span>Google</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};


login.propTypes = {

};


export default login;
