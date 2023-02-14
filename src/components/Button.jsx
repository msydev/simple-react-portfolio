import React from "react";

function Button({ text, type, styles, status, children, onClick }) {
  let statusCalsses;
  if (status === "primary") {
    statusCalsses =
      "bg-gradient-to-r from-sky-400 to-fuchsia-600 rounded hover:glow";
  } else if (status === "secondary") {
    statusCalsses = "bg-cyan-400/20  rounded";
  } else if (status === "tertiary") {
    statusCalsses = "bg-transparent text-secondary rounded";
  } else if (status === "active") {
    statusCalsses = "text-gradient text-glow";
  } else if (status === "link") {
    statusCalsses = "text-gradient";
  } else statusCalsses = "";
  return (
    <button
      type={type}
      className={`outline-none transition-all font-primary text-lg ${statusCalsses} ${styles}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
}

export default Button;
