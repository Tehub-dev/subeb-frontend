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
import AdminLayout from "./components/layouts/AdminLayout";
import AdminOverview from "./pages/app/sms-app/admin/AdminOverview";
import LessonNotes from "./pages/app/sms-app/admin/LessonNotes";
import SchoolAdmins from "./pages/app/sms-app/admin/SchoolAdmins";
import SchoolMgt from "./pages/app/sms-app/admin/SchoolMgt";
import AcademicCal from "./pages/app/sms-app/admin/AcademicCal";
import SchoolLayout from "./components/layouts/SchoolLayout";
import SchoolOverview from "./pages/app/sms-app/school-admin/SchoolOverview";
import SchoolLesson from "./pages/app/sms-app/school-admin/SchoolLesson";
import TeachersReg from "./pages/app/sms-app/school-admin/TeachersReg";
import TeachersAtt from "./pages/app/sms-app/school-admin/TeachersAtt";
import AcademicCalSch from "./pages/app/sms-app/school-admin/AcademicCalSch";


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

        <Route element={<AdminLayout />}>
          <Route path="/adminoverview" element={<AdminOverview />} />
          <Route path="/lesson-notes" element={<LessonNotes />} />
          <Route path="/school-admin" element={<SchoolAdmins />} />
          <Route path="/school-mgt" element={<SchoolMgt />} />
          <Route path="/academic-cal" element={<AcademicCal />} />
        </Route>

        <Route element={<SchoolLayout />}>
          <Route path="/school-overview" element={<SchoolOverview />} />
          <Route path="/school-lesson-notes" element={<SchoolLesson />} />
          <Route path="/teachers-reg" element={<TeachersReg />} />
          <Route path="/teachers-att" element={<TeachersAtt />} />
          <Route path="/academic-cal-sch" element={<AcademicCalSch />} />
        </Route>


        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
