import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';

// Enabling redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Combine Reducers
const rootReducer = combineReducers({
  auth: authReducer
});

// STORE CREATION & Export
export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
  );

  return store;
}; 