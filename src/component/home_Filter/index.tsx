import { useState } from 'react';
import ICON from '../../assets/icons';
import './home_Filter.css';
function HomeFilter() {
  const [filterDay, setFilterDay] = useState(1);
  const [filterMonth, setFilterMonth] = useState(12);
  const handleBack = () => {
    setFilterDay(filterDay - 1);
    if (filterDay === 0) {
      setFilterMonth(filterMonth - 1);
      setFilterDay(31);
    }
    if (filterMonth === 0) {
      setFilterMonth(12);
    }
  };
  const handleNext = () => {
    setFilterDay(filterDay + 1);
    if (filterDay > 30) {
      setFilterDay(1);
      setFilterMonth(filterMonth + 1);
    }
    if (filterMonth > 12) {
      setFilterMonth(1);
    }
  };
  return (
    <div className="Home Hide-on-table Hide-on-mobile">
      <span className="Home-filter-label">Sắp xếp theo</span>
      <button className="btn Home-filter-btn btn--prinary">Phổ biến</button>
      <button className="btn Home-filter-btn">Mới nhất</button>
      <button className="btn Home-filter-btn">Bán chạy</button>
      <div className="Select-input">
        <span className="Select-input-label">Giá</span>
        <span className="Select-input-icon">{ICON.ANGEL_DOWN}</span>
        <ul className="Select-input-list">
          <li className="Select-input-item">
            <a href="# " className="Select-input-link">
              Giá thấp đến cao
            </a>
          </li>
          <li className="Select-input-item">
            <a href="# " className="Select-input-link">
              Giá cao đến thấp
            </a>
          </li>
        </ul>
      </div>
      <div className="Home-filter__page">
        <span className="Home-filter__page-num">
          <span className="Home-filter__page-num-current">Ngày {filterDay}</span> / Tháng{' '}
          {filterMonth}
        </span>
      </div>
      <div className="Home-filter-page-control">
        <span
          onClick={handleBack}
          className="Home-filter__page-icon Home-filter__page-btn Home-filter__page-disabled"
        >
          {ICON.ANGEL_LEFT}
        </span>
        <span onClick={handleNext} className="Home-filter__page-icon Home-filter__page-btn">
          {ICON.ANGEL_RIGHT}
        </span>
      </div>
    </div>
  );
}
export default HomeFilter;
