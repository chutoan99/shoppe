import './header.css';
import { HeaderNavbar, HeaderWithSearch } from '../../component/index';
import { memo } from 'react';

function Header() {
  return (
    <header className="Header">
      <div className="grid wide">
        <HeaderNavbar />
        <HeaderWithSearch />
      </div>
    </header>
  );
}
export default memo(Header);
