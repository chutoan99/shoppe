import './search_empty.css';
let SearchImg = require('../../Img/Search.png');
function SearchEmpty() {
  return (
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
  );
}
export default SearchEmpty;
