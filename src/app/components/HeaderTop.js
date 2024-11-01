import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const headerTopIconWrapper =
  "bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-red-200 hover:text-white";

const HeaderTop = () => {
  return (
    <div className="hidden sm:block py-4 px-32">
      <div className="flex justify-between">
        <div className="flex justify-center gap-1">
          <div className={`${headerTopIconWrapper}`}>
            <FaFacebookSquare size={20} />
          </div>
          <div className={`${headerTopIconWrapper}`}>
            <FaTwitterSquare size={20} />
          </div>
          <div className={`${headerTopIconWrapper}`}>
            <FaInstagramSquare size={20} />
          </div>
        </div>
        <div>
          <strong>FREE SHIPPING </strong>
          THIS WEEK ORDER OVER - $100
        </div>
        <div className="flex justify-center">
          <div>
            <select name="currency" id="currency">
              <option value="USD">USD</option>
              <option value="EURO">EURO</option>
            </select>
          </div>
          <div>
            <select name="language" id="language">
              <option value="English">English</option>
              <option value="Finnish">Finnish</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
