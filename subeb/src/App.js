import {Routes, Route} from "react-router-dom"

import './App.css';
import Homepage from "./pages/website/Homepage";
import Aboutus from "./pages/website/Aboutus";
import News from "./pages/website/News";
import Programs from "./pages/website/Programs";
import Gallery from "./pages/website/Gallery";
import SiteLayout from "./components/layouts/SiteLayout";
import Contactus from "./pages/website/Contactus";
import NoPage from "./pages/NoPage";
import SmsLP from "./pages/app/sms-app/SmsLP";
import AuthLayout from "./components/layouts/AuthLayout";
import SmsLogin from "./pages/app/sms-app/SmsLogin";
import Teacherportal from "./pages/app/sms-app/Teacherportal";
import TeacherDetails from "./components/teacher-portal/TeacherDetails";
import SchoolDetails from "./components/teacher-portal/SchoolDetails";


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

        <Route path="/smslanding" element={<SmsLP />} />
        <Route element={<AuthLayout />}>
          <Route path="/smslogin" element={<SmsLogin />} />
          <Route path="/teacherportal" element={<Teacherportal />} />
          <Route path="/personaldetails" element={<TeacherDetails />} />
          <Route path="/schooldetails" element={<SchoolDetails />} />
        </Route>


        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
