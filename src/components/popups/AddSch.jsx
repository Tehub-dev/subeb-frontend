import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import "./popup.css";
import { Button, Input } from "../custom-inputs/CustomInputs";
import { Add } from "iconsax-react";
import SearchSelect from "../custom-inputs/SearchSelect";
import { AxiosAuthPost, AxiosAuthPut } from "../../axios/axios";
import useSuccessDisplay from "../../hooks/useSuccessDisplay";
import useSuccessMsg from "../../hooks/useSuccessMsg";
import useOverlay from "../../hooks/useOverlay";

const AddSch = ({ display, setDisplay }) => {
  const schUrl = "schools/";
  const lga = JSON.parse(localStorage.getItem("lga"));
  const singleSch = JSON.parse(localStorage.getItem("singleSch"));
  const editUrl = `schools/${singleSch?.id}/`;
  const [errName, setErrName] = useState("");
  const [errLga, setErrLga] = useState("");
  const [errAdd, setErrAdd] = useState("");
  const { setDisplayOverlay } = useOverlay();
  const { setSuccessDisplay } = useSuccessDisplay();
  const { setSuccessMsg } = useSuccessMsg();
  const [isLoading, setIsLoading] = useState(false);
  const [lgaSearch, setLgaSearch] = useState("");
  const [lgaArr, setLgaArr] = useState(lga);
  const [lgaItem, setLgaItem] = useState("");
  const [lgaId, setLgaId] = useState("");
  const [data, setData] = useState({
    schoolName: "",
    address: "",
  });
  const handleDataChange = (e) => {
    if (e.target.id === "schoolName") {
      setErrName("");
    }
    if (e.target.id === "address") {
      setErrAdd("");
    }
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(data);
  };
  const selectChange = (e) => {
    if (e.target.id === "lga") {
      if (e.target.value) {
        setLgaSearch(true);
        setLgaItem("");
        setLgaArr(
          lga.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }
    } else {
      setLgaSearch(false);
    }
  };

  const lgaOptClick = (item) => {
    setLgaItem(item);
    setLgaId(item.id);
  };
  const clickLgaDd = () => {
    setLgaArr(lga);
    setLgaSearch(!lgaSearch);
  };

  const dataObj = {
    name: data?.schoolName,
    lgaId: lgaId,
    address: data?.address,
  };

  const submitForm = () => {
    setIsLoading(true);
    AxiosAuthPost(schUrl, dataObj)
      .then((res) => {
        // console.log(res);
        setIsLoading(false);
        setSuccessDisplay(true);
        setSuccessMsg(res.message);
        setDisplayOverlay(false);
        setDisplay(false);
        setData({
          schoolName: "",
          address: "",
        });
        setLgaItem("");
      })
      .catch((err) => {
        // console.log(err.response);
        for (let i = 0; i < err?.response?.data?.errors?.length; i++) {
          if (err?.response?.data?.errors[i]?.fieldName === "name") {
            setErrName(err?.response?.data?.errors[i]?.error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "lgaId") {
            setErrLga(err?.response?.data?.errors[i]?.error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "address") {
            setErrAdd(err?.response?.data?.errors[i]?.error);
          }
        }
        setIsLoading(false);
      });
  };

  const editSch = () => {
    setIsLoading(true);
    AxiosAuthPut(editUrl, dataObj)
      .then((res) => {
        // console.log(res);
        setIsLoading(false);
        setSuccessDisplay(true);
        setSuccessMsg(res.message);
        localStorage.removeItem("singleSch");
        setDisplayOverlay(false);
        setDisplay(false);
        setData({
          schoolName: "",
          address: "",
        });
        setLgaItem("");
      })
      .catch((err) => {
        // console.log(err.response);
        for (let i = 0; i < err?.response?.data?.errors?.length; i++) {
          if (err?.response?.data?.errors[i]?.fieldName === "name") {
            setErrName(err?.response?.data?.errors[i]?.error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "lgaId") {
            setErrLga(err?.response?.data?.errors[i]?.error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "address") {
            setErrAdd(err?.response?.data?.errors[i]?.error);
          }
        }
        setIsLoading(false);
      });
  };

  useEffect(() => {
    localStorage.removeItem("singleSch");
    setErrAdd("");
    setErrName("");
    setErrLga("");
    // eslint-disable-next-line 
  }, [display]);

  return (
    <Popup display={display} setDisplay={setDisplay}>
      <div className="lesson-notes_popup">
        <div className="add-sch_inputs">
          <Input
            inputLabel={"School Name"}
            inputPlaceholder={singleSch ? singleSch?.name : "Enter School name"}
            formChange={handleDataChange}
            formId={"schoolName"}
            formValue={data?.schoolName || ""}
            error={errName}
          />
          <SearchSelect
            formLabel={"LGA"}
            placeholder={singleSch ? singleSch?.lga : "Select LGA"}
            formId={"lga"}
            optionsArray={lgaArr}
            searching={lgaSearch}
            setSearching={setLgaSearch}
            dataChange={selectChange}
            optionClick={lgaOptClick}
            formValue={lgaItem?.name}
            clickDrop={clickLgaDd}
            error={errLga}
          />
          <Input
            inputLabel={"Address"}
            inputPlaceholder={singleSch ? singleSch?.town : "Enter Address"}
            formChange={handleDataChange}
            formId={"address"}
            formValue={data?.address || ""}
            error={errAdd}
          />
        </div>
        <div className="add-sch_btn">
          <Button
            btnText={"Add School"}
            btnClass={"btn-small"}
            rightIcon={<Add />}
            btnClick={!singleSch ? submitForm : editSch}
            loading={isLoading}
          />
        </div>
      </div>
    </Popup>
  );
};

export default AddSch;
