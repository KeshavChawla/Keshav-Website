import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';
import { attributes, react as HomeContent } from '../../data/home.md';

import styles from '../index.module.scss';

import Head from '../../components/Head/Head';

import { withRedux } from '../../redux/withRedux';
import { setLandingLoaded } from '../../redux/modules/app';

function Projects() {
  const containerRef = useRef();
  const titleRef = useRef();
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;

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

  useEffect(() => {
    gsap.from(titleRef.current, { autoAlpha: 0, y: 10, stagger: 0.2, duration: 0.5 });
  }, [titleRef]);
  let { title, cats } = attributes;

  return (
    <main className={styles.Projects}>
      <Head title="Projects">
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <section className={styles.projectsSection}>
        <h1 ref={titleRef} className={styles.projectsTitle}>
          Projects{' '}
          <span role="img" aria-label="Clipboard">
            📋
          </span>
        </h1>
        <h2>THE PAGE IS {slug}</h2>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default withRedux(Projects);
