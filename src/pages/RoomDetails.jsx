import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import { FaCat, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RoomActions } from "../Redux/Slice/RoomSlice";
import Carousel from "../components/Carousel";
import Branch from "../components/branch";
import Img from "../assets/img/rooms/1.png";
import Img2 from "../assets/img/rooms/2.png";
import Img3 from "../assets/img/rooms/3.png";
import Img4 from "../assets/img/rooms/4.png";
import Img5 from "../assets/img/rooms/5.png";
import Img6 from "../assets/img/rooms/6.png";
import Loader from "../loading";

const RoomDetails = () => {
  const sliders = [
    {
      url: `${Img}`,
    },
    {
      url: `${Img2}`,
    },
    {
      url: `${Img3}`,
    },
    {
      url: `${Img4}`,
    },
    {
      url: `${Img5}`,
    },
    {
      url: `${Img6}`,
    },
  ];
  const { RoomTypeName } = useParams();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.room.category);
  const sampleRoom = useSelector((state) => state.room.sampleRoom);
  let galleryImage;
  try {
    galleryImage = sampleRoom?.GalleryImage1
      ? JSON.parse(sampleRoom.GalleryImage1)
      : undefined;
  } catch (error) {
    console.error("Failed to parse GalleryImage1:", error);
    galleryImage = undefined;
  }
  dispatch(RoomActions.setGalleryImage(galleryImage || sliders));

  const Data = useSelector((state) => state.room.data);

  useEffect(() => {
    const array = Data.filter((room) => room.RoomTypeName === RoomTypeName);
    dispatch(RoomActions.setCategory(array));
    dispatch(RoomActions.setSampleRoom(array[0]));
  }, [Data, RoomTypeName, dispatch]);

  return (
    <section className="">
      {sampleRoom ? (
        <>
          <div className="bg-room bg-cover bg-center h-[400px] relative flex justify-center items-center">
            <div className="absolute w-full h-full bg-black/75">
              <h1 className="text-6xl text-white z-20 font-primary text-center max-sm:mt-36 uppercase lg:mt-36">
                {RoomTypeName} Details
              </h1>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row h-full py-12 lg:py-24">
              <div className="w-full h-full lg:w-[70%] px-0 lg:px-6">
                <Carousel />
                <h6 className="text-gray-600 uppercase mt-24 mb-3">
                  No of Rooms available {category.length}
                </h6>
                <h2 className="text-6xl">{RoomTypeName}</h2>

                <p className="mt-7 text-justify pb-8 border-b border-gray-200">{sampleRoom.LongDescription}</p>
              </div>
              <div className="w-full h-full lg:w-[30%] max-md:mt-10">
                <div className=" py-8 px-6 bg-accent/20 mb-2">
                  <div className="flex flex-col space-y-4 mb-4">
                    <h3>Your Reservation</h3>

                    <div className="h-[60px]">
                      <CheckIn />
                    </div>
                    <div className="h-[60px]">
                      <CheckOut />
                    </div>
                    <div className="h-[60px]">
                      <AdultsDropdown />
                    </div>
                    <div className="h-[60px]">
                      <KidsDropdown />
                    </div>
                    <div className="h-[60px]">
                      <Branch />
                    </div>

                    <Link
                      to={`/${RoomTypeName}/booknow`}
                      className="btn btn-lg btn-primary w-full max-w-[300px] mx-auto"
                    >
                      Book now from ₦
                      {sampleRoom && sampleRoom.Price
                        ? sampleRoom.Price.toLocaleString()
                        : 0}
                    </Link>
                  </div>
                </div>

                <div className="bg-accent/5 p-12">
                  <h3 className="h3">Hotel rules</h3>
                  <p className="mb-6">
                    Kindly Obey the rules in order to avoid embassrement{" "}
                  </p>

                  <ul className="flex flex-col gap-y-4 ">
                    <li className="flex items-center gap-x-4">
                      <FaCheck className="text-accent" />
                      Check-in: 3:00pm - 9:00pm
                    </li>
                    <li className="flex items-center gap-x-4">
                      <FaCheck className="text-accent" />
                      Check-out: 10:30am
                    </li>
                    <li className="flex items-center gap-x-4">
                      <FaCat className="text-accent" />
                      No Pet
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
       <Loader />
      )}

    </section>
  );
};

export default RoomDetails;
