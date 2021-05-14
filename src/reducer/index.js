import {combineReducers} from 'redux';
import modalLogin from './modalLogin';
import cart from './cart'
import user from './user'
import siderbarOrder from './sidebarOrder'
import order from './order'
const reducer=combineReducers({
    modalLogin,
    cart,
    user,
    order,
    siderbarOrder,
})

export default reducer;
