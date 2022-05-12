import { createApp } from "vue";
import App from "@/App.vue";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";
import { createPinia } from "pinia";
import router from "@/router";
import "@/styles/index.scss";

const app = createApp(App);
app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);
app.directive("tooltip", Tooltip);
app.use(createPinia());
app.use(router);
app.mount("#app");
