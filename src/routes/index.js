import Sheet from '../components/Sheet.vue';
import Entry from '../components/Entry.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  { path: '/', component: Entry },
  { path: '/sheet', component: Sheet },
  { path: '*', component: NotFound },
];

export default routes;
