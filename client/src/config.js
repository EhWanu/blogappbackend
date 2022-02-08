import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://biatablog.herokuapp.com/api/",
});
