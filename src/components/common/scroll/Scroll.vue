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
    props:{
        probeType:{
            type:Number,
            default:1
        }
    },
    mounted() {
            //1.创建scroll对象
        this.bscroll=new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType
        })
            //2.监听滚动位置
        this.bscroll.on('scroll',(position)=>{
            // console.log(position.y);
            this.$emit('scroll',position)
        })

        
    },
    methods: {
        backTo(x,y,time=1000){
            this.bscroll.scrollTo(x,y,time)
        }
    },
}
</script>

<style>

</style>