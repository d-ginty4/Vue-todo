import HomePage from './components/Home.vue'
import DynamicPage from './components/Dynamic.vue'
import ErrorPage from './components/Error.vue'

const routes = [
  { path: "/", component: HomePage },
  { path: "/dynamic/:id", component: DynamicPage },
  { path: '/:catchAll(.*)', component: ErrorPage}
];

export default routes