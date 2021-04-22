import React from 'react';
import PropTypes from 'prop-types';
import Breadcum from '../../components/Breadcum/Breadcum';
import CartItem from './../../components/Cart/CartItem';
import Pagination from '../../components/Pagination/Pagination';
import './Carts.css'
import Discount from './../../components/Cart/Discount';
import Payment from './../../components/Cart/Payment';

const Carts = (props) => {
    const data = [
        {
            id: 0,
            name: `Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
            img: ``,
            sl: 1,
            pricenew: `23.990.000đ`,
            priceold: ` 21.990.000đ`
        },
        {
            id: 0,
            name: `Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
            img: ``,
            sl: 1,
            pricenew: `23.990.000đ`,
            priceold: ` 21.990.000đ`
        },
        {
            id: 0,
            name: `Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
            img: ``,
            sl: 1,
            pricenew: `23.990.000đ`,
            priceold: ` 21.990.000đ`
        },
        {
            id: 0,
            name: `Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
            img: ``,
            sl: 1,
            pricenew: `23.990.000đ`,
            priceold: ` 21.990.000đ`
        },
        {
            id: 0,
            name: `Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
            img: ``,
            sl: 1,
            pricenew: `23.990.000đ`,
            priceold: ` 21.990.000đ`
        }
    ]
    // quantity là số luong
    function renderCartItem() {
        var result = [];       
        var page = parseInt(props.match.params.page) - 1;
        var render = 0;
        if (data.length == 0) {
            result = (<div class="cart-home__no">
            <img src="./img/Drj57qu.png" alt="" />
            <span class="cart-home__no-notify">Giỏ hàng chưa có sản phẩm nào</span>
            <button><a class="cart-home__no-back-home" href="../Trang chủ/">Mua sắm ngay</a></button>
            </div>);
        }
        else{
            for (let i = page * 3; i < data.length; i++) {
                if (render == 3)
                    break;
                result.push(<CartItem item={data[i]} key={i}></CartItem>)
                render++;
            }
            
        }
        return result;
    }
    return (
        <div class="cart">
            <div class="cart-home">
                <div class="grid">
                    <Breadcum title="Giỏ hàng"></Breadcum>
                    <div class="grid__row">
                        <div class="grid__column-8">
                            <div class="cart__info">
                                <span class="cart__info-quantity">Giỏ hàng có 3 sản phẩm</span>
                                <span class="cart__info-delete">Xóa tất cả</span>
                            </div>
                        </div>
                    </div>
                    <div class="grid__row grid__row-1">
                        <div class="grid__column-8">
                            {renderCartItem()}
                        </div>
                        <div class="grid__column-4">
                            <Discount></Discount>
                            <Payment></Payment>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination totalPage={Math.ceil(data.length/3)} crrpage={parseInt(props.match.params.page)}></Pagination>
        </div>
    );
};


Carts.propTypes = {

};


export default Carts;
