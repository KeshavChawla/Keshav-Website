import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { gsap } from 'gsap';
// import { getDynamicPageContentBySlug, getAllDynamicPages, getSlugsFromDirectory } from '../../lib/markdown';
import { getAllDynamicPages } from '../../lib/markdown';

import styles from '../index.module.scss';

import Head from '../../components/Head/Head';
import BlogCard from '../../components/BlogCard/BlogCard';

import { withRedux } from '../../redux/withRedux';
import { setLandingLoaded } from '../../redux/modules/app';
// import copy from '../../data/copy';

// async function getPaths() {
//   return getAllDynamicPages(['slug']);
// }

function Blog({ posts }) {
  const containerRef = useRef();
  const titleRef = useRef();
  const cardRef = useRef([]);
  const dispatch = useDispatch();
  const animateInInit = useCallback(() => {
    gsap.set(containerRef.current, { autoAlpha: 0 });
  }, []);

  const animateIn = useCallback(async () => {
    await gsap.to(containerRef.current, { duration: 0.5, autoAlpha: 1 });
    dispatch(setLandingLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    animateInInit();
  }, [animateInInit]);

  useEffect(() => {
    animateIn();
  }, [animateIn]);

  useEffect(() => {
    gsap
      .timeline()
      .from(titleRef.current, { autoAlpha: 0, y: 0, duration: 0 }, 0)
      .from(titleRef.current, { autoAlpha: 0, y: 10, duration: 0.5 }, 0.1)
      // .from(cardRef.current, { autoAlpha: 0, y: -10, stagger: 0.4, duration: 0.5 }, 0.6);
      .from(cardRef.current, { y: 10, autoAlpha: 0, duration: 0.5, stagger: 0.2 }, 0.3);
  }, [titleRef, cardRef]);

  // const posts = getPaths();
  // console.log(posts);

  return (
    <main className={styles.Blog}>
      <Head title="Blog" />
      <section className={styles.blogSection}>
        <h1 ref={titleRef} className={styles.projectsTitle}>
          Blog{' '}
          <span role="img" aria-label="Clipboard">
            ✏️
          </span>
        </h1>
        <div className={styles.blogPostWrapper}>
          {posts.map((blogPost, i) => (
            <div ref={(element) => cardRef.current.push(element)}>
              <BlogCard {...blogPost} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default withRedux(Blog);

export async function getStaticProps() {
  const posts = getAllDynamicPages(['slug', 'title', 'description', 'date', 'isoDate', 'thumbnail']);

  // from https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  function compare(a, b) {
    if (Date.parse(a.isoDate) > Date.parse(b.isoDate)) return -1;
    else if (Date.parse(a.isoDate) < Date.parse(b.isoDate)) return 1;
    return 0;
  }
  posts.sort(compare);
  // Get all our posts
  return {
    props: {
      posts: posts
    }
  };
}

// export async function getInitialProps() {
// const { slug } = params;

// // Pass in the fields that we want to get
// const page = getDynamicPageContentBySlug(slug, ['title', 'description', 'date', 'slug', 'content']);

// return {
//   props: {
//     page: {
//       ...page
//     }
//   }
// };
// const dynamicPath = getAllDynamicPages(['slug']);
// return {
// props: {
// paths: dynamicPath
// }
// }
// }

// export async function getStaticPaths() {
//   const posts = getAllDynamicPages(['slug']);
//   const paths = posts.map(({ slug }) => ({
//     params: {
//       slug
//     }
//   }));
//   return {
//     paths,
//     fallback: false
//   };
// }
