import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "./slices/auth"
import inqueryReducer from "./slices/inquiry"
import usersReducer from "./slices/users"
import vendorReducer from "./slices/vendor"

const rootReducer = combineReducers({
  auth: authReducer,
  inquiry: inqueryReducer,
  users: usersReducer,
  vendor: vendorReducer,
})

export default rootReducer
