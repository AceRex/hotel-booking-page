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
      <footer className="w-full px-5 py-10 bg-primary text-accent">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start border-b md:border-b-0 md:border-r border-white">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <img
                src={`${baseUrl}/storage/uploads/logo/${Logo}`}
                alt="Logo"
                className="w-40 md:w-60"
              />
            </div>
            <div className="text-center md:text-left md:ml-4 mt-2 text-white">
              <p className="font-bold tracking-wide text-xl md:text-2xl capitalize text-white">
                {company_name}
              </p>
              <p className="font-light text-sm capitalize">{motto}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-white mt-4 md:mt-0">
            <p className="text-center md:text-right">
              {country && `${address}, ${city}, ${state}, ${country}`}
            </p>
            <p className="text-center md:text-right">{mobile}</p>
            <div className="flex justify-center md:justify-end gap-4 mt-3">
              {facebook && (
                <a href={`https://${facebook}`}>
                  <FaFacebookSquare size={20} />
                </a>
              )}
              {instagram && (
                <a href={`https://${instagram}`}>
                  <RiInstagramFill size={20} />
                </a>
              )}
              {twitterX && (
                <a href={`https://${twitterX}`}>
                  <RiTwitterXFill size={20} />
                </a>
              )}
              {website && (
                <a href={`https://${website}`}>
                  <HiGlobeAlt size={20} />
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`}>
                  <HiOutlineMail size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </footer>
      <footer className="w-full p-3 text-center bg-white text-accent">
        Powered by{" "}
        <a
          href="http://cranesoft.com"
          rel="noreferrer"
          target="_blank"
          className="text-black"
        >
          Cranesoft
        </a>{" "}
        &copy; 2024
      </footer>
    </>
  );
}
