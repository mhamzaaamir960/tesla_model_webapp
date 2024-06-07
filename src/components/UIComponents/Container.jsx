import React from "react";

function Container({ children, className }) {
  return (
    <div className={`flex flex-col w-full max-w-[90%] ${className}`}>
      {children}
    </div>
  );
}

export default Container;
