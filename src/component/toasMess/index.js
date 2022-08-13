import './toasMess.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
function ToasMess() {
  const { toast } = useSelector((state) => state);
  const [toastMess, setToastMess] = useState(toast);
  const handelLostToass = () => {
    setToastMess(true);
  };
  return (
    <>
      {!toastMess ? (
        <div className="container_modal">
          <div className="header_modal">
            <span className="header_modal-icon" onClick={handelLostToass}>
              <i class="fa-solid fa-x"></i>
            </span>
          </div>
          <div className="content_modal">
            <h2 className="content_modal-description">Bạn Vừa Thêm 1 Sản Phẩm Vào Giỏ Hàng</h2>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default ToasMess;
