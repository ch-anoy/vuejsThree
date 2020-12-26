import { createApp } from "vue";
import App from "./App.vue";
import Home from "./components/pages/Home.vue";
import post2 from "./components/pages/post2.vue";
import CreatePost from "./components/pages/CreatePost.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        component:Home,
    },
    {
        path:'/posts',
        component:post2,
    },
    {
        path:'/createposts',
        component:CreatePost,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
