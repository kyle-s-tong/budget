<script>
export default {
  name: "AccountSummaryTab",
  components: [],
  props: ["account", "currentAccountId"],
  computed: {
    isSelected() {
      return this.account.id === this.currentAccountId;
    },
  },
};
</script>

<template>
  <button class="p-2" :class="{ 'bg-budget-blue': isSelected }">
    {{ account.name }}
  </button>
</template>
