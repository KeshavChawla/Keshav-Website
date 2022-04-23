import React, { memo, useEffect, useRef, useState } from 'react';
import checkProps from '@jam3/react-check-extra-props';
import { gsap } from 'gsap';
import VanillaTilt from 'vanilla-tilt';
import styles from './Greeting.module.scss';

function Greeting(props) {
  const greetingRef = useRef(null);
  const [memojiImgNum, setMemojiImgNum] = useState(18);
  const memojiImgRef = useRef();

  function randomizedMemoji() {
    const memojiInteger = Math.floor(Math.random() * 33); // returns a random integer from 0 to 32
    var finalMemojiNumber = memojiInteger;
    if (memojiInteger === 10 || memojiInteger === 29) {
      finalMemojiNumber = 3;
    } else if (memojiInteger === 18 || memojiInteger === 5) {
      finalMemojiNumber = 26;
    }
    setMemojiImgNum(finalMemojiNumber);
  }

  useEffect(() => {
    randomizedMemoji();
    VanillaTilt.init(memojiImgRef.current);
  }, []);

  // const allBurbs = props.blurbs.map((text) => {
  //   <>
  //     <h3>{text}</h3>
  //     <br />
  //   </>;
  // });

  // console.log(allBurbs);

  return (
    <div ref={greetingRef} className={styles.greeting}>
      <div className={styles.gridParent}>
        <div className={styles.memoji}>
          {/* <img id="site-page-memoji" className="memoji" alt="Keshav Chawla" data-tilt src={require('../../assets/images/memoji-18.png')}></img> */}
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
          <h1 className={styles.hello}>
            Hello{' '}
            <span role="img" aria-label="Handwave">
              &#128075;
            </span>
          </h1>
          <h1 className={styles.hello}>
            {props.greeting}
            <span role="img" aria-label="Handwave">
              &#128075;
            </span>
          </h1>
          <br />

          {/* {props.blurbs.map((text) => (
            <><h3>{text}</h3><br></br></>
          ))} */}

          {props.blurbs.map((blurb) => (
            <>
              <h3>
                {blurb.map((copyBlock) =>
                  copyBlock.type === 'text' ? (
                    <p className={styles.aboutPara}>{copyBlock.content}</p>
                  ) : (
                    <a target="_blank" rel="noreferrer" href={copyBlock.link}>
                      {copyBlock.content}
                    </a>
                  )
                )}
              </h3>
              <br></br>
            </>
          ))}

          <h3>
            I'm <span class="bold"> Keshav</span>, a &#128104;&#8205;&#128187;{' '}
            <span class="bold">
              <a target="_blank" rel="noreferrer" href="https://uwaterloo.ca/computing-financial-management/">
                {' '}
                Computing and Financial Management
              </a>
            </span>{' '}
            student at the University of Waterloo.
          </h3>
          <br />
          <h3>
            I previously worked at{' '}
            <span class="bold">
              <a target="_blank" rel="noreferrer" href="https://axonify.com/">
                Axonify
              </a>
            </span>{' '}
            as a &#128187; <span class="bold">JavaScript Developer</span> (Fall 2021 Co-op)
          </h3>
          <br />
          <h3>
            and{' '}
            <span class="bold">
              <a target="_blank" rel="noreferrer" href="https://jam3.com/">
                Jam3
              </a>
            </span>{' '}
            as a &#128421; <span class="bold">Developer Intern</span> (Winter 2021 Co-op).
          </h3>
          <br />
          <h3>
            Before all of that, I was an Online Learning Assistant with the{' '}
            <a target="_blank" rel="noreferrer" href="https://uwaterloo.ca/math/">
              University of Waterloo Faculty of Mathematics
            </a>
            .
          </h3>
          <br />
          <h3>
            I have also worked with numerous organizations including{' '}
            <a target="_blank" rel="noreferrer" href="https://deca.ca">
              DECA Ontario
            </a>{' '}
            and{' '}
            <a target="_blank" rel="noreferrer" href="https://www.project5k.ca/">
              Project 5K
            </a>
            .
          </h3>
          <br />
          <h3>
            {' '}
            I'm a previous member of &#128202;{' '}
            <span class="bold">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://uwaterloo.ca/school-of-accounting-and-finance/student-investment-fund"
              >
                The Student Investment Fund{' '}
              </a>
            </span>{' '}
            as a Junior Analyst (Spring 2021) and &#128181;{' '}
            <span class="bold">
              <a target="_blank" rel="noreferrer" href="https://uwaterloo.ca/math-endowment-fund/">
                The Mathematics Endowment Fund
              </a>
            </span>{' '}
            - Funding Council (Fall 2019 & Spring 2020).
          </h3>
          <p className={styles.aboutMeBlurb}></p>
        </div>
      </div>
    </div>
  );
}
Greeting.propTypes = checkProps({});

Greeting.defaultProps = {};

export default memo(Greeting);
