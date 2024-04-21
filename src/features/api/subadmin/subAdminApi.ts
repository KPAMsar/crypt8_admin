import api from "../../../lib/axios";
import { URL } from "../../../lib/params";
import { subAdminRes } from "./subAdminModel";
import { SubAdminSingleRes } from "./subAdminModel";


export const getAllSubAdmin = async () => {
    try {
      const response = await api.get(`${URL}/list-users`);
      const { data }: { data: SubAdminSingleRes } = response;
      return data;
    } catch (error) {
      console.error("Error fetching crypto currency:", error);
      throw error;
    }
  };
  
  export const updateUserTag = async () => {
    try {
      const response = await api.patch(`${URL}/update-user-tag`, {});
      const { data }: { data: subAdminRes } = response;
      return data;
    } catch (error) {
      console.error("Error fetching crypto currency:", error);
      throw error;
    }
  };
  
  export const updateUserWallet = async () => {
    try {
      const response = await api.patch(`${URL}/update-user-wallet`, {});
      const { data }: { data: subAdminRes } = response;
      return data;
    } catch (error) {
      console.error("Error fetching crypto currency:", error);
      throw error;
    }
  };
  
  
  export const updateUserRateClass = async ()=>{
  
      try {
          const response = await api.patch(`${URL}/update-user-rate-class`, {});
          const { data }: { data: subAdminRes } = response;
          return data;
        } catch (error) {
          console.error("Error fetching crypto currency:", error);
          throw error;
        }
  }
  
  export const updateUserStatus = async ()=>{
  
      try {
          const response = await api.patch(`${URL}/update-user-status`, {});
          const { data }: { data: subAdminRes } = response;
          return data;
        } catch (error) {
          console.error("Error fetching crypto currency:", error);
          throw error;
        }
  }
  
  
  