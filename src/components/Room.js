import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { useSelector } from "react-redux";

const Room = () => {
  const Data = useSelector((state) => state.room.data);
  const baseUrl = useSelector((state) => state.company.baseUrl);
  const tenant_id = useSelector((state) => state.company.m_id);
  const [categorys, setCategorys] = useState([]);
  const imgURL = `${baseUrl}/storage/uploads/tenant/${tenant_id}/rooms/`;

  useEffect(() => {
    const array = [];
    const roomCat = {};
    for (const room of Data) {
      if (!roomCat[room.RoomTypeName]) {
        roomCat[room.RoomTypeName] = true;
        array.push(room);
      }
    }
    setCategorys(array);
  }, [Data]);
  return (
    <section id="Room" className="py-24">
      <div className="text-center">
        <h2 className="h3"> Our Hotel</h2>
      </div>
      <div className="container mx-auto lg:px:0">
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {categorys.map((room, index) => (
            <RoomCard
              key={index}
              DefaultImage={imgURL + room.DefaultImage}
              bed={room.NoOfBed}
              totalGuest={room.AdultNo + room.ChildNo}
              RoomTypeName={room.RoomTypeName}
              Price={room.Price.toLocaleString()}
              ShortDescription={
                room.ShortDescription ||
                `Have a feel of luxury in ${room.RoomTypeName} room`
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Room;
