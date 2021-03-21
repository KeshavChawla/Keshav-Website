import React, { memo } from 'react';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';
// import { gsap } from 'gsap';
import PropTypes from 'prop-types';

import styles from './Text.module.scss';

function Text({ isImage, className }) {
  return (
    <div className={classnames(styles.textWrapper, className)}>
      <h2 className={styles.header}>Hello, I'm Keshav</h2>
      <br />
      <p className={styles.bodyText}>
        I’m Keshav, a Computing and Financial Management student at the University of Waterloo . I previously worked at
        at the University of Waterloo Faculty of Mathematics as an Online Learning Assistant. I have also worked with
        numerous organizations and non-profits, including DECA Ontario, Toronto Youth Network, and Project 5K. I’m a
        previous member of the Mathematics Endowment Fund Council (Fall 2019 Spring 2020).
      </p>
    </div>
  );
}

Text.propTypes = checkProps({
  isImage: PropTypes.bool,
  className: PropTypes.string
});

Text.defaultProps = {
  isImage: true
};

export default memo(Text);
