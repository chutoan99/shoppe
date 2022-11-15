import './sort-Bar.css';
function SortBars() {
  return (
    <ul className="Header_sort-bars mb-[1rem]">
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
export default SortBars;
