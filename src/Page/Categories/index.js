import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Footer, Header, HomeProduct, SearchEmpty, SearchFilter } from '../../component/index';
import { ApiCategories } from '../../services/category';
import { ApiApp } from '../../services/products';
import { useDispatch, useSelector } from 'react-redux';
function Categories() {
  const params = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state);
  const [perPage, setPerPage] = useState(48);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
  useEffect(() => {
    const fetchApiCategories = async () => {
      await ApiCategories(params, dispatch);
    };
    fetchApiCategories();
    const fetchApiApp = async () => {
      await ApiApp(setLoading, dispatch);
    };
    fetchApiApp();
  }, [params]);
  return (
    <>
      <Header></Header>
      <div className="App">
        <div className="App__Container py-[24px]">
          <div className="grid wide">
            <div className="row sm-gutter">
              {data?.length === 0 && <SearchEmpty />}
              <div className="col l-2 col-sm-3 c-3 Hide-on-mobile">
                <SearchFilter />
              </div>
              <div className="col l-10">
                <div className="padding-search mob:pt-[50px] mob:hidden block"></div>
                {renderHeaderSortBars()}
                <HomeProduct
                  items={data}
                  start={start}
                  end={end}
                  col={'col l-2-4 mo-4 c-6'}
                ></HomeProduct>
                {data?.length === 0 && (
                  <HomeProduct
                    items={products?.data}
                    start={start}
                    end={end}
                    col={'col l-2-4 mo-4 c-6'}
                  ></HomeProduct>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
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
export default Categories;
