import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import * as actions from './../../actions/index';
function DetailProductComponent(props) {
    const { Product } = props;
    const dispatch=useDispatch();
    return (
        <div className="col-lg-9 css-11">
            <div className="css-90">
                <div className="css-14">
                    <div className="css-1 css-1002">
                        <div className="css-0">
                            <img src={Product.image} alt="" className="css-2" />
                        </div>
                        <ul className="css-3">
                            <li className="css-4 ">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" className="css-5 hover-active" />
                            </li>
                            <li className="css-4">
                                <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" className="css-5" />
                            </li>
                            <li className="css-4">
                                <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" alt="" className="css-5" />
                            </li>
                            <li className="css-4">
                                <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="" className="css-5" />
                            </li>
                            <li className="css-4">
                                <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="" className="css-5" />
                            </li>

                        </ul>
                        <div className="model">
                            <div className="css-60">
                                <div className="slide">
                                    <div className="header-slide">
                                        <div className="owl-carousel header-slide-main owl-theme">
                                            <div className="item">
                                                <img src="./img/banner13.jpg" alt="" className="header-slide-img" />
                                            </div>
                                            <div className="item">
                                                <img src="./img/banner13.jpg" alt="" className="header-slide-img" />
                                            </div>
                                            <div className="item">
                                                <img src="./img/banner13.jpg" alt="" className="header-slide-img" />
                                            </div>
                                            <div className="item">
                                                <img src="./img/banner13.jpg" alt="" className="header-slide-img" />
                                            </div>
                                            <div className="item">
                                                <img src="./img/banner13.jpg" alt="" className="header-slide-img" />
                                            </div>
                                            <div className="item">
                                                <img src="./img/banner13.jpg" alt="" className="header-slide-img" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <label for="input__check" className="css-110"></label>
                            </div>
                        </div>
                    </div>
                    <div className="css-70">
                        <div className="css-71">
                            - CPU: Intel Core i7-10510U <br></br>
                                    - Màn hình: 14" IPS (1920 x 1080) <br></br>
                                    - RAM: 1 x 8GB DDR4 2666MHz <br></br>
                                    - Đồ họa: NVIDIA GeForce MX250 2GB GDDR5 / Intel UHD Graphics <br></br>
                                    - Lưu trữ: 512GB SSD M.2 NVMe / <br></br>
                                    - Hệ điều hành: Windows 10 Home SL 64-bit  <br></br>
                                    - Pin: 4 cell 50 Wh Pin liền <br></br>
                                    - Khối lượng: 1.2 kg
                                </div>
                    </div>
                </div>
                <div className="css-15">
                    <div className="detail-product">
                        <div className="css-6 css-1002">
                            <h1 className="css-7">{Product.title}</h1>
                            <h6 className="css-8">Thương hiệu <span className="css-12">MSI</span> <span className="css-1001"></span>  {`SKU:${Product.id}`} </h6>
                            <h1 className="css-10">{Product.newprice}</h1>
                        </div>
                        <div className="css-30 css-1002">
                            <div className="css-31">Chọn thêm 1 trong những khuyến mãi sau</div>
                            <div className="css-32">
                                <div className="css-33">Giá: <span>21.990.000đ</span> </div>
                                <div className="css-34">Đã giảm thêm <span>2.000.000đ</span> </div>
                            </div>
                            <div className="css-35">
                                <div className="css-36"> <Link to="../Trangsanpham/giohang.html" className="css-39">Mua ngay</Link> </div>
                                <div className="css-37"> <div className="css-39 css-40" onClick={() => {toast.success("Thêm giỏ hàng thành công");dispatch(actions.addToCart(Product));}}>Thêm vào giỏ hàng</div></div>
                            </div>
                        </div>
                        <div className="css-20">
                            <div className="css-24">Khuyến mãi liên quan</div>
                            <ul className="css-23">
                                <li className="css-24">[Super Sale] Giảm 10% tất cả sản phẩm đến 2.5 triệu* cho khách hàng đăng kí nhận mã vào 28/10-29/10. Số lượng giới hạn <span className="css-1003">Xem chi tiết!</span></li>
                                <li className="css-24">Nhập mã PHONGVU200 giảm thêm 5% tối đa 200.000đ khi thanh toán qua VNPAY-QR <span className="css-1003">Xem chi tiết!</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default DetailProductComponent
