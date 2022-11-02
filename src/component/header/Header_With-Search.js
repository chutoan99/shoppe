import { InputSearch, LogoShopee, HeaderCart, SuggestList } from '../index';
import { useNavigate } from 'react-router-dom';
import IMG from '../../assets/img';
function HeaderWithSearch() {
  const navigate = useNavigate();
  return (
    <div className="grid wide sm-gutter">
      <div className="Header-with-search sm-gutter">
        <LogoShopee />
        <input
          type="checkbox"
          hidden
          id="Mobile-search-checkbox"
          className="Header__search-checkbox"
        />
        <div>
          <InputSearch />
          <SuggestList />
        </div>
        <HeaderCart />
        <li
          className="Header__nav--item Header__nav-user display-none show-on-mobile"
          onClick={() => navigate('/login')}
        >
          <img className="Header__nav-item Header__nav-user-img" src={IMG.USER_IMG} alt="UserImg" />
        </li>
      </div>
    </div>
  );
}
export default HeaderWithSearch;
