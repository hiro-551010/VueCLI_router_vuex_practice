<template>
    <div>
        <h3>Home</h3>
        <button @click="toUsers">UsersProfileのページにいく</button>
        <p>{{ count }}</p>
        <p>{{ doubleCount }}</p>
        <p>{{ tripleCount }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(["doubleCount", "tripleCount"]),
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