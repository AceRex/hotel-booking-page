import { createSlice } from "@reduxjs/toolkit";

const CompanySlice = createSlice({
  name: "company",
  initialState: {
    company_name: "",
    company_email: "",
    company_mobile: "",
    company_website: "",
    company_city: "",
    company_state: "",
    company_country: "",
    address: "",
    motto: "",
    c_url: "",
    auth_token: "",
    m_id: "",
    baseUrl: "",
    isPaystack: "",
    publickey: "",
    payment: [],
    logo: "",
    favicon: "",
    facebook: "",
    twitterX: "",
    instagram: "",
  },
  reducers: {
    setCompanyName: (state, action) => {
      state.company_name = action.payload;
    },
    setCompanyEmail: (state, action) => {
      state.company_email = action.payload;
    },
    setCompanyMobile: (state, action) => {
      state.company_mobile = action.payload;
    },
    setCompanyWebsite: (state, action) => {
      state.company_website = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setCity: (state, action) => {
      state.company_city = action.payload;
    },
    setState: (state, action) => {
      state.company_state = action.payload;
    },
    setCountry: (state, action) => {
      state.company_country = action.payload;
    },
    setMotto: (state, action) => {
      state.motto = action.payload;
    },
    setC_URL: (state, action) => {
      state.c_url = action.payload;
    },
    setAuthToken: (state, action) => {
      state.auth_token = action.payload;
    },
    setBaseUrl: (state, action) => {
      state.baseUrl = action.payload;
    },
    setM_id: (state, action) => {
      state.m_id = action.payload;
    },
    setIspaystack: (state, action) => {
      state.isPaystack = action.payload;
    },
    setPublicKey: (state, action) => {
      state.publickey = action.payload;
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setLogo: (state, action) => {
      state.logo = action.payload;
    },
    setFavicon: (state, action) => {
      state.favicon = action.payload;
    },
    setFacebook: (state, action) => {
      state.facebook = action.payload;
    },
    setInstagram: (state, action) => {
      state.instagram = action.payload;
    },
    setTwitterX: (state, action) => {
      state.twitterX = action.payload;
    },
  },
});

export const CompanyActions = CompanySlice.actions;

export default CompanySlice;
