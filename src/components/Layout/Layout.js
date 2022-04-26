import React, { useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
// import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import styles from './Layout.module.scss';

import Nav, { navThemes } from '../Nav/Nav';
import Footer from '../Footer/Footer';

// const RotateScreen = dynamic(() => import('../RotateScreen/RotateScreen'), { ssr: false });

function Layout({ children }) {
  const router = useRouter();
  const mainRef = useRef();

  const animateInInit = useCallback(() => {
    gsap.set(mainRef.current, { autoAlpha: 0 });
  }, []);

  const animateIn = useCallback(async () => {
    await gsap.to(mainRef.current, {
      duration: 0.3,
      autoAlpha: 1,
      opacity: 1,
      delay: 0.3
    });
  }, []);

  useEffect(() => {
    animateInInit();
  }, [animateInInit]);

  useEffect(() => {
    animateIn();
  }, [animateIn]);

  return (
    <div ref={mainRef} className={styles.Layout}>
      {router.pathname !== '/404' && <Nav theme={navThemes.dark} />}
      {children}
      {router.pathname !== '/404' && <Footer />}
      {/* <RotateScreen /> */}
    </div>
  );
}

Layout.propTypes = checkProps({
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
});

Layout.defaultProps = {};

export default Layout;
