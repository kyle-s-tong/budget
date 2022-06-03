<script>
import { API, graphqlOperation } from "aws-amplify";
import { listAccounts } from "../graphql/queries";

import AccountSummary from "@/components/AccountSummary.vue";

export default {
  components: [AccountSummary],
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
        <div class="flex flex-col">
          <div
            class="h-full w-full flex divide-solid"
            v-if="this.accountsLoaded"
          >
            <AccountSummaryTab
              v-for="account in accounts"
              :currentAccountId="accounts[0].id"
              :account="account"
              :key="account.id"
            />
          </div>
        </div>
        <AccountSummary
          class="h-5/6"
          :account="this.accounts[0]"
          v-if="this.accountsLoaded"
        />
      </div>
    </div>
  </main>
</template>
