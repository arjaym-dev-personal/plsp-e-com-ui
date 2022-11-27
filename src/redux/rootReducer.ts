import { combineReducers } from "@reduxjs/toolkit";
import storeSlice from "./slice/storeSlice";

const rootReducer = combineReducers({
    store: storeSlice,
});

export default rootReducer;
