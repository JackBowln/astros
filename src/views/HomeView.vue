<template>
  <ul v-for="launch in launches" :key="launch.id">
    <li>{{launch.details}}  

    </li>
    <li>{{launch.name}}  
      <img :src="launch.links.patch.small" alt="">
    </li>

  </ul>
</template>

<script setup lang="ts">
  import { computed, ref } from "vue"
  import { useSpaceX } from "../stores/SpaceX"

  const spaceXStore = useSpaceX()
  spaceXStore.fetchLaunches()

  const launches = computed(() => spaceXStore.launchesData)
  const launchesRef = ref([spaceXStore.launchesData])
  console.log(launches);
</script>

<style scoped lang="scss"></style>
