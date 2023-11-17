import React, { useEffect, useState } from "react";

import "./lesson-notes.css";
import { Button, SelectInput } from "../custom-inputs/CustomInputs";
import { DeletePopup, LoadingSpin, UpdatePopup } from "../alerts/Alerts";
import useOverlay from "../../hooks/useOverlay";
import { AxiosAuthGet } from "../../axios/axios";
import LessNotesPopup from "../popups/LessNotesPopup";

const LessonWeeks = ({ teacher, student }) => {
  const url = "lesson-notes/subjects";
  const selectSubject = JSON.parse(localStorage.getItem("selectSub"));
  const selectClass = JSON.parse(localStorage.getItem("selectClass"));
  const [subjects, setSubjects] = useState();

  const [classes, setClasses] = useState();
  const [weeks, setWeeks] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(selectSubject?.name);
  const [plClass, setPlClass] = useState(selectClass?.name);
  const [subId, setSubId]= useState(localStorage.getItem("subClassId"));
  const subjectId = localStorage.getItem("subId");
  const [classId, setClassId ]= useState(localStorage.getItem("classId"));
  const weeksUrl = `lesson-notes/subjects/${subId}/classes/${classId}/weeks/`;
  const stuUrl = `lesson-notes/subjects/${subjectId}/weeks/`;
  const [lessonModal, setLessonModal] = useState(false);
  

  const getSubjects = () => {
    AxiosAuthGet(url)
      .then((res) => {
        // console.log(res);
        setSubjects(
          res.data.map((item) => ({
            id: item.subjectId,
            name: item.subjectName,
          }))
        );
      })
      .catch((err) => {
        // console.log(err.response);
      });
  };
  const getClasses = () => {
    AxiosAuthGet(`lesson-notes/subjects/${subId}/classes/`).then((res) => {
      // console.log(res);
      setClasses(
        res.data.map((item) => ({
          id: item.classId,
          name: item.className,
        }))
      );
    });
  };
  const getWeeks = () => {
    setIsLoading(true);
    AxiosAuthGet(student ? stuUrl : weeksUrl).then((res) => {
      //   console.log(res);
      setWeeks(
        res.data.map((item) => ({
          name: item.week,
        }))
      );
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getSubjects();
    if (!student) {
      getClasses();
    }
    getWeeks();
    // eslint-disable-next-line
  }, [subId, classId]);

  const clickDd = (item) => {
    localStorage.setItem("subId", item.id);
    setSubId(item.id);
    AxiosAuthGet(`lesson-notes/subjects/${item.id}/classes/`).then((res) => {
      // console.log(res);
      setClasses(
        res.data.map((item) => ({
          id: item.classId,
          name: item.className,
        }))
      );
      setPlClass(res.data[0].className);
      setClassId(res.data[0].classId);
    });
    localStorage.setItem(
      "selectSub",
      JSON.stringify({
        id: item.id,
        name: item.name,
      })
    );
  };

  const clickDdClass = (item) => {
    localStorage.setItem("classId", item.id);
    setClassId(item.id);
    localStorage.setItem(
      "selectClass",
      JSON.stringify({
        id: item.id,
        name: item.name,
      })
    );
  };

  const clickView = (item) => {
    AxiosAuthGet(
      `lesson-notes/subjects/${subjectId}/weeks/download/?week=${item.name}`
    )
      .then((res) => {
        // console.log(res);

        const pdfUrl = res.data[0].file;;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        // console.log(err.response);
      });
  };
  const clickDownload = (item) => {
    AxiosAuthGet(
      `lesson-notes/subjects/${subjectId}/weeks/download/?week=${item.name}`
    )
      .then((res) => {
        // console.log(res);

        const pdfUrl = res.data[0].file;;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; 
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        // console.log(err.response);
      });
  };

  const lessonWeeks = weeks;

  const { setDisplayOverlay } = useOverlay();

  const [display, setDisplay] = useState(false);
  const [displayDelete, setDisplayDelete] = useState(false);

  const clickUpdate = (item) => {
    setDisplay(!display);
    setDisplayOverlay(true);
    localStorage.setItem(
      "updateDetails",
      JSON.stringify({
        subject: selectSubject,
        class: selectClass,
        week: item?.name,
      })
    );
  };
  const updateNote = () => {
    setDisplay(false);
    setLessonModal(true);
  };
  const clickRemove = () => {
    setDisplayDelete(!displayDelete);
    setDisplayOverlay(true);
  };

  const cancelClick = () => {
    setDisplay(!display);
    setDisplayOverlay(false);
    localStorage.removeItem("updateDetails");
  };
  const cancelDelete = () => {
    setDisplayDelete(!displayDelete);
    setDisplayOverlay(false);
  };

  return isLoading ? (
    <LoadingSpin />
  ) : (
    <div className="lesson-weeks">
      <LessNotesPopup display={lessonModal} setDisplay={setLessonModal} />
      <UpdatePopup
        display={display}
        title={"Update Lesson Note"}
        text={"Are you sure you want to update this lesson note?"}
        cancelBtn={cancelClick}
        updateBtn={updateNote}
      />
      <DeletePopup
        display={displayDelete}
        title={"Remove Lesson Note"}
        text={"Are you sure you want to remove this lesson note?"}
        cancelBtn={cancelDelete}
      />
      <div className="lesson-weeks_head lesson-class_head">
        <SelectInput
          opsArr={subjects}
          placeholder={placeholder}
          setPlaceholder={setPlaceholder}
          optionClick={clickDd}
        />
        {!student && (
          <SelectInput
            opsArr={classes}
            placeholder={plClass}
            setPlaceholder={setPlClass}
            optionClick={clickDdClass}
          />
        )}
      </div>
      <div className="weeks-cont subjects-cont">
        {lessonWeeks?.map((item, idx) => {
          return (
            <div key={idx} className="each-week">
              <h3>{item.name}</h3>
              {!teacher && (
                <div className="each-week_btn">
                  <Button
                    btnText={"Update"}
                    btnClass={"btn-small"}
                    btnClick={() => clickUpdate(item)}
                  />
                  <Button
                    btnText={"Remove"}
                    btnColor={"red"}
                    btnClass={"btn-small-white"}
                    btnClick={clickRemove}
                  />
                </div>
              )}
              {teacher && (
                <div className="each-week_btn">
                  <Button
                    btnText={"View"}
                    btnClass={"btn-small-white"}
                    btnClick={() => clickView(item)}
                  />
                  <Button
                    btnText={"Download"}
                    btnClass={"btn-small"}
                    btnClick={() => clickDownload(item)}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LessonWeeks;
