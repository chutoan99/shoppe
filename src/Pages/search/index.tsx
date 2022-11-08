import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Footer, Loading2, HomeProduct, SearchFilter, SearchEmpty } from '../../component/index';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
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
      await ApiSearch(params, dispatch);
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
          <div className="App__Container py-[24px]">
            <div className="grid wide">
              {data?.length === 0 && <SearchEmpty />}
              <div className="row sm-gutter">
                <div className="col l-2 col-sm-3 c-3 Hide-on-mobile">
                  <SearchFilter />
                </div>
                <div className="col l-10">
                  <div className="mob:pt-[50px] mob:hidden block"></div>
                  {renderHeaderSortBars()}
                  <HomeProduct items={data} start={start} end={end} col={'col l-2-4 mo-4 c-6'}></HomeProduct>
                  {data?.length === 0 && <HomeProduct items={products?.data} start={start} end={end} col={'col l-2-4 mo-4 c-6'}></HomeProduct>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </>
  );
  function renderHeaderSortBars() {
    return (
      <ul className="Header_sort-bars mb-3">
        <li className="Header_sort-item">
          <a href="# " className="Header_sort-link">
            Liên quan
          </a>
        </li>
        <li className="Header_sort-item Header_sort-item-active">
          <a href="# " className="Header_sort-link ">
            Mới nhất
          </a>
        </li>
        <li className="Header_sort-item">
          <a href="# " className="Header_sort-link">
            Bán chạy
          </a>
        </li>
        <li className="Header_sort-item">
          <a href="# " className="Header_sort-link">
            Giá
          </a>
        </li>
      </ul>
    );
  }
}
export default Search;
