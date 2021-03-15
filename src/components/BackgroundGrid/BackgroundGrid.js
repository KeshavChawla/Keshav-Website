import React, { memo, useEffect, useRef } from 'react';
// import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';
import { gsap } from 'gsap';

import styles from './BackgroundGrid.module.scss';

// import routes from '../../data/routes';

function BackgroundGrid() {
  //   const gridLineRef = useRef(null);
  //   var verticalLines = [];
  const itemEls = useRef([]);
  const itemElsHoriz = useRef([]);

  useEffect(() => {
    // if (gridLineRef.current !== null) {
    gsap
      .timeline({ repeat: -1 })
      .from(itemEls.current, { scaleY: 0, transformOrigin: '0% 0%', duration: 2, stagger: 0.2 }, 0)
      .to(itemEls.current, { scaleY: 0, transformOrigin: '0% 100%', duration: 2, stagger: 0.2, delay: 7 }, 2)
      .from(itemElsHoriz.current, { scaleX: 0, transformOrigin: '0% 0%', duration: 2, stagger: 0.2 }, 0)
      .to(itemElsHoriz.current, { scaleX: 0, transformOrigin: '100% 0%', duration: 2, stagger: 0.2, delay: 7 }, 2);
    // }
  }, [itemEls, itemElsHoriz]);

  const numberOfLines = 40;
  return (
    <div className={styles.backgroundGrid}>
      {/* <div ref={gridLineRef} className={styles.gridLine} /> */}
      {[...Array(numberOfLines)].map((x, i) => (
        <div ref={(element) => itemEls.current.push(element)} className={styles.gridLine} key={'verticalLine' + i} />
      ))}
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
  );
}

BackgroundGrid.propTypes = checkProps({});

BackgroundGrid.defaultProps = {};

export default memo(BackgroundGrid);
