import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const countOptions = {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        
        JIA(state, value) {
            console.log(state, value, 'mutations');
            state.sum += value;
        },
        JIAN(state, value) {
            state.sum -= value;
        },

    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',

    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        },

    },
}
const personOptions = {
    namespaced: true,
    actions: {},
    mutations: {
        addPerson(state, value) {
            state.personList.unshift(value)
        },

    },
    state: {
        personList: [
            { id: '001', name: '张三' },
        ],

    },
    getters: {},
}

export default new Vuex.Store({
    modules: {
        countAbout:countOptions,
        personAbout:personOptions,
    },
})