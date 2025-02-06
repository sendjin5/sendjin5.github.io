import { useState } from "react";
import "../../css/coverIndex.css";

const CoverIndex = () => {
  const [coverSwitch, setCoverSwitch] = useState(0);

  const buttonUadate = () => {
    console.log("coverSwitch", coverSwitch);

    let num = coverSwitch + 1;
    if (num < 3) {
      setCoverSwitch(num);
    }
  };
  return (
    <div
      style={{
        display: coverSwitch >= 2 ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        position: "absolute",
        top: 0,
      }}
    >
      <label className="coverLabel">
        <input type="checkbox" className="input" onClick={buttonUadate} />
        <span className="circle">
          <svg
            className="icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            ></path>
          </svg>
          <div className="square"></div>
        </span>
        <p className="title">Click</p>
        <p className="title">Open</p>
      </label>
    </div>
  );
};
export default CoverIndex;
