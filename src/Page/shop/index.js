import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../component/footer/index.js';
import Header from '../../component/header/index.js';
import HomeProduct from '../../component/container/home_Product';
import ProductShop from '../../component/container/product_shop.js';
import Loading2 from '../../component/loading2/index.js';
function Shop() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [itemShop, setItemShop] = useState({});
  const [perPage, setPerPage] = useState(48);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
  const ApiShop = async () => {
    setLoading(true);
    try {
      const url = `http://localhost:3000/dataShop/${params.id}`;
      const { data } = await axios({
        url: url,
        method: 'get',
      });
      setItemShop(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
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
  }, [params.id]);
  useEffect(() => {
    ApiShop();
  }, [params.id]);
  console.log(items);
  return (
    <>
      <Header />
      {loading ? (
        <Loading2></Loading2>
      ) : (
        <>
          <div className="pt-[120px] ">
            <ProductShop item={itemShop} />
          </div>
          <div className="App__Container">
            <div className="grid wide">
              <div className="row sm-gutter pt-[16px]">
                <div className="col l-12 mo-12 c-12">
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
        </>
      )}

      <Footer />
    </>
  );
}
export default Shop;
