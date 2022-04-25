import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';
import Link from 'next/link';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

// import dynamic from 'next/dynamic';
import styles from './Nav.module.scss';
import routes from '../../data/routes';

// const KeshavLogoDark = dynamic(() => import('../../assets/images/KeshavLogoDark.png'));
// const KeshavLogoLight = dynamic(() => import('../../assets/images/KeshavLogoLight.png'));

// import KeshavLogoDark from '../../assets/images/KeshavLogoDark.png';
// import KeshavLogoLight from '../../assets/images/KeshavLogoLight.png';

export const navThemes = {
  dark: 'dark',
  light: 'light'
};

// const LINKS = [{ href: 'https://keshavchawla.com', label: 'Keshav', src: KeshavLogoLight }].map((link) => ({
//   ...link,
//   key: `nav-link-${link.href}-${link.label}`
// }));

const LINKS = [];

function Nav({ theme }) {
  const navRef = useRef(null);
  const router = useRouter();

  const [memojiImgNum, setMemojiImgNum] = useState(18);

  function randomizedMemoji() {
    const memojiInteger = Math.floor(Math.random() * 33); // returns a random integer from 0 to 32
    var finalMemojiNumber = memojiInteger;
    if (memojiInteger === 10 || memojiInteger === 29) {
      finalMemojiNumber = 3;
    } else if (memojiInteger === 18 || memojiInteger === 5) {
      finalMemojiNumber = 26;
    }
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
          {Object.values(routes).map(({ path, title }) => (
            <li key={path}>
              <Link href={path}>
                <a aria-label="Home">
                  {(path === '/') & (title !== 'About') ? (
                    <img
                      className={styles.keshavLogo}
                      // src={theme === navThemes.dark ? memojiImgNum : memojiImgNum}
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
          {LINKS.map(({ key, href, label, src }) => (
            <li key={key}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <img src={src} alt={label} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

Nav.propTypes = checkProps({
  theme: PropTypes.objectOf(navThemes)
});

Nav.defaultProps = {};

export default Nav;
