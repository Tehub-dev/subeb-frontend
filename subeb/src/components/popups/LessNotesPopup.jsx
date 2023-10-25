import React, { useEffect, useState } from "react";
import Popup from "./Popup";

import "./popup.css";
import SearchSelect from "../custom-inputs/SearchSelect";
import DocUpload from "../doc-upload/DocUpload";
import arrowUp from "../../assets/images/arrow-up-tray.png";
// import emptyUpload from "../../assets/images/emptyUpload.png";
// import Empty from '../empty-state/Empty';
import { Button } from "../custom-inputs/CustomInputs";
import RecentUploads from "../recent-uploads/RecentUploads";
import useSelectFile from "../../hooks/UseSelectFile";
import { AxiosFormData } from "../../axios/axios";

const LessNotesPopup = ({ display, setDisplay }) => {
  const activeStyle = {
    background: "#F26722",
    color: "white",
  };
  const url = "lesson-notes/";
  const { selectedFile, setSelectedFile } = useSelectFile();
  const classes = JSON.parse(localStorage.getItem("classes"));
  const subjects = JSON.parse(localStorage.getItem("subj"));
  const weeks = [
    {
      id: "1",
      name: "Week 1",
    },
    {
      id: "2",
      name: "Week 2",
    },
    {
      id: "3",
      name: "Week 3",
    },
    {
      id: "4",
      name: "Week 4",
    },
    {
      id: "5",
      name: "Week 5",
    },
    {
      id: "6",
      name: "Week 6",
    },
    {
      id: "7",
      name: "Week 7",
    },
    {
      id: "8",
      name: "Week 8",
    },
    {
      id: "9",
      name: "Week 9",
    },
    {
      id: "10",
      name: "Week 10",
    },
    {
      id: "11",
      name: "Week 11",
    },
    {
      id: "12",
      name: "Week 12",
    },
    {
      id: "13",
      name: "Week 13",
    },
    {
      id: "14",
      name: "Week 14",
    },
    {
      id: "15",
      name: "Week 15",
    },
  ];
  const [loading, setLoading] = useState(false);

  const [errSub, setErrSub] = useState("");
  const [errClass, setErrClass] = useState("");
  const [errFile, setErrFile] = useState("");
  const [errWeek, setErrWeek] = useState("");

  const [active, setActive] = useState("New Upload");
  const [subArr, setSubArr] = useState(subjects);
  const [subItem, setSubItem] = useState();
  const [subId, setSubId] = useState();
  const [subSearch, setSubSearch] = useState(false);
  const [classArr, setClassArr] = useState(classes);
  const [classItem, setClassItem] = useState();
  const [classId, setClassId] = useState();
  const [classSearch, setClassSearch] = useState(false);
  const [weekArr, setWeekArr] = useState(weeks);
  const [weekItem, setWeekItem] = useState();
  const [weekSearch, setWeekSearch] = useState(false);

  useEffect(() => {
    if (!display) {
      setActive("New Upload");
      setSelectedFile();
    }
    // eslint-disable-next-line 
  }, [display]);

  const popupTabs = ["New Upload", "Recent"];

  const clickTabs = (item) => {
    setActive(item);
  };

  const selectChange = (e) => {
    if (e.target.id === "subject") {
      if (e.target.value) {
        setSubSearch(true);
        setSubItem();
        setErrSub("");
        setSubArr(
          subjects.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }
    } else {
      setSubSearch(false);
    }
    if (e.target.id === "class") {
      if (e.target.value) {
        setClassSearch(true);
        setClassItem();
        setErrClass("");
        setClassArr(
          subjects.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }
    } else {
      setClassSearch(false);
    }
    if (e.target.id === "week") {
      if (e.target.value) {
        setWeekSearch(true);
        setWeekItem();
        setErrWeek("");
        setWeekArr(
          weeks.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }
    } else {
      setWeekSearch(false);
    }
  };

  const classOptClick = (item) => {
    setClassItem(item);
    setClassId(item.id);
  };
  const classDd = () => {
    setClassArr(classes);
    setClassSearch(!classSearch);
  };
  const subOptClick = (item) => {
    setSubItem(item);
    setSubId(item.id);
  };
  const subDd = () => {
    setSubArr(subjects);
    setSubSearch(!subSearch);
  };
  const weekOptClick = (item) => {
    setWeekItem(item);
  };
  const weekDd = () => {
    setWeekArr(weeks);
    setWeekSearch(!weekSearch);
  };

  const dataObj = {
    file: selectedFile,
    subjectId: subId,
    classId: classId,
    week: weekItem?.name,
  };

  const uploadNote = () => {
    setLoading(true);
    console.log(dataObj);
    AxiosFormData(url, dataObj)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        for (let i = 0; i < err?.response?.data?.errors?.length; i++) {
          if (err?.response?.data?.errors[i]?.fieldName === "subjectId") {
            setErrSub(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "classId") {
            setErrClass(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "week") {
            setErrWeek(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "file") {
            setErrFile(err.response.data.errors[i].error);
          }
        }
        setLoading(false);
      });
  };

  return (
    <Popup display={display} setDisplay={setDisplay}>
      <div className="lesson-notes_popup">
        <div className="popup-tabs">
          {popupTabs.map((item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => clickTabs(item)}
                className="each-tabs"
                style={active === item ? activeStyle : undefined}
              >
                {item}
              </div>
            );
          })}
        </div>
        {active === "New Upload" && (
          <div className="new-upload">
            <SearchSelect
              formLabel={"Subject"}
              placeholder={"Select Subject"}
              formId={"subject"}
              optionsArray={subArr}
              searching={subSearch}
              setSearching={setSubSearch}
              dataChange={selectChange}
              optionClick={subOptClick}
              formValue={subItem?.name}
              clickDrop={subDd}
              error={errSub}
            />
            <SearchSelect
              formLabel={"Class"}
              placeholder={"Select Class"}
              formId={"class"}
              optionsArray={classArr}
              searching={classSearch}
              setSearching={setClassSearch}
              dataChange={selectChange}
              optionClick={classOptClick}
              formValue={classItem?.name}
              clickDrop={classDd}
              error={errClass}
            />
            <SearchSelect
              formLabel={"Week"}
              placeholder={"Select Week"}
              formId={"week"}
              optionsArray={weekArr}
              searching={weekSearch}
              setSearching={setWeekSearch}
              dataChange={selectChange}
              optionClick={weekOptClick}
              formValue={weekItem?.name}
              clickDrop={weekDd}
              error={errWeek}
            />
            <div className="doc-upload">
              <DocUpload error={errFile} />
            </div>
            <div className="upload-btn">
              <Button
                btnText={"Upload"}
                btnImg={arrowUp}
                btnClick={uploadNote}
                loading={loading}
              />
            </div>
          </div>
        )}

        {active === "Recent" && (
          <div className="recent">
            {/* <Empty emptyText={"No uploads yet"} emptyImg={emptyUpload} emptyWidth={"80%"} emptyMargin={"0 auto"} /> */}
            <RecentUploads />
          </div>
        )}
      </div>
    </Popup>
  );
};

export default LessNotesPopup;
