import { useNavigate } from 'react-router-dom';
import svg from '../../assets/svg';
function LogoShopee() {
  const navigate = useNavigate();
  const handleOnload = () => {
    navigate('/');
  };
  return (
    <div className="Header__logo Hide-on-mobile" onClick={handleOnload}>
      <div className="Header_logo-img">{svg.LOGOSHOPEE}</div>
    </div>
  );
}
export default LogoShopee;
