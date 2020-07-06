<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'scroll',
    data() {
        return {
            bscroll:null
        }
    },
    mounted() {
        this.bscroll=new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:2
        })
    },
}
</script>

<style>

</style>