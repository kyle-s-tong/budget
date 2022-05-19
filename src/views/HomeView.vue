<script>
export default {
  data() {
    return {
      envelopes: [],
    };
  },

  mounted() {
    this.envelopes = [
      { name: "test", balance: 1204.23 },
      { name: "test2", balance: 1204.23 },
      { name: "test3", balance: 1204.23 },
      { name: "test4", balance: 1204.23 },
      { name: "test5", balance: 1204.23 },
      { name: "test6", balance: 1204.23 },
    ];
  },
};
</script>

<template>
  <main class="h-full w-full flex flex-col items-center justify-center">
    <div class="h-3/4 w-full flex">
      <div class="flex flex-col w-2/3 px-2">
        <div class="h-1/4">Current balance: 12304124.231</div>
        <div class="h-3/4 grid grid-cols-3 gap-2">
          <div
            v-for="envelope in envelopes"
            :key="envelope.name"
            class="flex flex-col border border-1"
          >
            {{ envelope.name }}
            {{ envelope.balance }}
          </div>
        </div>
      </div>
      <div class="w-1/3">test</div>
    </div>
  </main>
</template>
