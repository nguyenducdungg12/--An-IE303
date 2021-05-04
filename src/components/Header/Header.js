import React from 'react';
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
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'

const Header = () => {
    const dispatch = useDispatch();
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
                        <div class="nav-search">
                            <input type="text" class="nav-input" placeholder="Nhập từ khóa cần tìm" />
                            <span class="btn-search">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                        <ul class="nav-menu">
                            <li class="nav-item" id='dangky' onClick={() => dispatch(actions.showRegister())}>
                                <img src={dangki} alt="" class='nav-item-img' />
                                <span>ĐĂNG KÝ</span>
                            </li>
                            <li class="nav-item" id='dangnhap' onClick={() => dispatch(actions.showLogin())}>
                                <img src={dangnhap} alt="" class='nav-item-img' />
                                <span>ĐĂNG NHẬP</span>
                            </li>
                            <li class="nav-item nav-item__cart">
                                <a href="../Trangsanpham/giohang.html" class="nav-item__cart-link">
                                    <img src={giohang} alt="" class='nav-item-img' />
                                    <span>GIỎ HÀNG</span>
                                </a>
                                <div class=" nav-item__cart-list">
                                    <ul class="contain-cart">
                                        <li class="contain-cart-item">
                                            <img alt="" class="contain-cart__img" />
                                            <div class="contain-cart__contain">

                                                <span class="contain-cart__text">Laptop Apple MacBook Pro 2018 13.3" MR9R2 (13.3"/Core i5/8GB/Iris Plus 650/macOS)</span>
                                                <div class='contain-cart-price'>
                                                    <span class="contain-cart__count">Số lượng: 2</span>
                                                    <span class="contain-cart__money">Thành Tiền: 29.000.000đ</span>
                                                </div>
                                            </div>
                                            <span class="contain-cart-item-close">
                                                <i class="fas fa-times"></i>
                                            </span>
                                        </li>
                                        <li class="contain-cart-item">
                                            <img alt="" class="contain-cart__img" />
                                            <div class="contain-cart__contain">

                                                <span class="contain-cart__text">Laptop Apple MacBook Pro 2018 13.3" MR9R2 (13.3"/Core i5/8GB/Iris Plus 650/macOS)</span>
                                                <div class='contain-cart-price'>
                                                    <span class="contain-cart__count">Số lượng: 1</span>
                                                    <span class="contain-cart__money">Thành Tiền: 48.990.000đ</span>
                                                </div>
                                            </div>
                                            <span class="contain-cart-item-close">
                                                <i class="fas fa-times"></i>
                                            </span>
                                        </li>
                                        <li class="contain-cart-item">
                                            <img alt="" class="contain-cart__img" />
                                            <div class="contain-cart__contain">

                                                <span class="contain-cart__text">Laptop Apple MacBook Pro 2018 13.3" MR9R2 (13.3"/Core i5/8GB/Iris Plus 650/macOS)</span>
                                                <div class='contain-cart-price'>
                                                    <span class="contain-cart__count">Số lượng: 1</span>
                                                    <span class="contain-cart__money">Thành Tiền: 12.990.000đ</span>
                                                </div>
                                            </div>
                                            <span class="contain-cart-item-close">
                                                <i class="fas fa-times"></i>
                                            </span>
                                        </li>

                                    </ul>
                                    <div class="contain-cart-total">
                                        <div class="container-cart-total-pay">
                                            <span class="container-cart-total-pay__text">
                                                Tổng Tiền:
                                        </span>
                                            <span class="container-cart-total-pay__price">
                                                2.000.000đ
                                        </span>
                                        </div>
                                    </div>
                                    <a href="../Trangsanpham/giohang.html" class="container-cart-btn-link">Xem Tất Cả</a>

                                </div>
                            </li>
                            {/* <li class="nav-item">
                                <a href="../Trangnews/index.html" target="_blank" class="nav-item-link">
                                    <img  alt="" class='nav-item-img' />
                                    <span>TIN TỨC</span>
                                </a>
                            </li> */}
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
                                        <img src={laptop} alt="" class="header-category-item-img"/>
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
                                        <img src={laptop} alt="" class="header-category-item-img"/>
                                        <span>Chuột</span>
                                    </li>
                                    <li class="header-category-item">
                                        <img src={laptop} alt="" class="header-category-item-img"/>
                                        <span>Màn hình</span>
                                    </li>
                                    <li class="header-category-item">
                                        <img src={laptop} alt="" class="header-category-item-img"/>
                                        <span>Laptop</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul class="header-navigation">
                        <li class="header-navigation-item">
                            <img src={icon1} alt="" class="header-navigation-item-img"/>
                            <span>BACK TO SCHOOL 2020</span>
                        </li>
                        <li class="header-navigation-item">
                            <img src={icon2} alt="" class="header-navigation-item-img"/>
                            <span> HƯỚNG DẪN THANH TOÁN</span>
                        </li>
                        <li class="header-navigation-item">
                            <img src={icon3} alt="" class="header-navigation-item-img"/>
                            <span>HƯỚNG DẪN TRẢ GÓP</span>
                        </li>
                        <li class="header-navigation-item">
                            <img src={icon4} alt="" class="header-navigation-item-img"/>
                            <span>CHÍNH SÁCH BẢO HÀNH</span>
                        </li>
                        <li class="header-navigation-item">
                            <img src={icon5} alt="" class="header-navigation-item-img"/>
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
