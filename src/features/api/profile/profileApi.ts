import api from "../../../lib/axios";
import { URL } from "../../../lib/params";
import { ProfileRes } from "./profileModel";

export const listAllProfile = async () => {
  try {
    const response = await api.get(`${URL}/list-sub-admins`);

    const { data }: { data: ProfileRes } = response;
    return data;
  } catch (error) {
    console.error("Error fetching crypto currency:", error);
    throw error;
  }
};



export const addProfile = async (payload) => {
  try {
    const response = await api.post(`${URL}/add-sub-admin`,{...payload});

    const { data }: { data: ProfileRes } = response;
    return data;
  } catch (error) {
    console.error("Error fetching crypto currency:", error);
    throw error;
  }
};
