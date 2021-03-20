import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import messageReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./usersReducer";
import algorithmsReducer from "./algorithms-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from "redux-thunk";
import appReducer from './app-reducer'

const reducers = combineReducers({
  messages: messageReducer,
  profile: profileReducer,
  users: usersReducer,
  algorithms: algorithmsReducer,
  auth: authReducer,
  appReducer: appReducer,
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(ThunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

window.store = store;

export default store;
