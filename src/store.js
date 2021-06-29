import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 2
    },
    getters: {
        doubleCount: state => state.count * 2,
        tripleCount: state => state.count * 3,
    },
    // mutationsを通して、stateの値を変えるようにする(推奨)
    mutations: {
        increment(state, number) {
            state.count += number;
        },
        decrement(state, number) {
            state.count -= number;
        }
    },
    // 非同期の処理を加えたい場合、mutations内ではできないので、actionsを用いる
    actions: {
        increment(context, number) {
            context.commit("increment", number);
        },
        decrement(context, number) {
            context.commit("decrement", number);
        },
        // numberAsync() {
        //     setTimeout(() => {
                // 処理
        //     }, 3000);
        // }
    }
});