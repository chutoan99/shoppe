import Like from '../like';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/fomarPrice';
import ICON from '../../assets/icont';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SkeletonProduct from '../LoadingSkeleton/product';
function HomeProduct({ end, start, items, col }) {
  const navigate = useNavigate();
  const [loadingSkeleton, setLoadingSkeleton] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingSkeleton(false);
    }, [4000]);
  }, []);
  return (
    <div className="Home-product">
      <div className="row sm-gutter">
        {items?.map((item, index) => {
          return (
            <div className={col} key={index}>
              {loadingSkeleton ? (
                <SkeletonProduct />
              ) : (
                <>
                  {index >= start && index < end ? (
                    <div className="Home-product-item">
                      <LazyLoadImage
                        once={true}
                        effect="blur"
                        src={`${'https://cf.shopee.vn/file/'}${item?.image}`}
                        alt="itemProduct"
                        className="Home-product-item_img"
                        onClick={() =>
                          navigate(
                            `/detailProduct/${item?.itemid}/${item?.categories[0].display_name}/${item?.shopid}`
                          )
                        }
                      />

                      <h4 className="Home-product-item-name">{item?.name}</h4>
                      <div className="Home-product-item_price">
                        <span className="Home-product-item_price-old">
                          {item?.price_before_discount === 0
                            ? null
                            : formatPrice(item.price_before_discount)}
                        </span>
                        <span className="Home-product-item_price-current">
                          {(item?.price / 100000).toLocaleString('it-IT')}đ
                        </span>
                      </div>
                      <div className="Home-product-item_actiton">
                        <Like />
                        {renderRating()}
                        <span className="Home-product-item-sold">
                          {item?.historical_sold}đã bán
                        </span>
                      </div>
                      <div className="Home-product-item_origin">
                        <span className="Home-product-item_brand">{item?.item_brand}</span>
                        <span className="Home-product-item_orgin-name">
                          {item?.item_orgin_name}
                        </span>
                      </div>
                      <div className="Home-product-item_favourite">
                        {ICON.HEART}
                        <span>Yêu thích</span>
                      </div>
                      <div className="Home-product-item_sale-off">
                        <span className="Home-product-item_sale-off-percent">{item?.discount}</span>
                        <br></br>s<span className="Home-product-item_sale-off-label">Giảm</span>
                      </div>
                      <div className="home-product-item-footer">Tìm sản phẩm tương tự</div>
                    </div>
                  ) : null}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
  function renderRating() {
    return (
      <div className="Home-product-item_rating">
        <span className="Home-product-item_rating--gold">{ICON.START}</span>
        <span className="Home-product-item_rating--gold">{ICON.START}</span>
        <span className="Home-product-item_rating--gold">{ICON.START}</span>
        <span className="Home-product-item_rating--gold">{ICON.START}</span>
        <span>{ICON.START}</span>
      </div>
    );
  }
}
export default HomeProduct;
