import { useSelector } from 'react-redux/es/exports';
import Heart from './heart.js';
import { Footer, Header, Banner, Loading, Container } from '../../component/index';

function Home() {
  const { heart } = useSelector((state) => state.others);
  return (
    <div className="app">
      <Header />
      {heart && <Heart />}
      <Banner></Banner>
      {/* <Loading></Loading> */}
      <Container />
      <Footer />
    </div>
  );
}
export default Home;
