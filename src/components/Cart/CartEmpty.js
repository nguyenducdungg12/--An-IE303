import React from 'react'
import EmptyCart from '../../assets/img/Empty.png'

function CartEmpty() {
    return (
        <div class="cart-home__no">
            <img src={EmptyCart} alt="" />
            <span class="cart-home__no-notify">Giỏ hàng chưa có sản phẩm nào</span>
            <button><a class="cart-home__no-back-home" href="../Trang chủ/">Mua sắm ngay</a></button>
        </div>
    )
}

export default CartEmpty
