import { useState } from 'react';
import ICON from '../../assets/icont';
import IMG from '../../assets/img';
import './product_comment.css';
function ProductComment({ items }) {
  return (
    <div className="wrapper">
      <div className="productDes_inner">
        <p className="product-comment-heading">ĐÁNH GIÁ SẢN PHẨM</p>
        <div className="product-rating-overview">
          <div className="product-comment-rating">
            <div>
              <span>
                4.9 <label>trên 5</label>
              </span>
            </div>
            {renderStart()}
          </div>
          <div className="product-comment-filter">
            <span className="product-comment-filter-active">Tất Cả</span>
            <span>5 Sao (15)</span>
            <span>4 Sao (15)</span>
            <span>3 Sao (15)</span>
            <span>2 Sao (15)</span>
            <span>1 Sao (15)</span>
            <span>Có Bình Luận (15)</span>
            <span>Có Hình Ảnh/ Video (15)</span>
          </div>
        </div>
        {items?.length === 0 && (
          <div className="product-comment-empty">
            <div className="product-comment-empty-img">
              <img src={IMG.EMPTY_COMMENT} alt="emptyComment"></img>
            </div>
            <p className="product-comment-empty-des">Chưa Có Bình Luận Nào</p>
          </div>
        )}
        {items?.length !== 0 &&
          items?.map((item, index) => {
            return (
              <div className="product-comment-content" key={index}>
                <div className="product-comment-avatar">
                  <img src={`${'https://cf.shopee.vn/file/'}${item?.author_portrait}`} alt="item" />
                </div>
                <div className="product-comment-main">
                  <>
                    <h3>{item?.author_username}</h3>
                    {renderStart()}
                    {renderTime(item?.ctime)}
                    <p>{item?.comment}</p>
                    <div className="comment-rating">
                      <CommentImg item={item} />
                    </div>
                    {item?.ItemRatingReply === null ? null : (
                      <div className="comment-main-shop-feedback">
                        <h3>Phản Hồi Của Người Bán</h3>
                        <p>{item?.ItemRatingReply?.comment}</p>
                      </div>
                    )}
                    <RatingActions />
                  </>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
  function renderStart() {
    return (
      <div className="product-items-content-rating-icons">
        {ICON.START}
        {ICON.START}
        {ICON.START}
        {ICON.START}
        {ICON.START}
      </div>
    );
  }
  function renderTime(time) {
    let d = new Date(time);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let dayofweek = d.getDay();
    const dayname = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    const newTime = dayname[dayofweek] + ' ngày ' + day + '/' + month + '/' + year;
    return <span>{newTime}</span>;
  }
}
export default ProductComment;
export function RatingActions() {
  const [active, setActive] = useState('fa-solid fa-thumbs-up');
  const [number, setNumber] = useState(0);
  const handleChangeStatus = () => {
    setActive('fa-solid fa-thumbs-up icons-active');
    setNumber(number);
  };
  return (
    <div className="shopee-product-rating__actions" onClick={handleChangeStatus}>
      <i className={active}></i>
      <label>{number} Hữu Ích?</label>
    </div>
  );
}
export function CommentImg({ item }) {
  const [index, setIndex] = useState(0);
  const [ShowImg, setShowImg] = useState(false);
  const [ShowVideo, setShowVideo] = useState(false);
  const handleChangeImg = () => {
    if (ShowVideo) {
      setShowVideo(false);
    }
    setShowImg(true);
  };
  const handleChangeImgClose = () => {
    setShowImg(false);
  };
  const onShowVideoComment = () => {
    if (ShowImg) {
      setShowImg(false);
    }
    setShowVideo(true);
  };
  const onFalseVideoComment = () => {
    setShowVideo(false);
  };
  return (
    <>
      <div className="w-full">
        <div className="comment-rating">
          {item?.images === null ? null : (
            <>
              {item?.videos?.map((video, index) => (
                <div
                  className="comment-video"
                  onClick={() => {
                    onShowVideoComment();
                  }}
                  onDoubleClick={() => onFalseVideoComment()}
                  key={index}
                >
                  <img src={video.cover} alt="" />
                  {IMG.VIDEO}
                </div>
              ))}
              {item?.images?.map((img, index) => (
                <div className="comment-rating-img" key={index} onClick={() => setIndex(index)}>
                  <img
                    src={`${'https://cf.shopee.vn/file/'}${img}`}
                    alt="item"
                    onClick={handleChangeImg}
                    onDoubleClick={handleChangeImgClose}
                  />
                </div>
              ))}
            </>
          )}
        </div>
        {ShowVideo === true ? (
          <div className="comment-rating-img-video">
            <video src={item.videos[0].url} controls autoPlay />
          </div>
        ) : null}
        {ShowImg ? (
          <div className="comment-rating-show-img">
            <img src={`${'https://cf.shopee.vn/file/'}${item.images[index]}`} alt="" />
          </div>
        ) : null}
        <></>
      </div>
    </>
  );
}
