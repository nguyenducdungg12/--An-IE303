import React, { useEffect, useState } from 'react';
import Breadcum from '../../components/Breadcum/Breadcum';
import './Products.css'
import ProductSort from '../../components/Products/ProductSort'
import ProductItem from './../../components/Products/ProductItem';
import Pagination from '../../components/Pagination/Pagination';
import { useLocation } from 'react-router-dom'
import CallApi from '../../helper/axiosClient'
import TransferPrice from '../../helper/TransferPrice'
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Products = (props) => {
    console.log(props);
    const [ListProduct, setListProduct] = useState(null);
    const [totalPage, settotalPage] = useState(null);
    const query = useQuery();
    const page = query.get("page") || 1;
    const { category } = props.match.params;
    const type = query.get("type") || 1;
    const value=query.get("q")||null;
    useEffect(() => {
        const getProduct = async () => {
            var Data;
            if (category =="search") {
                Data = await CallApi({
                    url: `http://localhost:8080/api/products?search=${value}`,
                    method: 'get',
                });
            }
            else {
                Data = await CallApi({
                    url: `http://localhost:8080/api/products/${category}?${page ? "page=" + page : ""}&${type ? "type=" + type : ""}`,
                    method: 'get',
                });
            }
            setListProduct(Data.listProducts);
            settotalPage(Data.totalPage);
        }
        getProduct();
    },[props.location])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    })
    function handleRenderItem(ListProduct) {
        var result = [];
        if (ListProduct) {
            result = ListProduct.map((item, stt) => <ProductItem item={item} key={stt}></ProductItem>);
        }
        return result;
    }
    return (
        <div class="body">
            <div class="grid">
                <Breadcum final="Laptop"></Breadcum>
                <ProductSort category={category} type={type} search={value}></ProductSort>
            </div>
            <div class="home-product">
                <div class="grid">
                    <div class="grid__row">
                        {handleRenderItem(ListProduct)}
                    </div>
                </div>
            </div>
            <Pagination totalPage={totalPage} crrpage={parseInt(page)} category={category} type={type} search={value}></Pagination>
        </div>
    );
};


Products.propTypes = {

};


export default Products;
