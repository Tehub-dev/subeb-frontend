import { ArrowLeft2 } from "iconsax-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./custom-inputs.css";

const Back = () => {
    const navigate = useNavigate();
  
    const goBack = () => {
      navigate(-1);
    };
    return (
      <div>
        <Link style={{ textDecoration: "none" }} >
          <button onClick={goBack} className="go-back">
            <ArrowLeft2 />
          </button>
        </Link>
      </div>
    );
}

export default Back