import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomCard from "./RoomCard";
import { SpinnerDotted } from "spinners-react";
import { Link } from "react-router-dom";
import { RoomActions } from "../Redux/Slice/RoomSlice";
import BookForm from "../pages/BookNow";
import Img3 from "../assets/img/heroSlider/3.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img1 from "../assets/img/heroSlider/1.jpg";

import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = () => {
  const dispatch = useDispatch();
  const Loading = useSelector((state) => state.room.loading);

  return (
    <section id="Room" className="py-24">
      <div className="text-center">
        <h2 className="h3"> Our Hotels</h2>
      </div>

      <RoomCard />
    </section>
  );
};

export default Room;
