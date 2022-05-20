import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import components from "@/components/ui";
import directives from "@/directives/index";
import router from "@/router/index";
import store from "@/store";
// global mixin & variables
import "@/assets/scss/default/style.scss";
// global fonts
import "@/assets/fonts/Montserrat/style.css";
import "@/assets/fonts/Lato/style.css";

const app = createApp(App);

// register global ui component
components.forEach((component: any) => {
    app.component(component.name, component);
});
// register global directives
directives.forEach((directive) => {
    app.directive(directive.name, directive);
});

app.use(router).use(store).mount("#app");
