<script>
import { API, graphqlOperation } from "aws-amplify";
import { listEnvelopes } from "../graphql/queries";

import EnvelopeCard from "@/components/EnvelopeCard.vue";

export default {
  components: [EnvelopeCard],
  data() {
    return {
      envelopes: [],
    };
  },
  computed: {
    totalAccountBalance() {
      if (this.envelopes.length === 0) {
        return 0;
      }

      const rawBalances = this.envelopes.map((envelope) => envelope.balance);
      const rawTotalBalance = rawBalances.reduce(
        (previousBalance, currentBalance) => previousBalance + currentBalance
      );

      return rawTotalBalance.toFixed(2);
    },
  },
  async mounted() {
    const envelopeResponse = await API.graphql(graphqlOperation(listEnvelopes));

    this.envelopes = envelopeResponse.data.listEnvelopes.items;
  },
};
</script>

<template>
  <main class="h-full w-full flex flex-col items-center justify-center">
    <div class="h-5/6 w-full flex">
      <div class="flex flex-col w-full px-2">
        <div class="h-1/4">
          <div class="h-1/2">cheque | test | test</div>
          <div class="h-1/2 flex flex-col justify-center">
            <div class="text-xl">
              Current balance: {{ totalAccountBalance }}
            </div>
          </div>
        </div>
        <div class="h-3/4">
          <div class="h-1/2 grid grid-cols-3 gap-2 gap-y-4 py-4">
            <EnvelopeCard
              v-for="envelope in envelopes"
              :key="envelope.name"
              :envelope="envelope"
            />
          </div>
          <div class="h-1/2">Manage this account</div>
        </div>
      </div>
    </div>
  </main>
</template>
