import Breadcum from './../../components/Breadcum/Breadcum';
import { useSelector } from 'react-redux';
import PaymentInfo from './../../components/Cart/PaymentInfo';
import PaymentComponent from './../../components/Cart/PaymentComponent';
import Discount from './../../components/Cart/Discount';
import './payment.css';
import CartComponent from './../../components/Cart/CartComponent';
import TotalCart from '../../components/Cart/TotalCart';
import PaymentChoosing from './../../components/Cart/PaymentChoosing';
import DeliveryAddress from '../../components/Cart/DeliveryAddress';
import { useState } from 'react';
function Payment() {
    const [formdelivery, setformdelivery] = useState(null);
    const [edit, setedit] = useState(null);
    function handleForm(data,keylocal){
        setformdelivery(
            {
                form:data,
                key:keylocal
            });
        setedit(null);
    }
    function handleEdit(){
        setedit(formdelivery);
        setformdelivery(null);
    }
    console.log(formdelivery);
    function renderForm(){
        if(formdelivery){
            return <DeliveryAddress formData={formdelivery.form} edit={handleEdit}></DeliveryAddress>
        }
        return <PaymentInfo handleForm={handleForm} edit={edit}></PaymentInfo>
    }
    return (
        <div className="cart-home">
            <div className="container">
                <Breadcum final={"Thanh toán"} />
                <div class="grid__row grid__row-1">
                    <div class="grid__column-8">
                        {renderForm()}
                        <CartComponent />
                    </div>
                    <div class="grid__column-4">
                        <Discount></Discount>
                        <PaymentComponent></PaymentComponent>
                        <PaymentChoosing></PaymentChoosing>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment;