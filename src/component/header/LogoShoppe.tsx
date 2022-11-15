import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

import svg from '../../assets/svgs';
function LogoShopee() {
  const navigate = useNavigate();
  return (
    <div className="Header__logo Hide-on-mobile" onClick={() => navigate('/')}>
      <div className="w-full">{svg.LOGOSHOPEE}</div>
    </div>
  );
}
export default memo(LogoShopee);
