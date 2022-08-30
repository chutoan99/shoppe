import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../component/header';
import Footer from '../../component/footer';
import { useParams } from 'react-router-dom';
import Loading2 from '../../component/loading2/index';
import SearchCategory from '../../component/search_filter/index';
import HomeProduct from '../../component/container/home_Product';
import SearchEmpty from '../../component/search_empty';
function Search() {
  const params = useParams();
  const [perPage, setPerPage] = useState(48);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
  const [items, setItems] = useState([]);
  const [inputSearch, setInputSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [itemSuggestList, setItemSuggestList] = useState({});
  useEffect(() => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: `http://localhost:3000/data/search?search=${params.search}`,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          setItems(response.data);
        }
        if (response.data.length === 0) {
          setInputSearch(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const ApiSuggestLit = async () => {
    setLoading(true);
    try {
      const url = `http://localhost:3000/datas`;
      const { data } = await axios({
        url: url,
        method: 'get',
      });
      setItemSuggestList(data.items);
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  useEffect(() => {
    ApiSuggestLit();
  }, []);
  return (
    <>
      <Header />
      {loading ? (
        <Loading2 />
      ) : (
        <div className="App">
          <div className="App__Container py-[24px]">
            <div className="grid wide">
              {inputSearch ? <SearchEmpty></SearchEmpty> : null}
              <div className="row sm-gutter">
                <div className="col l-2 col-sm-3 c-3 Hide-on-mobile">
                  <SearchCategory />
                </div>
                <div className="col l-10">
                  <div className="mob:pt-[50px] mob:hidden block"></div>
                  {renderHeaderSortBars()}
                  <HomeProduct
                    items={items}
                    start={start}
                    end={end}
                    col={'col l-2-4 mo-4 c-6'}
                  ></HomeProduct>
                  {inputSearch ? (
                    <HomeProduct
                      items={itemSuggestList}
                      start={start}
                      end={end}
                      col={'col l-2-4 mo-4 c-6'}
                    ></HomeProduct>
                  ) : null}
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
