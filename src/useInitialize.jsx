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
      console.log(response.data.companyInfo);
      dispatch(RoomActions.setError(response.message));
      dispatch(RoomActions.setData(response.data.roomsInfo));
      dispatch(CompanyActions.setM_id(response.data.companyInfo.tenantId));
      dispatch(
        CompanyActions.setCompanyName(response.data.companyInfo.company_name)
      );
      dispatch(CompanyActions.setCompanyEmail(response.data.companyInfo.email));
      dispatch(
        CompanyActions.setCompanyMobile(response.data.companyInfo.mobile)
      );
      dispatch(
        CompanyActions.setCompanyWebsite(response.data.companyInfo.website)
      );
      dispatch(CompanyActions.setMotto(response.data.companyInfo.motto));
      dispatch(CompanyActions.setCity(response.data.companyInfo.city));
      dispatch(CompanyActions.setState(response.data.companyInfo.state));
      dispatch(CompanyActions.setCountry(response.data.companyInfo.country));
      dispatch(CompanyActions.setFacebook(response.data.companyInfo.facebook));
      dispatch(
        CompanyActions.setInstagram(response.data.companyInfo.instagram)
      );
      dispatch(CompanyActions.setTwitterX(response.data.companyInfo.twitter));
      dispatch(CompanyActions.setAddress(response.data.companyInfo.address));
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
      const res = data.find((item) => item.Name === "logo");
      const logoValue = res ? res.Value : null;
      dispatch(CompanyActions.setLogo(logoValue));
    } catch (error) {
      console.log(error);
    }
  };
  return { getTokenDetails: tokenDetails };
};

export default Initialize;
