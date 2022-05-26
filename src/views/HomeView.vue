<script>
import { API, graphqlOperation } from "aws-amplify";
import { listAccounts } from "../graphql/queries";

import AccountTab from "@/components/AccountTab.vue";

export default {
  components: [AccountTab],
  data() {
    return {
      accounts: [],
      accountsLoaded: false,
      envelopes: [],
    };
  },
  async mounted() {
    const accountResponse = await API.graphql(graphqlOperation(listAccounts));
    this.accounts = accountResponse.data.listAccounts.items;

    this.accountsLoaded = true;
  },
};
</script>

<template>
  <main class="h-full w-full flex flex-col items-center justify-center">
    <div class="h-5/6 w-full flex">
      <div class="flex flex-col w-full px-2">
        <div class="h-1/6 flex flex-col justify-center">
          <div class="h-1/2">cheque | test | test</div>
        </div>
        <AccountTab
          class="h-5/6"
          :account="this.accounts[0]"
          v-if="this.accountsLoaded"
        />
      </div>
    </div>
  </main>
</template>
