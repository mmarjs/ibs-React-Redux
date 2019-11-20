import { combineReducers } from 'redux';
import settings from './settings/reducer';
import chatReducer from "./chat/reducer";
import clientReducer from "./client/reducer";
import contactReducer from "./contacts/";
import emailReducer from "./email/";

const reducers = combineReducers({
    settings,
    chatReducer,
    contactReducer,
    emailReducer,
    allClients: clientReducer
});
export default reducers;
