import api from "../../../lib/axios";
import { GiftCardCurrencyRes } from "./giftCardModel";
import { URL } from "../../../lib/params";

export const getGiftCardCurrency = async () => {
    try {
      const response = await api.get(`${URL}/list-gift-card`);
      
  
      const { data }: { data: GiftCardCurrencyRes } = response;
      return data;
    } catch (error) {
      console.error("Error fetching crypto currency:", error);
      throw error;
    }
  };
  
  
  export const addGiftCardCurrency = async (payload)=>{
    try{
      const {data} = await api.post(`${URL}/add-gift-card`,payload,{headers:{
        'Content-Type':'multipart/form-data',
      }});
      console.log(data)
    } catch(error){
      console.error("Error fetching crypto currency:", error);
      throw error;
    }
  }
  
  export const updateGiftCards = async(payload, id) =>{
    try{
        const {data} = await api.post(`${URL}/modify-gift-card/${id}`,{name:payload},{headers:{
          'Content-Type':'multipart/form-data',
        }});
        return data
        
      } catch(error){
        console.error("Error fetching crypto currency:", error);
        throw error;
      }
  }
  
  
  export const deleteGiftCards = async(payload) =>{

    try{
        const {data} = await api.delete(`${URL}/delete-gift-card`,{ data: { cardId: payload } });
        return data;
       
      } catch(error){
        console.error("Error fetching crypto currency:", error);
        throw error;
      }
  }

  
  
  