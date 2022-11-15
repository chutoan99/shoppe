import React, { memo } from 'react';
interface Submit {
  handleCloseBoxSelect: any;
}

function Submit({ handleCloseBoxSelect }: Submit) {
  const handelChangeOptions = () => {};
  return (
    <>
      <button
        className="variation-comeBack"
        onClick={() => {
          handleCloseBoxSelect();
        }}
      >
        Trở Lại
      </button>
      <button className="variation-confirm" onClick={handelChangeOptions}>
        Xác Nhận
      </button>
    </>
  );
}
export default memo(Submit);
