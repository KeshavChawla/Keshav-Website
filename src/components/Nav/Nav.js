import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';
import Link from 'next/link';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

// import dynamic from 'next/dynamic';

import jam3LogoSrc from '../../assets/images/threeLogo.jpeg';
import githubLogoSrc from '../../assets/images/github-icon-64b.png';
import styles from './Nav.module.scss';
import routes from '../../data/routes';

// const KeshavLogoDark = dynamic(() => import('../../assets/images/KeshavLogoDark.png'));
// const KeshavLogoLight = dynamic(() => import('../../assets/images/KeshavLogoLight.png'));

import KeshavLogoDark from '../../assets/images/KeshavLogoDark.png';
import KeshavLogoLight from '../../assets/images/KeshavLogoLight.png';

export const navThemes = {
  dark: 'dark',
  light: 'light'
};

const LINKS = [
  { href: 'https://keshavchawla.com', label: 'Jam3', src: KeshavLogoLight }
].map((link) => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`
}));

function Nav({ theme }) {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current !== null)
      gsap.timeline().from(navRef.current, { opacity: 0, scaleY: 0, transformOrigin: 'top top', duration: 1 }, 3);
  });
  return (
    <nav ref={navRef} className={classnames(styles.Nav, { [styles.dark]: theme === navThemes.dark })}>
      <div className={styles.wrapper}>
        <ul className={styles.routes}>
          {Object.values(routes).map(({ path, title }) => (
            <li key={path}>
              <Link href={path}>
                <a aria-label="Home">
                  {path === '/' ? (
                    <img
                      className={styles.keshavLogo}
                      src={theme === navThemes.dark ? KeshavLogoLight : KeshavLogoDark}
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
