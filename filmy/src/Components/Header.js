import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
// import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  return (
    <div className="text-3xl flex justify-between py-5 item-center font-bold border-b-2 border-gray-500 ">
      <Link
        to={"/"}
        className="p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
      >
        <span className="">
          <span className="bg-blue-600">Pay</span>Time{" "}
          <span className="text-red-500 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
            <span className="relative text-white">Films</span>
          </span>
        </span>
      </Link>
      <Link to={"/addmovies"}>
        <h1 className="text-lg text-red-500 cursor-pointer flex items-center ">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-5 before:bg-red-500 relative inline-block mr-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300... mt-3.5">
            <span className="p-3 relative text-white">Add-Movies</span>
          </span>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
