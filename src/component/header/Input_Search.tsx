import { SearchHistory } from '../index';
import { useNavigate } from 'react-router-dom';
import { useState, memo } from 'react';
import ICON from '../../assets/icons';
import { useAppDispatch } from '../../hooks/hooks';
import { addDataHistorySearch } from '../../redux/otherSlice';
function InputSearch() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState('');
  const handleSearch = () => {
    dispatch(addDataHistorySearch(inputSearch));
    navigate(`/search/${inputSearch}`);
    setInputSearch('');
  };
  const handleKeyDown = (e: any) => {
    if (e.code === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div className="Header__search">
      <div className="Header__search-input-wrap">
        <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} type="text" placeholder="Nhập để tìm kiếm sản phẩm" className="Header_search-input" onKeyDown={handleKeyDown} />
        <SearchHistory />
      </div>
      <div className="Header__search-select Hide-on-mobile">
        <span className="Header__search-select-label">Trong shop</span>
        <span className="Header__search-select-icon">{ICON.ANGEL_DOWN}</span>
        <ul className="Header__search-option">
          <li className="Header_search-option-item Header_search-option-item-active">
            <span>Trong Shop</span>
            {ICON.HEART}
          </li>
          <li className="Header_search-option-item">
            <span>Ngoài Shop</span>
            {ICON.HEART}
          </li>
        </ul>
      </div>
      <button className="Header__search-btn" onClick={handleSearch}>
        <span className="Header__search-btn-icon">{ICON.MAGNIFYING}</span>
      </button>
    </div>
  );
}
export default memo(InputSearch);
