import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const Data = useSelector((state) => state.room.data);
  console.log(Data);

  return (
    <>
      <section className="py-24">
        <div className="text-center">
          <h2 className="h3"> Our Hotels</h2>
        </div>

        {/* Card start */}
		{/* map data  <RoomCard name, title, e.t.c/> */}
        <div className="container mx-auto lg:px:0">
          <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
            <div className="bg-red shadow-2xl min-h-[500px] group">
              <div className="overflow-hidden">
                <img
                  className="group-hover:scale-110 transition-all duration-300 w-full"
                  src={Img3}
                  alt="room images"
                />
              </div>

              {/* DETAILS */}
              <div className="bg-white shadow-lg max-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
                <div className="flex justify-between w-[80%]">
                  <div className="flex items-center gap-x-2 ">
                    <div className="text-accent">
                      <BsArrowsFullscreen className="text-[15px]" />
                    </div>
                    <div className="flex gap-x-1">
                      <div> Size</div>
                      <div> m2</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-2 ">
                    <div className="text-accent">
                      <BsPeople className="text-[15px]" />
                    </div>
                    <div className="flex gap-x-1">
                      <div> Max People </div>
                      <div>12</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="h3">Deluxe</h3>

                <p className="max-w-[300px] mx-auto mb-3 lg:mb-6 "></p>
              </div>

              <Link
                to={"/"}
                className="btn btn-secondary btn-sm max-w-[500px] mx-auto"
              >
                Book Deluxe from ₦24,999
              </Link>
            </div>
          </div>
        </div>
        {/* card ends */}
      </section>
    </>
  );
};

export default Room;
