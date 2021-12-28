import axios from "axios";
import { BASE_URL_SUPERHERO, ACCESSTOKEN } from "../config.js";

export const getHeroByName = async (name: string) => {
  const url = `${BASE_URL_SUPERHERO}/${ACCESSTOKEN}/search/${name}`;
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  try {
    const response = axios.get(url, { headers });
    return response;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      return error.message;
    }
  }
};
