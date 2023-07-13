import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function DefaultLayout(props) {
  const { children } = props;

  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
