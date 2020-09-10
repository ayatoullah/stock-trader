
import {createStore} from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';



const store = createStore({
    getters,
    mutations,
    actions,
  
});
export default store;