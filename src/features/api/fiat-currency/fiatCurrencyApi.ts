import api from "../../../lib/axios";
import { FiatCurrencyRes } from "./fiatCurrencyModel";
import { URL } from "../../../lib/params";



export const getFiatCurrency = async () => {
    try {
      const response = await api.get(`${URL}/list-fiat-currencies`);
      
  
      const { data }: { data: FiatCurrencyRes } = response;
      return data;
    } catch (error) {
      console.error("Error fetching crypto currency:", error);
      throw error;
    }
  };
  
  
  export const addFiatCurrency = async (payload)=>{
    try{
      const {data} = await api.post(`${URL}/add-fiat-currency`,payload,{headers:{
        'Content-Type':'multipart/form-data',
      }});
      console.log(data)
    } catch(error){
      console.error("Error fetching crypto currency:", error);
      throw error;
    }
  }

  export const updateFiatCurrency = async(payload, id) =>{
    try{
        const {data} = await api.post(`${URL}/modify-fiat-currency/${id}`,{name:payload});
        console.log(data)
      } catch(error){
        console.error("Error fetching crypto currency:", error);
        throw error;
      }
  }
  
  
  
  export const deleteFiatCurrency = async(payload) =>{

    try{
        const {data} = await api.delete(`${URL}/delete-fiat-currency`,{ data: { cryptoId: payload } });
        return data;
       
      } catch(error){
        console.error("Error fetching crypto currency:", error);
        throw error;
      }
  }

  
  
  