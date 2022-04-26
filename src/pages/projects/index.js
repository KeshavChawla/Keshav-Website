import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { gsap } from 'gsap';

import styles from '../index.module.scss';

import Head from '../../components/Head/Head';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import { withRedux } from '../../redux/withRedux';
import { setLandingLoaded } from '../../redux/modules/app';
import copy from '../../data/copy';

function Projects() {
  const containerRef = useRef();
  const titleRef = useRef();
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

  useEffect(() => {
    gsap.from(titleRef.current, { autoAlpha: 0, y: 10, stagger: 0.2, duration: 0.5 });
  }, [titleRef]);

  return (
    <main className={styles.Projects}>
      <Head title="Projects" />
      <section className={styles.projectsSection}>
        <h1 ref={titleRef} className={styles.projectsTitle}>
          Projects{' '}
          <span role="img" aria-label="Clipboard">
            📋
          </span>
        </h1>
        {copy.projects.projectList.map((project) => (
          <ProjectCard {...project} />
        ))}
      </section>
    </main>
  );
}

export default withRedux(Projects);
