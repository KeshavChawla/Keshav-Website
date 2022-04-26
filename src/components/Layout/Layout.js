import React from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
// import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import Nav, { navThemes } from '../Nav/Nav';
import Footer from '../Footer/Footer';

// const RotateScreen = dynamic(() => import('../RotateScreen/RotateScreen'), { ssr: false });

function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/404' && <Nav theme={navThemes.dark} />}
      {children}
      {router.pathname !== '/404' && <Footer />}
      {/* <RotateScreen /> */}
    </>
  );
}

Layout.propTypes = checkProps({
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
});

Layout.defaultProps = {};

export default Layout;
