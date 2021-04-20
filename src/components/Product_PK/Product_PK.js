import React from 'react'
import bannerPK from '../../assets/img/bannerphukien.png'


function Product_PK_Item(props) {
    const {image,title,oldPrice,newPrice} = props.data;
    return (
        <div class="col-lg-3 p-0">
        <a href="../Trangchitiet/chitietphukien.html" style={{ display: "block", textDecoration: "none" }} class="product-pk-item">
            <img src={image} alt="" class="product-pk-img" />
            <div class="product-pk-item-desc">
                <p class="product-pk-item-desc-title">
                    {title}
                </p>
                <div class="product-pk-item-desc-price">
                    <span class="product-pk-item-desc-price-old">
                        <span>{oldPrice}</span> <span class='sale'>-8%</span>
                    </span>
                    <span class="product-pk-item-desc-price-new">
                   { newPrice}
                 </span>
                </div>
            </div>
        </a>
    </div>
    )
}



function Product_PK() {
    const data = [
        {
            image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            title:"dsadsa",
            oldPrice:'dsadadsa',
            newPrice:123
        },
        {
            image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            title:"dsadsa",
            oldPrice:'dsadadsa',
            newPrice:123
        },
        {
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            title:"dsadsa",
            oldPrice:'dsadadsa',
            newPrice:123
        },
        {
            image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            title:"dsadsa",
            oldPrice:'dsadadsa',
            newPrice:123
        },
        {
            image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            title:"dsadsa",
            oldPrice:'dsadadsa',
            newPrice:123
        },
        {
            image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            title:"dsadsa",
            oldPrice:'dsadadsa',
            newPrice:123
        },
        {
            image:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
            title:"dsadsa",
            oldPrice:'dsadadsa',
            newPrice:123
        },
        {
            image:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            title:"dsadsa",
            oldPrice:'dsadadsa',
            newPrice:123
        },
     
    ]
    function render(data){
        var content=[];
        if(data){
            content = data.map((item,stt)=><Product_PK_Item data={item} key={stt}/>)
        }
        return content;
    }
    return (
        <div class="product-pk">
            <div class="container">
                <div class="product-pk-wrap">
                    <img src={bannerPK} alt="" class="product-pk-bg" />
                    <div class="row m-0">
                        {render(data)}
                    </div>
                        <div class='product-pk-link'>
                            <a href="../Trangsanpham/phukien.html" class="product-pk-btn">Xem Tiếp</a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Product_PK
