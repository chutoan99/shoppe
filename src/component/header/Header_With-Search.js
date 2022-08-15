import InputSerch from './Input_Search';
import LogoShopee from './LogoShoppe';
import HeaderCart from './Header_Cart';
import SuggestionList from './Suggestion_List';
function HeaderWithSearch() {
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
          <InputSerch></InputSerch>
          <SuggestionList></SuggestionList>
        </div>
        <HeaderCart />
      </div>
    </div>
  );
}
export default HeaderWithSearch;
