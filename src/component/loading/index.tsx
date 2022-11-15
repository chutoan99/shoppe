import './loading.css';
import { memo } from 'react';

function Loading() {
  return (
    <div className="loading">
      <span className="loader"></span>;
    </div>
  );
}
export default memo(Loading);
