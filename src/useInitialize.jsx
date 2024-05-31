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

  const base_URL = `https://${T_URL}.cranesoftapp.com`;

  dispatch(CompanyActions.setBaseUrl(base_URL));

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
      await branchDetails(token);
      await PaymentInfo(token);
      await Settings(token);
    } catch (error) {
      console.warn(error);
    }
  };

  const companyDetails = async (token) => {
    try {
      const response = await axios.get(`${base_URL}/api/v1/RoomsLandingPage`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(RoomActions.setError(response.message));
      dispatch(RoomActions.setData(response.data.roomsInfo));
      dispatch(CompanyActions.setM_id(response.data.companyInfo.tenantId));
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "An error occurred";
      dispatch(RoomActions.setError(errorMessage));
    } finally {
      dispatch(RoomActions.setLoading(false));
    }
  };

  const branchDetails = async (token) => {
    try {
      const response = await axios.get(`${base_URL}/api/v1/Branch`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(RoomActions.setBranchList(response.data));
      dispatch(RoomActions.setBranch(response.data[0].id));
    } catch (error) {
      console.log(error);
    }
  };

  const PaymentInfo = async (token) => {
    try {
      const response = await axios.get(`${base_URL}/api/v1/PaymentInfo`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(CompanyActions.setPayment(response.data));
      dispatch(CompanyActions.setPublicKey(response.data.data[2].Value));
    } catch (error) {
      console.log(error);
    }
  };
  const Settings = async (token) => {
    try {
      const response = await axios.get(`${base_URL}/api/v1/SettingInfo`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data.data;
      const logo = data.find((item) => item.Name === "logo");
      const favicon = data.find((item) => item.Name === "logo");
      const logoValue = logo ? logo.Value : null;
      dispatch(CompanyActions.setLogo(logoValue));
      dispatch(CompanyActions.setFavicon(favicon));

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return { getTokenDetails: tokenDetails };
};

export default Initialize;
