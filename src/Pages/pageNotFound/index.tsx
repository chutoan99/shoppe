import { Header } from '../../containers/index';
import IMG from '../../assets/imgs';
import React, { memo } from 'react';

function PageNotFound() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <img src={IMG.PAGE_NOT_FOUND_IMG} alt="PageNotFoundImg" className="w-full" />
      </div>
    </div>
  );
}
export default memo(PageNotFound);
