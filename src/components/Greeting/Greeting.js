import React, { memo, useEffect, useRef, useState } from 'react';
import checkProps from '@jam3/react-check-extra-props';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import VanillaTilt from 'vanilla-tilt';
import styles from './Greeting.module.scss';

function Greeting(props) {
  const greetingRef = useRef(null);
  const blurbEls = useRef([]);

  const [memojiImgNum, setMemojiImgNum] = useState(3);
  const memojiImgRef = useRef();

  function randomizedMemoji() {
    const memojiInteger = Math.floor(Math.random() * 33);
    var finalMemojiNumber = memojiInteger;
    if (memojiInteger === 10 || memojiInteger === 29) {
      finalMemojiNumber = 3;
    } else if (memojiInteger === 18 || memojiInteger === 5) {
      finalMemojiNumber = 26;
    }
    setMemojiImgNum(finalMemojiNumber);
  }

  useEffect(() => {
    // randomizedMemoji();
    VanillaTilt.init(memojiImgRef.current);
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        defaults: { delay: 4 }
      })
      .from(greetingRef.current, { autoAlpha: 0, duration: 0.3 }, 0)
      .from(memojiImgRef.current, { y: -10, duration: 0.6, stagger: 0.1 }, 0)
      .from(blurbEls.current, { y: -10, duration: 0.6, stagger: 0.1 }, 0)
      .from(blurbEls.current, { autoAlpha: 0, duration: 1.8, stagger: 0.6 }, 0)
      .from(memojiImgRef.current, { autoAlpha: 0, duration: 1.8, stagger: 0.6 }, 0);
  }, [blurbEls, memojiImgRef]);

  return (
    <div ref={greetingRef} className={styles.greeting}>
      <div className={styles.gridParent}>
        <div className={styles.memoji}>
          <img
            id="site-page-memoji"
            className={styles.memojiImg}
            ref={memojiImgRef}
            onClick={randomizedMemoji}
            alt="Keshav Chawla"
            src={require(`../../assets/images/memojis/memoji-${memojiImgNum}.png`)}
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="2.8"
            data-tilt-max="10"
            data-tilt-speed="10"
            data-tilt-perspective="500"
          ></img>
        </div>
        <div className={styles.greetingBlurb}>
          <h1 ref={(element) => blurbEls.current.push(element)} className={styles.hello}>
            {props.greeting}
          </h1>
          <br />
          {props.blurbs.map((blurb, index) => (
            <>
              <h3 ref={(element) => blurbEls.current.push(element)} key={index}>
                {blurb.map((copyBlock, index) =>
                  copyBlock.type === 'text' ? (
                    <p classsName={styles.aboutParas} style={{ display: 'inline' }} key={index}>
                      {copyBlock.content}
                    </p>
                  ) : (
                    <a
                      classsName={styles.aboutParaLinks}
                      target="_blank"
                      rel="noreferrer"
                      href={copyBlock.link}
                      key={index}
                    >
                      {copyBlock.content}
                    </a>
                  )
                )}
              </h3>
              <br></br>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
Greeting.propTypes = checkProps({
  greeting: PropTypes.string,
  blurbs: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          type: PropTypes.string,
          content: PropTypes.string
        }),
        PropTypes.shape({
          type: PropTypes.string,
          content: PropTypes.string,
          link: PropTypes.string
        })
      ])
    )
  )
});

Greeting.defaultProps = {};

export default memo(Greeting);
