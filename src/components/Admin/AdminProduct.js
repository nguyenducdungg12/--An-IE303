import React,{useState} from 'react'

function AdminProduct() {
    function onOpenFormAdd(){
        dispatch(OpenForm());
    }
    function onCloseFormAdd(){
        dispatch(CloseForm());
    
    return (
        <div className='AdminProduct'>
        <div className="container">

            <h2 className="admin-title">
                Sản phẩm
             </h2>
            <div className="admin-control">
                <button className="admin-controll-add btn btn-primary" /* onClick={onOpenFormAdd} */>
                    Thêm sản phẩm
            </button>
            </div>
            <div className="AdminProduct-list">
                <div class="row">
                    <div class="col-12">
                    
                        <div class="table-responsive wishlist_table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="product-thumbnail">Hình Ảnh</th>
                                        <th class="product-name">Title</th>
                                        <th class="product-price">Price old</th>
                                        <th class="product-price">Price new</th>
                                        <th class="product-stock-status">quantity</th>
                                        <th class="product-price">category</th>
                                        <th class="product-price">type</th>
                                        <th class="product-price">Price old</th>
                                        <th class="product-add-to-cart">Sửa</th>
                                        <th class="product-remove" >Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
{/*                                 {ListProduct.isLoading ? <Loader type="Circles" color="#f50057" height={100} width={100} style={{textAlign:'center',width:'100%'}}/> :ShowProduct(ListProduct.data)}
 */}                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AdminProduct
