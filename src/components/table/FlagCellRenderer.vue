<template>
  <img
    v-if="countryCode"
    :src="`https://flagcdn.com/32x24/${countryCode}.png`"
    :alt="`The flag of ${props.params.value}`"
    class="mx-auto"
    style="margin-top: 0.6875rem"
  />
</template>

<script setup>
const props = defineProps();

const countryCode = Object.entries(props.params.context.flags).find(
  ([_, country]) => country == props.params.value
)?.[0];
</script>
