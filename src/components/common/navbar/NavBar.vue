<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="center">
      <slot name="center"></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style>
    .navbar{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0px 1px 1px rgba(233, 226, 226, 0.2);
    }
    .right,.left{
        width: 60px;
    }
    .center{
       flex:1;
    }
</style>