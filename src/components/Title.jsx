import React from "react";

const Title = ({ title, className = "" }) => {
  return (
    <div className={`${className} text-text_title font-black sm:text-[56px] text-[40px]`}>
      {title}
    </div>
  );
};

export default Title;
