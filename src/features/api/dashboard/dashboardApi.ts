import api from "../../../lib/axios";
import { dashboardRes } from "./dashboardModel";
import { URL } from "../../../lib/params";



export const getUserDashboard = async () => {
    try {
      const response = await api.get(`${URL}/show-admin-dashboard`);
      
  
      const { data }: { data:dashboardRes } = response;
      return data;
    } catch (error) {
      console.error("Error fetching crypto currency:", error);
      throw error;
    }
  };
  