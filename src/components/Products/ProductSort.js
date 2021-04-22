import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductSort = (props) => {
    const [value, setvalue] = useState({
        lowestprice: null,
        highestprice: null,
    });
    // function handleSubmit(e) {
    //     e.preventDefault();
    // }
    return (
        <div class="home__filter">
            <span class="home__filter-lable">Sắp xếp theo</span>
            <div class="home__filter-sort">
                <a href="./khuyenmai.html">
                    <button class="home__filter-sort-btn">Khuyến mãi tốt nhất
                    </button>
                </a>
                <a href="./banchay.html">
                    <button class="home__filter-sort-btn home__filter-sort-btn-select">Bán chạy
                        <span class="home__filter-sort-btn-check">✓</span>
                    </button>
                </a>
                <a href="./moive.html">
                    <button class="home__filter-sort-btn">Mới về</button>
                </a>
                <button class="home__filter-sort-btn">Giá giảm dần</button>
                <button class="home__filter-sort-btn">Giá tăng dần</button>
            </div>
            <div class="home__filter-price">
                {/* <form onSubmit={handleSubmit}> */}
                    <input type="text" id="" class="typing-1" placeholder="Giá thấp nhất" onChange={(e)=>setvalue({...value,lowestprice:e.target.value})} value={value.lowestprice} />
                    <span class="space">-</span>
                    <input type="text" id="" class="typing-2" placeholder="Giá cao nhất" onChange={(e)=>setvalue({...value,highestprice:e.target.value})} value={value.highestprice} />
                    <button type="submit" class="home__filter-sort-btn search-item">Tìm</button>
                {/* </form> */}
            </div>
        </div>
    );
};


ProductSort.propTypes = {

};


export default ProductSort;
