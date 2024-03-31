import { ResponseType } from "../constants";
import events from "./events";

const initialState = {
	getUserListDataCompleted: null,
	userList: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case events.GET_USER_LIST_FULFILLED:
			return {
				...state,
				getUserListDataCompleted: ResponseType.FULFILLED,
				userList: action.payload.data 
			};
		case events.GET_USER_LIST_REJECTED:
			return {
				...state,
				getUserListDataCompleted: ResponseType.REJECTED
			};
		case events.CLEAR_GET_USER_LIST:
			return {
				...state,
				getUserListDataCompleted: null
			};
		default:
			return state;
	}
};
export default reducer;
