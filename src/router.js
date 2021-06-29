import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import UsersPosts from './views/UsersPosts.vue'
import UsersProfile from './views/UsersProfile.vue'
import HeaderHome from './views/HeaderHome.vue'
import HeaderUsers from './views/HeaderUsers.vue'
import Home2 from './views/Home2.vue'
import HeaderHome2 from './views/HeaderHome2.vue'

// useはプラグインを適用するという意味
Vue.use(Router);

export default new Router({
    // 基本はURLにhashがついてる /#/
    mode: 'history',

    scrollBehavior() {
        return {
            selector: "#next-user",
            offset: { x: 0, y: 100},
        };
    },
    routes: [
        { 
            path: '/', 
            components: {
                default: Home,
                header: HeaderHome,
            },
            // beforeEachのローカル版
            beforeEnter(to, from, next) {
                next(console.log("home"));
            },
        },
        { 
            path: '/users/:id', 
            components: {
                default: Users,
                header: HeaderUsers,
            }, 
            props: {
                default: true,
                header: false,
            }, 
            children: [
                // childrenのURLの前には/をつけない
                { path: "posts", component: UsersPosts },
                { path: "profile", component: UsersProfile, name:"users-id-profile" }
            ] 
        },
        {
            path:'/home2',
            components: {
                default: Home2,
                header: HeaderHome2,
            }
        },
        {
            path: '*', 
            redirect: "/"
        },
    ]
});


