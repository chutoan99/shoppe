import { useState } from 'react';
function NumberPages(props) {
  const { i } = props;
  const [active, setActive] = useState('Pagination-item');
  const handleChangePage = () => {
    if (active === 'Pagination-item_link-active') {
      setActive('Pagination-item');
    }
    setActive('Pagination-item_link-active Pagination-item');
  };
  return (
    <li className={active} onClick={handleChangePage}>
      <span className="Pagination-item_link " href="# ">
        {i}
      </span>
    </li>
  );
}
export default NumberPages;
