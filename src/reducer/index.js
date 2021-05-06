import {combineReducers} from 'redux';
import modalLogin from './modalLogin';
import cart from './cart'
const reducer=combineReducers({
    modalLogin,
    cart,
})

export default reducer;
