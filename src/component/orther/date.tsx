import { useState, memo } from 'react';
import { DatePicker } from 'react-rainbow-components';
import './date.css';
function Date() {
  const [date, setDate] = useState<any>(null);

  function onChange(date: any) {
    setDate(date);
  }
  return (
    <div className="flex w-full justify-center items-center gap-[20px] py-[30px]">
      <span className="w-[130px] text-[1.2rem] text-end">Ngày Sinh:</span>
      <DatePicker id="datePicker-1" value={date} onChange={onChange} formatStyle="large" />
    </div>
  );
}
export default memo(Date);
