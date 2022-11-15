import { memo } from 'react';
import { useAppSelector } from '../../hooks/hooks';

function SearchHistory() {
  const { dataHistorySearch } = useAppSelector((state) => state.others);
  return (
    <div className="Header__search-history">
      <h3 className="Header__search-history-heading"> Lịch sử tìm kiếm </h3>
      <ul className="Header__search-history-list">
        {dataHistorySearch?.map((item, index) => (
          <li className="Header__search-history-item" key={index}>
            <a href="# ">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default memo(SearchHistory);
