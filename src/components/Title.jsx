import React from "react";

const Title = ({ title, className = "" }) => {
  return (
    <div className={`${className} text-text_title font-black text-[56px]`}>
      {title}
    </div>
  );
};

export default Title;
