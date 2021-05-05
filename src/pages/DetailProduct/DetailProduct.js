import React,{useEffect,useState} from 'react'
import Breadcum from '../../components/Breadcum/Breadcum'
import CallApi from '../../helper/axiosClient'
import "./DetailProduct.css"
import DetailProductComponenet from '../../components/DetailProduct/DetailProductComponent'
import SlideProduct from '../../components/Slider/slideproduct';
import ContentProduct from '../../components/DetailProduct/ContentProduct'
import ConfigProduct from '../../components/DetailProduct/ConfigProduct'
import FeedbackStar from '../../components/DetailProduct/FeedBackStar'
import Comment from '../../components/DetailProduct/Comment'
function DetailProduct(props) {
    const {id} = props.match.params;
    const [MoreContent, setMoreContent] = useState(false);
    const [Product, setProduct] = useState(null);
    const fakeData = {
        ImageMain:"https://tmp.phongvu.vn/wp-content/uploads/2019/06/ASUS-VivoBook-15-A512.jpg",
        ListTitle:["Chất liệu 100% nhôm tái chế ","Màn hình Retina rực rỡ","Hiệu suất tối ưu cho mọi tác vụ "],
        ListImage:["https://tmp.phongvu.vn/wp-content/uploads/2019/06/ASUS-VivoBook-15-A512-1.jpg","https://tmp.phongvu.vn/wp-content/uploads/2019/06/ASUS-VivoBook-15-A512-3.jpg","https://tmp.phongvu.vn/wp-content/uploads/2019/06/ASUS-VivoBook-15-A512-2.jpg"],
        ListContent:["Laptop MacBook Air 2019 MVFM2SA/A trang bị màn hình độ phân giải 2560x1600 cho hơn 4 triệu pixel, hình ảnh được nâng lên một cấp độ mới với các chi tiết sắc nét và rõ ràng. Và công nghệ True Tone tự động điều chỉnh điểm trắng của màn hình để phù hợp với nhiệt độ màu của môi trường xung quanh bạn - làm cho các trang web và email trông tự nhiên. Với màu sắc hơn 48% và viền mỏng hơn 50% thế hệ trước, mọi thứ bạn thấy đều phong phú và rực rỡ, bạn có thể tập trung vào những gì trên màn hình của bạn. ","Mặc dù chỉ nặng 1.3 kg, Laptop MacBook Air 2019 MVFM2SA/A mới có sức mạnh khá mạnh mẽ. Bộ xử lý Intel Core thế hệ mới nhất giúp bạn tăng sức mạnh thông qua các hoạt động hàng ngày, từ đọc email và duyệt web đến tạo các bài thuyết trình và chỉnh sửa Keynote trong iMovie. Bộ nhớ có thể lên tới 16GB (tùy chọn cấu hình phiên bản) cho phép bạn hoạt động trơn tru ngay cả khi mở nhiều ứng dụng, trong khi bộ nhớ SSD có thể nâng cấp lên tới 1TB cho phép bạn khởi chạy ứng dụng trong nháy mắt và cung cấp nhiều dung lượng cho tất cả tài liệu, ảnh và video của bạn.        ","Laptop MacBook Air 2019 MVFM2SA/A trang bị màn hình độ phân giải 2560x1600 cho hơn 4 triệu pixel, hình ảnh được nâng lên một cấp độ mới với các chi tiết sắc nét và rõ ràng. Và công nghệ True Tone tự động điều chỉnh điểm trắng của màn hình để phù hợp với nhiệt độ màu của môi trường xung quanh bạn - làm cho các trang web và email trông tự nhiên. Với màu sắc hơn 48% và viền mỏng hơn 50% thế hệ trước, mọi thứ bạn thấy đều phong phú và rực rỡ, bạn có thể tập trung vào những gì trên màn hình của bạn.        "]
    }
    useEffect(() => {
        async function getProduct(){
            var data = await CallApi({
                url : `http://localhost:8080/api/product/${id}`,
                method : 'get'
            })
            console.log(1234,123);
            setProduct(data);
        }   
        getProduct();
    }, [])
    function onShowMoreContent(){
        setMoreContent(true);
    }
    return (Product &&
        <div className="DetailProduct">
            <div className="container">
                <Breadcum ListBreadcum={['Danh sach san pham']} final="Laptop MSI Modern 14 A10RB-888VN"/>
                <div className="row">
                    <DetailProductComponenet Product = {Product}/>
                    <div class="col-lg-3 css-80">
                        <div class="css-100">
                            <div class="css-81 css-1002">
                                <i class="fas fa-truck .css-82"></i>
                                <span class="css-83">Sản phẩm được miễn phí giao hàng </span>
                            </div>
                            <div class="css-84">
                                <h1 class="css-85">Chính sách bán hàng</h1>
                                <ul class="css-86">
                                    <li class="css-87">
                                        <i class="fas fa-check css-88"></i>
                                    Cam kết hàng chính hãng 100%
                                </li>
                                    <li class="css-87">
                                        <i class="fas fa-truck css-88"></i>
                                    Miễn phí giao hàng từ 500K
                                </li>
                                    <li class="css-87">
                                        <i class="fas fa-undo-alt css-88"></i>
                                    Đổi trả miễn phí trong 10 ngày
                                </li>
                                </ul>
                            </div>
                            <div class="css-84">
                                <h1 class="css-85">Dịch vụ khác</h1>
                                <ul class="css-86">
                                    <li class="css-87">
                                        <i class="fas fa-cog css-88"></i>
                                    Sửa chữa đồng giá 150.000đ.
                                </li>
                                    <li class="css-87">
                                        <i class="fas fa-laptop css-88"></i>
                                    Vệ sinh máy tính, laptop.
                                </li>
                                    <li class="css-87">
                                        <i class="fas fa-shield-alt css-88"></i>
                                    Bảo hành tại nhà.
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="home col-lg-12">
                        <div class="header-part-2 ">
                            <div class="header-text">
                                <h1 class="header-title-1">Sản phẩm tương tự</h1>
                                <a href="../Trangsanpham/banchay.html" class="header-a">Xem tất cả</a>
                            </div>
                        </div>
                        <SlideProduct/>
                    </div>
                </div>
                <div className="row">
                    <div className="home col-lg-12">
                        <div class="header-part-2 ">
                            <div class="header-text">
                                <h1 class="header-title-1">Sản phẩm đi kèm</h1>
                                <a href="../Trangsanpham/banchay.html" class="header-a">Xem tất cả</a>
                            </div>
                        </div>
                        <SlideProduct/>
                    </div>
                </div>
                <div className="home2">
                    <div className="product-info " style={MoreContent ? {height:"inherit"} : {}}>
                        <ContentProduct data={fakeData} />
                        <ConfigProduct/>
                        {!MoreContent && <div class="product-btn-1">
                         <span onClick={onShowMoreContent}>Xem thêm nội dung</span> <i class="fas fa-chevron-down"></i>
                      </div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <FeedbackStar/>
                        <Comment/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
