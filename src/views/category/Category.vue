<template>
  <div class="category">
    <div class="wrapper">
      <ul class="content">
        <li v-for="(item,index) in nums" :key="index">分类列表{{index}}</li>
      </ul>
    </div>
    <div class="backtop" @click="backto">
      <img src="~assets/img/home/backtop.png" alt="">
    </div>
  </div>
</template>

<script>
//默认情况下BScroll是不可以实时的监听滚动位置的
//1: probeType:侦测,
//1.1:  0,1都不侦测,
//1.2:  2:在手指滚动过程中侦测,手指离开惯性过程中不侦测
//1.3:  3:只要是滚动都侦测
// const bscroll = new BScroll(document.querySelector('.wrapper'), {
//         probeType: 2,
//         click: true,
//         pullUpLoad: true
//     })
//监听滚动事件
// bscroll.on('scroll', position => {
//     console.log(position);
// })
//上拉加载事件
// bscroll.on('pullingUp', () => {
//     console.log('上拉加载更多...');
//     setTimeout(() => {
//         //可以调用多次上拉加载方法
//         bscroll.finishPullUp();
//     }, 3000);
// })

import bScroll from "better-scroll";
export default {
  name: "category",
  data() {
    return {
      nums: 1000,
      bscroll: null
    };
  },
  mounted() {
    this.bscroll = new bScroll(document.querySelector(".wrapper"), {
      probeType: 3,
      click: true,
      pullUpLoad: true
    });
    //监听滚动事件
    // this.bscroll.on("scroll", position => {
    //   console.log(position.y);
    // });
    // this.bscroll.on("pullingUp", () => {
    //   console.log("上拉加载更多...");
    //   setTimeout(() => {
    //     //多次调用上拉加载事件的方法
    //     this.bscroll.finishPullUp();
    //   }, 2000);
    // });
  },
  methods: {
    backto(){
      this.bscroll.scrollTo(0,0,1000)
    }
  },
};
</script>

<style scoped>
.category{
  position: relative;
}
.wrapper {
  height: 100vh;
  background-color: white;
  overflow: hidden;
}
.backtop{
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 11;
}
img{
  height: 30px;
  width: 30px;
}
</style>