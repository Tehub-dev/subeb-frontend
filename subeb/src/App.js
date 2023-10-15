import {Routes, Route} from "react-router-dom"

import './App.css';
import Homepage from "./pages/website/Homepage";
import Aboutus from "./pages/website/Aboutus";
import News from "./pages/website/News";
import Programs from "./pages/website/Programs";
import Gallery from "./pages/website/Gallery";
import SiteLayout from "./components/layouts/SiteLayout";
import Contactus from "./pages/website/Contactus";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/news" element={<News />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<Contactus />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
