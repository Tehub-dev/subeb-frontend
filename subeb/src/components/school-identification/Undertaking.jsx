import React from "react";

import "./sch-ident.css";
import { Button, Input } from "../custom-inputs/CustomInputs";
import { ArrowRight, DocumentUpload } from "iconsax-react";

const Undertaking = () => {
  const label1 = [
    {
      label: "Name",
      input: <Input inputPlaceholder={"Enter Name"} />,
    },
    {
      label: "Telephone",
      input: <Input inputPlaceholder={"Enter Telephone"} />,
    },
    {
      label: "",
      input: (
        <Input
          inputPlaceholder={"Upload Signature"}
          icon={<DocumentUpload />}
        />
      ),
      input2: <Input inputPlaceholder={"DD"} />,
      input3: <Input inputPlaceholder={"MM"} />,
      input4: <Input inputPlaceholder={"YYYY"} />,
    },
  ];
  const label2 = [
    {
      label: "Name",
      input: <Input inputPlaceholder={"Enter Name"} />,
    },
    {
      label: "Position",
      input: <Input inputPlaceholder={"Enter Position"} />,
    },
    {
      label: "Telephone",
      input: <Input inputPlaceholder={"Enter Telephone"} />,
    },
    {
      label: "",
      input: (
        <Input
          inputPlaceholder={"Upload Signature"}
          icon={<DocumentUpload />}
        />
      ),
      input2: <Input inputPlaceholder={"DD"} />,
      input3: <Input inputPlaceholder={"MM"} />,
      input4: <Input inputPlaceholder={"YYYY"} />,
    },
  ];
  const label3 = [
    {
      label: "Name",
      input: <Input inputPlaceholder={"Enter Name"} />,
    },
    {
      label: "Position",
      input: <Input inputPlaceholder={"Enter Position"} />,
    },
    {
      label: "Telephone",
      input: <Input inputPlaceholder={"Enter Telephone"} />,
    },
    {
      label: "",
      input: (
        <Input
          inputPlaceholder={"Upload Signature"}
          icon={<DocumentUpload />}
        />
      ),
      input2: <Input inputPlaceholder={"DD"} />,
      input3: <Input inputPlaceholder={"MM"} />,
      input4: <Input inputPlaceholder={"YYYY"} />,
    },
  ];

  return (
    <div className="identification">
      <h2>Undertaking</h2>
      <div className="undertaking-notice">
        <h4>NOTICE</h4>
        <p>
          Public officers completing this form are reminded that Civil Service
          Rule 04107 Section 1 requires the recording and supply of accurate
          data. Failure to do so amounts to gross misconduct punishable by
          sanctions that may include dismissal.
        </p>
      </div>
      <div className="attestation">
        <h4>Attestation by Head Teacher</h4>
        <p>
          I certify that the information I have given in this form is correct to
          the best of my knowledge.
        </p>
        <div className="attestation-table">
          {label1.map((item, idx) => {
            return (
              <div className="ident-table">
                <div key={idx} className="left-table">
                  <p>{item.label}</p>
                </div>
                <div className="right-table">
                  {item.input && item.input}
                  {item.input2 && <div className="right-input">
                    {item.input2} {item.input3}{item.input4}
                  </div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="attestation">
        <h4>Attestation by SBMC Chairperson/member</h4>
        <p>
        I have checked the information in this form and can confirm that it is complete and correct.
        </p>
        <div className="attestation-table">
          {label2.map((item, idx) => {
            return (
              <div className="ident-table">
                <div key={idx} className="left-table">
                  <p>{item.label}</p>
                </div>
                <div className="right-table">
                  {item.input && item.input}
                  {item.input2 && <div className="right-input">
                    {item.input2} {item.input3}{item.input4}
                  </div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="attestation">
        <h4>Attestation by Supervisor</h4>
        <p>
        I have checked the information in this form and can confirm that it is complete and correct.
        </p>
        <div className="attestation-table">
          {label3.map((item, idx) => {
            return (
              <div className="ident-table">
                <div key={idx} className="left-table">
                  <p>{item.label}</p>
                </div>
                <div className="right-table">
                  {item.input && item.input}
                  {item.input2 && <div className="right-input">
                    {item.input2} {item.input3}{item.input4}
                  </div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ident-btn">
        <Button
          btnClass={"btn-small"}
          rightIcon={<ArrowRight />}
          btnText={"Submit"}
          //   btnClick={clickBtn}
        />
      </div>
    </div>
  );
};

export default Undertaking;
