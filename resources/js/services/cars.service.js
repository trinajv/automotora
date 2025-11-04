import axios from "axios";

const API_URL = "https://freetestapi.com/api/v1/cars"; // 🔹 usa temporalmente este mock

export const getCars = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener autos:", error);
    return [];
  }
};
