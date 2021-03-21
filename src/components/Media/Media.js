import React, { memo } from 'react';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';
// import { gsap } from 'gsap';
import PropTypes from 'prop-types';

import styles from './Media.module.scss';
import KeshavHero from '../../assets/images/KeshavHeader.jpeg';

function Media({ isImage, className }) {
  return (
    <div className={classnames(styles.mediaWrapper, className)}>
      {isImage && <img src={KeshavHero} className={styles.mediaImg} alt="Keshav Hero" />}
    </div>
  );
}

Media.propTypes = checkProps({
  isImage: PropTypes.bool,
  className: PropTypes.string
});

Media.defaultProps = {
  isImage: true
};

export default memo(Media);
