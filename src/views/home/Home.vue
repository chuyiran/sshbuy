<template>
  <div id="home">
    <navbar class="home-navbar"><div slot="center">购物街</div></navbar>
    <home-swiper :banners='banners'></home-swiper>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import HomeSwiper from './childComponents/HomeSwiper'
import { getHomeMultiData } from "network/home";

export default {
  name: "home",
  components: { navbar, HomeSwiper },
  data() {
    return {
      banners: [],
      recommend: []
    };
  },
  created() {
    //生命周期:当组件创建完毕后就会进行网络请求数据
    //1.多数据请求
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      console.log(this.banners);
      console.log(this.recommend);
    });
  }
};
</script>

<style>
.home-navbar {
  /* background-color:#ff8189; */
  background-color: var(--color-tint);
  color: white;
  letter-spacing: 2px;
  font-size: 18px;
}
</style>