import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import Nav from '../Nav/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};

export default Layout;
