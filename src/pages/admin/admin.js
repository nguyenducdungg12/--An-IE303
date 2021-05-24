import React,{useEffect} from 'react'
import {Switch,Route,useRouteMatch,Link } from 'react-router-dom'
import './admin.css'
import {useSelector,useDispatch} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from '../../components/Admin/DashBoard'
import AdminAccount from '../../components/Admin/AdminAccount'
import AdminProduct from '../../components/Admin/AdminProduct'
import AdminUser from '../../components/Admin/AdminUser'

function Admin(props) {
    const dispatch = useDispatch();
    const User = useSelector(state => state.user);
    let {path} = useRouteMatch();
    return (
        <div className="admin">
            <div className="admin-sidebar">
                <div className="admin-sidebar-logo">
                    <img src="" alt="" className="admin-sidebar-login-img"/>
                </div>
                <div className="admin-sidebar-nav">
                        <Link to={`${path}/notification`} className='admin-sidear-nav-item'>
                        <i class="fas fa-bell"></i>
                        <span>BẢNG ĐIỀU KHIỂN</span>
                        </Link>
                        <Link to={`${path}/product`} className='admin-sidear-nav-item'>
                        <i class="fas fa-bell"></i>
                        <span>SẢN PHẨM</span>
                        </Link>
                        <Link to={`${path}/user`} className='admin-sidear-nav-item'>
                        <i class="fas fa-bell"></i>
                        <span>NGƯỜI DÙNG</span>
                        </Link>
                        <Link to={`${path}/account`} className='admin-sidear-nav-item'>
                        <i class="fas fa-bell"></i>
                        <span>TÀI KHOẢN</span>
                        </Link><Link to={`/`} className='admin-sidear-nav-item'>
                        <i class="fas fa-bell"></i>
                        <span>HOME</span>
                        </Link>
                 
                </div>
            </div>
            <div className="admin-main">
                    <Switch>
                        <Route path={`${path}/notification` }component={DashBoard}/>
                        <Route path={`${path}/product`} component={AdminProduct}/>
                        <Route path={`${path}/user`} component={AdminUser}/>
                        <Route path={`${path}/account`} component={AdminAccount}/>
                    </Switch>
            </div>
            <ToastContainer autoClose={2000} position="bottom-right"/>
        </div>
    )
}

export default Admin
