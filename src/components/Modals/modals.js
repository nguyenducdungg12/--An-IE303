import React, { useEffect } from 'react';
import './modals.css';
import Login from './Login/login';
import Register from './Register/register';
import ForgotPassword from './ForgotPassword/ForgotPassword'
import { useSelector, useDispatch } from 'react-redux';
import { closeLogin } from './../../actions/index';

const Modals = () => {
    const display=useSelector(state=>state.modalLogin);
    const dispatch=useDispatch();
    function closeModal(){
        dispatch(closeLogin());
    }
    useEffect(() => {
        var modal_body = document.querySelector(".modal__body");
        window.addEventListener("click",(e)=>{
            if(e.target==modal_body){
                closeModal();
            }
        });
    }, []);
    return (
        <div class="modal1" style={display!=0 ? {display:"block"} :{}}>
            <div class="modal__body">
                <div class="modal__body__sign-in modal__body__page">
                    <div class="modal__body__form__wrap">
                        <Login display={display} closeModal={closeModal}/>
                        <Register display={display} closeModal={closeModal}/>
                        <ForgotPassword display={display} closeModal={closeModal}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modals;
