import React, { useState,useEffect } from 'react';
import axiosClient from '../../../helper/axiosClient';
import * as actions from './../../../actions/index';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
Register.propTypes = {

};

function Register(props) {
    const dispatch=useDispatch();
    const { display, closeModal } = props;
    useEffect(() => {
       clearForm();
    },[display])
    const [valueForm, setvalueForm] = useState(
        {
            username: null,
            password: null,
            repassword: null,
            email: null,
            phone: null
        });
    function onChangeForm(e) {
        setvalueForm({
            ...valueForm,
            [e.target.name]: e.target.value
        })
    }
    function clearForm(){
        setvalueForm({
            username: "",
            password: "",
            repassword:"",
            email: "",
            phone: "",
        });
    }
    async function regiterUser(data) {
        var Data = await axiosClient({
            url: `http://localhost:8080/api/auth/register`,
            method: 'post',
            data: {
                username: data.username,
                password: data.password,
                email: data.email,
                phone: data.phone
            }
        });
        console.log(123,Data);
        if(Data.statusCode==200){
            toast.success(Data.msg);
            toast.success("Truy cập vào Email để kích hoạt tài khoản");
            closeModal();
            clearForm();
        }
        else{
            toast.error(Data.msg);
        }
    }
    function validateForm(){
        if (valueForm.username.length<=5){
            toast.error("Tên tài khoản phải trên 6 ký tự");
            clearForm();
            return false;
        }
        if (valueForm.password != valueForm.repassword) {
            toast.error("Mật khẩu xác nhận không đúng");
            clearForm();
            return false;
        }
        if (valueForm.password.length<=5){
            toast.error("Mật khẩu phải trên 5 ký tự");
            clearForm();
            return false;
        }
        return true;
    }
    function onSubmitRegister(e) {
        e.preventDefault();
        if(validateForm()){
            regiterUser(valueForm);
        }
    }
    function onClickForgotPassword(){
        dispatch(actions.showForgotPassword());
    }
    return (
        <form style={display == 2 ? { display: "block" } : { display: "none" }} onSubmit={onSubmitRegister}>
            <div class="modal-main__title--container">
                <div class="modal-main__title--container__child modal-main__title--container__child--active" >
                    <h1 class="modal-main__title">Đăng ký</h1>
                </div>
                <div class="modal-main__title--container__child" onClick={()=>dispatch(actions.showLogin())}>
                    <h1 class="modal-main__title">Đăng nhập</h1>
                </div>
            </div>
            <div class="modal__body__sign-in__form modal__body__sign-in__form__DK" style={display == 2 ? { display: "flex" } : { display: "none" }}>
                <input type="text" class="modal__body__sign-in__form-input" name="username" value={valueForm.username} required placeholder="Tên Tài Khoản" onChange={onChangeForm} />
                <input type="password" class="modal__body__sign-in__form-input" name="password" value={valueForm.password} required placeholder="Mật Khẩu" onChange={onChangeForm} />
                <input type="password" class="modal__body__sign-in__form-input" name="repassword" value={valueForm.repassword} required placeholder="Nhập Lại Mật Khẩu" onChange={onChangeForm} />
                <input type="email" class="modal__body__sign-in__form-input" name="email" value={valueForm.email} required placeholder="Nhập Email" onChange={onChangeForm} />
                <input type="text" class="modal__body__sign-in__form-input" name="phone" value={valueForm.phone} required placeholder="Nhập Số Điện Thoại" onChange={onChangeForm} />
                <div class="modal__body__sign-in__form-support">
                <span  class="modal__body__sign-in__form-helps__forget" onClick={onClickForgotPassword}>Quên Mật Khẩu</span>
                    <span class="modal__body__sign-in__form-helps__help">Cần Trợ giúp?</span>
                </div>
                <div class="modal__body__sign-in__form-button">
                    <button class="modol__body__sign-in__form-button-back" onClick={closeModal}>
                        Trở lại
                    </button>
                    <button type="submit" class="modol__body__sign-in__form-button-signin">
                        Đăng ký
                    </button>
                </div>
            </div>
            <div class="modal__body__footer">
                <ul class="modal__body__footer__list">
                   
                    <li class="modal__body__footer__list-item">
                        <a href="" class="modal__body__footer__list-item-link" style={{ background: "rgb(34, 34, 138)" }}>
                            <i class="fab fa-facebook-square"></i>
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li class="modal__body__footer__list-item">
                        <a href="" class="modal__body__footer__list-item-link" style={{ background: "#fff", color: "black", display: "flex;" }}>
                            <img src="./img/google.png" style={{ width: "20px", objectFit: "cover", marginRight: "30px" }} alt="" />
                            <span>Google</span>
                        </a>
                    </li>
                </ul>
            </div>
        </form>
    );
}

export default Register;