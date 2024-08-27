import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { withExtraArgument, thunk} from 'redux-thunk';
import projectsReducer from './projectsRedux';


// combine reducers
const rootReducer = combineReducers({
  projects: projectsReducer,
 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(withExtraArgument(thunk))));

export default store;