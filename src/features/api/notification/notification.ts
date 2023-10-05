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

export const deleteNotifications = async(id) =>{

  try{
    const response = await api.delete(`${URL}/delete-notification`, { data:{
      notificationId: id
    }});
    return response;
  }
  catch (error) {
    console.log('error',error?.message);
    throw error;
  }
}

export const addNotification = async({subject, message})=>{
  try{
    const response = await api.post(`${URL}/create-notification`, {
      subject,
      message
    });
    return response;
  }
  catch (error) {
    console.log('error',error?.message);
    throw error;
  }
}