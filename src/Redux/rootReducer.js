import { combineReducers } from "redux";
import { user_reducer } from "../Containers/Root/reducers";

const rootReducer = combineReducers({
    user: user_reducer
});

export default rootReducer;
