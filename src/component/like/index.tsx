import { useState, memo } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { updateHeartTrue, updateHeartFalse } from '../../redux/otherSlice';

function Like() {
  const dispatch = useAppDispatch();
  const [like, setLike] = useState('fa-regular fa-heart');
  const changeLike = () => {
    if (like === 'fa-solid fa-heart') {
      setLike('fa-regular fa-heart');
      dispatch(updateHeartFalse());
    } else {
      setLike('fa-solid fa-heart');
      dispatch(updateHeartTrue());
      setTimeout(() => {
        dispatch(updateHeartFalse());
      }, 1400);
    }
  };
  return (
    <span className="Home-product-item_like Home-product-item_liked" onClick={changeLike}>
      <i className={like}></i>
    </span>
  );
}
export default memo(Like);
