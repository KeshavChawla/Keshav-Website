import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import checkProps from '@jam3/react-check-extra-props';
// import { gsap } from 'gsap';
import styles from './BlogCard.module.scss';

function BlogCard(props) {
  const projectImageRef = useRef();

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 0, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 0, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 30, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <a target="_blank" rel="noreferrer" href={props.slug}>
      <div data-aos="fade-down" data-aos-offset="100" className={styles.blogCard}>
        <div className={styles.blogShowcase}>
          <img
            className={styles.postImage}
            ref={projectImageRef}
            alt={'Thumbnail for blog post'}
            src={props.thumbnail}
          ></img>
        </div>
        <div className={styles.blogBlurb}>
          <h4 className={styles.postTitle}>
            <a target="_blank" rel="noreferrer" href={props.slug}>
              {props.title}
            </a>
          </h4>
          <h6 className={styles.postData}>{props.date}</h6>
          {/* <h5 className={styles.postByline}>Tech Stack: {props.techStack}</h5>
        {props.description.map((descriptionPoint) => ( */}
          <p className={styles.postDescription}>{props.description}</p>
          {/* ))} */}
          {/* <h5>
          <a target="_blank" rel="noreferrer" href={props.slug}>
            {props.slug}
          </a>
        </h5> */}
        </div>
      </div>
    </a>
  );
}
BlogCard.propTypes = checkProps({
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
  slug: PropTypes.string
});

BlogCard.defaultProps = {};

export default memo(BlogCard);
