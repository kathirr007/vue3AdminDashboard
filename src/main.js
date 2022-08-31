import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from '@formkit/vue'
import App from "./App.vue";
import router from "./router";
import globalComponents from "./global-components";
import utils from "./utils";
import "./assets/css/app.css";
import axios from 'axios'
import VueAxios from 'vue-axios'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
// import Vue from 'vue'
// import Vuelidate from 'vuelidate'

const app = createApp(App).use(router, axios, VueAxios, plugin, defaultConfig).use(createPinia());

app.component('Datepicker', Datepicker);

// const app = Vue.createApp({
//     components: { Datepicker: VueDatePicker },
// }).mount("#app");

globalComponents(app);
utils(app);

app.mount("#app");
