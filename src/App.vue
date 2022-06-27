
<template>
  <RouterView />
  <van-tabbar v-model="active">
    <van-tabbar-item  replace to="/" name="home" icon="home-o">Home</van-tabbar-item>
    <van-tabbar-item replace to="/" name="activity" icon="search">Activity</van-tabbar-item>
    <van-tabbar-item replace to="/" name="cart" icon="friends-o">Cart</van-tabbar-item>
    <van-tabbar-item replace to="/personal-center" name="personal" icon="setting-o">Personal</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant'

const active = ref('home');

</script>


<style>
@import '@/styles/reset.css';
@import '@/assets/base.css';

#app {
  font-weight: normal;
}

</style>
