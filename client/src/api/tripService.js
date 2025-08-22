import axios from "axios";

const API_URL = "http://localhost:4001/trips";

export async function getTrips(keyword = "") {
  const response = await axios.get(`${API_URL}?keywords=${keyword}`);
  return response.data.data;
}
