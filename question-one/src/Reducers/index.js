import UserNotesList from "./usernotelists";
import { persistReducer } from "redux-persist"; 
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
    key:'root',
    storage,
    whitelist:'UserNotesList'
}

const reducers = combineReducers({
    UserNotesList
})

export default persistReducer(persistConfig, reducers)