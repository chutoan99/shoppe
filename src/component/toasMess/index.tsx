import './toasMess.css';
import { useState } from 'react';
import ICON from '../../assets/icons';
import { RootState } from '../../app/store';
import { useAppSelector } from '../../hooks/hooks';
function ToasMess() {
  const { toast } = useAppSelector((state: RootState) => state.others);
  const [toastMess, setToastMess] = useState(toast);
  const handelLostToass = () => {
    setToastMess(true);
  };
  return (
    <>
      {!toastMess && (
        <div className="container_modal">
          <div className="header_modal">
            <span className="header_modal-icon" onClick={handelLostToass}>
              {ICON.LOSE}
            </span>
          </div>
          <div className="content_modal">
            <h2 className="content_modal-description">Bạn Vừa Thêm 1 Sản Phẩm Vào Giỏ Hàng</h2>
          </div>
        </div>
      )}
    </>
  );
}
export default ToasMess;
