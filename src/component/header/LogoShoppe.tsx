import { useNavigate } from 'react-router-dom';
import svg from '../../assets/svgs';
function LogoShopee() {
  const navigate = useNavigate();
  const handleOnload = () => {
    navigate('/');
  };
  return (
    <div className="Header__logo Hide-on-mobile" onClick={handleOnload}>
      <div className="w-full">{svg.LOGOSHOPEE}</div>
    </div>
  );
}
export default LogoShopee;
