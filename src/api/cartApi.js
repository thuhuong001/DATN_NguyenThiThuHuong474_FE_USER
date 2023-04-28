import axiosClient from "./axiosClient";
export class cartApi{
    cartNumber = (params) =>{
        try{
            return axiosClient.get("Cart/cart-number/customerId="+params);
        }catch(error){
            console.log(error);
        }
    };
}
export default cartApi;