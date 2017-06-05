import Vue from 'vue';
import Router from 'vue-router';
import App from '@/components/app';
import Empty from '@/components/empty';
import SignIn from '@/components/signIn';
import SignUp from '@/components/signUp';
import UpdateCatProfil from '@/components/updateCatProfil';
import UpdateCatImage from '@/components/updateCatImage';
import myCatMap from '@/components/myCatMap';
import myCatsMap from '@/components/myCatsMap';
import catinder from '@/components/catinder';

Vue.use(Router);

const routes = [
  { path: '/', component: Empty },
  { path: '/signIn', component: SignIn },
  { path: '/signUp', component: SignUp },
  { path: '/signOut', component: Empty },
  { path: '/app', component: App },
  { name: 'updateCat', path: '/updateCat', component: UpdateCatProfil, props: true },
  { path: '/updateCatImage/:catId', component: UpdateCatImage, props: true },
  { name: 'myCatsMap', path: '/myCatsMap', component: myCatsMap, props: true },
  { name: 'myCatMap', path: '/myCatMap/:catId', component: myCatMap, props: true },
  { name: 'catinder', path: '/catinder/:catId', component: catinder, props: true },
];

const router = new Router({
  routes,
});

export default router;
