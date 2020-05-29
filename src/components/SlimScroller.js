import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { blue, grey } from '@material-ui/core/colors';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 8,
   // backgroundColor: 
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const SlimScroller = props => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);

export default SlimScroller;