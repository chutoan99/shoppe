import { useEffect } from 'react';
import { RootState } from '../../app/store';
import { useQuery } from '@tanstack/react-query';
import { QueryApp } from '../../services/products';
import { fetchProducts } from '../../redux/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Footer, Header, Popup, Container, Heart } from '../../component/index';

function Home() {
  const dispatch = useAppDispatch();
  const query = useQuery({ queryKey: ['products'], queryFn: QueryApp });
  const { error, data, isLoading, isSuccess } = query;
  useEffect(() => {
    dispatch(
      fetchProducts({
        data,
        isLoading,
        isSuccess,
        error,
      })
    );
  }, [isSuccess]);
  const { heart } = useAppSelector((state: RootState) => state.others);
  return (
    <div className="app">
      <Header />
      {heart && <Heart />}
      <Popup></Popup>
      {/* <Loading></Loading> */}
      <Container />

      <Footer />
    </div>
  );
}
export default Home;
