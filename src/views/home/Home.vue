<template>
<div id="home">
  <navbar class="home-navbar">
    <div slot="center">购物街</div>
  </navbar>
</div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
export default {
    name:'home',
    components:{navbar}
}
</script>

<style>
  .home-navbar{
    /* background-color:#ff8189; */
    background-color: var(--color-tint);
    color: white;
    letter-spacing: 2px;
    font-size: 18px;
  }
</style>