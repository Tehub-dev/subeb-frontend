import React, { useEffect, useState } from "react";
import { AxiosAuthGet } from "../../../../axios/axios";
import LessonSubjects from "../../../../components/lesson-notes/LessonSubjects";
import Empty from "../../../../components/empty-state/Empty";
import emptyNotes from "../../../../assets/images/emptyNotes.png";
import {
  LoadingSpin,
} from "../../../../components/alerts/Alerts";
import { useNavigate } from "react-router-dom";

const TeachersLesson = () => {
  // const { successDisplay, setSuccessDisplay } = useSuccessDisplay();
  // const { successMsg } = useSuccessMsg();
  const url = "lesson-notes/subjects";
  const [isLoading, setIsLoading] = useState(false);
  const [lessonNotes, setLessonNotes] = useState();
  const navigate = useNavigate();

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
        console.log(res);
        setLessonNotes(res.data.map(item => ({
          id: item.subjectId,
          subject: item.subjectName,
        })));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.response);
      });
    // eslint-disable-next-line
  }, []);

  return isLoading ? (
    <LoadingSpin />
  ) : (
    <div>
      {/* <SuccessAlert
        display={successDisplay}
        setDisplay={setSuccessDisplay}
        message={successMsg}
      /> */}
      {lessonNotes?.length === 0 && (
        <Empty
          emptyTitle={"No Lesson Notes"}
          emptyImg={emptyNotes}
        />
      )}
      {lessonNotes?.length !== 0 && <LessonSubjects
        lessonSubjects={lessonNotes}
        clickSubject={clickSubject}
        teachers={true}
      />}
    </div>
  );
}

export default TeachersLesson