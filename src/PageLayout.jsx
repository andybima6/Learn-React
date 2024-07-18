import Navbar from './Navbar';
import Footer from './Footer';

function PageLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
export default PageLayout;