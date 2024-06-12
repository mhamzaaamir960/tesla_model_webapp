import React from "react";

function Container({ children, className }) {
  return (
    <div className={`flex flex-col w-full  ${className} p-2 `}>
      {children}
    </div>
  );
}

export default Container;
