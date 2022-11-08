import Like from '../like';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/fomarPrice';
import ICON from '../../assets/icons';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SkeletonProduct from '../LoadingSkeleton/product';
import { generateStart } from '../../utils/generateStart';

interface HomeProduct {
  end: any;
  start: any;
  items: any;
  col: any;
}
function HomeProduct({ end, start, items, col }: HomeProduct) {
  const navigate = useNavigate();
  const [loadingSkeleton, setLoadingSkeleton] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadingSkeleton(false);
    }, 4000);
  }, []);
  return (
    <div className="Home-product">
      <div className="row sm-gutter">
        {items?.map((item: any, index: any) => {
          return (
            <div className={col} key={index}>
              {loadingSkeleton ? (
                <SkeletonProduct />
              ) : (
                <>
                  {index >= start && index < end ? (
                    <div className="Home-product-item">
                      <LazyLoadImage
                        effect="blur"
                        src={`${process.env.REACT_APP_IMG_URl}${item?.image}`}
                        alt="itemProduct"
                        className="Home-product-item_img"
                        onClick={() => navigate(`/detailProduct/${item?.itemid}/${item?.categories[0].display_name}/${item?.shopid}`)}
                      />
                      <h4 className="Home-product-item-name">{item?.name}</h4>
                      <div className="Home-product-item_price">
                        <span className="Home-product-item_price-old">{item?.price_before_discount !== 0 && formatPrice(item.price_before_discount)}đ</span>
                        <span className="Home-product-item_price-current">{formatPrice(item?.price)}đ</span>
                      </div>
                      <div className="Home-product-item_actiton">
                        <Like />
                        <div className="Home-product-item_rating">{generateStart(4)}</div>
                        <span className="Home-product-item-sold">{item?.historical_sold}đã bán</span>
                      </div>
                      <div className="Home-product-item_origin">
                        <span className="Home-product-item_brand">{item?.item_brand}</span>
                        <span className="Home-product-item_orgin-name">{item?.item_orgin_name}</span>
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
}
export default HomeProduct;
