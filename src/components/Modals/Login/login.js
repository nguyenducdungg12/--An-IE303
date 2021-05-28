import React, { useState,useEffect } from 'react';
import axiosClient from '../../../helper/axiosClient';
import { toast } from 'react-toastify';
import * as actions from '../../../actions/index';
import { useDispatch,useSelector } from 'react-redux';
import * as action from '../../../actions/user'

const Login = (props) => {
    const { display, closeModal } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        clearForm();
     },[display])
    const [valueForm, setvalueForm] = useState(
        {
            username: null,
            password: null,
        });
    function onChangeForm(e) {
        setvalueForm({
            ...valueForm,
            [e.target.name]: e.target.value
        })
    }
    async function loginUser(data) {
        var Data = await axiosClient({
            url: `http://localhost:8080/api/auth/login`,
            method: 'post',
            data: {
                username: data.username,
                password: data.password,
            }
        });
        if(Data.statusCode==200){
            localStorage.setItem("Authorization",Data.jwt);
            toast.success(Data.msg);
            dispatch(action.getApiUser());
            closeModal();
            clearForm();
        }
        else 
            toast.error(Data.msg);
            clearForm();
    }
    function clearForm(){
        setvalueForm({
            username: "",
            password: "",
        })
    }
    function onSubmitLogin(e) {

        e.preventDefault();
        loginUser(valueForm);
    }
    function onClickForgotPassword(){
        dispatch(actions.showForgotPassword());
    }
    return (
        <form style={display == 1 ? { display: "block" } : { display: "none" }} onSubmit={onSubmitLogin}>
            <div className="modal-main__title--container">
                <div className="modal-main__title--container__child" onClick={() => dispatch(actions.showRegister())}>
                    <h1 className="modal-main__title">Đăng ký</h1>
                </div>
                <div className="modal-main__title--container__child modal-main__title--container__child--active" >
                    <h1 className="modal-main__title">Đăng nhập</h1>
                </div>
            </div>
            <div className="modal__body__sign-in__form modal__body__sign-in__form__DN" style={display == 1 ? { display: "flex" } : { display: "none" }}>
                <input type="text" className="modal__body__sign-in__form-input" name="username" value={valueForm.username} placeholder="Tên Tài Khoản" onChange={onChangeForm}/>
                <input type="password" className="modal__body__sign-in__form-input" name="password" value={valueForm.password} placeholder="Mật Khẩu" onChange={onChangeForm}/>
                <div className="modal__body__sign-in__form-support">
                    <span  className="modal__body__sign-in__form-helps__forget" onClick={onClickForgotPassword}>Quên Mật Khẩu</span>
                    <span className="modal__body__sign-in__form-helps__help">Cần Trợ giúp?</span>
                </div>
                <div className="modal__body__sign-in__form-button">
                    <input type="button" value="Trở Lại" className="modol__body__sign-in__form-button-back" onClick={closeModal}/>
                    <input type="submit" value="Đăng Nhập" className="modol__body__sign-in__form-button-signin"
                      
                    />
                </div>
            </div>
            <div className="modal__body__footer">
                <ul className="modal__body__footer__list">
                    
                    <li className="modal__body__footer__list-item">
                        <a href="" className="modal__body__footer__list-item-link" style={{ background: "rgb(34, 34, 138)" }}>
                            <i className="fab fa-facebook-square"></i>
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li className="modal__body__footer__list-item">
                        <a href="" className="modal__body__footer__list-item-link" style={{ background: "#fff", color: "black", display: "flex;" }}>
                            <img src="./img/google.png" style={{ width: "20px", objectFit: "cover", marginRight: "30px" }} alt="" />
                            <span>Google</span>
                        </a>
                    </li>
                </ul>
            </div>
        </form>
    );
};


Login.propTypes = {

};


export default Login;
