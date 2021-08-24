import {createStore,combineReducers} from 'redux';
import Reducer from './Reducer';

const RootReducer = combineReducers({Reducer});

const store = createStore(RootReducer);

export default store