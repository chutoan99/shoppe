function Best(props) {
  const { items } = props;
  const newL = items.sort(function (a, b) {
    return -a.sold + b.sold;
  });
  return;
  <>
    {newL.map((ele, index) => (
      <>{index >= 0 && index < 10 ? <div>ele.sold</div> : null}</>
    ))}
  </>;
}
export default Best;
