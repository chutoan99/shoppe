import Like from '../like';
import { useNavigate } from 'react-router-dom';
function HomeProduct(props) {
  const navigate = useNavigate();
  const { end, start, items, col } = props;
  return (
    <div className="Home-product">
      <div className="row sm-gutter">
        {items.map((item, index) => (
          <div className={col} key={index}>
            {index >= start && index < end ? (
              <div className="Home-product-item">
                <img
                  src={`${'https://cf.shopee.vn/file/'}${item.image}`}
                  alt="itemProduct"
                  className="Home-product-item_img"
                  onClick={() =>
                    navigate(`/detailProduct/${item.itemid}/${item.categories[0].display_name}`)
                  }
                />
                <h4 className="Home-product-item-name">{item.name}</h4>
                <div className="Home-product-item_price">
                  <span className="Home-product-item_price-old">
                    {item.price_before_discount === 0
                      ? null
                      : `${(item.price_before_discount / 100000).toLocaleString('it-IT')}${'đ'}`}
                  </span>
                  <span className="Home-product-item_price-current">
                    {(item.price / 100000).toLocaleString('it-IT')}đ
                  </span>
                </div>
                <div className="Home-product-item_actiton">
                  <Like />
                  {renderRating()}
                  <span className="Home-product-item-sold">{item.historical_sold}đã bán</span>
                </div>
                <div className="Home-product-item_origin">
                  <span className="Home-product-item_brand">{item.item_brand}</span>
                  <span className="Home-product-item_orgin-name">{item.item_orgin_name}</span>
                </div>
                <div className="Home-product-item_favourite">
                  <i className="fa-solid fa-check"></i>
                  <span>Yêu thích</span>
                </div>
                <div className="Home-product-item_sale-off">
                  <span className="Home-product-item_sale-off-percent">{item.discount}</span>
                  <br></br>s<span className="Home-product-item_sale-off-label">Giảm</span>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
  function renderRating() {
    return (
      <div className="Home-product-item_rating">
        <i className="Home-product-item_rating--gold fa-solid fa-star"></i>
        <i className="Home-product-item_rating--gold fa-solid fa-star"></i>
        <i className="Home-product-item_rating--gold fa-solid fa-star"></i>
        <i className="Home-product-item_rating--gold fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
    );
  }
}
export default HomeProduct;
