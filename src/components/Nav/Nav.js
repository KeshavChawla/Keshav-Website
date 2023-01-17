import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';
import Link from 'next/link';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import styles from './Nav.module.scss';
import routes from '../../data/routes';

export const navThemes = {
  dark: 'dark',
  light: 'light'
};

const LINKS = [];

function Nav({ theme }) {
  const navRef = useRef(null);
  const router = useRouter();

  const [memojiImgNum, setMemojiImgNum] = useState(18);

  function randomizedMemoji() {
    var memojiAcceptableNums = [1, 3, 9, 25, 26, 28, 31];
    const finalMemojiNumber = memojiAcceptableNums[Math.floor(Math.random() * memojiAcceptableNums.length)];

    setMemojiImgNum(finalMemojiNumber);
  }

  useEffect(() => {
    randomizedMemoji();
  }, []);

  useEffect(() => {
    if (navRef.current !== null && router.pathname === '/')
      gsap.timeline().from(navRef.current, { opacity: 0, y: -100, transformOrigin: 'top top', duration: 1 }, 3);
  }, [router.pathname]);

  return (
    <nav ref={navRef} className={classnames(styles.Nav, { [styles.dark]: theme === navThemes.dark })}>
      <div className={styles.wrapper}>
        <ul className={styles.routes}>
          <a tabIndex={0} aria-label="Skip to content" className={styles.skipToContent} href="#start-of-content">
            Skip to content
          </a>
          {Object.values(routes).map(({ path, title }) => (
            <li key={path} {...(title === 'Resume' ? { className: styles.resumeNavLink } : {})}>
              <Link href={path}>
                <a aria-label={title}>
                  {(path === '/') & (title !== 'About') ? (
                    <img
                      className={styles.keshavLogo}
                      src={require(`../../assets/images/memojis/memoji-${memojiImgNum}.png`)}
                      alt="Keshav Chawla Home"
                    />
                  ) : (
                    <>{title}</>
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <ul className={styles.links}>
          {LINKS.map(({ key, href, label, src, index }) => (
            <li key={key + index}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <img src={src} alt={label} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <section aria-hidden="true" id="start-of-content"></section>
    </nav>
  );
}

Nav.propTypes = checkProps({
  theme: PropTypes.objectOf(navThemes)
});

Nav.defaultProps = {};

export default Nav;
