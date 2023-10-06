import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/Login.vue';
import TodoList from '@/components/TodoList.vue';
import Timer from '@/components/Timer.vue';
import GitProfile from '@/components/GitProfile.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/todo-list', component: TodoList },
  { path: '/timer', component: Timer },
  { path: '/git-profile', component: GitProfile },
];

const router = new VueRouter({
  routes,
});

export default router;
