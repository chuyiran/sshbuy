<template>
  <div id="home">
    <navbar class="home-navbar">
      <div slot="center">购物街</div>
    </navbar>
    <home-swiper :banners="banners"></home-swiper>
    <recommends :recommends="recommend" />
    <feature />
    <tabcontrol class="tab-control" :titles="['流行','新款','精选']" @tabChange="tabChange" />
    <goodslist :goodsListItem="goods[currentType].list"></goodslist>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComponents/HomeSwiper";
import { getHomeMultiData, getHomeGoods } from "network/home";
import recommends from "./childComponents/HomeRecommend";
import Feature from "./childComponents/Feature";
import tabcontrol from "components/content/TabControl";
import goodslist from "components/content/goods/GoodsList";
export default {
  name: "home",
  components: {
    navbar,
    HomeSwiper,
    recommends,
    Feature,
    tabcontrol,
    goodslist
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  created() {
    //生命周期:当组件创建完毕后就会进行网络请求数据
    //1.多数据请求
    // getHomeMultiData().then(res => {
    //   this.banners = res.data.banner.list;
    //   this.recommend = res.data.recommend.list;
    // });
    this.getHomeMultiData(); //获取首页轮播图\tabbar\navbar\recommend数据
    this.getHomeGoods("sell"); //获取首页商品信息数据
    this.getHomeGoods("new");
    this.getHomeGoods("pop");
  },
  methods: {
    //#region 网络请求方法
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1; //获取page页数
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list); //将type类型list添加到goods中的list中
        this.goods[type].page += 1; //goods中page页数累加1
      });
    },
    //#endregion
    //点击tabControl切换
    tabChange(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    }
  }
};
</script>

<style>
#home {
  padding-top: 44px;
}
.home-navbar {
  background-color: var(--color-tint);
  color: white;
  letter-spacing: 2px;
  font-size: 18px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #f6f6f6;
}
</style>