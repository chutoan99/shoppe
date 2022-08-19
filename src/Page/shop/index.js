import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../component/footer/index.js';
import Header from '../../component/header/index.js';
import HomeProduct from '../../component/container/home_Product';
import ProductShop from '../../component/container/product_shop.js';
function Shop() {
  const params = useParams();
  const [items, setItems] = useState([]);
  const [perPage, setPerPage] = useState(48);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
  useEffect(() => {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: `http://localhost:3000/data/shop/${params.id}`,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="" style={{ paddingTop: '120px' }}>
        <ProductShop item={items[0].shop_name}></ProductShop>
      </div>
      <div className="App__Container">
        <div className="grid wide">
          <div className="row sm-gutter pt-3">
            <div className="col l-12 m-12 c-12">
              <HomeProduct
                items={items}
                start={start}
                end={end}
                col={'col l-2 mo-4 c-6'}
              ></HomeProduct>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Shop;
