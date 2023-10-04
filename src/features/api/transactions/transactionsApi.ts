import api from "../../../lib/axios";
import { URL } from "../../../lib/params";
import { TransactionRes } from "./transactionsModel";

export const listTransacations = async ()=>{
   

    try {
        const response = await api.get(`${URL}/list-notifications`);
    
        const { data }: { data:TransactionRes } = response;
        return data;
      } catch (error) {
        console.error("Error fetching crypto currency:", error);
        throw error;
      }

}