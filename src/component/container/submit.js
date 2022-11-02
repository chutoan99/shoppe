export function Submit({ handleCloseBoxSelect }) {
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
export default Submit;
