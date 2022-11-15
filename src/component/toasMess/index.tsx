import './toasMess.css';
import { useState, memo } from 'react';
import ICON from '../../assets/icons';
import { RootState } from '../../app/store';
import { useAppSelector } from '../../hooks/hooks';

interface ToasMess {
  content: String;
}
function ToasMess({ content }: ToasMess) {
  const { toast } = useAppSelector((state: RootState) => state.others);
  const [toastMess, setToastMess] = useState(toast);
  return (
    <>
      {!toastMess && (
        <div className="container_modal animation_modal ">
          <div className="header_modal">
            <span className="w-[12px] h-[18px] cursor-pointer" onClick={() => setToastMess(true)}>
              {ICON.LOSE}
            </span>
          </div>
          <div className="h-[120px] flex justify-center items-center">
            <h2 className="text-[1rem] mb-[10px]">{content}</h2>
          </div>
        </div>
      )}
    </>
  );
}
export default memo(ToasMess);
