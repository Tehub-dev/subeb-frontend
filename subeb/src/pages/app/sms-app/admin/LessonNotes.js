import React, { useEffect, useState } from "react";
import { AxiosAuthGet } from "../../../../axios/axios";
import LessonSubjects from "../../../../components/lesson-notes/LessonSubjects";
import Empty from "../../../../components/empty-state/Empty";
import emptyNotes from "../../../../assets/images/emptyNotes.png";
import arrowUp from "../../../../assets/images/arrow-up-tray.png";
import useOverlay from "../../../../hooks/useOverlay";
import LessNotesPopup from "../../../../components/popups/LessNotesPopup";
import {
  LoadingSpin,
  SuccessAlert,
} from "../../../../components/alerts/Alerts";
import useSuccessDisplay from "../../../../hooks/useSuccessDisplay";
import useSuccessMsg from "../../../../hooks/useSuccessMsg";
import { useNavigate } from "react-router-dom";

const LessonNotes = () => {
  const { successDisplay, setSuccessDisplay } = useSuccessDisplay();
  const { successMsg } = useSuccessMsg();
  const url = "lesson-notes/subjects";
  const { setDisplayOverlay } = useOverlay();
  const [lessonModal, setLessonModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lessonNotes, setLessonNotes] = useState();
  const navigate = useNavigate();

  const clickUpload = () => {
    setDisplayOverlay(true);
    setLessonModal(true);
  };
  const clickSubject = (item) => {
    localStorage.setItem("selectSub", JSON.stringify({
      id: item.id,
      name: item.subject
    }));
    localStorage.setItem("subId", item.id);
    navigate("/lesson-notes-class");
  };
  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url)
      .then((res) => {
        // console.log(res);
        setLessonNotes(res.data.map(item => ({
          id: item.subjectId,
          subject: item.subjectName,
        })));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(err.response);
      });
    // eslint-disable-next-line
  }, [successMsg]);

  return isLoading ? (
    <LoadingSpin />
  ) : (
    <div>
      <SuccessAlert
        display={successDisplay}
        setDisplay={setSuccessDisplay}
        message={successMsg}
      />
      {lessonNotes?.length === 0 && (
        <Empty
          emptyTitle={"No Lesson Notes"}
          emptyImg={emptyNotes}
          emptyText={"Start Uploading Lesson Notes"}
          emptyBtn={"Upload Lesson Notes"}
          emptyIcon={arrowUp}
          btnClick={clickUpload}
        />
      )}
      <LessNotesPopup display={lessonModal} setDisplay={setLessonModal} />
      {lessonNotes?.length !== 0 && <LessonSubjects
        lessonSubjects={lessonNotes}
        clickBtn={clickUpload}
        clickSubject={clickSubject}
      />}
    </div>
  );
};

export default LessonNotes;
