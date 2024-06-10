import axios from "axios";
import { BsArrowBarLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RoomActions } from "../Redux/Slice/RoomSlice";
import { PaystackButton } from "react-paystack";

const PreviewBooking = () => {
  const dispatch = useDispatch();
  const previewItem = useSelector((state) => state.room.previewItem);

  const token = useSelector((state) => state.company.auth_token);
  const baseurl = useSelector((state) => state.company.baseurl);
  const publicKey = useSelector((state) => state.company.publickey);
  const sampleRoom = useSelector((state) => state.room.sampleRoom);

  const CheckIn = useSelector((state) => state.room.checkIn);
  const CheckOut = useSelector((state) => state.room.checkOut);
  const Adult = useSelector((state) => state.room.adult);
  const Kids = useSelector((state) => state.room.kid);
  const Branch = useSelector((state) => state.room.branch);

  const Email = useSelector((state) => state.room.email);
  const Address = useSelector((state) => state.room.address);
  const Phone = useSelector((state) => state.room.phone);
  const FirstName = useSelector((state) => state.room.firstname);
  const LastName = useSelector((state) => state.room.lastname);
  const Name = FirstName + LastName;
  const TotalGuest = Adult + "," + Kids;
  const dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;
  const price =
    Math.ceil((CheckOut - CheckIn) / MILLISECONDS_IN_A_DAY) *
    (sampleRoom?.Price || sampleRoom.Price);
  console.log(price);
  const handleClose = () => {
    dispatch(RoomActions.setPreviewItem(!previewItem));
    dispatch(RoomActions.setPreviewedRoom());
  };

  const BookRoom = async () => {
    try {
      await axios.post(
        `${`https://${baseurl}.cranesoftapp.com/api/v1/Reservation/Create`}`,
        {
          guestName: FirstName.concat(LastName),
          Title: "Mr",
          Email: Email,
          Phone: Phone,
          Address: Address,
          branch: Branch,
          City: "",
          State: "",
          Country: "",
          ZipCode: "",
          Sex: "",
          Image: "",
          passimage: "",
          passtype: "",
          passcity: "",
          passcountry: "",
          passno: "",
          passexpire: "",
          billto: "Guest",
          blacklist: "",
          guesttypeid: "",
          Note: "",
          CheckInDate: CheckIn,
          CheckOutDate: CheckOut,
          roomtype: sampleRoom.RoomTypeId,
          ratetype: sampleRoom.RoomTypeId,
          AdultNo: Adult,
          ChildNo: Kids,
          Rate: sampleRoom.Price,
          paid_amount: "",
          reservetype: "",
          BookingSource: "",
          BusinessSource: "",
          AgentId: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location.href = "/";
    } catch (err) {
      console.log(`Error fetching data: ${err}`);
    }
  };

  const componentProps = {
    email: Email,
    amount: price * 100,
    metadata: {
      FirstName,
      Phone,
    },
    publicKey,
    text: "Pay now",
    onSuccess: () => {
      BookRoom()
        .then(() => {
          dispatch(RoomActions.setFirstName(""));
          dispatch(RoomActions.setLastName(""));
          dispatch(RoomActions.setPhone(""));
          dispatch(RoomActions.setEmail(""));
          dispatch(RoomActions.setAddress(""));
          dispatch(RoomActions.setKid());
          dispatch(RoomActions.setAdult());
          alert("Thanks for doing business with us! Come back soon!!");
          window.location.href = "/";
        })
        .catch((err) => {
          console.log(`Error booking room: ${err}`);
        });
    },
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex z-50">
      <div className="w-[600px] max-md:w-[100%] flex flex-col mx-auto mt-10">
        <div className="bg-white px-12 py-10 max-md:p-2 max-md:pt-12 rounded">
          <button
            className="flex items-center gap-x-2 pointer"
            onClick={handleClose}
          >
            <div className="text-accent">
              <BsArrowBarLeft className="text-[30px]" />
            </div>
            <h2>Back</h2>
          </button>
          <div className="text-center">
            <h2 className="text-accent">Summary of booking</h2>
          </div>

          <div className="flex flex-col gap-1 p-5 max-md:py-10">
            <div className="flex justify-between items-center">
              <p className="text-zinc-500 font-bold my-1">Room Name </p>
              <h2 className="">{sampleRoom.RoomTypeName}</h2>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-zinc-500 font-bold my-1">Branch</p>
              <h2 className="">{Branch}</h2>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-zinc-500 font-bold my-1">CheckIn </p>
              <h2 className="">
                {CheckIn.toLocaleString(undefined, dateOptions)}
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-zinc-500 font-bold my-1">CheckOut</p>
              <h2 className="">
                {CheckOut.toLocaleString(undefined, dateOptions)}
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-zinc-500 font-bold my-1">Price</p>

              <h2 className="">₦ {price}</h2>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-zinc-500 font-bold my-1">Number of Guest</p>

              <h2 className="">{TotalGuest}</h2>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-zinc-500 font-bold my-1">Name</p>
              <h2 className="">{Name}</h2>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-zinc-500 font-bold my-1">Email</p>
              <h2 className="">{Email}</h2>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-zinc-500 font-bold my-1">Phone</p>
              <h2 className="">{Phone}</h2>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-zinc-500 font-bold my-1">Address</p>
              <h2 className="">{Address}</h2>
            </div>
          </div>
          <div className="text-center text-gray-600">
            <h5>Terms and condition</h5>
            <p>
              Book and hold secure a room but Payment only guarantee booking{" "}
            </p>
          </div>

          <div className="flex justify-between items-center gap-5 mt-5">
            {/* <button className="btn btn-lg btn-primary mx-auto">Cancel</button> */}
            <button
              className="btn btn-lg btn-primary mx-auto"
              onClick={BookRoom}
            >
              Book and hold
            </button>
            {/* <button className="btn btn-lg btn-primary mx-auto" onClick={Paynow}>
							Pay Now
						</button> */}
            <PaystackButton
              className="btn btn-lg btn-primary mx-auto"
              {...componentProps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewBooking;
