import React from "react";

const Button = ({
    btnname,
    type= "submit"
}) => {
  return (
    <>
      <div className={`w-auto mx-5 bg-blue-700 px-5 py-2 mt-3 rounded-xl text-xl hover:bg-blue-400`}>
        <button type={`type`}>{btnname}</button>
      </div>
    </>
  );
};

export default Button;
