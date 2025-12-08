import Header from "../PagesComponents/HomepageHeader";
import BodyOne from "../PagesComponents/HomepageBodyOne";
import BodyTwo from "../PagesComponents/HomepageBodyTwo";
import Training from "../PagesComponents/HomepageTraining";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Homepage() {
  return (
    <>
      <PageNav />
      <Header />
      <BodyOne />
      <Training />
      <BodyTwo />
      <Footer />
    </>
  );
}

export default Homepage;
