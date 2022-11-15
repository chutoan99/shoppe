import MobileImgProduct from './product_img-mobile';
import React, { memo } from 'react';

interface ProductImgPc {
  setShowImg: React.Dispatch<React.SetStateAction<boolean>>;
  animationAddCart: any;
  item: any;
}
function ProductImgPc({ animationAddCart, item, setShowImg }: ProductImgPc) {
  return (
    <>
      <div className="product_cart-img Hide-on-mobile">
        <img className="product_cart-img-re" src={`${process.env.REACT_APP_IMG_URl}${item?.image}`} alt="" onClick={() => setShowImg(true)} />
        {/* thẻ img dùng cho animation */}
        <img className={animationAddCart} src={`${process.env.REACT_APP_IMG_URl}${item?.image}`} alt="animationAddCart" onClick={() => setShowImg(true)} />
        {/* thẻ img dùng cho animation */}
      </div>
      <MobileImgProduct item={item} />
      <div className="container-fluid Hide-on-mobile">
        <div className="row sm-gutter">
          <div className="col s-12 c-12  l-12 disp">
            {item?.images?.map((image: any, index: any) => {
              return (
                <div className="product_cart-list" key={index}>
                  <img src={`${process.env.REACT_APP_IMG_URl}${image}`} alt="MobileImgProduct" onClick={() => setShowImg(true)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(ProductImgPc);
