import { createApp } from "vue";
import { createPinia } from "pinia";
import { vfmPlugin } from "vue-final-modal";

import TransactionModal from "@/components/TransactionModal.vue";
import EnvelopeCard from "@/components/EnvelopeCard.vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(vfmPlugin);
app.use(router);

app
  .component("TransactionModal", TransactionModal)
  .component("EnvelopeCard", EnvelopeCard);

app.mount("#app");
