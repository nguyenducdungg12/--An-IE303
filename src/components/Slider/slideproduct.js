import React, { useEffect } from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import './slideproduct.css';

const NextSlide = (props) => {
    const { onClick } = props;
    return <span class="product-deadl-hot-btn product-deadl-hot-btn-left" onClick={onClick}><i class="fas fa-chevron-left"></i></span>
}
const PrevSlide = (props) => {
    const { onClick } = props;
    return <span class="product-deadl-hot-btn product-deadl-hot-btn-right" onClick={onClick}><i class="fas fa-chevron-right"></i></span>
}
const SlideProductItem = (props) => {
    const { dataProduct } = props;
    return <Link to={`./DetailProduct/${dataProduct.id}`}class="item product-deal-hot-item">
        <img src={dataProduct.image} alt="" class="product-deadl-hot-img" />
        <div class="product-deal-hot-desc">
            <p class="product-deal-ho-namet">
                {dataProduct.title}
        </p>
            <div class="product-deal-hot-price">
                <span class="product-deadl-hot-price-old">
                {dataProduct.oldprice}đ
            </span>
                <span class="product-deadl-hot-price-new">
                {dataProduct.newprice}đ
            </span>
            </div>
        </div>
    </Link>
}
const SlideProduct = (props) => {
    const { ListProduct,type } = props;

    function renderSlide(ListProduct) {
        var result = [];
        if(ListProduct){
             result = ListProduct.map((item,stt)=><SlideProductItem dataProduct={item} key={stt}></SlideProductItem>)
        }
        return result;
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:5,
        slidesToScroll:1,
        nextArrow: <PrevSlide />,
        prevArrow: <NextSlide />,
    };
    return (
        <Slider {...settings}>
            {renderSlide(ListProduct,type)}
        </Slider>
    );
};

export default SlideProduct;
