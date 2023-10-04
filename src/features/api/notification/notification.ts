import api from "../../../lib/axios";
import { URL } from "../../../lib/params";
import { NoficationRes } from "./notificationModel";

export const listNotifications = async () => {
  try {
    const response = await api.get(`${URL}/list-notifications`);

    const { data }: { data: NoficationRes } = response;
    return data;
  } catch (error) {
    console.error("Error fetching crypto currency:", error);
    throw error;
  }
};
