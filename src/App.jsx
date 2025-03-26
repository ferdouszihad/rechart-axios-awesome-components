import { Suspense } from "react";
import Banner from "./components/banner/Banner";
import CustomNavbar from "./components/header/CustomNavbar";
import Header from "./components/header/Header";
import Pricing from "./components/pricing/Pricing";
import Loading from "./components/other/Loading";
import SampleChart from "./components/charts/SampleChart";
import Phones from "./components/phoneUI/Phones";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-poppins">
      <header>
        {/* <Header></Header> */}
        <CustomNavbar></CustomNavbar>
      </header>

      <main>
        {/* <Banner></Banner>
        <Suspense fallback={<Loading></Loading>}>
          <Pricing></Pricing>
        </Suspense>
        <SampleChart></SampleChart> */}
        <Suspense fallback={<Loading></Loading>}>
          <Phones></Phones>
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
