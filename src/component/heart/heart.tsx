import SVG from '../../assets/svgs';
import React, { memo } from 'react';

import './heart.css';
const Heart = () => {
  return <div className="heart-animation2">{SVG.HEART}</div>;
};
export default memo(Heart);
