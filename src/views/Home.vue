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
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(["doubleCount", "tripleCount"]),
        message: {
            get() {
                return this.$store.getters.message;
            },
            set(value) {
                this.$store.dispatch("updateMessage", value);
            }
        },
        count() {
            return this.$store.state.count;
        },
        // doubleCount() {
        //     return this.$store.state.count * 2;
        // },
    },

    methods: {
        toUsers() {
            this.$router.push({
                name: "users-id-profile",
                params: { id: 1 },
            });
        }
    },
}
</script>
