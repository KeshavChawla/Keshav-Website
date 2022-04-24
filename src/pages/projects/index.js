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
    <main className={styles.Projects}>
      <Head title="Projects" />
      <section className={styles.projectsSection}>
        <h1 className={styles.projectsTitle}>Projects 📋</h1>
        {copy.projects.projectList.map((project) => (
          <ProjectCard {...project} />
        ))}

        {/* copy.projects.map */}
        {/* <ProjectCard {...copy.projects} />
        <ProjectCard {...copy.projects} />
        <ProjectCard {...copy.projects} />
        <ProjectCard {...copy.projects} />
        <ProjectCard {...copy.projects} />
        <ProjectCard {...copy.projects} />
        <ProjectCard {...copy.projects} />
        <ProjectCard {...copy.projects} /> */}
      </section>
    </main>
  );
}

export default withRedux(Projects);
