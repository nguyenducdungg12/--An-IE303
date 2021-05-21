import {combineReducers} from 'redux';
import modalLogin from './modalLogin';
import cart from './cart'
import user from './user'
import siderbarOrder from './sidebarOrder'
import order from './order'
import reply from './reply'
const reducer=combineReducers({
    modalLogin,
    cart,
    user,
    order,
    reply,
    siderbarOrder,
})

export default reducer;
