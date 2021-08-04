import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cakeReducer from "./cakes/cakeReducer";
import IceCreamReducer from "./iceCream/iceCreamReduce";
import rootReducer from "./root";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store;