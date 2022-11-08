import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Footer, Header, HomeProduct, ProductShop, Loading2 } from '../../component/index';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../app/store';
import { ApiItemShop } from '../../services/shop';
function Shop() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);
  const { shopInfo } = useAppSelector((state: RootState) => state.shop);
  const { start, end } = useAppSelector((state: RootState) => state.pagination);
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
        <Loading2 />
      ) : (
        <>
          <div className="pt-[120px] ">
            <ProductShop item={shopInfo?.data} />
          </div>
          <div className="App__Container">
            <div className="grid wide">
              <div className="row sm-gutter pt-[16px]">
                <HomeProduct items={items} start={start} end={end} col={'col l-2 mo-4 c-6'} />
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
