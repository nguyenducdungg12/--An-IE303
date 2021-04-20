import React from 'react'

function Comment() {
    return (
        <div class="comment">
        <div class="comment-input">
            <textarea name="content" rows="5" class="comment-input-box"></textarea>
            <div class="comment-input-nav">
                <div class="comment-input-nav-right">
                    <i class="fas fa-camera comment-input__icon "></i>
                    <div class="comment-input__text ">Gửi ảnh</div>
                    <div class="comment-input__dash"></div>
                    <div class="comment-input__text temp">Quy định đăng bình luận</div>
                </div>
                <div class="comment-input-nav-left">Gửi</div>
            </div>
        </div>
        <div class="comment-question">
            <div class="comment-question__header">
                <div class="comment-question__count">Có 4 bình luận</div>
                <div class="comment-question__search">
                    <i class="fas fa-search comment-question__search-icon"></i>
                    <input type="text" placeholder="Tìm theo nội dung, người gửi, ...." class="comment-question__search-input"/>
                </div>
            </div>
            <div class="comment-question__sort">
                <div class="comment-question__sort-text">Sắp xếp theo</div>
                <input type="radio" id="male" name="gender" value="Độ chính xác" class="comment-question__sort-check"/>
                <label for="male" class="comment-question__sort-lable">Độ chính xác</label>
                <input type="radio" id="female" name="gender" value="Mới nhất" class="comment-question__sort-check"/>
                <label for="female" class="comment-question__sort-lable">Mới nhất</label>
            </div>
            <div class="comment-question__main">
                <div class="comment-question__main-name">
                    <div class="comment-question__main-name-icon">T</div>
                    <div class="comment-question__name-text">Tâm</div>
                </div>
                <div class="comment-question__main-content">Tgdd có giúp cài windows cho laptop không ạ. Tình trạng máy bị format hết ở đĩa</div>
                <div class="comment-question__main-footer">
                    <div class="comment-question__main-footer-text">Trả lời</div>
                    <div class="comment-question__main-footer-time">- 9 giờ trước</div>
                </div>
                <div class="comment-question__main-answer">
                    <div class="comment-question__main-name">
                        <div class="comment-question__main-name-icon">G7</div>
                        <div class="comment-question__name-text">Admin</div>
                    </div>
                    <div class="comment-question__main-content">Chào anh <br></br>
                            Nếu anh mua laptop hoặc windows bên em thì được ạ <br></br>
                            Thông tin đến anh
                     </div>
                    <div class="comment-question__main-footer">
                        <div class="comment-question__main-footer-text">Trả lời</div>
                        <div class="comment-question__main-footer-time"> 
                            <i class="far fa-thumbs-up"></i>
                        </div>
                        <div class="comment-question__main-footer-text">Hài lòng</div>
                        <div class="comment-question__main-footer-time">
                            <i class="far fa-thumbs-down"></i>
                        </div>
                        <div class="comment-question__main-footer-text">Không hài lòng</div>
                        <div class="comment-question__main-footer-time">- 9 giờ trước</div>
                    </div>
                </div>
            </div>
            <div class="comment-question__main">
                <div class="comment-question__main-name">
                    <div class="comment-question__main-name-icon">T</div>
                    <div class="comment-question__name-text">Thủy</div>
                </div>
                <div class="comment-question__main-content">Khi mua máy muốn nhờ nv của shop cài giúp office online có mất phí không ạ</div>
                <div class="comment-question__main-footer">
                    <div class="comment-question__main-footer-text">Trả lời</div>
                    <div class="comment-question__main-footer-time">- 6 giờ trước</div>
                </div>
                <div class="comment-question__main-answer">
                    <div class="comment-question__main-name">
                        <div class="comment-question__main-name-icon">G7</div>
                        <div class="comment-question__name-text">Admin</div>
                    </div>
                    <div class="comment-question__main-content">Dạ em chào chị. <br></br>
                        Dạ với mình mua sản phẩm Microsoft 365 Personal 32/64bit 1 năm 1 user Win/Mac bên em thì bên em mới hỗ trợ cài cho mình được chị nha. Nếu cần hỗ trợ những gì thì mình phản hồi ở dưới giúp em nha. 
                       <br></br> Thông tin đến chị.</div>
                    <div class="comment-question__main-footer">
                        <div class="comment-question__main-footer-text">Trả lời</div>
                        <div class="comment-question__main-footer-time"> 
                            <i class="far fa-thumbs-up"></i>
                        </div>
                        <div class="comment-question__main-footer-text">Hài lòng</div>
                        <div class="comment-question__main-footer-time">
                            <i class="far fa-thumbs-down"></i>
                        </div>
                        <div class="comment-question__main-footer-text">Không hài lòng</div>
                        <div class="comment-question__main-footer-time">- 5 giờ trước</div>
                    </div>
                </div>
            </div>
            <div class="comment-question__main">
                <div class="comment-question__main-name">
                    <div class="comment-question__main-name-icon">L</div>
                    <div class="comment-question__name-text">Lê An</div>
                </div>
                <div class="comment-question__main-content">Máy dùng Photoshop ổn k</div>
                <div class="comment-question__main-footer">
                    <div class="comment-question__main-footer-text">Trả lời</div>
                    <div class="comment-question__main-footer-time">- 2 ngày trước</div>
                </div>
                <div class="comment-question__main-answer">
                    <div class="comment-question__main-name">
                        <div class="comment-question__main-name-icon">G7</div>
                        <div class="comment-question__name-text">Admin</div>
                    </div>
                    <div class="comment-question__main-content">Chào anh, <br></br>
                        Dạ Laptop Acer Aspire 3 A315 54K 37B0 i3 8130U/4GB/256GB/Win10 (NX.HEESV.00D) này dùng Photoshop ổn anh nha.
                        <br></br>Thông tin đến anh </div>
                    <div class="comment-question__main-footer">
                        <div class="comment-question__main-footer-text">Trả lời</div>
                        <div class="comment-question__main-footer-time"> 
                            <i class="far fa-thumbs-up"></i>
                        </div>
                        <div class="comment-question__main-footer-text">Hài lòng</div>
                        <div class="comment-question__main-footer-time">
                            <i class="far fa-thumbs-down"></i>
                        </div>
                        <div class="comment-question__main-footer-text">Không hài lòng</div>
                        <div class="comment-question__main-footer-time">- 2 ngày trước</div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="pagination ">
            <li class="pagination-item ">
                <a href="" class="pagination-item__link">
                    <i class="pagination-item__icon fas fa-chevron-left "></i>
                </a>
            </li>
            <li class="pagination-item pagination-item--active">
                <a href="" class="pagination-item__link">1</a>
            </li>
            <li class="pagination-item">
                <a href="" class="pagination-item__link">2</a>
            </li>
            <li class="pagination-item">
                <a href="" class="pagination-item__link">3</a>
            </li>
            <li class="pagination-item">
                <a href="" class="pagination-item__link">4</a>
            </li>
            <li class="pagination-item">
                <a href="" class="pagination-item__link">5</a>
            </li>
            <li class="pagination-item">
                <a href="" class="pagination-item__link">...</a>
            </li>
            <li class="pagination-item">
                <a href="" class="pagination-item__link">14</a>
            </li>

            <li class="pagination-item">
                <a href="" class="pagination-item__link">
                    <i class="pagination-item__icon fas fa-chevron-right "></i>
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Comment
