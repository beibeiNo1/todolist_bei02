import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const actions = {
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
    },
};
const mutations = {
    JIA(state,value){
        console.log(state,value,'mutations');
        state.sum += value;
    },
    JIAN(state,value){
        state.sum -= value;
    },

};
const state = {
    sum: 0,
    
};
const getters = {
    bigSum(state){
        return state.sum*10
    },
};
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})