import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
const ProductSort = (props) => {
    const { category ,search } = props;
    const { type } = props;
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
                <Link to={`${category}?${search?'q='+search+'&':''}page=1&type=1`}>
                    <button className={`home__filter-sort-btn ${type == 1 ? "home__filter-sort-btn-select" : ""}`}>
                        Mới về
                        {type == 1 ? <span class="home__filter-sort-btn-check">✓</span> : ''}
                    </button>
                </Link>
                <Link to={`${category}?${search?'q='+search+'&':''}page=1&type=2`}>
                    <button className={`home__filter-sort-btn ${type == 2 ? "home__filter-sort-btn-select" : ""}`}>
                        Khuyến mãi tốt nhất
                        {type == 2 ? <span class="home__filter-sort-btn-check">✓</span> : ''}
                    </button>
                </Link>
                <Link to={`${category}?${search?'q='+search+'&':''}page=1&type=3`}>
                    <button className={`home__filter-sort-btn ${type == 3 ? "home__filter-sort-btn-select" : ""}`}>
                        Bán chạy
                        {type == 3 ? <span class="home__filter-sort-btn-check">✓</span> : ''}
                    </button>
                </Link>
                <button class="home__filter-sort-btn">Giá giảm dần</button>
                <button class="home__filter-sort-btn">Giá tăng dần</button>
            </div>
            <div class="home__filter-price">
                {/* <form onSubmit={handleSubmit}> */}
                <input type="text" id="" class="typing-1" placeholder="Giá thấp nhất" onChange={(e) => setvalue({ ...value, lowestprice: e.target.value })} value={value.lowestprice} />
                <span class="space">-</span>
                <input type="text" id="" class="typing-2" placeholder="Giá cao nhất" onChange={(e) => setvalue({ ...value, highestprice: e.target.value })} value={value.highestprice} />
                <button type="submit" class="home__filter-sort-btn search-item">Tìm</button>
                {/* </form> */}
            </div>
        </div>
    );
};


ProductSort.propTypes = {

};


export default ProductSort;
