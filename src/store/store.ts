import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

/* 
  하나의 어플리케이션은 오직 하나의 스토어만 가져야한다.
  createStore는 현재 deprecated 되었고, redux toolkit을 사용하는 것을 권장한다.
*/

const isProduction = process.env.NODE_ENV === "production";

const middlewares: [] = [];

const makeStore = () => {
  const enhancer = isProduction
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancer);
  return store;
};

const reduxWrapper = createWrapper(makeStore, { debug: !isProduction });

export default reduxWrapper;
