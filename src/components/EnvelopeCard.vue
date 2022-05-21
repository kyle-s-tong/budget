<script>
export default {
  name: "EnvelopeCard",
  props: ["envelope"],
  data() {
    return {};
  },

  mounted() {},
};
</script>

<template>
  <div class="flex flex-col justify-center border border-1">
    <div class="text-center text-xs">{{ envelope.name }}</div>
    <div class="text-center text-lg">{{ envelope.balance }}</div>
  </div>
</template>
