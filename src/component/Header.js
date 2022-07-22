import HeaderNavbar from './Header_Navbar';
import HeaderWithSearch from './Header_With-Search';
import HeaderSortBar from './Header_Sort-Bar';
import SuggestionList from './Suggestion-List';
function Header() {
  return (
    <header className="Header">
      <div className="grid wide">
        <HeaderNavbar />
        {/* <!-- ô tìm kím --> */}
        <HeaderWithSearch></HeaderWithSearch>
      </div>

      <HeaderSortBar></HeaderSortBar>
    </header>
  );
}
export default Header;
