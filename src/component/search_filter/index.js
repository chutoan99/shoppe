import './Search_filter.css';
function SearchFilter() {
  return (
    <nav className="category">
      <h3 className="category-heading">
        <i className="category-heading-icon fas fa-list-ul"></i>
        Bộ lọc tìm kiếm
      </h3>
      <div className="category-group">
        <div className="category-group-title">Theo Danh Mục</div>
        <ul className="category-group-list">
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Thiết bị mạng
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Chuột và bàn phím
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            USB
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Link kiện máy tính
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Wifi
          </li>
        </ul>
      </div>
      <div className="category-group">
        <div className="category-group-title">Nơi Bán</div>
        <ul className="category-group-list">
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Hà Nội
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Hồ Chí Minh
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Đà Nẵng
          </li>
        </ul>
      </div>
      <div className="category-group">
        <div className="category-group-title">Đơn Vị Vận Chuyển</div>
        <ul className="category-group-list">
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Hoả tốc
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Nhanh
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Tiết kiệm
          </li>
        </ul>
      </div>
      <div className="category-group">
        <div className="category-group-title">Thương Hiệu</div>
        <ul className="category-group-list">
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Kingston
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Sandisk
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Seagate
          </li>
        </ul>
      </div>
      <div className="category-group">
        <div className="category-group-title">Khoảng Giá</div>
        <div className="category-group-filter">
          <input type="number" placeholder="đ TỪ" className="category-group-filter-input" />
          <i className="fas fa-arrow-right"></i>
          <input type="number" placeholder="đ ĐẾN" className="category-group-filter-input" />
        </div>
        <button className="btn btn--primary category-group-filter-btn">Áp dụng</button>
      </div>
      <div className="category-group">
        <div className="category-group-title">Loại Shop</div>
        <ul className="category-group-list">
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Shoppee
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Shoppee Mail
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Shop yêu thích
          </li>
        </ul>
      </div>
      <div className="category-group">
        <div className="category-group-title">Tình Trạng</div>
        <ul className="category-group-list">
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Mới
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Đã sử dụng
          </li>
        </ul>
      </div>
      <div className="category-group">
        <div className="category-group-title">Lựa Chọn Thanh Toán</div>
        <ul className="category-group-list">
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Thanh toán khi nhận hàng
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Chuyển khoản
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Trả góp 0%
          </li>
        </ul>
      </div>
      <div className="category-group">
        <div className="category-group-title">Đánh Giá</div>
        <div className="rating-star">
          <input type="checkbox" className="category-group-item-check" />
          <i className="star-checked far fa-star"></i>
          <i className="star-checked far fa-star"></i>
          <i className="star-checked far fa-star"></i>
          <i className="star-checked far fa-star"></i>
          <i className="star-checked far fa-star"></i>
        </div>
        <div className="rating-star">
          <input type="checkbox" className="category-group-item-check" />
          <i className="star-checked far fa-star"></i>
          <i className="star-checked far fa-star"></i>
          <i className="star-checked far fa-star"></i>
          <i className="star-checked far fa-star"></i>
          <i className="star-uncheck far fa-star"></i>
        </div>
        <div class="rating-star">
          <input type="checkbox" className="category-group-item-check" />
          <i className="star-checked far fa-star"></i>
          <i className="star-checked far fa-star"></i>
          <i className="star-checked far fa-star"></i>
          <i className="star-uncheck far fa-star"></i>
          <i className="star-uncheck far fa-star"></i>
        </div>
        <div className="rating-star">
          <input type="checkbox" className="category-group-item-check" />
          <i className="star-checked far fa-star"></i>
          <i className="star-checked far fa-star"></i>
          <i className="star-uncheck far fa-star"></i>
          <i className="star-uncheck far fa-star"></i>
          <i className="star-uncheck far fa-star"></i>
        </div>
        <div className="rating-star">
          <input type="checkbox" className="category-group-item-check" />
          <i className="star-checked far fa-star"></i>
          <i className="star-uncheck far fa-star"></i>
          <i className="star-uncheck far fa-star"></i>
          <i className="star-uncheck far fa-star"></i>
          <i className="star-uncheck far fa-star"></i>
        </div>
      </div>
      <div className="category-group">
        <div className="category-group-title">Dịch Vụ & Khuyến Mãi</div>
        <ul className="category-group-list">
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Freeship Xtra
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Hoàn xu Xtra
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Đang giảm giá
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Miễn phí vận chuyển
          </li>
          <li className="category-group-item">
            <input type="checkbox" className="category-group-item-check" />
            Gì cũng rẻ
          </li>
        </ul>
      </div>
      <button className="btn btn--primary category-group-filter-btn category-group--margin">
        LÀM MỚI
      </button>
    </nav>
  );
}
export default SearchFilter;
