import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import GlobalComponent from "./components/GlobalComponent.vue";
createApp(App)
  .component("GlobalComponent", GlobalComponent)
  .use(router)
  .mount("#app");
