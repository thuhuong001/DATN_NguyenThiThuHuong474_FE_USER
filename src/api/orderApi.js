import axiosClient from "./axiosClient";

export class orderApi {
  updateStatus = (param) => {
    try {
      return axiosClient.post("Order/update-status", param);
    } catch (error) {
      console.log(error);
    }
  };
}

export default orderApi;
