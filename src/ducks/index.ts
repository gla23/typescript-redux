import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CounterReducer from "./counter";

const rootReducer = combineReducers({ counter: CounterReducer });
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, composeWithDevTools());
export default store;
