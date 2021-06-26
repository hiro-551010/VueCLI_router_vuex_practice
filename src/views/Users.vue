<template>
    <div>
        <h3>Users</h3>
        <router-link to="/users/1">ユーザー1</router-link>
        <router-link to="/users/2">ユーザー2</router-link>
        <hr>
        <!-- $route.params.idをpropsのidで代用 -->
        <h1>UserNo. {{ id }}</h1>
        <router-link :to=" '/users/'+ (Number(id) + 1)+ '/profile?lang=ja' ">次のユーザー</router-link><br>
        <div style="height:1000px;"></div>
        <router-link id="next-user" :to="{ name: 'users-id-profile', params: { id: (Number(id) + 1)}, query: {lang:'ja', page: 2 } }">次のユーザー</router-link>
        <router-view name="header"></router-view>
        <div style="height:1000px;"></div>
    </div>
</template>

<script>
export default({
    props: ["id"],
    // コンポーネントに指定できる３つのナビゲーションガード
    beforeRouteEnter(to, from, next) {
        console.log("beforeRouteEnter");
        next();
    },
    beforeRouteupdate(to, from, next) {
        console.log("beforeRouteUpdate");
        next();
    },
    beforeRouteLeave(to, from, next) {
        console.log("beforeRouteLeave");
        const isLeave = window.confirm("本当にこのページを離れますか？");
        if ( isLeave ) {
            console.log(isLeave);
            next();
        } else {
            console.log(isLeave);
            next(false);
        }
    },
    // // ライフサイクルフックは利用されない
    // created() {
    //     console.log('created')
    // },
    // // watchを使うと流れがわかる
    // watch: {
    //     $route(to, from) {
    //         console.log(to);
    //         console.log(from);
    //     }
    // }
})
</script>
