import { combineReducers } from "redux";
import DataReducer from "../redux/reducer";
const rootReducer = combineReducers({
	dataReducer: DataReducer
	// all reducers
});

export default rootReducer;