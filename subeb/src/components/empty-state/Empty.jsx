import React from "react";

import "./empty.css";
import { Button } from "../custom-inputs/CustomInputs";

const Empty = ({
  emptyBtn,
  emptyIcon,
  emptyImg,
  emptyText,
  emptyTitle,
  btnClick,
  emptyMargin,
  emptyWidth,
  emptyRightIcon
}) => {
  return (
    <div
      className="empty-cont"
      style={{ width: emptyWidth, margin: emptyMargin }}
    >
      <div className="empty-img">
        <img src={emptyImg} alt="empty-img" />
      </div>
      <h2>{emptyTitle}</h2>
      <p>{emptyText}</p>
      {emptyBtn && <Button btnClick={btnClick} btnText={emptyBtn} btnImg={emptyIcon} rightIcon={emptyRightIcon} />}
    </div>
  );
};

export default Empty;
