import React from 'react'
import {Link} from 'react-router-dom'
import './Breadcum.css'
function Breadcum() {
    return (
        <div className="Breadcum">
        <Link to="/">
            <i class="fas fa-home cart-home__filter-back"></i>
        </Link>
        <span class="cart-home__filter-right">{'>'}</span>
            <span class="cart-home__filter-current">Laptop MSI Modern 14 A10RB-888VN</span>
       
    </div>
    )
}
export default Breadcum
