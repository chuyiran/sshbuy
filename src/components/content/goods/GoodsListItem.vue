<template>
  <div class="goods-item">
      <img :src="goodsItemSub.show.img" alt="">
      <div class="goods-info">
          <p>{{goodsItemSub.title}}</p>
          <span class="price">{{goodsItemSub.price}}</span>
          <span class="collect">{{goodsItemSub.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'goodslistitem',
    props:{
        goodsItemSub:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
    .goods-item{
        padding-bottom: 40px;
        position: relative;
        width: 48%;
    }
    .goods-item img{
        width: 100%;
        height: 95%;
        border-radius: 4px;
    }
    .goods-info{
        position:absolute;
        bottom: 5px;
        left: 0;right: 0;
        text-align: center;
        font-size: 15px;
    }
    .goods-info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
        font-size: 13px;
    }
    .goods-info .price{
        color: var(--color-tint);
        margin-right: 20px;
    }
    .goods-info .collect{
        position: relative;
    }
    .goods-info .collect::before{
        content: '';
        position: absolute;
        left: -15px;
        top: 1px;
        width: 14px;
        height: 14px;
        background: url('~assets/img/home/collect.svg') 0 0/14px 14px;
    }
</style>