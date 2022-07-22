import Header from '../component/Header';
import HomeProduct from '../component/Home_Product';
import SearchCategory from '../component/SearchCategory';
import '../Style/Search.css';
let SearchImg = require('../Img/Search.png');
function Search() {
  return (
    <>
      <Header></Header>
      <div className="App">
        <div className="App__Container">
          <div className="grid wide">
            <div className="shopee-search-empty-result-section">
              <div className="shopee-search-empty-result-section-img">
                <img src={SearchImg} alt="Search" />
              </div>
              <h2 className="shopee-search-empty-title">Không tìm thấy kết quả nào</h2>
              <h3 className="shopee-search-empty-title-hint">
                Hãy thử sử dụng các từ khóa chung chung hơn thấy kết quả nào
              </h3>
              <h3 className="shopee-search-empty-suggestions">bạn cũng có thể thích</h3>
            </div>
            <div className="row sm-gutter app-content">
              <div className="col l-2 m-0 c-0">
                <SearchCategory />
              </div>
              <div className="col l-10 m-10 c-10">
                <HomeProduct></HomeProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Search;
