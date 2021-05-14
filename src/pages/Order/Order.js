import React,{useEffect,useState} from 'react'
import { Tabs } from 'antd';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import axiosClient from '../../helper/axiosClient' 
import './Order.css'
import OrderItem from '../../components/Order/Order'
function Order() {
    const [ListOrder, setListOrder] = useState(null);
    const [render, setrender] = useState(false);
    const { TabPane } = Tabs;
    const history = useHistory();
    const user = useSelector(state => state.user)
    const sidebar = useSelector(state => state.siderbarOrder)
    const order = useSelector(state => state.order)
    useEffect(() => {
        if(!user){
            history.push('/');
        }
    }, )
    useEffect(() => {
        axiosClient({
            url: "http://localhost:8080/api/auth/order",
            method:"get"
        }).then(data=>{
            
            setListOrder(data);
        })
    }, [render])
   
    function isRender(){
        return setrender(!render);
    }
    function renderOrder(data,key){
        let temp;
        if(data&&data.data!=""&&key==1){
            temp= data.map((item,stt)=><OrderItem key={stt} ListOrder={item} isRender = {isRender}/>);
        }
        else if(data&&data.data!=""&&key==2){
            let filter = data.filter(item=>!item.status_order&&item.cancelreason==null)
            temp= filter.map((item,stt)=><OrderItem key={stt} ListOrder={item} isRender = {isRender}/>);
        }
        else if(data&&data.data!=""&&key==3){
            let filter = data.filter(item=>item.status_order)
            temp= filter.map((item,stt)=><OrderItem key={stt} ListOrder={item} isRender = {isRender}/>);
        }
        else if(data&&data.data!=""&&key==4){
            let filter = data.filter(item=>item.cancelreason!=null)
            temp= filter.map((item,stt)=><OrderItem key={stt} ListOrder={item} isRender = {isRender}/>);
        }
        
        return temp;
    }
    function transferDate(time){
        var y = new Date(time);
        return `${y.getHours()} Giờ ${y.getMinutes()} Phút, Ngày ${y.getDate()} Tháng ${y.getMonth()+1} Năm ${y.getFullYear()}`;
    }
    return (
       <div className="container">
           <div className="row">
               <div className="col-12">
                   <div className="order">
                   <h3 className="order-title">Đơn Hàng<span>{ListOrder&&ListOrder.length} Đơn hàng</span></h3>
                   <Tabs defaultActiveKey="1" >
                    <TabPane tab="Tất cả" key="1">
                        {renderOrder(ListOrder,1)}
                    </TabPane>
                    <TabPane tab="Chờ duyệt" key="2">
                    {renderOrder(ListOrder,2)}
                    </TabPane>
                    <TabPane tab="Đã duyệt" key="3">
                    {renderOrder(ListOrder,3)}
                    </TabPane>
                    <TabPane tab="Đã Hủy" key="4">
                    {renderOrder(ListOrder,4)}
                    </TabPane>
                </Tabs>
                   </div>
               </div>
           </div>
           <div className="order-detail" style = {sidebar ? {height:"100%"} : {height:"0"}}>
               <div className="order-detail-wrap" style={sidebar ? {transform:"translateY(0)"} : {transform:"translateY(100%)"}}>
                <div className="order-detail-title">
                    <h3>Chi tiết đơn hàng</h3>
                    <i class="fas fa-times"></i>
                </div>
                <div className="order-detail-content">
                    <div className="order-detail-item">
                    <b>Địa chỉ: </b><span>{order&&order.address}</span>
                    </div>
                    <div className="order-detail-item">
                    <b>Số điện thoại: </b><span  style={{color:"#fe3834",fontWeight:"400"}}>{user&&user.phone}</span>
                    </div>
                    <div className="order-detail-item">
                    <b>Thanh toán: </b><span style={{color:"#1890ff",fontWeight:"400"}}>{order&&order.payment==1 ? "Thanh Toán Khi Nhận Hàng": "Thanh toán qua thẻ"}</span>
                    </div>
                    <div className="order-detail-item">
                    <b>Ngày đặt hàng: </b><span style={{color:"#8395a7",fontWeight:"400"}}>{order&&transferDate(order.timeorder)}</span>
                    </div>
                </div>
               </div>
           </div>
       </div>
    )
}

export default Order
