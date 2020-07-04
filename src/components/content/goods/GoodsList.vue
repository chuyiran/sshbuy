<template>
  <div class="goods">
    <goodslistitem v-for="(item,index) in goodsListItem" :key="index" :goodsItemSub='item' />
  </div>
</template>

<script>
import goodslistitem from "./GoodsListItem";
export default {
  name: "goodslist",
  components: { goodslistitem },
  props:{
      goodsListItem:{
          type:Array,
          default(){
              return []
          }
      }
  }
};
</script>

<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 5px;
}
</style>