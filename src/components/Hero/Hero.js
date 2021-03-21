import React, { memo } from 'react';
// import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';
// import { gsap } from 'gsap';

import Media from '../Media/Media';
import Text from '../Text/Text';

import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.gridWrapper}>
        <Media className={styles.media} />
        <div className={styles.textWrapper}>
          <Text className={styles.text} />
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = checkProps({});

Hero.defaultProps = {};

export default memo(Hero);
