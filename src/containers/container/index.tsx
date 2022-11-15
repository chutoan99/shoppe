import './xxx.css';
import { useEffect, useState, memo } from 'react';
import { Category, HomeFilter } from '../../component/index';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../app/store';
import { UpdatePage } from '../../redux/pagination';
import { DiscountPc, DiscountMobile, CarouselPc, CarouselMobile, Pagination, HomeProduct } from '../index';
function Container() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector<any>((state: RootState) => state.products);
  const { start, PER_PAGE, end } = useAppSelector<any>((state: RootState) => state.pagination);
  let TOTAL_PAGES: number = Math.ceil(data?.length / PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(UpdatePage(currentPage));
  }, [currentPage]);

  return (
    <div className="bg-[#f5f5f5] overflow-hidden">
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

export default memo(Container);
