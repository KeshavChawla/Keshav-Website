/* eslint-disable jam3/no-sanitizer-with-danger */
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import hljs from 'highlight.js';
import { marked } from 'marked';
import { getDynamicPageContentBySlug, getAllDynamicPages } from '../../lib/markdown';

import styles from '../index.module.scss';

import { withRedux } from '../../redux/withRedux';
function Projects(props) {
  const titleRef = useRef();
  const dateRef = useRef();
  const blogContentRef = useRef();
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'javascript';
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-',
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartypants: true,
    xhtml: false
  });

  useEffect(() => {
    gsap.from([titleRef.current, dateRef.current, blogContentRef.current], {
      autoAlpha: 0,
      y: -10,
      stagger: 0.8,
      duration: 0.9
    });
    window.scrollTo({
      top: 0,
      left: 0
    });
  }, [titleRef, blogContentRef]);

  const { title, content, date } = props.page;

  return (
    <main className={styles.Blog}>
      <section className={styles.blogSection}>
        <div className={styles.blogWrapper}>
          <h1 ref={titleRef} className={styles.projectsTitle}>
            {title}
          </h1>
          <h5 ref={dateRef} className={styles.blogDate}>
            Originally Published: {date}
          </h5>
          <div
            className={styles.blogContent}
            ref={blogContentRef}
            dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
          />
        </div>
      </section>
    </main>
  );
}

export default withRedux(Projects);

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Pass in the fields that we want to get
  const page = getDynamicPageContentBySlug(slug, ['title', 'description', 'date', 'slug', 'content']);

  return {
    props: {
      page: {
        ...page
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllDynamicPages(['slug']);
  const paths = posts.map(({ slug }) => ({
    params: {
      slug
    }
  }));
  return {
    paths,
    fallback: false
  };
}
