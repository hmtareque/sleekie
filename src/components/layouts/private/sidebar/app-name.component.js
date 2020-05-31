import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';



// const animateCSS = (element, animation, prefix = 'animate__') =>
//   // We create a Promise and return it
//   new Promise((resolve, reject) => {
//     const animationName = `${prefix}${animation}`;
//     const node = document.querySelector(element);

//     node.classList.add(`${prefix}animated`, animationName);

//     // When the animation ends, we clean the classes and resolve the Promise
//     function handleAnimationEnd() {
//       node.classList.remove(`${prefix}animated`, animationName);
//       node.removeEventListener('animationend', handleAnimationEnd);

//       resolve('Animation ended');
//     }

//     node.addEventListener('animationend', handleAnimationEnd);
//   });

const useStyles = makeStyles((theme) => ({
    depositContext: {
        flex: 1,
    },

    name: {
        color: theme.palette.info.light,
        padding: '10px 0',
        maxWidth: '200px',
        fontWeight: 500,
        fontSize: '1.25rem',
        fontFamily: ["Heebo", "sans-serif"].join(',')

    },

    hide: {
        display: 'none',
    },
    show: {
        display: 'block'
    }
}));

const AppName = ({ open }) => {
    const classes = useStyles();


  //   const [seconds, setSeconds] = useState(0);

  //    const [animate, setAnimate] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     //setSeconds(seconds => seconds + 1);

  //     setAnimate(!animate);


  //   //   const element = document.querySelector('.name');
      

  //   //   element.addEventListener('animationend', () => {
  //   //     // do something
  //   //     alert('test');
  //   //   });
  


  //   }, 10000);
  //   return () => clearInterval(interval);
  // });


    return (
        <Typography className={clsx(classes.name, !open && classes.hide)} variant="span" noWrap>
            {/* <Animated className="name"  animationIn="shakeX" animationOut="shakeY" animationInDuration={1000} animationOutDuration={1000} isVisible={animate}>
     Hasan Tareque
            </Animated> */}
            App Name
        </Typography>
    );
}

export default AppName;


