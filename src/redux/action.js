import axios from "axios";
// import config from "../../../../../config";
import events from "./events";

export const getUserList = () => ({
	type: events.GET_USER_LIST,
	payload: axios.get("https://jsonplaceholder.typicode.com/users")
});

export const clearGetUserList = () => ({
	type: events.CLEAR_GET_USER_LIST
});