import { useParams } from 'react-router-dom';
import { useEffect, memo } from 'react';
import { ApiCategories } from '../../services/category';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Footer, Header, HomeProduct } from '../../containers/index';
import { SearchEmpty, SearchFilter, SortBars } from '../../component/index';

function Categories() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector<any>((state: RootState) => state.categories);
  const { start, end } = useAppSelector((state: RootState) => state.pagination);
  const { products } = useAppSelector((state: RootState) => state);

  useEffect(() => {
    const fetchApiCategories = async () => {
      await ApiCategories(params, dispatch);
    };
    fetchApiCategories();
  }, [params]);
  return (
    <>
      <Header></Header>
      <div className="App">
        <div className="bg-[#f5f5f5] overflow-hidden py-[24px]">
          <div className="grid wide">
            <div className="row sm-gutter">
              {data?.length === 0 && <SearchEmpty />}
              <div className="col l-2 col-sm-3 c-3 Hide-on-mobile">
                <SearchFilter />
              </div>
              <div className="col l-10">
                <div className="padding-search mob:pt-[50px] mob:hidden block"></div>
                <SortBars />
                <HomeProduct items={data} start={start} end={end} col={'col l-2-4 mo-4 c-6'}></HomeProduct>
                {data?.length === 0 && <HomeProduct items={products?.data} start={start} end={end} col={'col l-2-4 mo-4 c-6'}></HomeProduct>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default memo(Categories);
