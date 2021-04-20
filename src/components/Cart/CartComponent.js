import React from 'react'

function CartItemComponent(props) {
    const { image, title, id, oldPrice, newPrice, quantity } = props.data;
    return (
        <div class="cart__item">
            <div class="cart__item-info">
                <img src={image} alt="" class="cart__item-img" />
                <div class="cart__item-info-list">
                    <span class="cart__item-name">
                        {title}</span>
                    <span class="cart__item-name-qr">{id}</span>
                </div>
            </div>
            <div class="cart__item-detail">
                <div>
                    <button class="cart__item-remove">
                        <i class="far fa-trash-alt"></i>
                    </button>
                    <span class="cart__item-quantity">{quantity}</span>
                    <button class="cart__item-add">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="cart__item-price">
                <div class="cart__item-price-current">{newPrice}đ</div>
                <div class="cart__item-price-old">{oldPrice}đ</div>
            </div>
        </div>
    )
}
function CartComponent(props) {
    const { ListCart } = props;
    function renderListCart() {
        var content = [];
        if (ListCart) {
            content = ListCart.map((item, stt) => <CartItemComponent data={item} key={stt} />);
        }
        return content;
    }
    return (
        <div>
            <div class="grid__row">
                <div class="grid__column-8">
                    <div class="cart__info">
                        <span class="cart__info-quantity">Giỏ hàng có {ListCart && ListCart.length} sản phẩm</span>
                        <span class="cart__info-delete">Xóa tất cả</span>
                    </div>
                </div>
            </div>
            <div class="grid__row grid__row-1">
                <div class="grid__column-8">
                    {renderListCart()}
                </div>
                <div class="grid__column-4">
                    <div class="cart__cupon">
                        <span class="cart__cupon-qr">Mã giảm giá / Phiếu mua hàng</span>
                        <div class="cart__cupon-type">
                            <input type="text" class="cart__cupon-type-input" placeholder="Nhập mã của bạn" />
                            <button class="cart__cupon-type-btn">Áp dụng ngay</button>
                        </div>
                    </div>
                    <div class="cart-pay">
                        <span class="cart-pay-text">Thanh toán(Đã bao gồm VAT)</span>
                        <div class="cart-pay-sum">
                            <span class="cart-pay-sum-a">Tạm tính</span>
                            <span class="cart-pay-sum-money">10.000.000 đ</span>
                        </div>
                        <div class="cart-pay-transport">
                            <span class="cart-pay-transport-a">Phí vận chuyển</span>
                            <span class="cart-pay-transport-money">0 đ</span>
                        </div>
                        <div class="cart-pay-sale">
                            <span class="cart-pay-sale-a">Khuyến mãi</span>
                            <span class="cart-pay-sale-money">1.000.000 đ</span>
                        </div>
                        <div class="cart-pay-check">
                            <span class="cart-pay-check-a">Thành tiền</span>
                            <span class="cart-pay-check-money">9.000.000 đ</span>
                        </div>
                        <button class="cart-pay-btn-pay">
                            THANH TOÁN
                                    <div class="cart-pay-btn-pay__title">Bạn cần đăng nhập để tiếp tục</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComponent
