import React, { useState } from "react";
import Popup from "./Popup";

import "./popup.css";
import { Button, Input } from "../custom-inputs/CustomInputs";
import SearchSelect from "../custom-inputs/SearchSelect";
import { Add } from "iconsax-react";
import { AxiosAuthPost } from "../../axios/axios";
import useSuccessDisplay from "../../hooks/useSuccessDisplay";
import useSuccessMsg from "../../hooks/useSuccessMsg";
import useOverlay from "../../hooks/useOverlay";

const AddAcadCal = ({ display, setDisplay }) => {
    const url = "academic-calendar/";
  const term = [
    {
      id: "First Term",
      name: "First Term",
    },
    {
      id: "Second Term",
      name: "Second Term",
    },
    {
      id: "Third Term",
      name: "Third Term",
    },
  ];
  const [termArr, setTermArr] = useState(term);
  const [errTerm, setErrTerm] = useState("");
  const [errResume, setErrResume] = useState("");
  const [errVacate, setErrVacate] = useState("");
  const [errMidStart, setErrMidStart] = useState("");
  const [errMidEnd, setErrMidEnd] = useState("");
  const [termItem, setTermItem] = useState();
  const [termId, setTermId] = useState("");
  const [data, setData] = useState({
    resumptionDate: "",
    vacationDate: "",
    midTermStart: "",
    midTermEnd: "",
  });
  const [termSearch, setTermSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {setSuccessDisplay} = useSuccessDisplay();
  const {setSuccessMsg} = useSuccessMsg();
  const { setDisplayOverlay} = useOverlay();

  const handleDataChange = (e) => {
    if (e.target.id === "resumptionDate") {
      setErrResume("");
    }
    if (e.target.id === "vacationDate") {
      setErrVacate("");
    }
    if (e.target.id === "midTermStart") {
      setErrMidStart("");
    }
    if (e.target.id === "midTermEnd") {
      setErrMidEnd("");
    }
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(data);
  };

  const selectChange = (e) => {
    if (e.target.id === "term") {
      if (e.target.value) {
        setTermSearch(true);
        setTermItem();
        setErrTerm("");
        setTermArr(
          term.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }
    } else {
      setTermSearch(false);
    }
  };
  const termOptClick = (item) => {
    setTermItem(item);
    setTermId(item.id);
  };
  const termDd = () => {
    setTermArr(term);
    setTermSearch(!termSearch);
  };

  const dataObj = {
    term: termId,
    resumptionDate: data?.resumptionDate,
    vacationDate: data?.vacationDate,
    midTermDates: [data?.midTermStart, data?.midTermEnd]
  }

  const addCal = () => {
    setIsLoading(true);
    AxiosAuthPost(url, dataObj).then((res) => {
        // console.log(res);
        setDisplay(false);
        setSuccessDisplay(true);
        setDisplayOverlay(false);
        setSuccessMsg(res.message);
        setIsLoading(false);
    }).catch((err) => {
        // console.log(err.response);
        for (let i = 0; i < err?.response?.data?.errors?.length; i++) {
          if (err?.response?.data?.errors[i]?.fieldName === "resumptionDate") {
            setErrResume(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "vacationDate") {
            setErrVacate(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "term") {
            setErrTerm(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "midTermDates") {
            setErrMidEnd(err.response.data.errors[i].error[0]);
            setErrMidStart(err.response.data.errors[i].error[1]);
          }
        }
        setIsLoading(false);
    })
  }

  return (
    <Popup display={display} setDisplay={setDisplay}>
      <div className="lesson-notes_popup">
        <div className="sch-admin_input">
          <SearchSelect
            formLabel={"Term"}
            placeholder={"Select Term"}
            formId={"term"}
            optionsArray={termArr}
            searching={termSearch}
            setSearching={setTermSearch}
            dataChange={selectChange}
            optionClick={termOptClick}
            formValue={termItem?.name || ""}
            clickDrop={termDd}
            error={errTerm}
          />
          <Input
            inputLabel={"Resumption Date"}
            inputPlaceholder={"Choose Resumption Date"}
            formChange={handleDataChange}
            formId={"resumptionDate"}
            formValue={data?.resumptionDate}
            error={errResume}
            cal={true}
          />
          <div className="mid-term">
            <Input
              inputLabel={"Mid-Term Start Date"}
              inputPlaceholder={"Choose Mid-Term Start Date"}
              formChange={handleDataChange}
              formId={"midTermStart"}
              formValue={data?.midTermStart}
              error={errMidStart}
              cal={true}
            />{" "}
            <span>-</span>
            <Input
              inputLabel={"Mid-Term End Date"}
              inputPlaceholder={"Choose Mid-Term End Date"}
              formChange={handleDataChange}
              formId={"midTermEnd"}
              formValue={data?.midTermEnd}
              error={errMidEnd}
              cal={true}
            />
          </div>
          <Input
            inputLabel={"Vacation Date"}
            inputPlaceholder={"Choose Vacation Date"}
            formChange={handleDataChange}
            formId={"vacationDate"}
            formValue={data?.vacationDate}
            error={errVacate}
            cal={true}
          />
        </div>
        <div className="sch-admin_btn">
          <Button
            btnText={"Add Academic Calendar"}
            btnClass={"btn-small"}
            rightIcon={<Add />}
            btnClick={addCal}
            loading={isLoading}
          />
        </div>
      </div>
    </Popup>
  );
};

export default AddAcadCal;
