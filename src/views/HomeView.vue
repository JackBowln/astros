<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <Card :countries="countries" />
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from "vue"
  import { useApi } from "../stores/api"
  import Card from "../components/Card.vue"
  const store = useApi()
  store.fetchLaunches()
  const countries = computed(() => store.data)
</script>

<style scoped lang="scss"></style>
