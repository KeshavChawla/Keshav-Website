import React, { useEffect, useRef } from 'react';

import VanillaTilt from 'vanilla-tilt';
import { gsap } from 'gsap';

import styles from './index.module.scss';

export default function Custom404() {
  const custom404MeomjiRef = useRef();
  const text404LineOneRef = useRef();
  const text404LineTwoRef = useRef();
  useEffect(() => {
    VanillaTilt.init(custom404MeomjiRef.current);
  }, [custom404MeomjiRef]);

  useEffect(() => {
    gsap.from([custom404MeomjiRef.current, text404LineOneRef.current, text404LineTwoRef.current], {
      y: -10,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.3
    });
  }, [custom404MeomjiRef, text404LineOneRef, text404LineTwoRef]);

  return (
    <main className={styles.Custom404}>
      <a className={styles.error404Link} href="/">
        <img
          className={styles.custom404Meomji}
          ref={custom404MeomjiRef}
          alt="Keshav Chawla"
          src={require('../assets/images/404-5-md.png')}
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="2.8"
          data-tilt-max="10"
          data-tilt-speed="10"
          data-tilt-perspective="500"
        ></img>

        <h2 className={styles.error404Text} ref={text404LineOneRef}>
          Oops! Looks like you went off the path.
        </h2>
        <h2 className={styles.error404Text} ref={text404LineTwoRef}>
          We all come from away, but let's get you <span className={styles.error404Home}>home</span>.
        </h2>
      </a>
    </main>
  );
}
