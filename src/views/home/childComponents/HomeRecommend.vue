<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
 .recommend{
     display: flex;
     text-align: center;
     font-size: 15px;
     border-bottom: 10px solid #f6f6f6;
     /* border-bottom-left-radius: 5px;
     border-bottom-right-radius: 5px; */
     padding: 5px 0 10px;
     font-family: "Microsoft YaHei";
     width: 100%;
 }
 .recommend-item{
     flex: 1;
 }
 .recommend-item img{
     width: 65px;
     height: 65px;
 }
</style>