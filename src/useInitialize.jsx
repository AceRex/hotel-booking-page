import axios from "axios";
// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RoomActions } from "./Redux/Slice/RoomSlice";
import { CompanyActions } from "./Redux/Slice/Company_dtl";
// import { useParams } from "react-router-dom";

const Initialize = () => {
	const dispatch = useDispatch();
	// const [token, setToken] = useState();
	// const { m_id } = useParams();

	const T_URL = extractSubDomainFromURL();

	const base_URL = `https://${T_URL}.cranesoft-hotel.com`;

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
			const token = response.data.tenantAPIToken;

			dispatch(CompanyActions.setAuthToken(response.data.tenantAPIToken));

			await companyDetails(token);
		} catch (error) {
			console.warn(error);
		}
	};

	const companyDetails = async (token) => {
		// dispatch(RoomActions.setLoading(true));

		try {
			const response = await axios.get(`${base_URL}/api/v1/RoomsLandingPage`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(response);
			dispatch(RoomActions.setError(response.message));

			dispatch(RoomActions.setData(response.data.roomsInfo));
		} catch (error) {
			const errorMessage = error.response ? error.response.data.message : "An error occurred";
			dispatch(RoomActions.setError(errorMessage));
		} finally {
			dispatch(RoomActions.setLoading(false));
		}
	};
	return { getTokenDetails: tokenDetails };
};

export default Initialize;
