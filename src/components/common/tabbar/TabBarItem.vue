<template>
  <div class="tabbarItem">
      <div v-if="isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:"tabbaritem",
    props:
}
</script>

<style>

</style>