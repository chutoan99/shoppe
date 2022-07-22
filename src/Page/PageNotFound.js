import PageNotFoundImg from '../Img/Pagenotfound.jpg';
import Header from '../component/Header';
import '../Style/PageNotFound.css';
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
