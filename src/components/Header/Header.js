import React, { useEffect, useState } from 'react';
import './header.css';
import logo from '../../assets/img/logo.png';
import banner from '../../assets/img/banner1.png';
import dangki from '../../assets/img/ak1.png';
import dangnhap from '../../assets/img/ak3.png';
import giohang from '../../assets/img/ak5.png';
import icon1 from '../../assets/img/xk1s.png'
import icon2 from '../../assets/img/xk2s.png'
import icon3 from '../../assets/img/xk3s.png'
import icon4 from '../../assets/img/xk4s.png'
import icon5 from '../../assets/img/xk5s.png'
import laptop from '../../assets/img/xxx21.png'
import * as actions from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import CartItemHeader from './CartItemHeader'
import *as action from '../../actions/user'
const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const product = useSelector(state=>state.cart)||[];
    const user = useSelector(state => state.user)
    const [userDropdown, setuserDropdown] = useState(false);
    function DropdownUser(){
        setuserDropdown(!userDropdown);
     }
    const [searchValue, setsearchValue] = useState(null);
    function onChangeValue(e) {
        setsearchValue(e.target.value);
    }
    function onSearch(e) {
        e.preventDefault();
        if (searchValue) {
            history.push(`/Products/search?q=${searchValue}`);
            setsearchValue('');
        }
    }
    function renderTotalMoney(){
        var total=0;
        if(product.length>0){
            total=product[0].soluong*product[0].newprice;
            if(product.length>2){
                return product.reduce((a,b)=>(a.soluong*a.newprice)+(b.soluong*b.newprice));
            }
        }
        return total;
    }
    function renderCartItem(){
        var result=null;
        if(product&&product.length>0){
            result=product.map((pro,index)=>{
                return (
                    <CartItemHeader key={index} product={pro}></CartItemHeader>
                )
            })
        }
        else
            result=<div className="header-cart--empty">Không có sản phẩm</div>;
        return result;
    }
    function onLogout(){
        console.log(123);
        localStorage.removeItem("Authorization");
        dispatch(action.logOutUser());
    }
    return (
        <header>
            <div class="banner_header">
                <img src={banner} alt="" class="banner-img" />
            </div>
            <nav>
                <div class="container">
                    <div class="nav-wrap">
                        <Link to="/">
                            <img src={logo} alt="" class="nav-logo" />
                        </Link>
                        <form class="nav-search" onSubmit={onSearch}>
                            <input type="text" class="nav-input" name="q" value={searchValue} placeholder="Nhập từ khóa cần tìm" onChange={onChangeValue} />
                                <button type="submit" class="btn-search">
                                    <i class="fas fa-search"></i>
                                </button>
                        </form>
                        <ul class="nav-menu">
                            {user && <div className="header__user">
                                <img src={user.image} className="header__user__img"/>
                                <p className="header__user__name">
                                {user.username}
                                </p>
                                <ul className="header__user__dropdown" >
                                    <i className="fas fa-caret-down" onClick={DropdownUser}></i>
                                    <div className="header__user__dropdown--wrap" style={userDropdown ? {display:'flex'} : {display:'none'}}>
                                        <Link to='/user/order'className="header__user__dropdown--link">
                                            Quản lý đơn hàng
                                        </Link>
                                        <Link to='user/setting' className="header__user__dropdown--link">
                                            Hồ Sơ
                                        </Link>
                                        {
                                            user.role=="ADMIN" && <Link to='/admin/product' className="header__user__dropdown--link">
                                            Admin
                                        </Link> 
                                        }
                                        <span to='/' className="header__user__dropdown--link" onClick={onLogout}>
                                        Thoát
                                        </span>
                                    </div>
                                </ul>
                            </div>}
                            {!user&&<li class="nav-item" id='dangky' onClick={() => dispatch(actions.showRegister())}>
                                <img src={dangki} alt="" class='nav-item-img' />
                                <span>ĐĂNG KÝ</span>
                            </li>}
                           {!user &&  <li class="nav-item" id='dangnhap' onClick={() => dispatch(actions.showLogin())}>
                                <img src={dangnhap} alt="" class='nav-item-img' />
                                <span>ĐĂNG NHẬP</span>
                            </li>}
                            <li class="nav-item nav-item__cart">
                                <div class="nav-item__cart--noti">{product.length}</div>
                                <Link to="/Cart" class="nav-item__cart-link">
                                    <img src={giohang} alt="" class='nav-item-img' />
                                    <span>GIỎ HÀNG</span>
                                </Link>
                                <div class=" nav-item__cart-list">
                                    <ul class="contain-cart">
                                        {renderCartItem()}
                                    </ul>
                                    <div class="contain-cart-total">
                                        <div class="container-cart-total-pay">
                                            <span class="container-cart-total-pay__text">
                                                Tổng Tiền:
                                        </span>
                                            <span class="container-cart-total-pay__price">
                                            {renderTotalMoney()}
                                        </span>
                                        </div>
                                    </div>
                                    <Link to="/Cart" class="container-cart-btn-link">Xem Tất Cả</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="header-main-wrap">
                        <div class="header-category">
                            <i class="fas fa-bars"></i>
                            <span>Danh mục sản phẩm</span>
                            <div class="header-categore-dropdown container ">
                                <div class="header-categore-dropdown-wrap">
                                    <ul class="header-category-list">
                                        <li class="header-category-item">
                                            <Link to='product/'></Link>
                                            <img src={laptop} alt="" class="header-category-item-img" />
                                            <span>Laptop</span>
                                            <div class="header-category-item-notify category-notify-1">
                                                <div class="header-category-item-notify-list">
                                                    <div class="header-category-item-notify-list-item">
                                                        <h3 class="header-category-item-notify-list-item-title"><a href="" class="header-category-item-notify-list-item-title--link">Laptop Gaming</a></h3>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Acer</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Asus</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">MSI</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">HP</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Dell</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Lenovo</a></p>
                                                    </div>
                                                    <div class="header-category-item-notify-list-item">
                                                        <h3 class="header-category-item-notify-list-item-title"><a href="" class="header-category-item-notify-list-item-title--link">Laptop Văn Phòng</a></h3>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Acer</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">HP</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Asus</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Lenovo</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Dell</a></p>
                                                    </div>
                                                    <div class="header-category-item-notify-list-item">
                                                        <h3 class="header-category-item-notify-list-item-title"><a href="" class="header-category-item-notify-list-item-title--link">Laptop Doanh Nhân</a></h3>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Acer</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Asus</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Dell</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">HP</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">MSI</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">LG</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Lenovo</a></p>
                                                    </div>
                                                    <div class="header-category-item-notify-list-item">
                                                        <h3 class="header-category-item-notify-list-item-title"><a href="" class="header-category-item-notify-list-item-title--link">Laptop Dell</a></h3>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Inspiron Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">G Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">XPS Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Vostro Series</a></p>

                                                    </div>
                                                    <div class="header-category-item-notify-list-item">
                                                        <h3 class="header-category-item-notify-list-item-title"><a href="" class="header-category-item-notify-list-item-title--link">Laptop HP</a></h3>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">HP 15s/ 14s Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Pavilion Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">ProBook Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Envy Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Spectre Series</a></p>
                                                    </div>
                                                    <div class="header-category-item-notify-list-item">
                                                        <h3 class="header-category-item-notify-list-item-title"><a href="" class="header-category-item-notify-list-item-title--link">Laptop Lenovo</a></h3>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">L-Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Legion Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Ideadpad Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">ThinkPad Series</a></p>

                                                    </div>
                                                </div>
                                                <div class="header-category-item-notify-list">
                                                    <div class="header-category-item-notify-list-item">
                                                        <h3 class="header-category-item-notify-list-item-title"><a href="" class="header-category-item-notify-list-item-title--link">Laptop Acer</a></h3>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Acer</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Asus</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">MSI</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">HP</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Dell</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Lenovo</a></p>
                                                    </div>
                                                    <div class="header-category-item-notify-list-item">
                                                        <h3 class="header-category-item-notify-list-item-title"><a href="" class="header-category-item-notify-list-item-title--link">Laptop Asus</a></h3>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Acer</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">HP</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Asus</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Lenovo</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Dell</a></p>
                                                    </div>
                                                    <div class="header-category-item-notify-list-item">
                                                        <h3 class="header-category-item-notify-list-item-title"><a href="" class="header-category-item-notify-list-item-title--link">Laptop MSI</a></h3>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Bravo & Alpha Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">GF Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">GL Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">GE Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">GS Series</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">Modern & Prestige Series</a></p>
                                                    </div>
                                                    <div class="header-category-item-notify-list-item">
                                                        <h3 class="header-category-item-notify-list-item-title"><a href="" class="header-category-item-notify-list-item-title--link">Laptop LG</a></h3>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">LG Gram</a></p>

                                                    </div>
                                                    <div class="header-category-item-notify-list-item">
                                                        <h3 class="header-category-item-notify-list-item-title"><a href="" class="header-category-item-notify-list-item-title--link">Laptop theo VGA</a></h3>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">GTX 1650</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">GTX 1660Ti</a></p>
                                                        <p class="header-category-item-notify-list-item-content"><a href="" class="header-category-item-notify-list-item-content--link">RTX Series</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="header-category-item">
                                            <img src={laptop} alt="" class="header-category-item-img" />
                                            <span>Chuột</span>
                                        </li>
                                        <li class="header-category-item">
                                            <img src={laptop} alt="" class="header-category-item-img" />
                                            <span>Màn hình</span>
                                        </li>
                                        <li class="header-category-item">
                                            <img src={laptop} alt="" class="header-category-item-img" />
                                            <span>Laptop</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ul class="header-navigation">
                            <li class="header-navigation-item">
                                <img src={icon1} alt="" class="header-navigation-item-img" />
                                <span>BACK TO SCHOOL 2020</span>
                            </li>
                            <li class="header-navigation-item">
                                <img src={icon2} alt="" class="header-navigation-item-img" />
                                <span> HƯỚNG DẪN THANH TOÁN</span>
                            </li>
                            <li class="header-navigation-item">
                                <img src={icon3} alt="" class="header-navigation-item-img" />
                                <span>HƯỚNG DẪN TRẢ GÓP</span>
                            </li>
                            <li class="header-navigation-item">
                                <img src={icon4} alt="" class="header-navigation-item-img" />
                                <span>CHÍNH SÁCH BẢO HÀNH</span>
                            </li>
                            <li class="header-navigation-item">
                                <img src={icon5} alt="" class="header-navigation-item-img" />
                                <span>
                                    CHÍNH SÁCH VẬN CHUYỂN

                            </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
