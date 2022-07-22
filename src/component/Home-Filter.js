function HomeFilter() {
  return (
    <div className="Home Hide-on-table Hide-on-mobile">
      <span className="Home-filter-label">Sắp xếp theo</span>
      <button className="btn Home-filter-btn btn--prinary">Phổ biến</button>
      <button className="btn Home-filter-btn">Mới nhất</button>
      <button className="btn Home-filter-btn">Bán chạy</button>
      <div className="Select-input">
        <span className="Select-input-label">Giá</span>
        <i className="Select-input-icon fa-solid fa-angle-down"></i>
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
          <span className="Home-filter__page-num-current">1</span>/14
        </span>
      </div>
      <div className="Home-filter-page-control">
        <a
          href="# "
          className="Home-filter__page-icon Home-filter__page-btn Home-filter__page-disabled"
        >
          <i className="fa-solid fa-angle-left"></i>
        </a>
        <a href="# " className="Home-filter__page-icon Home-filter__page-btn">
          <i className="fa-solid fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
}
export default HomeFilter;
