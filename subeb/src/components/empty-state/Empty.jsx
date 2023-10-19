import React from "react";

import "./empty.css";

const Empty = ({
  emptyBtn,
  emptyIcon,
  emptyImg,
  emptyText,
  emptyTitle,
  btnClick,
  emptyMargin,
  emptyWidth,
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
      {emptyBtn && <button className="btn" onClick={btnClick}>
        {emptyBtn} <img src={emptyIcon} alt="icon" />{" "}
      </button>}
    </div>
  );
};

export default Empty;
