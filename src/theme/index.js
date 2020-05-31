import { createMuiTheme } from '@material-ui/core';

import deviasTheme from './devias/index';
import palette from './devias/palette';

const white = '#FFFFFF';
const black = '#000000';

const sidebar = {
  //primary: 'rgba(255,255,255, 0.5)',
  //secondary: 'green'
}

// const palette = {
//   black,
//   white,
// }

// const sidebar = {
//   backgroundColor: palette.info.light,
//   icon: {
//     color: palette.success.light,
//   }
// }


const theme = createMuiTheme({
overrides: {
  // MuiBadge: {
  //   colorSecondary:  {
  //     backgroundColor: '#000000',
  //   }
  // },
  // MuiDrawer: {
  //   paper: {
  //     whiteSpace: 'nowrap',
  //     width: 260,
  //    borderColor: '#ff0000',
     
  //     height: '100%',
  //     //backgroundColor: theme.palette.primary.dark,
  //     backgroundColor: 'rgba(50, 60, 93, 1)',
  //    // color: fade(theme.palette.white, 0.6),
  //     fontWeight: 500,
  //     color: 'rgba(255,255,255,0.6)',
  //     transition: 'all 0.5s ease-in-out'
  
  //   },
  // },
  // MuiListItemIcon: {
  //   root: {
  //     color: 'rgba(255,255,255,0.6)',
  //     '&:hover': {
  //       color: 'rgba(255,255,255,0.8)',
  //     }
  //   }
    
  // }
}
});

export default theme;
