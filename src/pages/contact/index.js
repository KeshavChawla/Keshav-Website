import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import VanillaTilt from 'vanilla-tilt';

import Head from '../../components/Head/Head';
import styles from '../index.module.scss';

import { withRedux } from '../../redux/withRedux';

import copy from '../../data/copy';

function Contact() {
  const memojiImgRef = useRef();
  useEffect(() => {
    gsap.from(memojiImgRef.current, { y: -10, autoAlpha: 0, duration: 2 });
    VanillaTilt.init(memojiImgRef.current);
  }, [memojiImgRef]);

  return (
    <main className={styles.Contact}>
      <Head title="Contact" />
      <section className={styles.contactSection}>
        <h1 className={styles.contactTitle}>Contact 📱</h1>
        <img
          id="site-page-memoji"
          className={styles.memojiImgContact}
          ref={memojiImgRef}
          // onClick={randomizedMemoji}
          alt="Keshav Chawla"
          src={require(`../../assets/images/memojis/memoji-1.png`)}
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="2.8"
          data-tilt-max="10"
          data-tilt-speed="10"
          data-tilt-perspective="500"
        ></img>
        <h5 className={styles.contactEmail}>
          {' '}
          <a href={`mailto:${copy.contacts.email}`}>{copy.contacts.email}</a>
        </h5>
        <div className={styles.socialLinks}>
          <br></br>
          {copy.contacts.links.map((contactDetails) => (
            <a href={contactDetails.link} className={styles.contactLink} target="_blank" rel="noreferrer">
              {contactDetails.platform}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default withRedux(Contact);
