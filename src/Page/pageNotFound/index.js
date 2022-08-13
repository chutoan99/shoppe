import './PageNotFound.css';
import Header from '../../component/header';
import PageNotFoundImg from '../../Img/Pagenotfound.jpg';
function PageNotFound() {
  return (
    <div className="notFound">
      <Header></Header>
      <div className="Page_not">
        <img src={PageNotFoundImg} alt="" />
      </div>
    </div>
  );
}
export default PageNotFound;
