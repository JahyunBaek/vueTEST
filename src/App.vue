<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/event">Event</router-link>
    <router-link to="/form">Form</router-link>
    <router-link to="/watch">Watch</router-link>
    <router-link to="/template">Templete</router-link>
    <router-link to="/compo">Component</router-link>
  </div>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
