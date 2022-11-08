function TitleTable({}) {
  return (
    <div className="tile-content-container Hide-on-mobile">
      <div className="title-content">
        <div className="flex items-center">
          {/* <label className="shopping_cart-checkBox">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label> */}
          <p className="pl-[30px]">Sản Phẩm</p>
        </div>
      </div>
      <div className="title-content">
        <p className="text-center">Đơn Giá</p>
      </div>
      <div className="title-content">
        <p className="text-center">Số Lượng</p>
      </div>
      <div className="title-content">
        <p className="text-center">Số Tiền</p>
      </div>
      <div className="title-content">
        <p className="text-center">Thao Tác</p>
      </div>
    </div>
  );
}
export default TitleTable;
