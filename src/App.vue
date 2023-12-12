<script setup>
import { ref, computed } from 'vue'
import Header from "./components/Header.vue"
import Quality from './views/Quality.vue'
import Home from './views/Home.vue'

const routes = {
  '/': Home,
  '/quality':Quality
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
  console.log(window.location.hash)
})

const selectedTab=ref("Home")
const currentView = computed(() => {
  const path=currentPath.value.slice(1).split('#')[0]
  switch(path.slice(1).toLocaleLowerCase()){
    case "quality":selectedTab.value="Quality"
    break;
    default:selectedTab.value="Home"
  }
  return routes[path || '/']||Home
})
</script>

<template>
<div>
  <Header />
  <component :is="currentView" />
  <Quality />
</div>
</template>
