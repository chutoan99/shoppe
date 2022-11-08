import ICON from '../../assets/icons';
import './product_Des.css';
interface ProductDes {
  item: any;
}
function ProductDes({ item }: ProductDes) {
  return (
    <div className="wrapper">
      <div className="productDes_inner">
        <div className="productDes-heading">CHI TIẾT SẢN PHẨM</div>
        <div className="productDes_container">
          <div className="productDes-title">
            <label>Danh Mục</label>
            <div className="flex flex-wrap">
              {item?.categories?.map((element: any, index: any) => (
                <div className="productDes-title-detail" key={index}>
                  <span>
                    <a>{element?.display_name}</a>
                  </span>
                  {ICON.ANGEL_RIGHT}
                </div>
              ))}
            </div>
          </div>
          <div className="productDes-content">
            {item?.attributes === null ? null : (
              <>
                {item?.attributes?.map((element: any, index: any) => (
                  <div className="productDes-content-detail" key={index}>
                    <label>{element?.name}</label>
                    <span>{element?.value}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="productDes-detail">
          <div className="productDes-heading">MÔ TẢ SẢN PHẨM</div>
          <div className="productDes-heading-des">
            <p>{item?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDes;
