import InputSerch from './InputSerch';
import HeaderCart from './Header_Cart';
import LogoShopee from './LogoShoppe';
import SuggestionList from './Suggestion-List';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';
function HeaderWithSearch() {
  const navigate = useNavigate();
  return (
    <div className="grid wide sm-gutter">
      <div className="Header-with-search sm-gutter">
        <div className="l-2 m-2">
          <LogoShopee />
        </div>
        <div className="l-9 m-9  c-10">
          <div className="l-12 m-0-12  c-12">
            <input
              type="checkbox"
              hidden
              id="Mobile-search-checkbox"
              className="Header__search-checkbox"
            />
            <InputSerch></InputSerch>
          </div>

          <div className="l-12 m-0-12  c-12">
            <SuggestionList></SuggestionList>
          </div>
        </div>
        <div className="l-1 m-1  c-2">
          <HeaderCart />
        </div>
      </div>
    </div>
  );
}
export default HeaderWithSearch;
