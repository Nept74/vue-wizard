import {createRouter, createWebHistory} from 'vue-router';
import TaskName from "@/views/TaskName";
import TaskDescription from "@/views/TaskDescription";
import TaskExecutor from "@/views/TaskExecutor";
import TaskTime from "@/views/TaskTime";
import TaskPage from "@/views/TaskPage";

const routes = [
    {
        path: '/',
        component: TaskName,
        name: 'TaskName'
    },
    {
        path: '/description',
        component: TaskDescription,
        name: 'TaskDescription'
    },
    {
        path: '/executor',
        component: TaskExecutor,
        name: 'TaskExecutor'
    },
    {
        path: '/time',
        component: TaskTime,
        name: 'TaskTime'
    },
    {
        path: '/page',
        component: TaskPage,
        name: 'TaskPage'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router