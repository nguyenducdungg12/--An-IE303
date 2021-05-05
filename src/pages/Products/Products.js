import React,{useEffect,useState} from 'react';
import Breadcum from '../../components/Breadcum/Breadcum';
import './Products.css'
import ProductSort from '../../components/Products/ProductSort'
import ProductItem from './../../components/Products/ProductItem';
import Pagination from '../../components/Pagination/Pagination';
import {useLocation} from 'react-router-dom'
import CallApi from '../../helper/axiosClient'
import TransferPrice from '../../helper/TransferPrice'
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
const Products = (props) => {
    const [ListProduct, setListProduct] = useState(null);
    const query = useQuery();
    const page = query.get("page");
    const {category} = props.match.params;
    const type = query.get("type");
    useEffect(()=>{
       const getProduct = async ()=>{
            const Data = await CallApi({
                url : `http://localhost:8080/api/products/${category}?${page ? "page="+page : ""}&${type ? "type="+type: ""}`,
                method : 'get',
            });
            setListProduct(Data);
        }
        getProduct();
    },[])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
     
    },)
  
    function handleRenderItem(ListProduct) {
        var result = [];
        var page = parseInt(props.match.params.page) - 1;
/*         var render = 0;

 */      if(ListProduct){
        result =  ListProduct.map((item,stt)=><ProductItem item={item} key={stt}></ProductItem>);
         }
      /*   for (let i = page * 15; i < data.length; i++) {
            if (render == 15)
                break;
            result.push(<ProductItem item={data[i]} key={i}></ProductItem>)
            render++;
        } */
        return result;
    }
/*     var totalPage = Math.ceil(data.length / 15);
 */    return (
        <div class="body">
            <div class="grid">
                <Breadcum final="Laptop"></Breadcum>
                <ProductSort></ProductSort>
            </div>
            <div class="home-product">
                <div class="grid">
                    <div class="grid__row">
                         {handleRenderItem(ListProduct)}
                  </div>
                </div>
            </div>
{/*             <Pagination totalPage={totalPage} crrpage={parseInt(props.match.params.page)}></Pagination>
 */}        </div>
    );
};


Products.propTypes = {

};


export default Products;
