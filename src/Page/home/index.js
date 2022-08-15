import Footer from '../../component/footer/index.js';
import Header from '../../component/header/index.js';
import Container from '../../component/container/index';
import { useSelector } from 'react-redux/es/exports';
import Banner from '../../component/banner/index.js';
function Home() {
  const { heart } = useSelector((state) => state);
  return (
    <div className="app">
      <Header />
      {heart ? <div class="heart-animation"></div> : null}
      <Banner></Banner>
      <Container />
      <Footer />
    </div>
  );
}
export default Home;
