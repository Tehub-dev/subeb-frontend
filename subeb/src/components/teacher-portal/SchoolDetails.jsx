import React, { useEffect, useState } from "react";

import "./teacher.css";
import AuthHead from "../auth-head/AuthHead";
import SearchSelect from "../custom-inputs/SearchSelect";
import { AxiosGet, AxiosPost } from "../../axios/axios";
import { Button } from "../custom-inputs/CustomInputs";
import { SuccessAlert } from "../alerts/Alerts";
import { useNavigate } from "react-router-dom";

const SchoolDetails = () => {
  const lgaUrl = "lookup/lgas/";
  const classUrl = "lookup/classes/";
  const regUrl = "auth/register/";
  const oldData = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();

  const [schItem, setSchItem] = useState("");
  const [classItem, setClassItem] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [schSearch, setSchSearch] = useState(false);
  const [classSearch, setClassSearch] = useState(false);
  const [success, setSuccess] = useState(false);
  const [lga, setLga] = useState();
  const [schData, setSchData] = useState();
  const [classData, setClassData] = useState();
  const [lgaId, setLgaId] = useState("");
  const [classId, setClassId] = useState("");
  const [schId, setSchId] = useState("");
  const [array, setArray] = useState(lga);
  const [schArr, setSchArr] = useState(schData);
  const [classArr, setClassArr] = useState(classData);
  const [item, setItem] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const newData = {
    ...oldData,
    schoolId: schId,
    classId: classId
  }

  const schUrl = `lookup/lga/${lgaId}/schools/`;

  useEffect(() => {
    AxiosGet(lgaUrl)
      .then((res) => {
        setLga(res.data);
      })
      .catch((err) => {
        // console.log(err.response);
      });

    AxiosGet(classUrl)
      .then((res) => {
        setClassData(res.data);
      })
      .catch((err) => {
        // console.log(err.response);
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    AxiosGet(schUrl)
      .then((res) => {
        setSchData(res.data);
      })
      .catch((err) => {
        // console.log(err.response);
      });
    // eslint-disable-next-line
  }, [lgaId]);

  const onSubmit = () => {
    setIsLoading(true);
    AxiosPost(regUrl, newData).then((res)=>{
        // console.log(res);
        setSuccess(true);
        setSuccessMsg(res.message);
        setIsLoading(false);
        localStorage.removeItem("data");
        setTimeout(function() {
          navigate("/smslogin");
        }, 2000);
    }).catch((err) => {
        // console.log(err.response);
        // for (let i = 0; i < err.response.data.errors.length; i++){
        //     if (err.response.data.errors[i].fieldName === "credential"){
        //         setErr(err.response.data.errors[i].error)
        //     }
        // }
        setIsLoading(false);
    })
  }

  const selectChange = (e) => {
    if (e.target.id === "lga") {
      if (e.target.value) {
        setSearching(true);
        setItem("");
        setArray(
          lga.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }
    }
    if (e.target.id === "sch") {
      if (e.target.value) {
        setSchSearch(true);
        setSchItem("");
        setSchArr(
          schData.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }
    }
    if (e.target.id === "class") {
      if (e.target.value) {
        setClassSearch(true);
        setClassItem("");
        setClassArr(
          classData.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }
    } else {
      setSearching(false);
    }
  };

  const optionClick = (item) => {
    setItem(item);
    setLgaId(item.id);
  };
  const schOptClick = (item) => {
    setSchItem(item);
    setSchId(item.id);
  };
  const classOptClick = (item) => {
    setClassItem(item);
    setClassId(item.id);
  };
  const clickDropDown = () => {
    setArray(lga);
    setSearching(!searching);
  };
  const clickSchDd = () => {
    setSchArr(schData);
    setSchSearch(!schSearch);
  };
  const clickClassDd = () => {
    setClassArr(classData);
    setClassSearch(!classSearch);
  };

  return (
    <div>
      <SuccessAlert  display={success} setDisplay={setSuccess} message={successMsg} />
      <AuthHead
        title={"School Details"}
        text={"Register as a teacher on ondo state school management system"}
      />
      <form className="teacher-form">
        <SearchSelect
          formLabel={"School LGA"}
          placeholder={"Search School LGA"}
          optionsArray={array}
          searching={searching}
          setSearching={setSearching}
          dataChange={selectChange}
          optionClick={optionClick}
          formValue={item.name}
          clickDrop={clickDropDown}
          formId={"lga"}
        />
        <SearchSelect
          formLabel={"School"}
          placeholder={"Search School"}
          dataChange={selectChange}
          formId={"sch"}
          optionsArray={schArr}
          searching={schSearch}
          setSearching={setSchSearch}
          optionClick={schOptClick}
          formValue={schItem.name}
          clickDrop={clickSchDd}
        />
        <SearchSelect
          formLabel={"Class"}
          placeholder={"Search Class"}
          dataChange={selectChange}
          formId={"class"}
          optionsArray={classArr}
          searching={classSearch}
          setSearching={setClassSearch}
          optionClick={classOptClick}
          formValue={classItem.name}
          clickDrop={clickClassDd}
        />
        <div className="form-btn">
          <Button loading={isLoading} btnText={"Register"} btnClick={onSubmit} />
        </div>
      </form>
    </div>
  );
};

export default SchoolDetails;
