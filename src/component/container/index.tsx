import './xxx.css';
import { useEffect, useState } from 'react';
import { Category, CarouselPc, Pagination, DiscountPc, DiscountMobile, CarouselMobile, HomeFilter, HomeProduct } from '../index';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../app/store';
import { UpdatePage } from '../../redux/pagination';
function Container() {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector<any>((state: RootState) => state.products);
  const { start, PER_PAGE, end } = useAppSelector<any>((state: RootState) => state.pagination);
  let TOTAL_PAGES: number = data?.length / PER_PAGE;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(UpdatePage(currentPage));
  }, [currentPage]);

  return (
    <div className="App__Container">
      <div className="grid wide">
        <CarouselMobile />
        <div className="row sm-gutter">
          <CarouselPc />
          <div className="col l-12 mo-12 c-12 Hide-on-mobile">
            <DiscountPc />
          </div>
          <div className="col l-12 mo-12 c-12 show-on-mobile display-none">
            <DiscountMobile />
          </div>
          <div className="col l-12 mo-12 c-12">
            <Category />
          </div>
          <div className="col l-12 mo-12 c-12">
            <HomeFilter></HomeFilter>
            <HomeProduct start={start} end={end} items={data} col={'col l-2 mo-4 c-6'} />
            <Pagination totalPages={TOTAL_PAGES} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
