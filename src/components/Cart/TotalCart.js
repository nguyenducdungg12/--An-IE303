import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css';
import * as actions from './../../actions/index';

const TotalCart = () => {
    const ListCart =useSelector(state=>state.cart);
    const dispatch=useDispatch();
    function handleDeleteAllItem() {
        if (ListCart&&ListCart.length>0) {
            confirmAlert({
                title: 'Cảnh báo',
                message: 'Bạn có chắn muốn xóa tất cả giỏ hàng',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            for(let i=0;i<ListCart.length;i++){
                                dispatch(actions.deleteCartItem(ListCart[i]));
                            }
                            toast.error("Xóa tất cả sản phẩm thành công");
                        }
                    },
                ]
            });
        }
    }
    return (
        <div class="grid__row">
            <div class="grid__column-8">
                <div class="cart__info">
                    <span class="cart__info-quantity">Giỏ hàng có {ListCart && ListCart.length} sản phẩm</span>
                    <span class={`${!ListCart || ListCart.length < 1 ? 'cart__info-delete--disable' : 'cart__info-delete'}`} onClick={handleDeleteAllItem}>Xóa tất cả</span>
                </div>
            </div>
        </div>
    );
};


TotalCart.propTypes = {

};


export default TotalCart;
