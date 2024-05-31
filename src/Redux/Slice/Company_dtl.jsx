import { createSlice } from "@reduxjs/toolkit";

const CompanySlice = createSlice({
  name: "company",
  initialState: {
    company_name: "",
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
  },
  reducers: {
    setCompanyName: (state, action) => {
      state.company_name = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
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
  },
});

export const CompanyActions = CompanySlice.actions;

export default CompanySlice;
