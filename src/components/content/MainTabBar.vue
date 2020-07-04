<template>
  <tabbar>
    <tabbaritem path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" />
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" />
      <div slot="item-text">主页</div>
    </tabbaritem>

    <tabbaritem path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" />
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.png" />
      <div slot="item-text">购物车</div>
    </tabbaritem>

    <tabbaritem path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" />
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.png" />
      <div slot="item-text">分类</div>
    </tabbaritem>

    <tabbaritem path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" />
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" />
      <div slot="item-text">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
import tabbar from "components/common/tabbar/TabBar.vue";
import tabbaritem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "maintabbar",
  components: {
    tabbar,
    tabbaritem
  }
};
</script>

<style>
#tabbar {
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 2px rgb(233, 225, 225);
  width: 100%;
  z-index: 10;
}
.tabbaritem{
    flex: 1;
    text-align: center;
    height: 49px;
    /* vertical-align: middle; */
    margin-top: 5px;
    font-size: 14px;
}
.tabbaritem img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
}
</style>