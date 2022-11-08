import './PageNotFound.css';
import { Header } from '../../component/index';
import IMG from '../../assets/imgs';

function PageNotFound() {
  return (
    <div className="notFound">
      <Header></Header>
      <div className="Page_not">
        <img src={IMG.PAGE_NOT_FOUND_IMG} alt="PageNotFoundImg" />
      </div>
    </div>
  );
}
export default PageNotFound;
