import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import checkProps from '@jam3/react-check-extra-props';
// import { gsap } from 'gsap';
import styles from './ProjectCard.module.scss';

function ProjectCard(props) {
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
    <div data-aos="fade-down" data-aos-offset="100" className={styles.projectCard}>
      <div className={props.forceLargeImage ? styles.projectShowcaseForceLarge : styles.projectShowcase}>
        <img
          className={styles.projectImage}
          ref={projectImageRef}
          alt={props.imageAlt}
          src={require(`../../assets/images/projects/${props.image}`)}
        ></img>
      </div>
      <div className={styles.projectBlurb}>
        <h4 className={styles.projectTitle}>
          <a target="_blank" rel="noreferrer" href={props.linkCta}>
            {props.title}
          </a>
        </h4>
        <h5 className={styles.projectByline}>Tech Stack: {props.techStack}</h5>
        {props.description.map((descriptionPoint) => (
          <p className={styles.projectDescription}>{descriptionPoint}</p>
        ))}
        <h5>
          <a target="_blank" rel="noreferrer" href={props.linkCta}>
            {props.linkCta}
          </a>
        </h5>
        {props.pressLinks?.map((pressLink) => (
          <h5 className={styles.projectCardPressLink}>
            {pressLink.title}:{' '}
            <a target="_blank" rel="noreferrer" href={pressLink.link}>
              {pressLink.link}
            </a>
          </h5>
        ))}
      </div>
    </div>
  );
}
ProjectCard.propTypes = checkProps({
  title: PropTypes.string,
  imageAlt: PropTypes.string,
  image: PropTypes.string,
  techStack: PropTypes.string,
  forceLargeImage: PropTypes.bool,
  description: PropTypes.arrayOf(PropTypes.string),
  linkCta: PropTypes.string,
  pressLinks: PropTypes.arrayOf(PropTypes.string)
});

ProjectCard.defaultProps = {};

export default memo(ProjectCard);
