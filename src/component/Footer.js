import { useState } from 'react';

let AppStore = require('../Img/AppStore.png');
let QRcode = require('../Img/QRcode.png');
let GooglePlay = require('../Img/GooglePlay.png');
function Footer() {
  const [showFooter, setShowFooter] = useState('hidden');
  const [show, setShow] = useState('show');
  const handleShowFooter = () => {
    setShowFooter('show');
    setShow('hidden');
  };
  return (
    <footer className="footer">
      <div className="grid wide footer__content">
        <div className="grid wide">
          <div className="row boder-b">
            <div className="l-12 m-12 m-12 c-12">
              <h2 className="Footer_content-heading">SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE</h2>
              <p className="Footer_des">
                Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí! Shopee là
                nền tảng giao dịch trực tuyến hàng đầu ở Đông Nam Á, có trụ sở chính ở Singapore, đã
                có mặt ở khắp các khu vực Singapore, Malaysia, Indonesia, Thái Lan, Philippines, Đài
                Loan, Brazil, México, Colombia, Chile, Poland, Spain, Argentina. Với sự đảm bảo của
                Shopee, bạn sẽ mua hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!
              </p>
              <h2 className="Footer_content-heading">
                MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN
              </h2>

              <p className="Footer_des">
                Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì Shopee.vn là
                một sự lựa chọn tuyệt vời dành cho bạn. Bản chất của Shopee là một social E-commerce
                platform - nền tảng trang web thương mại điện tử tích hợp mạng xã hội. Điều này cho
                phép người mua và người bán hàng dễ dàng tương tác, trao đổi thông tin về sản phẩm
                và chương trình khuyến mãi của shop. Nhờ nền tảng đó, việc mua bán trên Shopee trở
                nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để
                hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm
                chính hãng, uy tín, Shopee Mall chính là sự lựa chọn lí tưởng dành cho bạn. Để bạn
                có thể dễ dàng khi tìm hiểu và sử dụng sản phẩm, Shopee Blog- trang blog thông tin
                chính thức của Shopee - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu
                hướng thời trang, review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá tốt
                bất ngờ.
              </p>
              <div className={show}>
                <h2 className="Footer_content-heading click" onClick={handleShowFooter}>
                  Xem Thêm<i class="fa-solid fa-angle-right"></i>
                </h2>
              </div>

              <div className={showFooter}>
                <h2 className="Footer_content-heading">
                  TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI
                </h2>
                <p className="Footer_des">
                  Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng mọi lúc, mọi nơi. Bạn
                  có thể tải ứng dụng Shopee cũng như đăng sản phẩm bán hàng một cách nhanh chóng và
                  tiện lợi. Ngoài ra, ứng dụng Shopee còn có những ưu điểm sau:
                </p>
                <li className="Footer_des-list">
                  - Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được ngay những
                  sản phẩm nổi bật cũng như dễ dàng tìm đến các ô tìm kiếm, giỏ hàng hoặc tính năng
                  chat liền tay.
                </li>
                <li className="Footer_des-list">
                  - Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi trên cùng một
                  tài khoản. Bạn sẽ vừa là người mua hàng, vừa là người bán hàng rất linh hoạt, dễ
                  dàng.
                </li>
                <li className="Footer_des-list">
                  - Cập nhập thông tin khuyến mãi, Shopee flash sale nhanh chóng và liên tục.
                </li>

                <p className="Footer_des">
                  Tại Shopee, bạn có thể lưu các mã giảm giá Shopee và mã miễn phí vận chuyển toàn
                  quốc. Bên cạnh đó, Shopee cũng sẽ có những chiến dịch khuyến mãi lớn hằng năm như
                  Siêu hội tiêu dùng 15.3, Shopee 4.4 sale, Shopee 5.5 sale, Shopee sale 7.7, Shopee
                  9.9 sale, Shopee 10.10 sale, Shopee 11.11 sale, Shopee 12.12 sale, Shopee Tết
                  Sale. Đây là thời điểm để người mua hàng có thể nhanh tay chọn ngay cho mình những
                  mặt hàng ưa thích với mức giá giảm kỉ lục. Ngoài ra, bạn còn có thể thỏa thích săn
                  sale vào các ngày trong tháng như Sale đồng giá giữa tháng và Sale cuối tháng.
                </p>
                <h2 className="Footer_content-heading">MUA HÀNG HIỆU CAO CẤP GIÁ TỐT TẠI SHOPEE</h2>
                <p className="Footer_des">
                  Bên cạnh Shopee Premium, Shopee còn có rất nhiều khuyến mãi khủng cho hàng hiệu
                  giảm đến 50%. Cộng với mã giao hàng miễn phí, Shopee cũng có các mã giảm giá được
                  phân phối mỗi tháng từ rất nhiều gian hàng chính hãng tham gia chương trình khuyến
                  mãi này. Bên cạnh đó, Shopee còn tập hợp rất nhiều thương hiệu đình đám được các
                  nhà bán lẻ uy tín phân phối bán trên Shopee, top sản phẩm hot deal cho bạn săn
                  sale luôn cập nhật mỗi giờ, mỗi ngày, đem đến cho bạn sự lựa chọn đa dạng, từ các
                  hãng mỹ phẩm nổi tiếng hàng đầu như Kiehl's, MAC, Foreo, SK-II, Estee Lauder,...
                  Đến những thương hiệu công nghệ nổi tiếng như camera hành trình Gopro, máy ảnh
                  Fuifilm, webcam Hikvision, máy đọc sách Kindle,... Tại Shopee, bạn có thể dễ dàng
                  tìm thấy các thương hiệu giày thể thao phổ biến hiện nay như: Converse, New
                  Balance, Nike, Vans, Crocs,...
                </p>
                <h2 className="Footer_content-heading">
                  MUA HÀNG CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU LỚN VỚI SHOPEE
                </h2>
                <p className="Footer_des">
                  Mua hàng trên Shopee luôn là một trải nghiệm ấn tượng. Dù bạn đang có nhu cầu mua
                  bất kỳ mặt hàng thời trang nam, thời trang nữ, đồng hồ, điện thoại, nước rửa tay
                  khô hay khẩu trang N95 thì Shopee cũng sẽ đảm bảo cung cấp cho bạn những sản phẩm
                  ưng ý. Bên cạnh đó, Shopee cũng có sự tham gia của các thương hiệu hàng đầu thế
                  giới ở đa dạng nhiều lĩnh vực khác nhau. Trong đó có thể kể đến Samsung, OPPO,
                  Xiaomi, Innisfree, Unilever, P&G, Biti’s,...Các thương hiệu này hiện cũng đã có
                  cửa hàng chính thức trên Shopee Mall với hàng trăm mặt hàng chính hãng, được cập
                  nhập liên tục. Là một kênh bán hàng uy tín, Shopee luôn cam kết mang lại cho khách
                  hàng những trải nghiệm mua sắm online giá rẻ, an toàn và tin cậy. Mọi thông tin về
                  người bán và người mua đều được bảo mật tuyệt đối. Các hoạt động giao dịch thanh
                  toán tại Shopee luôn được đảm bảo diễn ra nhanh chóng, an toàn. Một vấn đề nữa
                  khiến cho các khách hàng luôn quan tâm đó chính là mua hàng trên Shopee có đảm bảo
                  không.
                </p>
                <p className="Footer_des">
                  Shopee luôn cam kết mọi sản phẩm trên Shopee, đặc biệt là Shopee Mall đều là những
                  sản phẩm chính hãng, đầy đủ tem nhãn, bảo hành từ nhà bán hàng. Ngoài ra, Shopee
                  bảo vệ người mua và người bán bằng cách giữ số tiền giao dịch đến khi người mua
                  xác nhận đồng ý với đơn hàng và không có yêu cầu khiếu nại, trả hàng hay hoàn tiền
                  nào. Thanh toán sau đó sẽ được chuyển đến cho người bán. Đến với Shopee ngay hôm
                  nay để mua hàng online giá rẻ và trải nghiệm dịch vụ chăm sóc khách hàng tuyệt vời
                  tại đây. Đặc biệt khi mua sắm trên Shopee Mall, bạn sẽ được miễn phí vận chuyển,
                  giao hàng tận nơi và 7 ngày miễn phí trả hàng. Ngoài ra, khách hàng có thể sử dụng
                  Shopee Xu để đổi lấy mã giảm giá có giá trị cao và voucher dịch vụ hấp dẫn. Tiếp
                  đến là Shopee Home Club, Shopee Mum Club, Shopee Beauty Club và Shopee Book Club
                  với các ưu đãi độc quyền từ các thương hiệu lớn có những khách hàng đã đăng ký làm
                  thành viên. Hãy truy cập ngay Shopee.vn hoặc tải ngay ứng dụng Shopee về điện
                  thoại ngay hôm nay!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row padd">
          <div className="col l-2-4 mo-3 c-4">
            <h3 className="Footer_heading">CHĂM SÓC KHÁCH HÀNG</h3>
            <ul className="Footer_list">
              <li className="Footer_list-item">
                <a href="https://help.shopee.vn/portal" className="Footer_item-link">
                  Trung Tâm Trợ Giúp
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://shopee.vn/blog" className="Footer_item-link">
                  Shopee Blog
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://help.shopee.vn/portal" className="Footer_item-link">
                  Shopee Mall
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="# " className="Footer_item-link">
                  Hướng Dẫn Mua Hàng
                </a>
              </li>
              <li className="Footer_list-item">
                <a
                  href="https://help.shopee.vn/portal/article/79180-[Th%c3%a0nh-vi%c3%aan-m%e1%bb%9bi]-L%c3%a0m-sao-%c4%91%e1%bb%83-mua-h%c3%a0ng-%2F-%c4%91%e1%ba%b7t-h%c3%a0ng-tr%c3%aan-%e1%bb%a9ng-d%e1%bb%a5ng-Shopee%3F"
                  className="Footer_item-link"
                >
                  Hướng Dẫn Bán Hàng
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://help.shopee.vn/portal" className="Footer_item-link">
                  Thanh Toán
                </a>
              </li>
              <li className="Footer_list-item">
                <a
                  href="https://help.shopee.vn/portal/article/79144-[Shopee-Xu]-C%c3%a1c-c%c3%a2u-h%e1%bb%8fi-th%c6%b0%e1%bb%9dng-g%e1%ba%b7p"
                  className="Footer_item-link"
                >
                  Shopee Xu
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://help.shopee.vn/portal" className="Footer_item-link">
                  Vận Chuyển
                </a>
              </li>
              <li className="Footer_list-item">
                <a
                  href="https://help.shopee.vn/portal/article/79258-[Tr%e1%ba%a3-h%c3%a0ng%2FHo%c3%a0n-ti%e1%bb%81n]-T%e1%bb%95ng-h%e1%bb%a3p-t%e1%ba%a5t-c%e1%ba%a3-th%c3%b4ng-tin-d%c3%a0nh-cho-c%e1%bb%a7a-Ng%c6%b0%e1%bb%9di-mua"
                  className="Footer_item-link"
                >
                  Trả Hàng & Hoàn Tiền
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://help.shopee.vn/portal" className="Footer_item-link">
                  Chăm Sóc Khách Hàng
                </a>
              </li>
              <li className="Footer_list-item">
                <a
                  href="https://help.shopee.vn/portal/article/79046-[Quy-%c4%91%e1%bb%8bnh]-Ch%c3%adnh-s%c3%a1ch-b%e1%ba%a3o-h%c3%a0nh-cho-s%e1%ba%a3n-ph%e1%ba%a9m-mua-t%e1%ba%a1i-Shopee"
                  className="Footer_item-link"
                >
                  Chính Sách Bảo Hành
                </a>
              </li>
            </ul>
          </div>
          <div className="col l-2-4 mo-3 c-4">
            <h3 className="Footer_heading">VỀ SHOPEE</h3>
            <ul className="Footer_list">
              <li className="Footer_list-item">
                <a href="https://careers.shopee.vn/jobs" className="Footer_item-link">
                  Giới Thiệu Về Shopee Việt Nam
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://careers.shopee.vn/jobs" className="Footer_item-link">
                  Tuyển Dụng
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://shopee.vn/legaldoc/policies/" className="Footer_item-link">
                  Điều Khoản Shopee
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://shopee.vn/docs/3603" className="Footer_item-link">
                  Chính Sách Bảo Mật
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://shopee.vn/mall/" className="Footer_item-link">
                  Chính Hãng
                </a>
              </li>
              <li className="Footer_list-item">
                <a
                  href="https://banhang.shopee.vn/account/signin?next=%2F"
                  className="Footer_item-link"
                >
                  Kênh Người Bán
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://shopee.vn/flash_sale/" className="Footer_item-link">
                  Flash Sales
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://shopee.vn/affiliate/" className="Footer_item-link">
                  Chương Trình Tiếp Thị Liên Kết Shopee
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="# " className="Footer_item-link">
                  Liên Hệ Với Truyền Thông
                </a>
              </li>
            </ul>
          </div>
          <div className="col l-2-4 mo-3 c-4">
            <h3 className="Footer_heading">THANH TOÁN</h3>
          </div>
          <div className="col l-2-4 mo-3 c-4">
            <h3 className="Footer_heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
            <ul className="Footer_list">
              <li className="Footer_list-item">
                <a href="https://www.facebook.com/ShopeeVN" className="Footer_item-link">
                  <i className="Footer_item-link-icon fa-brands fa-facebook-square"></i>
                  Facebook
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://www.instagram.com/Shopee_VN/" className="Footer_item-link">
                  <i className="Footer_item-link-icon fa-brands fa-instagram-square"></i>
                  Instagram
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://www.linkedin.com/company/shopee" className="Footer_item-link">
                  <i className="Footer_item-link-icon fa-brands fa-linkedin"></i>
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="col l-2-4 mo-4 c-8">
            <h3 className="Footer_heading">TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h3>
            <div className="Footer__download">
              <a className="Footer_apps-link" href="https://shopee.vn/web">
                <img className="Footer__download-qr" src={QRcode} alt="Qrcode" />
              </a>
              <div className="Footer__download-apps">
                <a className="Footer_apps-link" href="https://shopee.vn/web">
                  <img className="Footer__download-app-img" src={AppStore} alt="AppStore" />
                </a>
                <a className="Footer_apps-link" href="https://shopee.vn/web">
                  <img className="Footer__download-app-img" src={GooglePlay} alt="GooglePlay" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer__bottom">
        <div className="grid wide">
          <p className="Footer__text">@2022 - Bản quyền thuộc về công ty CHU TOAN</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
