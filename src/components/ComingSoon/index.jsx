import React, { useState } from "react";
import { Close } from "../../assets/svg/Close";
import "./index.scss";

const ComingSoon = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <div className="coming-soon-container">
          <div className="coming-soon-container-text">
            <h3>Opening soon at your nearest location!!</h3>
          </div>
          <span onClick={() => setOpen(false)}>
            <Close />
          </span>
        </div>
      )}
    </>
  );
};

export default ComingSoon;
