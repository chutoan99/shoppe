import Footer from '../component/Footer.js';
import Header from '../component/Header.js';
import Container from '../component/Container.js';
import NavHomeMobile from '../component/navHomeMobile.js';
import { useSelector } from 'react-redux/es/exports';
function Home() {
  const { heart } = useSelector((state) => state);
  return (
    <>
      <Header />
      {heart ? <div class="heart-animation"></div> : null}
      <Container />
      <Footer />
      {/* <NavHomeMobile /> */}
    </>
  );
}
export default Home;
