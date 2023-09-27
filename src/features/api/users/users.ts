import { UserRes } from "./usersModel";
import { URL } from "../../../lib/params";
import api from "../../../lib/axios";

export const getAllUsers = async () => {
  try {
    const response = await api.get(`${URL}/list-users`);
    const { data }: { data: UserRes } = response;
    return data;
  } catch (error) {
    console.error("Error fetching crypto currency:", error);
    throw error;
  }
};

export const updateUserTag = async () => {
  try {
    const response = await api.patch(`${URL}/update-user-tag`, {});
    const { data }: { data: UserRes } = response;
    return data;
  } catch (error) {
    console.error("Error fetching crypto currency:", error);
    throw error;
  }
};

export const updateUserWallet = async () => {
  try {
    const response = await api.patch(`${URL}/update-user-wallet`, {});
    const { data }: { data: UserRes } = response;
    return data;
  } catch (error) {
    console.error("Error fetching crypto currency:", error);
    throw error;
  }
};


export const updateUserRateClass = async ()=>{

    try {
        const response = await api.patch(`${URL}/update-user-rate-class`, {});
        const { data }: { data: UserRes } = response;
        return data;
      } catch (error) {
        console.error("Error fetching crypto currency:", error);
        throw error;
      }
}

export const updateUserStatus = async ()=>{

    try {
        const response = await api.patch(`${URL}/update-user-status`, {});
        const { data }: { data: UserRes } = response;
        return data;
      } catch (error) {
        console.error("Error fetching crypto currency:", error);
        throw error;
      }
}


