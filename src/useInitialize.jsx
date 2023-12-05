import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RoomActions } from "./Redux/Slice/RoomSlice";
import { CompanyActions } from "./Redux/Slice/Company_dtl";
import { useParams } from "react-router-dom";

const Initialize = () => {
	const dispatch = useDispatch();
	const [token, setToken] = useState();
	const { m_id } = useParams();

	const T_URL = extractSubDomainFromURL();

	const base_URL = `http://${T_URL}.cranesoft-hotel.com`;

	function extractSubDomainFromURL() {
		try {
			const parsedURL = new URL(window.location.href);
			const hostnameParts = parsedURL.hostname.split(".");

			if (hostnameParts.length >= 2) {
				return hostnameParts[0];
			} else {
				return null;
			}
		} catch (error) {
			console.error("Error extracting subdomin:", error);
			return null;
		}
	}

	const tokenDetails = async () => {
		try {
			const response = await axios.get(`${base_URL}/tenantApiToken`);

			// const token = response.data.apiToken;
			// setToken(token);
			// dispatch(CompanyActions.setAuthToken(`Bearer ${token}`));
			// await companyDetails(token);
			// await rooms(token);
			// await Reservation(token);
		} catch (error) {
			console.warn(error);
		}
	};

	const companyDetails = async (token) => {
		// dispatch(RoomActions.setLoading(true));

		try {
			const response = await axios.get(`${base_URL}/api/v1/salespointLandingPage/${m_id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(response);
			// dispatch(CompanyActions.setCompanyName(response.data.company_name));
			// dispatch(CompanyActions.setAuthToken(`Bearer ${token}`));
			// dispatch(CompanyActions.setC_URL(response.data.currentDomain[0].domain));
			// dispatch(CompanyActions.setM_ID(m_id));
			// dispatch(CompanyActions.setT_ID(response.data.company.tenantId));
		} catch (error) {
			console.log(error);
		}
	};

	const rooms = async (token) => {
		try {
			const response = await axios.get(`${base_URL}/api/v1/RoomsLandingPage`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(response);
			dispatch(RoomActions.setAllRooms(response.data.roomsInfo));
		} catch (error) {
			console.log(error);
		}
	};

	const Reservation = async (token) => {
		try {
			const response = await axios.get(`${base_URL}/api/v1//Reservation/Create`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			dispatch(RoomActions.setBooking(response.data.roomInfo));
		} catch (error) {
			console.log(error);
		}
	};
	return { getTokenDetails: tokenDetails };
};

export default Initialize;
