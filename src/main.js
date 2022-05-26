import { createApp } from "vue";
import { createPinia } from "pinia";
import { vfmPlugin } from "vue-final-modal";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import TransactionModal from "@/components/TransactionModal.vue";
import EnvelopeCard from "@/components/EnvelopeCard.vue";
import AccountTab from "@/components/AccountTab.vue";

import App from "./App.vue";
import router from "./router";

Amplify.configure(awsconfig);

const app = createApp(App);

app.use(createPinia());
app.use(vfmPlugin);
app.use(router);

app
  .component("TransactionModal", TransactionModal)
  .component("EnvelopeCard", EnvelopeCard)
  .component("AccountTab", AccountTab);

app.mount("#app");
