import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { gsap } from 'gsap';

import styles from './index.module.scss';

import Head from '../components/Head/Head';
import BackgroundGrid from '../components/BackgroundGrid/BackgroundGrid';

import { withRedux } from '../redux/withRedux';
import { setLandingLoaded } from '../redux/modules/app';
import Greeting from '../components/Greeting/Greeting';
import copy from '../data/copy';

function Landing() {
  const containerRef = useRef();
  const dispatch = useDispatch();

  const animateInInit = useCallback(() => {
    gsap.set(containerRef.current, { autoAlpha: 0 });
  }, []);

  const animateIn = useCallback(async () => {
    await gsap.to(containerRef.current, { duration: 0.5, autoAlpha: 1, delay: 0.3 });
    dispatch(setLandingLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    animateInInit();
  }, [animateInInit]);

  useEffect(() => {
    animateIn();
  }, [animateIn]);

  return (
    // <main className={styles.Landing}>
    //   <Head />
    //   {/* <BackgroundGrid /> */}
    // </main>
    <main className={styles.Landing}>
      <Head />
      <BackgroundGrid />
      <Greeting {...copy.homePage} />
      <section className={styles.hero} ref={containerRef}></section>
    </main>
  );
}

export default withRedux(Landing);
