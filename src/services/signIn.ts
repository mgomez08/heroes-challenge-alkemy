import axios from "axios";
import { BASE_URL_ALKEMY } from "../config";
import { FormLoginValues } from "../types/types";

export const signIn = async (data: FormLoginValues) => {
  const { email, password } = data;
  const url = `${BASE_URL_ALKEMY}`;
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.post(url, { email, password }, { headers });
    return response;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      return error.message;
    }
  }
};
