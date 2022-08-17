import SearchHistory from './Search_history';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function InputSearch() {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState('');
  const handleSearch = () => {
    navigate(`/search/${inputSearch}`);
  };
  return (
    <div className="Header__search">
      <div className="Header__search-input-wrap">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Nhập để tìm kiếm sản phẩm"
          className="Header_search-input"
        />
        <SearchHistory />
      </div>
      <div className="Header__search-select Hide-on-mobile">
        <span className="Header__search-select-label">Trong shop</span>
        <i className="Header__search-select-icon fa-solid fa-angle-down"></i>
        <ul className="Header__search-option">
          <li className="Header_search-option-item Header_search-option-item-active">
            <span>Trong Shop</span>
            <i className="fa-solid fa-check"></i>
          </li>
          <li className="Header_search-option-item">
            <span>Ngoài Shop</span>
            <i className="fa-solid fa-check"></i>
          </li>
        </ul>
      </div>
      <button className="Header__search-btn" onClick={handleSearch}>
        <i className="Header__search-btn-icon fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
export default InputSearch;
