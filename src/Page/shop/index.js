import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Footer, Header, HomeProduct, ProductShop, Loading2 } from '../../component/index';
import { ApiItemShop } from '../../services/shop';
function Shop() {
  const params = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { shopInfo } = useSelector((state) => state.shop);
  const [items, setItems] = useState();
  const [perPage, setPerPage] = useState(48);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
  useEffect(() => {
    const fetchApiItemsShop = async () => {
      await ApiItemShop(params, setItems, setLoading, dispatch);
    };
    fetchApiItemsShop();
  }, [params]);
  return (
    <>
      <Header />
      {loading ? (
        <Loading2></Loading2>
      ) : (
        <>
          <div className="pt-[120px] ">
            <ProductShop item={shopInfo?.data} />
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
