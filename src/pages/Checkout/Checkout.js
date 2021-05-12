import React,{useState} from 'react'
import Breadcum from '../../components/Breadcum/Breadcum'
function Checkout() {
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

export default Checkout
