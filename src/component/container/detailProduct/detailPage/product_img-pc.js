import MobileImgProduct from './product_img-mobile';
function productImgPc(props) {
  const { item, handleShowImg, indexItem, animationAddCart } = props;
  return (
    <>
      <div className="product_cart-img Hide-on-mobile">
        <img src={`${'https://cf.shopee.vn/file/'}${item.image}`} alt="" onClick={handleShowImg} />
        {/* thẻ img dùng cho animation */}
        <img
          className={animationAddCart}
          src={`${'https://cf.shopee.vn/file/'}${item.image}`}
          alt=""
          onClick={handleShowImg}
        />
        {/* thẻ img dùng cho animation */}
      </div>
      <MobileImgProduct item={item}></MobileImgProduct>
      <div class="container-fluid">
        <div className="row sm-gutter">
          <div className="col s-12 c-12  l-12 disp">
            {item.images.map((image) => (
              <div className="product_cart-list">
                <img
                  src={`${'https://cf.shopee.vn/file/'}${image}`}
                  alt=""
                  onClick={handleShowImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default productImgPc;
