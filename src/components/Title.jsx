import React from "react";

const Title = ({ title, className = "" }) => {
  return (
    <div className={`${className} text-textTitle font-black text-[56px]`}>
      {title}
    </div>
  );
};

export default Title;
