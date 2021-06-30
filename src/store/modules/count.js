const state = {
    count: 2,
};
const getters = {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
};
const mutations = {
    increment(state, number) {
        state.count += number;
    },
    decrement(state, number) {
        state.count -= number;
    },
};
const actions = {
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
};
export default {
    // 名前が一緒でもエラーが起きなくなる。/がつくようになる
    // 例 ["count/doubleCount"]
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};