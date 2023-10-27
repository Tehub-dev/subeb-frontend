import React from "react";
import Popup from "./Popup";
import { Button, Input } from "../custom-inputs/CustomInputs";
import SearchSelect from "../custom-inputs/SearchSelect";
import { Add } from "iconsax-react";
import { useState } from "react";
import { AxiosAuthPost, AxiosAuthPut } from "../../axios/axios";
import useSuccessDisplay from "../../hooks/useSuccessDisplay";
import useSuccessMsg from "../../hooks/useSuccessMsg";
import useOverlay from "../../hooks/useOverlay";
import useIsEdit from "../../hooks/useIsEdit";

const AddSchAdmin = ({ display, setDisplay }) => {
  const url = "school-admin/";
  const adminId = localStorage.getItem("adminId");
  const {isEdit, setIsEdit} = useIsEdit();
  const updateUrl = `school-admin/${adminId}/`
  const schools = JSON.parse(localStorage.getItem("sch"));
  const {setSuccessDisplay} = useSuccessDisplay();
  const {setSuccessMsg} = useSuccessMsg();
  const { setDisplayOverlay} = useOverlay();
  const [errFname, setErrFname] = useState("");
  const [errLname, setErrLname] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errSch, setErrSch] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [schArr, setSchArr] = useState(schools);
  const [schItem, setSchItem] = useState();
  const [schId, setSchId] = useState();
  const [schSearch, setSchSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDataChange = (e) => {
    if (e.target.id === "firstName") {
      setErrFname("");
    }
    if (e.target.id === "lastName") {
      setErrLname("");
    }
    if (e.target.id === "email") {
      setErrEmail("");
    }
    if (e.target.id === "phoneNumber") {
      setErrPhone("");
    }
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(data);
  };
  const selectChange = (e) => {
    if (e.target.id === "school") {
      if (e.target.value) {
        setSchSearch(true);
        setSchItem();
        setErrSch("");
        setSchArr(
          schools.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }
    } else {
      setSchSearch(false);
    }
  };
  const schOptClick = (item) => {
    setSchItem(item);
    setSchId(item.id);
  };
  const schDd = () => {
    setSchArr(schools);
    setSchSearch(!schSearch);
  };

  const dataObj = {
    ...data,
    schoolId: schId,
  }

  const addAdmin = () => {
    setIsLoading(true);
    AxiosAuthPost(url, dataObj).then((res) => {
      // console.log(res);
      setIsLoading(false);
      setSuccessDisplay(true);
      setSuccessMsg(res.message);
      setDisplay(false);
      setDisplayOverlay(false);
    }).catch((err) => {
      // console.log(err.response);
      for (let i = 0; i < err?.response?.data?.errors?.length; i++) {
        if (err?.response?.data?.errors[i]?.fieldName === "firstName") {
          setErrFname(err.response.data.errors[i].error);
        }
        if (err?.response?.data?.errors[i]?.fieldName === "lastName") {
          setErrLname(err.response.data.errors[i].error);
        }
        if (err?.response?.data?.errors[i]?.fieldName === "phoneNumber") {
          setErrPhone(err.response.data.errors[i].error);
        }
        if (err?.response?.data?.errors[i]?.fieldName === "schoolId") {
          setErrSch(err.response.data.errors[i].error);
        }
      }
      setIsLoading(false);
    })
  }
  const editAdmin = () => {
    setIsLoading(true);
    AxiosAuthPut(updateUrl, dataObj).then((res) => {
      // console.log(res);
      setIsLoading(false);
      setSuccessDisplay(true);
      setSuccessMsg(res.message);
      localStorage.removeItem("adminId");
      setDisplay(false);
      setIsEdit(false);
      setDisplayOverlay(false);
    }).catch((err) => {
      // console.log(err.response);
      for (let i = 0; i < err?.response?.data?.errors?.length; i++) {
        if (err?.response?.data?.errors[i]?.fieldName === "firstName") {
          setErrFname(err.response.data.errors[i].error);
        }
        if (err?.response?.data?.errors[i]?.fieldName === "lastName") {
          setErrLname(err.response.data.errors[i].error);
        }
        if (err?.response?.data?.errors[i]?.fieldName === "phoneNumber") {
          setErrPhone(err.response.data.errors[i].error);
        }
        if (err?.response?.data?.errors[i]?.fieldName === "schoolId") {
          setErrSch(err.response.data.errors[i].error);
        }
      }
      setIsLoading(false);
    })
  }

  return (
    <Popup display={display} setDisplay={setDisplay}>
      <div className="lesson-notes_popup">
        <div className="sch-admin_input">
          <Input
            inputLabel={"First Name"}
            inputPlaceholder={"Enter First name"}
            formChange={handleDataChange}
            formId={"firstName"}
            formValue={data.firstName}
            error={errFname}
          />
          <Input
            inputLabel={"Last Name"}
            inputPlaceholder={"Enter Last name"}
            formChange={handleDataChange}
            formId={"lastName"}
            formValue={data.lastName}
            error={errLname}
          />
          <Input
            inputLabel={"Phone Number"}
            inputPlaceholder={"Enter Phone Number"}
            formChange={handleDataChange}
            formId={"phoneNumber"}
            formValue={data.phoneNumber}
            error={errPhone}
            phone={true}
          />
          <Input
            inputLabel={"Email Address"}
            inputPlaceholder={"Enter Email Address"}
            formChange={handleDataChange}
            formId={"email"}
            formValue={data.email}
            error={errEmail}
          />
          <SearchSelect
            formLabel={"School"}
            placeholder={"Select School"}
            formId={"school"}
            optionsArray={schArr}
            searching={schSearch}
            setSearching={setSchSearch}
            dataChange={selectChange}
            optionClick={schOptClick}
            formValue={schItem?.name || ""}
            clickDrop={schDd}
            error={errSch}
          />
        </div>
        <div className="sch-admin_btn">
          <Button
            btnText={"Add School Admin"}
            btnClass={"btn-small"}
            rightIcon={<Add />}
            btnClick={isEdit ? editAdmin : addAdmin}
            loading={isLoading}
          />
        </div>
      </div>
    </Popup>
  );
};

export default AddSchAdmin;
