import { useEffect, useState, memo } from 'react';
import { useParams } from 'react-router-dom';
import { Loading2, SearchFilter, SearchEmpty, SortBars } from '../../component/index';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Footer, Header, HomeProduct } from '../../containers/index';
import { RootState } from '../../app/store';
import { ApiSearch } from '../../services/search';

function Search() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state: RootState) => state);
  const { data } = useAppSelector<any>((state: RootState) => state.search);
  const { start, end } = useAppSelector((state: RootState) => state.pagination);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSearch = async () => {
      await ApiSearch(params, dispatch, setLoading);
    };
    fetchSearch();
  }, [params]);
  return (
    <>
      <Header />
      {loading ? (
        <Loading2 />
      ) : (
        <div className="App">
          <div className="bg-[#f5f5f5] overflow-hidden py-[24px]">
            <div className="grid wide">
              {data?.length === 0 && <SearchEmpty />}
              <div className="row sm-gutter">
                <div className="col l-2 col-sm-3 c-3 Hide-on-mobile">
                  <SearchFilter />
                </div>
                <div className="col l-10">
                  <div className="mob:pt-[50px] mob:hidden block"></div>
                  <SortBars />
                  <HomeProduct items={data} start={start} end={end} col={'col l-2-4 mo-4 c-6'}></HomeProduct>
                  {data?.length === 0 && <HomeProduct items={products?.data} start={start} end={end} col={'col l-2-4 mo-4 c-6'}></HomeProduct>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
export default memo(Search);
