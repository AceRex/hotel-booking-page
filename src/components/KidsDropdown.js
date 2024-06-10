import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RoomActions } from "../Redux/Slice/RoomSlice";
const KidsDropdown = () => {
  const lis = [
    { name: "1 kid" },
    { name: "2 kids" },
    { name: "3 Kids" },
    { name: "4 kids" },
  ];
  const kids = useSelector((state) => state.room.kid);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full bg-white relative flex items-center justify-between">
      <select
        name={kids}
        onChange={(e) => dispatch(RoomActions.setKid(e.target.value))}
        className="bg-white absolute w-[95%] m-auto flex flex-col border-none px-5"
      >
        {lis.map(({ id, name }, index) => (
          <option
            key={index}
            value={name}
            className="border-none h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
          >
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default KidsDropdown;
