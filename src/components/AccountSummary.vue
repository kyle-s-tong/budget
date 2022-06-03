<script>
import { API, graphqlOperation } from "aws-amplify";
import { listEnvelopes } from "../graphql/queries";

import EnvelopeCard from "@/components/EnvelopeCard.vue";

export default {
  name: "AccountSummary",
  components: [EnvelopeCard],
  props: ["account"],
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
  methods: {},
  async mounted() {
    const envelopeFilter = {
      accountID: { eq: this.account.id },
    };
    const envelopeResponse = await API.graphql(
      graphqlOperation(listEnvelopes, { filter: envelopeFilter })
    );

    this.envelopes = envelopeResponse.data.listEnvelopes.items;
  },
};
</script>

<template>
  <div class="bg-budget-blue p-4">
    <div class="h-1/6 flex flex-col justify-start">
      <div class="text-xl">Current balance: {{ totalAccountBalance }}</div>
    </div>
    <div class="h-1/2 grid grid-cols-3 gap-2 gap-y-4 py-4">
      <EnvelopeCard
        v-for="envelope in envelopes"
        :key="envelope.id"
        :envelope="envelope"
      />
    </div>
    <div class="h-1/2">Manage this account</div>
  </div>
</template>

<style scoped></style>
