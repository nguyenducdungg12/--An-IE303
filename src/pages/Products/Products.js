import React from 'react';
import PropTypes from 'prop-types';
import Breadcum from '../../components/Breadcum/Breadcum';
import './Products.css'
import ProductSort from '../../components/Products/ProductSort'
import ProductItem from './../../components/Products/ProductItem';
import Pagination from '../../components/Pagination/Pagination';
const Products = (props) => {
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
        },
        {
            id: 0,
            name: `Laptop MSI Modern 14 A10RB-888VN (14" FHD/i7-10510U/8GB/512GB SSD/GeForce MX250/Win10/1.2kg)`,
            img: ``,
            sl: 1,
            pricenew: `23.990.000đ`,
            priceold: ` 21.990.000đ`
        },
    ];
    function SubmitForm(value){
        
    }
    function handleRenderItem() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        var result = [];
        var page = parseInt(props.match.params.page) - 1;
        var render = 0;
        for (let i = page * 15; i < data.length; i++) {
            if (render == 15)
                break;
            result.push(<ProductItem item={data[i]} key={i}></ProductItem>)
            render++;
        }
        return result;
    }
    var totalPage = Math.ceil(data.length / 15);
    return (
        <div class="body">
            <div class="grid">
                <Breadcum title="Laptop"></Breadcum>
                <ProductSort></ProductSort>
            </div>
            <div class="home-product">
                <div class="grid">
                    <div class="grid__row">
                        {handleRenderItem()}
                    </div>
                </div>
            </div>
            <Pagination totalPage={totalPage} crrpage={parseInt(props.match.params.page)}></Pagination>
        </div>
    );
};


Products.propTypes = {

};


export default Products;
