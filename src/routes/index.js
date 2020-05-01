import Sheet from '../components/Sheet.vue';
import Entry from '../components/Entry.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  { path: '/', component: Entry, props: { showHeader: false } },
  { path: '/sheet', component: Sheet, props: { showHeader: true } },
  { path: '*', component: NotFound, props: { showHeader: false } },
];

export default routes;
