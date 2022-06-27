<template>
 <van-nav-bar  title="Home" />
  home  {{appStore.name}}
  <div class="home-view">
    <div class="btn-login">Login</div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '../../stores/app'
  const appStore = useAppStore();
</script>

<style lang="scss">
.btn-login {
  width: 100px;
  height: 50px;
  border: solid 1px #ccc;
}
</style>