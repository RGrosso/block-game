import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import VisualMemoryView from "@/views/VisualMemoryView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            title: "Home",
        },
    },
    {
        path: "/visual-memory",
        name: "visualMemory",
        component: VisualMemoryView,
        meta: {
            title: "Visual Memory",
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
