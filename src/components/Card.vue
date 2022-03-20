<template>
  <div
    v-for="country in countries"
    :key="country.name.common"
    class="bg-gray-50 m-2"
  >
    <div>
      <img :src="country.flags.png" alt="" />
    </div>
    <div class="text-black">
      <div>
        Nome do país: <strong>{{ country.name?.common }}</strong>
      </div>
      <div v-for="capital in country.capital" :key="capital">
        Capital: <strong>{{ capital }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Countries } from "../types"

  interface Props {
    countries: Countries.RootObject[]
  }

  defineProps<Props>()
</script>
<script lang="ts">
  export default {
    name: "Card",
  }
</script>
<style scoped lang="scss"></style>
