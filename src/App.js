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
import TeachersLayout from "./components/layouts/TeachersLayout";
import TeachersOverview from "./pages/app/sms-app/teachers/TeachersOverview";
import TeachersLesson from "./pages/app/sms-app/teachers/TeachersLesson";
import StudentReg from "./pages/app/sms-app/teachers/StudentReg";
import StudentAtt from "./pages/app/sms-app/teachers/StudentAtt";
import AcademicCalTch from "./pages/app/sms-app/teachers/AcademicCalTch";
import AdminProfile from "./pages/app/sms-app/admin/AdminProfile";
import AdminNots from "./pages/app/sms-app/admin/AdminNots";
import SchAdminProf from "./pages/app/sms-app/school-admin/SchAdminProf";
import SchAdminNots from "./pages/app/sms-app/school-admin/SchAdminNots";
import TeachNots from "./pages/app/sms-app/teachers/TeachNots";
import TeachProfile from "./pages/app/sms-app/teachers/TeachProfile";
import LessonClasses from "./components/lesson-notes/LessonClasses";
import LessonWeeks from "./components/lesson-notes/LessonWeeks";
import CensusLand from "./pages/app/census/CensusLand";
import CensusInst from "./components/census/CensusInst";
import SchoolCode from "./pages/app/census/SchoolCode";
import SchoolIdent from "./components/school-identification/SchoolIdent";


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
          <Route path="/lesson-notes-class" element={<LessonClasses />} />
          <Route path="/lesson-notes-weeks" element={<LessonWeeks />} />
          <Route path="/school-admin" element={<SchoolAdmins />} />
          <Route path="/school-mgt" element={<SchoolMgt />} />
          <Route path="/academic-cal" element={<AcademicCal />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/admin-notifications" element={<AdminNots />} />
        </Route>

        <Route element={<SchoolLayout />}>
          <Route path="/school-overview" element={<SchoolOverview />} />
          <Route path="/school-lesson-notes" element={<SchoolLesson />} />
          <Route path="/sch-lesson-class" element={<LessonClasses teacher={true} />} />
          <Route path="/sch-lesson-weeks" element={<LessonWeeks teacher={true} />} />
          <Route path="/teachers-reg" element={<TeachersReg />} />
          <Route path="/teachers-att" element={<TeachersAtt />} />
          <Route path="/academic-cal-sch" element={<AcademicCalSch />} />
          <Route path="/sch-admin-profile" element={<SchAdminProf />} />
          <Route path="/sch-admin-nots" element={<SchAdminNots />} />
        </Route>

        <Route element={<TeachersLayout />}>
          <Route path="/teacher-overview" element={<TeachersOverview />} />
          <Route path="/teacher-lesson-notes" element={<TeachersLesson />} />
          <Route path="/student-reg" element={<StudentReg />} />
          <Route path="/student-att" element={<StudentAtt />} />
          <Route path="/stu-lesson-weeks" element={<LessonWeeks teacher={true} student={true} />} />
          <Route path="/academic-cal-tch" element={<AcademicCalTch />} />
          <Route path="/teach-profile" element={<TeachProfile />} />
          <Route path="/teach-nots" element={<TeachNots />} />
        </Route>

        <Route path="/census-landing" element={<CensusLand />} />
        <Route path="/census-instructions" element={<CensusInst />} />
        <Route path="/school-code" element={<SchoolCode />} />
        <Route path="/school-identification" element={<SchoolIdent />} />



        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
