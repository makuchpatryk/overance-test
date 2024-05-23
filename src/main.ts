import "./style.css";

import App from "./App.vue";
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "./presets/aura";
import { createPinia } from "pinia";
import ToastService from "primevue/toastservice";

const pinia = createPinia();

const app = createApp(App);
app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
});
app.use(pinia);
app.use(ToastService);

app.mount("#app");
