const OverPlay = (props: any) => {
  return (
    <div className="w-[100vw] h-[100vh] fixed z-50 " style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }} onClick={props.handelClose}>
      <div className="flex justify-center">{props.children}</div>
    </div>
  );
};
export default OverPlay;
