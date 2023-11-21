import React, { useEffect, useState } from "react";
import { AxiosAuthGet } from "../../../../axios/axios";
import LessonSubjects from "../../../../components/lesson-notes/LessonSubjects";
import Empty from "../../../../components/empty-state/Empty";
import emptyNotes from "../../../../assets/images/emptyNotes.png";
import {
  LoadingSpin,
} from "../../../../components/alerts/Alerts";
import { useNavigate } from "react-router-dom";
import { az } from "../../../../components/charts/Data";

const SchoolLesson = () => {
  // const { successDisplay, setSuccessDisplay } = useSuccessDisplay();
  // const { successMsg } = useSuccessMsg();
  const url = "lesson-notes/subjects";
  const [isLoading, setIsLoading] = useState(false);
  const [lessonNotes, setLessonNotes] = useState();
  const navigate = useNavigate();
  const [plAz, setPlAz] = useState("A-Z");
  const azArray = az;

  const clickSubject = (item) => {
    localStorage.setItem("selectSub", JSON.stringify({
      id: item.id,
      name: item.subject
    }));
    localStorage.setItem("subId", item.id);
    navigate("/sch-lesson-class");
  };

  const clickAz = (item) => {
    if(item.id === "a-z"){
      lessonNotes.sort((a, b) => a.subject.localeCompare(b.subject));
    }
    if(item.id === "z-a"){
      lessonNotes.sort((a, b) => b.subject.localeCompare(a.subject));
    }
  }

  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url)
      .then((res) => {
        // console.log(res);
        setLessonNotes(res.data.map(item => ({
          id: item.subjectId,
          subject: item.subjectName,
        })).sort((a, b) => a.subject.localeCompare(b.subject)));
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
        setPlaceholder={setPlAz}
        azPl={plAz}
        opsArr={azArray}
        optionClick={clickAz}
        teachers={true}
      />}
    </div>
  );
}

export default SchoolLesson