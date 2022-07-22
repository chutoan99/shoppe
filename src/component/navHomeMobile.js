import { useNavigate } from 'react-router-dom';
function NavHomeMobile() {
  const navigate = useNavigate();
  return (
    <nav className="Home-Mobile">
      <ul className="list-wrap ">
        <li className="active">
          <i className="fa-solid fa-house-user "></i>
        </li>

        <li>
          <i className="fa-solid fa-comment-dots"></i>
        </li>

        <li>
          <i className="fa-solid fa-plus"></i>
        </li>
        <li className="Header__nav--item Header__nav--item-has-notify">
          <a href="# " className="Header__nav--item--link">
            <i className="fa-solid fa-bell"></i>

            <span className="homeMobile-notify">2</span>
          </a>
        </li>
        {/* <li>
          <i className="fa-solid fa-bell"></i>
        </li> */}
        <li onClick={() => navigate('/register')}>
          <i className="fa-solid fa-user"></i>
        </li>
      </ul>
    </nav>
  );
}
export default NavHomeMobile;
