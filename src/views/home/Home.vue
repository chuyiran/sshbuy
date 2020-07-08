<template>
  <div id="home">
    <navbar class="home-navbar">
      <div slot="center">购物街</div>
    </navbar>
    <tabcontrol 
      class="tab-control-top" 
      :titles="['流行','新款','精选']" 
      @tabChange="tabChange" ref="tabControl0"
      v-show="isTabControlFixed">
    </tabcontrol>
    <scroll
      class="content"
      ref="scroll"
      @contentScroll="contentScroll"
      @pullingUp="loadMore"
      :pullUpLoad="true"
      :probeType="3"
    >
      <home-swiper :banners="banners" @swiperImageLoag="swiperImageLoag"></home-swiper>
      <recommends :recommends="recommend" />
      <feature />
      <tabcontrol
        ref="tabControl"
        class="tab-control-down"
        :titles="['流行','新款','精选']"
        @tabChange="tabChange"
      />
      <goodslist :goodsListItem="goods[currentType].list"></goodslist>
    </scroll>
    <backto class="backto" @click.native="backToClick" v-show="isShowBackTop" />
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
import scroll from "components/common/scroll/Scroll";
import backto from "components/content/backTo/BackTo";
export default {
  name: "home",
  components: {
    navbar,
    HomeSwiper,
    recommends,
    Feature,
    tabcontrol,
    goodslist,
    scroll,
    backto
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
      currentType: "pop",
      probeType: 2,
      isShowBackTop: false,
      isimgLoadFinish: false, //标记:首页轮播图4张图片加载第一张后标记
      tabOffsetTop: 0, //tabControl的offsetTop值
      isTabControlFixed: false, //判断tabControl是否吸顶标记,
      saveY:0,//记录scroll滚动位置
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
  mounted() {
    //使用事件总线来接收组件传递来的方法
    // this.$bus.$on("itemImgLoad", () => {
    //   this.$refs.scroll.refreshPullUp();
    // });
    const refresh = this.debounce(this.$refs.scroll.refreshPullUp, 500);
    //使用事件总线来接收组件传递来的方法
    this.$bus.$on("itemImgLoad", () => {
      refresh();
      // console.log(this.$refs.tabControl.$el.offsetTop);
    });
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
        this.$refs.scroll.finishPullUp();
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
      this.$refs.tabControl.currentIndex=index
      this.$refs.tabControl0.currentIndex=index
    },
    //返回顶部
    backToClick() {
      // console.log("aaa");
      this.$refs.scroll.backTo(0, 0, 1000);
    },
    //根据位置来判断是否显示backTop
    contentScroll(position) {
      // console.log(position);
      // console.log('position.y=',position.y);
      //判断backTop是否显示
      this.isShowBackTop = -position.y > 1000;
      //判断tabControl是否吸顶
      this.isTabControlFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      //上拉加载更多方法
      // console.log("上拉加载中");
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.bscroll.refresh();
    },
    debounce(func, delay) {
      //防抖函数(对于频繁同一操作)
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    swiperImageLoag() {
      //轮播图图片加载完成后执行计算tabControl的offsetTop
      if (!this.isimgLoadFinish) {
        //获取tabControl的offsetTop值
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
        //首页轮播图第1张加载完成后标记
        this.isimgLoadFinish = true;
      }
    }
  },
  //deactivated在非活动状态前记录当前scroll.y的位置
  deactivated() {
    this.saveY=this.$refs.scroll.bscroll.y
  },
  //当处于活动状态时根据deactivated中记录的位置立即回到保存位置.
  activated(){
    this.$refs.scroll.backTo(0,this.saveY,0)
    this.$refs.scroll.refreshPullUp()
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-navbar {
  background-color: var(--color-tint);
  color: white;
  letter-spacing: 2px;
  font-size: 18px;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; */
}
.tab-control-top {
  /* position: sticky; */
  /* top: 44px; */
  /* background-color: #f6f6f6; */
  background-color: white;
  position: relative;
  z-index: 11;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 54px;
  left: 0px;
  right: 0px;
  overflow: hidden;
}
.backto {
  position: fixed;
  bottom: 50px;
  right: 10px;
}
/* .content{
  height: calc(100%-93px);
  height: 300px; 
  overflow: hidden;
}  */
</style>