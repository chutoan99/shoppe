import Heart from './heart.js';
import Footer from '../../component/footer/index.js';
import Header from '../../component/header/index.js';
import { useSelector } from 'react-redux/es/exports';
import Banner from '../../component/banner/index.js';
import Loading from '../../component/loading/index.js';
import Container from '../../component/container/index';
function Home() {
  const { heart } = useSelector((state) => state);
  return (
    <div className="app">
      <Header />
      {heart ? <Heart></Heart> : null}
      <Banner></Banner>
      <Loading></Loading>
      <Container />
      <Footer />
    </div>
  );
}
export default Home;
