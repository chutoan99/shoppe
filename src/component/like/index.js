import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { updateHeartTrue, updateHeartFalse } from '../../redux/action';
function Like() {
  const dispatch = useDispatch();
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
      <i class={like}></i>
    </span>
  );
}
export default Like;
