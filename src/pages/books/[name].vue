<script lang="ts" setup>
const props = defineProps({
  name: String,
})
</script>
<template>
  <div>
    <h1>{{ props.name }}</h1>
  </div>
</template>
