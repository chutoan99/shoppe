import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../Style/toast.css';
function ToasMess() {
  const { toast } = useSelector((state) => state);
  const [toastMess, setToastMess] = useState(toast);
  return (
    <>
      {toastMess ? (
        <div className="container_modal">
          <div className="header_modal">
            <span className="header_modal-icon">
              <i class="fa-solid fa-x"></i>
            </span>
          </div>
          <div className="content_modal">
            <h2 className="content_modal-description">Bạn Vừa Đặt Hàng Thành Công</h2>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default ToasMess;
