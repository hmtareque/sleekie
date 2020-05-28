import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { fade } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: fade(blue[500], 0.8),
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