import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from './../components/Slider/slider';
import "./home.css"
import Banner from './../components/Banner/Banner';
import ImageBanner1 from '../assets/img/xxxbanner1.webp'
import ImageBanner2 from '../assets/img/xxxbanner2.webp'
import ImageBanner3 from '../assets/img/xxxbanner3.webp'
import ImageBanner4 from '../assets/img/xxxbanner4.webp'
import ImageBanner5 from '../assets/img/banner2.webp'
import ImageBanner6 from '../assets/img/banner3.webp'
import ImageBanner7 from '../assets/img/banner4.webp'
import ImageBanner8 from '../assets/img/banner5.webp'
import ImageBanner9 from '../assets/img/banner6.webp'
import ImageBanner10 from '../assets/img/banner7.webp'
import ImageBanner11 from '../assets/img/banner8.webp'
import ImageBanner12 from '../assets/img/banner9.webp'
import SlideProduct from './../components/Slider/slideproduct';


const Home = () => {
    const [bgImage, setbgImage] = useState(null);
    function setImage(url) {
        setbgImage(url);
    }
    return (
        <div className="main">
            <div className="slide-home" style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Slider setImage={setImage}></Slider>
                        </div>
                    </div>
                </div>
            </div>
            <Banner listBanner={[ImageBanner1, ImageBanner2, ImageBanner3, ImageBanner4]}></Banner>
            <div class="container">
                <div class="product-deal-hot-wrap">
                    <div class="product-hot-intro">
                        <h3 class="product-deal-hot-title">
                            Laptop Khuyến Mãi Trong Tháng
                    </h3>
                        <a href="../Trangsanpham/khuyenmai.html" class="product-hot-btn">
                            Xem tất cả <i class="fas fa-chevron-right"></i>
                        </a>
                    </div>
                    <div class="row mx-4">
                        <SlideProduct></SlideProduct>
                    </div>
                </div>
            </div>
        </div>
    );
};


Home.propTypes = {

};


export default Home;
