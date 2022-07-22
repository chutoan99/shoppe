import MobileCarousel from './Mobile-Carousel';

function ProductImg(props) {
  const { item, handleShowImg, indexItem } = props;
  return (
    <>
      <div className="product_cart-img Hide-on-mobile">
        <img src={`${'https://cf.shopee.vn/file/'}${item.image}`} alt="" onClick={handleShowImg} />
      </div>
      <MobileCarousel item={item}></MobileCarousel>
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
export default ProductImg;
