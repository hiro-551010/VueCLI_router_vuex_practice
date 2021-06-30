<template>
    <div>
        <h3>Home</h3>
        <button @click="toUsers">UsersProfileのページにいく</button>
        <p>{{ count }}</p>
        <p>{{ doubleCount }}</p>
        <p>{{ tripleCount }}</p>
        <input type="text" v-model="message" @input="updateMessage">
        <p>{{ message }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        // namespacedがtrueの時は第一引数にとってくるファイルの名前を置く
        ...mapGetters("count", ["doubleCount", "tripleCount"]),
        message() {
            return this.$store.getters.message;
        },
        count() {
            return this.$store.state.count;
        },
        // doubleCount() {
        //     return this.$store.state.count * 2;
        // },
    },

    methods: {
        updateMessage(e) {
            this.$store.dispatch("updateMessage", e.target.value);
        },
        toUsers() {
            this.$router.push({
                name: "users-id-profile",
                params: { id: 1 },
            });
        }
    },
}
</script>