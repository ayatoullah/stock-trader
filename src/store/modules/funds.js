const state={
    funds:10.000
}
const getters={
    [types.FUNDS]: state => {
        return state.funds;
    }
}
//payload=price*quantity
const mutations= {
    [types.MUTATE_INCREMENT_FUNDS]: (state, payload) => {
        state.counter += payload;
    },
    [types.MUTATE_DECREMENT_FUNDS]: (state, payload) => {
        state.counter -= payload;
    }
}
const actions = {
    [types.ACTION_FUNDS_INCREMENT]: ({ commit }, payload) => {
        commit(types.MUTATE_INCREMENT_FUNDS, payload);
    },
    [types.ACTION_FUNDS_DECREMENT]: ({ commit }, payload) => {
        commit(types.MUTATE_DECREMENT_FUNDS, payload);
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}