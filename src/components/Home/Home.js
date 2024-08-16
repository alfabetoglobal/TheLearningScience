import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

import Sec1 from "./Section_1/Sec1.js";
import Sec2 from "./Section_2/Sec2.js";
import Sec3 from "./Section_3/Sec3.js";
import Sec4 from "./Section_4/Sec4.js";
import Sec5 from "./Section_5/Sec5.js";
import Sec6 from "./Section_6/Sec6.js";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
        <Sec6 />
      </div>
      <Footer />
    </>
  );
};

export default Home;
