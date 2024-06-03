import { useSelector } from "react-redux";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { HiGlobeAlt } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const Logo = useSelector((state) => state.company.logo);
  const baseUrl = useSelector((state) => state.company.baseUrl);
  const company_name = useSelector((state) => state.company.company_name);
  const motto = useSelector((state) => state.company.motto);
  const facebook = useSelector((state) => state.company.facebook);
  const twitterX = useSelector((state) => state.company.twitterX);
  const instagram = useSelector((state) => state.company.instagram);
  const address = useSelector((state) => state.company.address);
  const city = useSelector((state) => state.company.company_city);
  const state = useSelector((state) => state.company.company_state);
  const country = useSelector((state) => state.company.company_country);
  const email = useSelector((state) => state.company.company_email);
  const mobile = useSelector((state) => state.company.company_mobile);
  const website = useSelector((state) => state.company.company_website);

  return (
    <>
      <footer className="w-[100vw] px-5 py-10 bg-primary text-accent ">
        <div className="w-[90%] m-auto flex min-md:flex-row max-md:flex-col min-md:justify-between max-md:items-center min-md:place-content-center min-md:items-start">
          <div className="min-md:border-r min-md:w-[20%] max-md:w-[50%]">
            <img
              src={`${baseUrl}/storage/uploads/logo/${Logo}`}
              alt="Logo"
              className="min-md:w-[250px] max-md:w-[200px]"
            />
          </div>
          <div className="min-md:text-left max-md:text-center min-md:w-[40%] max-md:mt-4 text-white min-md:pl-7">
            <p className="font-bold tracking-wide min-md:text-xl max-md:text-2xl capitalize text-white">
              {company_name}
            </p>
            <p className="font-light text-sm capitalize">{motto}</p>
          </div>
          <div className="min-md:w-[40%] max-md:w-[100%] max-md:mt-4 text-white flex flex-col min-md:text-end min-md:tems-end min-md:place-content-end min-md:content-end max-md:items-center max-md:place-content-center max-md:content-end">
            <p>
              {address}
              {" , "}
              {city}
              {" , "} {state}
              {" , "}
              {country}
            </p>
            <p>{mobile}</p>
            <div className="flex flex-row w-[100%] text-white justify-center gap-4 mt-3">
              {facebook !== "" && (
                <a href={`https://${facebook}`}>
                  <FaFacebookSquare size={20} />
                </a>
              )}
              {instagram !== "" && (
                <a href={`https://${instagram}`}>
                  <RiInstagramFill size={20} />
                </a>
              )}
              {twitterX !== "" && (
                <a href={`https://${twitterX}`}>
                  <RiTwitterXFill size={20} />
                </a>
              )}
              {website !== "" && (
                <a href={`https://${website}`}>
                  <HiGlobeAlt size={20} />
                </a>
              )}
              {email !== "" && (
                <a href={`mailto:${email}`}>
                  <HiOutlineMail size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </footer>
      <footer className="w-[100vw] p-3 text-center">
        Powered by{" "}
        <a href="http://cranesoft.com" rel="noreferrer" target="_blank">
          Cranesoft
        </a>{" "}
        &copy; 2024
      </footer>
    </>
  );
}
