import {combineReducers} from 'redux';
import {registerReducer as register} from './register';
import {transactionReducer as transaction} from './transaction';

export default combineReducers({
    register,
    transaction
});