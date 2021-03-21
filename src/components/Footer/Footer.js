import React, { memo, useEffect, useRef } from 'react';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';
import Link from 'next/link';

import Vivus from 'vivus';
import KeshavFirstNameSVG from '../KeshavFirstNameSVG/KeshavFirstNameSvg';

import styles from './Footer.module.scss';

import routes from '../../data/routes';

function Footer() {
  const firstNameRef = useRef(null);

  useEffect(() => {
    new Vivus(firstNameRef.current, { duration: 200 }, null);
  });

  return (
    <footer className={classnames(styles.Footer)}>
      <ul>
        {Object.values(routes).map(({ path, title }) => (
          <Link href={path}>
            <a className={styles.footerLink}>{title}</a>
          </Link>
        ))}
      </ul>
      <div className={styles.keshavNameAnimationWrapper}>
        <KeshavFirstNameSVG className={styles.keshavNameAnimation} ref={firstNameRef} />
      </div>
    </footer>
  );
}

Footer.propTypes = checkProps({});

Footer.defaultProps = {};

export default memo(Footer);
