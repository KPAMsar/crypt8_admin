import axios from "axios";
import api from "../../../lib/axios";
import { URL } from "../../../lib/params";
import { token } from "../../../lib/params";
import { CryptoCurrencyRes } from "../../../pages/Dashboard/dashboardCryptoCurrency";

export const getCryptoCurrency = async () => {
  try {
    const response = await api.get(`${URL}/list-crypto-currencies`);
    // console.log('response',response.data) ;

    const { data }: { data: CryptoCurrencyRes } = response;
    return data;
  } catch (error) {
    console.error("Error fetching crypto currency:", error);
    throw error;
  }
};


export const addCryptoCurrency = async (payload)=>{
  try{
    const {data} = await api.post(`${URL}/add-crypto-currency`,payload,{headers:{
      'Content-Type':'multipart/form-data',
    }});
    console.log(data)
  } catch(error){
    console.error("Error fetching crypto currency:", error);
    throw error;
  }
}


export const updateCryptoCurrency = async(payload, id) =>{
  try{
      const {data} = await api.post(`${URL}/modify-crypto-currency/${id}`,{name:payload});
      return data
      
    } catch(error){
      console.error("Error fetching crypto currency:", error);
      throw error;
    }
}


export const deleteCryptoCurrency = async(payload) =>{

  try{
      const {data} = await api.delete(`${URL}/delete-crypto-currency`,{ data: { cryptoId: payload } });
      return data;
     
    } catch(error){
      console.error("Error fetching crypto currency:", error);
      throw error;
    }
}
