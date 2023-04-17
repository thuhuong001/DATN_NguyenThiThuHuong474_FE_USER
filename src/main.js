import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import clickOutside from './store/clickOutside';
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import store from './store';

const app = createApp(App);
const vuetify = createVuetify({})
app.directive('click-outside', clickOutside);
app.config.globalProperties.$state = store.state;
app.use(router);
app.use(vuetify)
app.mount('#app')
