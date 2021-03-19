import React, { memo, forwardRef } from 'react';
// import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';

import styles from './KeshavFirstNameSvg.module.scss';

// import routes from '../../data/routes';

const KeshavFirstNameSvg = forwardRef((props, ref) => {
  return (
    <div className={styles.backgroundGrid}>
      <svg ref={ref} width="935px" height="221px" viewBox="0 0 935 221" version="1.1">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
          <path
            d="M163.411004,5 C139.861036,62.7243044 118.9811,104.076893 100.771196,129.057764 C90.9128787,142.581688 79.7634211,161.382411 62.5840895,177.5 C55.2196847,184.409259 44.3668235,198.55855 27.7744859,210.305244 C26.2702396,211.370188 11.685737,218.83302 6.85900172,214.837592 C2.29933307,211.063235 7.40357215,195.923248 8.67246565,193.426918 C12.0484627,186.785225 21.2444493,177.879931 36.2604256,166.711038 C51.3089736,155.510066 64.5301001,147.226903 75.9238051,141.861548 C87.3175101,136.496192 104.75161,129.515884 128.226104,120.920621 C194.980691,101.174283 236.39886,87.3362767 252.480612,79.4066019 C276.323426,67.650062 271.740195,55.3914383 270.558165,49.9329112 C269.583667,45.4327582 258.091814,37.380726 240.307397,40.7910979 C225.786531,43.5756452 208.114818,56.4376598 197.272122,63.3696209 C181.190604,73.6508706 158.175264,90.4112519 128.226104,113.650765 C115.406121,124.4782 106.254485,132.880353 100.771196,138.857222 C96.3209308,143.708079 140.645237,186.226169 170.819831,190.283395 C190.936228,192.988213 219.901215,191.61701 257.714793,186.169786 C272.654492,180.389929 285.649567,175.121215 296.700017,170.363646 C307.750467,165.606077 316.047799,156.486844 321.592014,143.005946 C322.482132,122.823858 313.408482,110.984058 294.371064,107.486545 C281.228211,105.071968 249.664753,120.920621 243.71817,146.277103 C242.350766,152.107768 242.365945,163.786657 250.154108,174.041649 C253.138726,177.971617 261.18965,183.385533 274.306878,190.283395 C291.452474,195.234853 305.926656,197.298859 317.729424,196.475413 C329.532191,195.651967 346.91263,191.365553 369.87074,183.616172 C388.774469,175.266688 401.692404,167.588691 408.624545,160.58218 C413.97009,155.179286 427.600465,139.095378 431.393125,122.345199 C433.334894,113.76943 435.047694,95.5186274 427.149379,85.8524132 C420.465951,77.6730181 404.588807,77.167509 399.981318,78.1276063 C395.815216,78.9957285 386.993931,84.888031 386.036642,91.8732524 C385.259942,97.5407449 391.444998,104.169849 395.251334,107.486545 C400.873424,112.38542 414.463465,121.457037 436.021457,134.701395 C439.941836,137.991235 442.893415,140.759419 444.876193,143.005946 C446.301576,144.620933 452.710404,150.311098 454.021599,157.697518 C455.446308,165.723408 451.610678,175.573039 448.744093,179.672167 C445.777675,183.914052 437.194703,194.047972 427.149379,198.293444 C418.553627,201.92628 408.291631,200.091956 406.200379,199.447186 C404.25099,198.846154 398.355345,194.345374 399.981318,188.119807 C402.138101,179.861863 412.709538,169.018796 416.148145,164.614025 C420.168767,159.463706 426.793204,152.614629 436.021457,144.066793 L518.517955,48.3147097 C522.785731,43.1271974 525.602704,40.6193268 526.968872,40.7910979 C529.018124,41.0487545 529.761463,59.2498255 528.661183,65.1325072 C527.927662,69.054295 526.201112,74.8653442 523.481532,82.5656548 L510.373489,112.425462 L497.584315,134.701395 L473.393063,168.761208 L465.176738,183.616172 C463.008022,188.952096 462.504934,192.222345 463.667475,193.426918 C464.830015,194.631491 468.489238,194.631491 474.645143,193.426918 L526.968872,168.761208 L575.037698,147.195853 C584.457787,144.262555 589.950495,143.219535 591.515824,144.066793 C593.081153,144.91405 591.152239,148.288642 585.729084,154.190569 L571.221289,167.931619 C569.40957,172.542401 568.964479,175.39442 569.886017,176.487677 C570.807556,177.580934 575.175921,177.875546 582.991114,177.371514 C603.252353,172.180471 618.280745,167.927975 628.076291,164.614025 C637.871837,161.300074 650.198094,156.298167 665.05506,149.608302 C678.691585,143.399088 684.446142,141.551918 682.31873,144.066793 C680.191319,146.581667 667.303278,156.20412 643.654609,172.934153 L636.591355,179.672167 C635.089821,184.003913 635.352932,186.819793 637.380686,188.119807 C639.40844,189.41982 643.825825,190.486696 650.63284,191.320433 C664.215909,190.26688 674.404101,189.200005 681.197416,188.119807 C687.990731,187.039608 696.416539,185.14669 706.47484,182.441052 C741.518619,175.32383 767.663924,169.381487 784.910754,164.614025 C797.613097,161.102774 829.922238,154.526549 875.238035,136.774102 C886.046385,132.539935 901.309626,125.182328 921.027756,114.701283 C927.585017,108.532066 930.323429,104.806496 929.242991,103.524574 C928.162554,102.242651 918.471353,101.497705 900.169389,101.289735"
            id="Path-2"
            stroke="#3B82E8"
            stroke-width="10"
            class="RiAkLsGo_0"
          ></path>
        </g>
        {/* <style dataMadeWith="vivus-instant">
          .RiAkLsGo_0
          {
            'stroke-dash-array:2778 2780;stroke-dashoffset:2779;animation:RiAkLsGo_draw 2780ms ease-out 0ms forwards;}@keyframes RiAkLsGo_draw{100%{stroke-dashoffset:0;}}@keyframes RiAkLsGo_fade{0%{stroke-opacity:1;}94.28571428571429%{stroke-opacity:1;}100%{stroke-opacity:0;'
          }
        </style> */}
      </svg>
    </div>
  );
});

KeshavFirstNameSvg.propTypes = checkProps({});

KeshavFirstNameSvg.defaultProps = {};

export default memo(KeshavFirstNameSvg);
