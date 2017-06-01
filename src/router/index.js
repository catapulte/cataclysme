import Vue from 'vue';
import Router from 'vue-router';
import App from '@/components/app';
import Empty from '@/components/empty';
import SignIn from '@/components/signIn';
import SignUp from '@/components/signUp';
import UpdateCatProfil from '@/components/updateCatProfil';
import UpdateCatImage from '@/components/updateCatImage';


Vue.use(Router);

const routes = [
    { path: '/signIn', component: SignIn },
    { path: '/signUp', component: SignUp },
    { path: '/signOut', component: Empty },
    { path: '/app', component: App },
    { path: '/', component: Empty },
    { path: '/updateCat', component: UpdateCatProfil },
    { path: '/updateCatImage', component: UpdateCatImage },
];

const router = new Router({
  routes,
});

export default router;
