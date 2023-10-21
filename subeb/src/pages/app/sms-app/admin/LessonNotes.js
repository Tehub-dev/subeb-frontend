import React, { 
  // useState
 } from 'react';
import LessonWeeks from '../../../../components/lesson-notes/LessonWeeks';
// import LessonClasses from '../../../../components/lesson-notes/LessonClasses';
// import LessonSubjects from '../../../../components/lesson-notes/LessonSubjects';
// import Empty from '../../../../components/empty-state/Empty';
// import emptyNotes from "../../../../assets/images/emptyNotes.png";
// import arrowUp from "../../../../assets/images/arrow-up-tray.png";
// import useOverlay from '../../../../hooks/useOverlay';
// import LessNotesPopup from '../../../../components/popups/LessNotesPopup';

const LessonNotes = () => {

  // const { setDisplayOverlay} = useOverlay();
  // const [lessonModal, setLessonModal] = useState(false);

  // const clickUpload = () => {
  //   setDisplayOverlay(true);
  //   setLessonModal(true);
  // }

  return (
    <div>
      {/* <Empty emptyTitle={"No Lesson Notes"} emptyImg={emptyNotes} emptyText={"Start Uploading Lesson Notes"} emptyBtn={"Upload Lesson Notes"} emptyIcon={arrowUp} btnClick={clickUpload} />
      <LessNotesPopup display={lessonModal} setDisplay={setLessonModal} />
      <LessonSubjects /> */}
      {/* <LessonClasses /> */}
      <LessonWeeks />
    </div>
  )
}

export default LessonNotes