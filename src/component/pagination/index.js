import { useState } from 'react';
import ICON from '../../assets/icont';
import './pagination.css';
function Pagination({ handlePrevPages, handleNextPages, totalPages }) {
  const [active, setActive] = useState(undefined);
  function renderNumberPage(totalPages) {
    var result = [];
    for (let i = 1; i <= totalPages; i++) {
      result.push(
        <li
          className={`Pagination-item ${active === i ? 'Pagination-item_link-active' : ''}`}
          onClick={() => setActive(i)}
        >
          <span className="Pagination-item_link">{i}</span>
        </li>
      );
    }
    return result;
  }
  return (
    <ul className="Pagination Home-product-pagination">
      <li className="Pagination-item">
        <button className="Pagination-item_link" onClick={handlePrevPages}>
          <span className="Pagination-item_link-icon">{ICON.ANGEL_LEFT}</span>
        </button>
      </li>
      {renderNumberPage(totalPages)}
      <li className="Pagination-item">
        <button className="Pagination-item_link" onClick={handleNextPages}>
          <span className="Pagination-item_link-icon">{ICON.ANGEL_RIGHT}</span>
        </button>
      </li>
    </ul>
  );
}
export default Pagination;
