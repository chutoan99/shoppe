import './product_Des.css';
function ProductDes(props) {
  const { item } = props;
  return (
    <div className="App__Container py-3">
      <div className="grid wide">
        <div className="sm-gutter row">
          <div className="wrapper">
            <div className="productDes_inner">
              <div className="productDes-heading">CHI TIẾT SẢN PHẨM</div>
              <div className="productDes_container">
                <div className="productDes-title">
                  <label>Danh Mục</label>
                  <div style={{ flexWrap: 'wrap', display: 'flex' }}>
                    {item.categories.map((element, index) => (
                      <div className="productDes-title-detail" key={index}>
                        <span>
                          <a>{element.display_name}</a>
                        </span>
                        <i class="fa-solid fa-angle-right" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="productDes-content">
                  {item.attributes === null ? null : (
                    <>
                      {item.attributes.map((element, index) => (
                        <div className="productDes-content-detail" key={index}>
                          <label>{element.name}</label>
                          <span>{element.value}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
              <div className="productDes-detail">
                <div className="productDes-heading">MÔ TẢ SẢN PHẨM</div>

                <div className="productDes-heading-des">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDes;
