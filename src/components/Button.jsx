import React from "react";

const Button = ({ text, link = "/", className, bgShow = true }) => {
  return (
    <a
      href={link}
      className={`${
        bgShow ? "btnlinear" : "gradient_border"
      } py-4 px-11 font-mon text-xl text-secondText font-medium
         ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;
