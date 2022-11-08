import './header.css';
import { HeaderNavbar, HeaderSortBar, HeaderWithSearch } from '../index';
function Header() {
  return (
    <header className="Header">
      <div className="grid wide">
        <HeaderNavbar />
        <HeaderWithSearch />
      </div>
      <HeaderSortBar />
    </header>
  );
}
export default Header;
