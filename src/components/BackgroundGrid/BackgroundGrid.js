import React, { memo, useEffect, useRef } from 'react';
// import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';
import { gsap } from 'gsap';

import Vivus from 'vivus';
import KeshavFirstNameSVG from '../KeshavFirstNameSVG/KeshavFirstNameSvg';
// import KeshavFirstNameSVG from '../../assets/svgs/KeshavName_animated.svg';

import styles from './BackgroundGrid.module.scss';

// import routes from '../../data/routes';

function BackgroundGrid() {
  //   const gridLineRef = useRef(null);
  const gridRef = useRef(null);
  const firstNameRef = useRef(null);

  //   var verticalLines = [];
  const itemEls = useRef([]);
  const itemElsHoriz = useRef([]);

  useEffect(() => {
    // new Vivus(firstNameRef.current, { duration: 200, file: KeshavFirstNameSVG });

    // const animationDuration = 5;
    // const staggerAmount = 2;
    // const secondStartTime = 5;

    gsap
      .timeline({ defaults: { stagger: 0.1, duration: 2, delay: 0 } })
      .from(gridRef.current, { autoAlpha: 0, duration: 0.3 }, 0)
      .from(itemEls.current, { scaleY: 0, transformOrigin: '0% 0%', duration: 2, stagger: 0.05 }, 0.3)
      .from(itemElsHoriz.current, { scaleX: 0, transformOrigin: '0% 0%' }, 0.3);

    // gsap
    //   .timeline({
    //     delay: 2,
    //     repeat: -1,
    //     defaults: { stagger: staggerAmount, duration: animationDuration, delay: 0 }
    //   })
    //   .to(itemEls.current, { scaleY: 0, transformOrigin: '0% 100%' }, 0)
    //   .to(itemElsHoriz.current, { scaleX: 0, transformOrigin: '100% 0%' }, 0)
    //   .from(itemEls.current, { scaleY: 0, transformOrigin: '0% 0%' }, secondStartTime)
    //   .from(itemElsHoriz.current, { scaleX: 0, transformOrigin: '0% 0%' }, secondStartTime);
    new Vivus(firstNameRef.current, { duration: 200 }, null);
  }, [itemEls, itemElsHoriz]);

  const numberOfLines = 40;
  return (
    <>
      <div ref={gridRef} className={styles.backgroundGrid}>
        <KeshavFirstNameSVG ref={firstNameRef} />
        {/* <div ref={gridLineRef} className={styles.gridLine} /> */}
        <div className={styles.vertDivContainer}>
          {[...Array(numberOfLines)].map((x, i) => (
            <div
              ref={(element) => itemEls.current.push(element)}
              className={styles.gridLine}
              key={'verticalLine' + i}
            />
          ))}
        </div>

        <div className={styles.horizDivContainer}>
          {[...Array(numberOfLines)].map((x, i) => (
            <div
              ref={(element) => itemElsHoriz.current.push(element)}
              className={styles.gridLineHoriz}
              key={'horiztonalLine' + i}
            />
          ))}
        </div>
      </div>
    </>
  );
}

BackgroundGrid.propTypes = checkProps({});

BackgroundGrid.defaultProps = {};

export default memo(BackgroundGrid);
