import './header.css';
import HeaderNavbar from './header_Navbar';
import HeaderSortBar from './Header_Sort-Bar';
import HeaderWithSearch from './Header_With-Search';
function Header() {
  return (
    <header className="Header">
      <div className="grid wide">
        <HeaderNavbar />
        <HeaderWithSearch></HeaderWithSearch>
      </div>
      <HeaderSortBar></HeaderSortBar>
    </header>
  );
}
export default Header;
