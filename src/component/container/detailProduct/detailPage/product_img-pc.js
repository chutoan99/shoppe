import MobileImgProduct from './product_img-mobile';
function productImgPc(props) {
  const { item, handleShowImg, animationAddCart } = props;
  // console.log(item);
  return (
    <>
      <div className="product_cart-img Hide-on-mobile">
        <img src={`${'https://cf.shopee.vn/file/'}${item.image}`} alt="" onClick={handleShowImg} />
        {/* thẻ img dùng cho animation */}
        <img
          className={animationAddCart}
          src={`${'https://cf.shopee.vn/file/'}${item.image}`}
          alt="animationAddCart"
          onClick={handleShowImg}
        />
        {/* thẻ img dùng cho animation */}
      </div>
      <MobileImgProduct item={item}></MobileImgProduct>
      <div class="container-fluid Hide-on-mobile">
        <div className="row sm-gutter">
          <div className="col s-12 c-12  l-12 disp">
            {item.images.map((image) => (
              <div className="product_cart-list">
                <img
                  src={`${'https://cf.shopee.vn/file/'}${image}`}
                  alt="MobileImgProduct"
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
