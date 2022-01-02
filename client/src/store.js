import { createStore , combineReducers , applyMiddleware} from "redux";
import thunk from "redux-thunk" ;
import { composeWithDevTools } from "redux-devtools-extension" ;

import UserReducer from "./reducers/UserReducer" ;

const middleware = [thunk] ;

const store = createStore(
    UserReducer , 
    {} , 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store ; 

//store creation
//reducer create(init state)

