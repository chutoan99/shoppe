import MobileImgProduct from './product_img-mobile';
function ProductImgPc({ handleShowImg, animationAddCart, item }) {
  return (
    <>
      <div className="product_cart-img Hide-on-mobile">
        <img
          className="product_cart-img-re"
          src={`${'https://cf.shopee.vn/file/'}${item?.image}`}
          alt=""
          onClick={handleShowImg}
        />
        {/* thẻ img dùng cho animation */}
        <img
          className={animationAddCart}
          src={`${'https://cf.shopee.vn/file/'}${item?.image}`}
          alt="animationAddCart"
          onClick={handleShowImg}
        />
        {/* thẻ img dùng cho animation */}
      </div>
      <MobileImgProduct item={item} />
      <div className="container-fluid Hide-on-mobile">
        <div className="row sm-gutter">
          <div className="col s-12 c-12  l-12 disp">
            {item?.images?.map((image, index) => {
              return (
                <div className="product_cart-list" key={index}>
                  <img
                    src={`${'https://cf.shopee.vn/file/'}${image}`}
                    alt="MobileImgProduct"
                    onClick={handleShowImg}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductImgPc;
