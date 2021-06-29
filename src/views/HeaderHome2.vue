<template>
    <nav>
        <h2>Home</h2>
        <!-- active-classはURLにそれが含まれている間はずっとactiveにする -->
        <!-- exact属性をつけるとURLが一致しないとactiveにならない -->
        <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
        <router-link to="/users" class="link" active-class="link--active" exact>Users</router-link>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </nav>
</template>

<script>

export default ({
  methods: {
        increment() {
            this.$store.dispatch('increment', 1);
        },
        decrement() {
            this.$store.dispatch('decrement', 1);
        }
    }
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