<script>
import TransactionModal from "@/components/TransactionModal.vue";

export default {
  name: "EnvelopeCard",
  components: [TransactionModal],
  props: ["envelope"],
  data() {
    return {
      hoverIncome: false,
      hoverExpense: false,
      showModal: false,
      modalType: "",
    };
  },
  methods: {
    openModal() {
      if (this.hoverIncome === true) {
        this.modalType = "income";
      } else {
        this.modalType = "expense";
      }

      this.showModal = true;
    },
    submit() {
      // some code...
      this.showModal = false;
    },
    cancel() {
      // some code...
      this.showModal = false;
    },
  },
  mounted() {},
};
</script>

<template>
  <TransactionModal
    v-model="showModal"
    :type="modalType"
    @submit="submit"
    @cancel="cancel"
  />
  <div
    class="flex border border-1 border-gray-300 cursor-pointer justify-center relative shadow bg-white"
    v-on:click="openModal"
  >
    <div
      @mouseover="hoverIncome = true"
      @mouseleave="hoverIncome = false"
      class="w-1/2 z-10 hover:w-3/4 hover:z-10 h-full absolute top-0 left-0"
    ></div>
    <div
      class="absolute top-0 left-0 border-t-10 border-r-10 border-t-gray-100 border-r-green-600"
    ></div>
    <button
      class="envelope-button h-full w-full flex justify-center relative"
      :class="{ income: hoverIncome, expense: hoverExpense }"
    >
      <div class="flex flex-col h-full w-3/4 justify-center">
        <div class="text-center text-xs">{{ envelope.name }}</div>
        <div class="text-center text-lg">{{ envelope.balance }}</div>
      </div>
    </button>
    <div
      class="absolute top-0 right-0 border-t-10 border-l-10 border-t-gray-100 border-l-red-600"
    ></div>
    <div
      @mouseover="hoverExpense = true"
      @mouseleave="hoverExpense = false"
      class="w-1/2 hover:w-3/4 hover:z-10 h-full absolute top-0 right-0"
    ></div>
  </div>
</template>

<style scoped>
.envelope-button {
  box-shadow: inset 0 0 0 0 #fff;
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
  transition: ease-out 0.5s;
}
.income {
  box-shadow: inset 33rem 0 0 0 #38a169;
}

.expense {
  box-shadow: inset -33rem 0 0 0 #e53e3e;
}
</style>
