import NumberPages from './numberPages';
import './pagination.css';
function Pagination(props) {
  const { handlePrevPages, handleNextPages, totalPages } = props;
  function renderNumberPage(totalPages) {
    var result = [];
    for (let i = 1; i <= totalPages; i++) {
      result.push(<NumberPages i={i}></NumberPages>);
    }
    return result;
  }
  return (
    <>
      <ul className="Pagination Home-product-pagination">
        <li className="Pagination-item">
          <button className="Pagination-item_link" onClick={handlePrevPages}>
            <i className="Pagination-item_link-icon fa-solid fa-angle-left"></i>
          </button>
        </li>
        {renderNumberPage(totalPages)}
        <li className="Pagination-item">
          <button className="Pagination-item_link" onClick={handleNextPages}>
            <i className="Pagination-item_link-icon fa-solid fa-angle-right"></i>
          </button>
        </li>
      </ul>
    </>
  );
}
export default Pagination;
