import React from 'react'

function ContentProduct(props) {
    const {ImageMain,ListImage,ListTitle,ListContent} = props.data;
    function content(){
        var content=[];
        if(ListTitle){
            content.push(<img src={ImageMain} alt=""  class="product-decription-img" key={32132}/>);
            for(var i=0;i<ListTitle.length;i++){
                content.push(<h1>{ListTitle[i]}</h1>);
                content.push(<p>{ListContent[i]}</p>);
                content.push(<img src={ListImage[i]}/>)
            };
        }
        return content;
    }
    return (
       <div className="product-description col-lg-8 pr-5">
            <h1 class="header-h1-1">Mô tả sản phẩm</h1>
            <div className="product-description-wrap">
                {content()}
            </div>

       </div>
    )
}

export default ContentProduct
