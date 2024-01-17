import React from "react";
import Icon from "./Icon";

const Navbar = () => {
  return (
    <>
      <div className=" flex flex-col h-[80%] bg-violet-800 w-[15%] mx-5 rounded-xl items-center">
        <Icon icon={`star`} classname={`mt-5 text-xl hover:text-white`} />
        <div className="w-full flex flex-col m-auto justify-center items-center ">
          <Icon
            icon={`envelope`}
            classname={`mt-5 text-xl hover:text-orange-500`}
          />
          <Icon
            icon={`message`}
            classname={`mt-5 text-xl hover:text-orange-500`}
          />
          <Icon
            icon={`bell`}
            classname={`mt-5 text-xl hover:text-orange-500`}
          />
          <Icon
            icon={`trash`}
            classname={`mt-5 text-xl hover:text-orange-500`}
          />
        </div>
        <Icon
          icon={`user`}
          classname={`mb-2 text-xl  bg-gray-500 p-2 rounded-3xl cursor-pointer hover:bg-[#d5d3d3] `}
        />
      </div>
    </>
  );
};

export default Navbar;
