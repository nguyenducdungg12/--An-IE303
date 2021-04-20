import React from 'react'
import { Link } from 'react-router-dom'
import './Breadcum.css'
function Breadcum(props) {
    const {title}=props
    return (
        <div className="Breadcum">
            <Link to="/">
                <i class="fas fa-home cart-home__filter-back"></i>
            </Link>
            <span class="cart-home__filter-right">{'>'}</span>
            <span class="cart-home__filter-current">{title}</span>
        </div>
    )
}
export default Breadcum
