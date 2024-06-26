import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookAir from "./pages/MacBookAir";
import MacBookAir1 from "./pages/MacBookAir1";
import MacBookAir from "./pages/MacBookAir2";
import MacBookAir2 from "./pages/MacBookAir21";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-3":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-4":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookAir />} />
      <Route path="/macbook-air-3" element={<MacBookAir1 />} />
      <Route path="/macbook-air-4" element={<MacBookAir />} />
      <Route path="/macbook-air-2" element={<MacBookAir2 />} />
    </Routes>
  );
}
export default App;
