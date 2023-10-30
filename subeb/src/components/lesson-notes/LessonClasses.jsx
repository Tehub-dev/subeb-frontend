import React, { useEffect, useState } from "react";

import "./lesson-notes.css";
import { SelectInput } from "../custom-inputs/CustomInputs";
import { AxiosAuthGet } from "../../axios/axios";
import { LoadingSpin } from "../alerts/Alerts";
import { useNavigate } from "react-router-dom";

const LessonClasses = () => {
  const url = "lesson-notes/subjects";
  const [subjects, setSubjects] = useState();
  const selectSubject = JSON.parse(localStorage.getItem("selectSub"));
  const [placeholder, setPlaceholder] = useState(selectSubject?.name);
  const [notesClass, setNotesClass] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const subId = localStorage.getItem("subId");
  const navigate = useNavigate();

  const getClassNotes = () => {
    setIsLoading(true);
    AxiosAuthGet(`lesson-notes/subjects/${subId}/classes/`).then((res) => {
      // console.log(res);
      setNotesClass(
        res.data.map((item) => ({
          id: item.classId,
          class: item.className,
        }))
      );
      setIsLoading(false);
    });
  };
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

  const clickDd = (item) => {
    localStorage.setItem("subId", item.id);
    localStorage.setItem("selectSub", JSON.stringify({
      id: item.id,
      name: item.name
    }));
  }
  const clickClass = (item) => {
    localStorage.setItem("classId", item.id);
    localStorage.setItem("subClassId", subId);
    localStorage.setItem("selectClass", JSON.stringify({
      id: item.id,
      name: item.class
    }));
    navigate("/lesson-notes-weeks");
  }

  useEffect(() => {
    getClassNotes();
    getSubjects();
    // eslint-disable-next-line
  }, [subId]);

  return (
    isLoading ? <LoadingSpin /> :
    <div className="lesson-class">
      <div className="lesson-class_head">
        <SelectInput
          opsArr={subjects}
          placeholder={placeholder}
          setPlaceholder={setPlaceholder}
          optionClick={clickDd}
        />
      </div>
      <div className="lesson-class_cont subjects-cont">
        {notesClass?.map((item, idx) => {
          return (
            <div key={idx} className="each-class each-subjects" onClick={()=> clickClass(item)}>
              <h3>{item.class}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LessonClasses;
