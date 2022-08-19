import InputSerch from './Input_Search';
import LogoShopee from './LogoShoppe';
import HeaderCart from './Header_Cart';
import SuggestList from './Suggest_List';
import { useNavigate } from 'react-router-dom';
let UserImg = require('../../Img/User.jpg');
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
          <InputSerch />
          <SuggestList />
        </div>
        <HeaderCart />
        <li
          className="Header__nav--item Header__nav-user display-none show-on-mobile"
          onClick={() => navigate('/login')}
        >
          <img className="Header__nav-item Header__nav-user-img" src={UserImg} alt="UserImg" />
        </li>
      </div>
    </div>
  );
}
export default HeaderWithSearch;
