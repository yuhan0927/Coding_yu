import Vue from 'vue';
import Vuex from 'vuex';
// this 指 vue 全局实例 可以通过 this.$store 可以访问store
Vue.use(Vuex); //(启用Vuex,可拔插的)

const state = {
    count: 0
}

// 改? 修改要管起来 要严谨
const mutations = {
    // 按我的方式来改
    increment (state) {
        state.count++;
    },
    decrement (state) {
        state.count--;
    }
}

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// 组件只能跟actions 交流，
// 组件不可以直接跟state修改交流
const actions = {
    increment: ({commit}) => commit('increment'),
    decrement: ({commit}) => commit('decrement'),
    incrementIfOdd({commit,state}) {
        // 将组件逻辑放到action
        // 是否是奇数
        // state.count = 1;
        if ((state.count + 1) % 2 == 0){
            state.count++
        }
    },
    incrementAsync({commit}){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                commit('increment');
                resolve();
            },2000)
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})