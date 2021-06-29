<template>
    <nav>
        <h2>Home</h2>
        <!-- active-classはURLにそれが含まれている間はずっとactiveにする -->
        <!-- exact属性をつけるとURLが一致しないとactiveにならない -->
        <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
        <router-link to="/users" class="link" active-class="link--active" exact>Users</router-link>
        <button @click="increment(1)">+1</button>
        <button @click="decrement(1)">-1</button>
    </nav>
</template>

<script>
import { mapMutations } from "vuex";

export default ({
  methods: {
    // actionsを用いる場合、dispatchを使う
    // increment(){
    //   this.$store.dispatch("increment", 2)
    // },
    // 引数はtemplateの方に書く
    ...mapMutations(["increment", "decrement"]),
    // increment() {
    //   // mutationsをcommitで持ってくる
    //   // this.$store.commit("increment", 1);
    //   // mutationsを使わない場合(推奨されない)
    //   // this.$store.state.count++;
    // },
    // decrement() {
    //   // this.$store.commit('decrement', 1);
    //   // this.$store.state.count--;
    // },
  },
  // 非同期の処理を加えたい場合、mutations内ではできないので、actionsを用いる
  // actions: {
  //   increment(context, number) {
  //     context.commit("increment", number);
  //   },
  //   incrementAsync(context) {
  //     setTimeout(() => {
          // 処理
  //     }, 1000)
  //   }
  // }
})
</script>


<style scoped>
  .link {
    margin-right: 10px;
  }
  .link--active {
    font-size: 20px;
  }
</style>