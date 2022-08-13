import Footer from '../../component/footer/index.js';
import Header from '../../component/header/index.js';
import Container from '../../component/container/index';
import { useSelector } from 'react-redux/es/exports';
function Home() {
  const { heart } = useSelector((state) => state);
  return (
    <>
      <Header />
      {heart ? <div class="heart-animation"></div> : null}
      <Container />
      <Footer />
    </>
  );
}
export default Home;
