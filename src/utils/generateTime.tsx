export const generateTime = (time: any) => {
  let d = new Date(time);
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let dayofweek = d.getDay();
  const dayname = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const newTime = dayname[dayofweek] + ' ngày ' + day + '/' + month + '/' + year;
  return <span>{newTime}</span>;
};
