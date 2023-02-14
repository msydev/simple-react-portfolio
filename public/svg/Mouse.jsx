import React from "react";

function Mouse({ styles }) {
  return (
    <svg
      className={`${styles}`}
      width="100%"
      height="100%"
      viewBox="0 0 247 390"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "1.5",
      }}
    >
      <path
        className={`animate-bounce`}
        d="M123.359,170.775l0,72.843"
        style={{ fill: "none", stroke: "#fff", strokeWidth: "20px" }}
      ></path>


      <path
        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
        style={{ fill: "none", stroke: "#fff", strokeWidth: "20px" }}
      />
    </svg>
  );
}

export default Mouse;
