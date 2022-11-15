import { suggestList } from '../../utils/data_suggestList';
import { memo } from 'react';

function SuggestList() {
  return (
    <div className="SuggestionList  Hide-on-mobile">
      <div className="SuggestionList-item">
        {suggestList?.map((item, index) => (
          <a className="SuggestionList-item hover:opacity-70" href="# " key={index}>
            {item?.value}
          </a>
        ))}
      </div>
    </div>
  );
}
export default memo(SuggestList);
