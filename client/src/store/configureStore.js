import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducer as reduxForm } from 'redux-form';
import authReducer from '../reducers/authReducer';
import surveysReducer from '../reducers/surveysReducer';

// Enabling redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Combine Reducers
const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});

// STORE CREATION & Export
export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
  );

  return store;
}; 