import Vue from 'vue';
import Vuex from 'vuex';
import count from "./modules/count";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        message: "",
    },
    getters,
    // mutationsを通して、stateの値を変えるようにする(推奨)
    mutations,
    // 非同期の処理を加えたい場合、mutations内ではできないので、actionsを用いる
    actions,
    modules: {
        count,
    }
});