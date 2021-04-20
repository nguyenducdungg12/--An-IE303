import React, { useEffect } from 'react';
import Slider from "react-slick";
import Slideitem from './slideitem';
import './slideproduct.css';
import temp from '../../assets/img/Product/product10.webp';
import temp1 from '../../assets/img/Product/product9.webp';

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
    return <a href="../Trangchitiet/index.html" class="item product-deal-hot-item">
        <img src={dataProduct.src} alt="" class="product-deadl-hot-img" />
        <div class="product-deal-hot-desc">
            <p class="product-deal-ho-namet">
                {dataProduct.name}
        </p>
            <div class="product-deal-hot-price">
                <span class="product-deadl-hot-price-old">
                {dataProduct.priceold}
            </span>
                <span class="product-deadl-hot-price-new">
                {dataProduct.pricenew}
            </span>
            </div>
        </div>
    </a>
}
const SlideProduct = (props) => {
    // const { listProduct } = props;
    var listProduct=[{
        id:0,
        name:`Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
        src:temp,
        pricenew:`23.990.000đ`,
        priceold:` 21.990.000đ`
    },{
        id:0,
        name:`Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
        src:temp1,
        pricenew:`23.990.000đ`,
        priceold:` 21.990.000đ`
    },{
        id:0,
        name:`Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
        src:temp,
        pricenew:`23.990.000đ`,
        priceold:` 21.990.000đ`
    },
    {
        id:0,
        name:`Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
        src:temp1,
        pricenew:`23.990.000đ`,
        priceold:` 21.990.000đ`
    },
    {
        id:0,
        name:`Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
        src:temp1,
        pricenew:`23.990.000đ`,
        priceold:` 21.990.000đ`
    },
    {
        id:0,
        name:`Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
        src:temp1,
        pricenew:`23.990.000đ`,
        priceold:` 21.990.000đ`
    },
    {
        id:0,
        name:`Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
        src:temp1,
        pricenew:`23.990.000đ`,
        priceold:` 21.990.000đ`
    },
    {
        id:0,
        name:`Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
        src:temp1,
        pricenew:`23.990.000đ`,
        priceold:` 21.990.000đ`
    },
  ]
    function renderSlide() {
        var result = [];
        for (var i = 0; i < listProduct.length; i++) {
            result.push(<SlideProductItem dataProduct={listProduct[i]} key={i}>
            </SlideProductItem>)
        }
        return result;
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll:1,
        nextArrow: <PrevSlide />,
        prevArrow: <NextSlide />,
    };
    return (
        <Slider {...settings}>
            {renderSlide()}
        </Slider>
    );
};

export default SlideProduct;
