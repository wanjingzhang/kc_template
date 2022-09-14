import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
// 导入vue-axios模块
import VueAxios from "vue-axios";
import axios from "axios";

import App from "./App.vue";
import "./assets/css/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(ElementPlus);
app.use(VueAxios, axios);

app.mount("#app");
