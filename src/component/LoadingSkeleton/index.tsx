import { memo } from 'react';

import './skeleton.css';
const LoadingSkeleton = ({ className = '' }) => {
  return <div className={`skeleton ${className}`}></div>;
};

export default memo(LoadingSkeleton);
