<script>
import { VueFinalModal } from "vue-final-modal";

export default {
  name: "TransactionModal",
  components: [VueFinalModal],
  props: {
    type: String,
  },
  data() {
    return {
      transactionData: {
        date: null,
        amount: 0.0,
        notes: "",
      },
    };
  },

  mounted() {},
};
</script>

<template>
  <VueFinalModal
    v-bind="$attrs"
    classes="flex justify-center
    items-center"
    content-class="flex justify-center
    items-center flex-col w-3/4 max-h-full mx-4 p-4
    border dark:border-gray-800 rounded bg-white dark:bg-gray-900"
  >
    <span class="p-1 w-5/6 text-2xl font-bold">New {{ type }} transaction</span>
    <div class="h-full w-full flex flex-col">
      <div class="w-full flex justify-center p-2">
        <div class="flex flex-col w-2/6 px-1">
          <label for="date">Date:</label>
          <input
            type="date"
            name="date"
            class="border"
            v-model="transactionData.date"
            required
          />
        </div>
        <div class="flex flex-col w-3/6 pl-1 ml-1">
          <label for="amount">Amount:</label>
          <input
            type="number"
            step=".01"
            name="amount"
            class="border"
            v-model="transactionData.amount"
            required
          />
        </div>
      </div>
      <div class="flex flex-col items-center w-full pl-2">
        <label for="notes" class="w-5/6">Notes:</label>
        <input
          type="textarea"
          name="notes"
          class="border w-5/6 h-20"
          v-model="transactionData.notes"
        />
      </div>
    </div>
    <div class="flex-shrink-0 flex justify-center items-center pt-4">
      <button class="border rounded py-1 px-2 m-1" @click="$emit('submit')">
        submit
      </button>
      <button class="border rounded py-1 px-2 m-1" @click="$emit('cancel')">
        cancel
      </button>
    </div>
  </VueFinalModal>
</template>
