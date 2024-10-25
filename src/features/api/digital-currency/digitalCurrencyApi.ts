import api from "../../../lib/axios";
import { DigitalCurrencyRes} from "./digitalCurrencyModel";
import { URL } from "../../../lib/params";



export const getDigitalCurrency = async () => {
    try {
      const response = await api.get(`${URL}/list-crypto-currencies`);
      
  
      const { data }: { data: DigitalCurrencyRes } = response;
      return data;
    } catch (error) {
      console.error("Error fetching crypto currency:", error);
      throw error;
    }
  };
  
  
  export const addDigitalCurrency = async (payload)=>{
    try{
      const {data} = await api.post(`${URL}/add-digital-currency`,payload,{headers:{
        'Content-Type':'multipart/form-data',
      }});
      console.log(data)
    } catch(error){
      console.error("Error fetching crypto currency:", error);
      throw error;
    }
  }
  
  export const updateDigitalCurrency = async(payload, id) =>{
    try{
        const {data} = await api.post(`${URL}/modify-digital-currency/${id}`,{name:payload});
        console.log(data)
      } catch(error){
        console.error("Error fetching crypto currency:", error);
        throw error;
      }
  }
  
  
  
  export const deleteDigitalCurrency = async(payload) =>{

    try{
        const {data} = await api.delete(`${URL}/delete-digital-currency`,{ data: { digitalId: payload } });
        return data;
       
      } catch(error){
        console.error("Error fetching crypto currency:", error);
        throw error;
      }
  }

  
  
  