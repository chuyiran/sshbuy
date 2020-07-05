<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      :class="{active:index===currentIndex}"
      @click="itemClick(index)"
      class="tab-control-item"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabChange',index);
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  z-index: 11;
}
.active {
  color: var(--color-high-text);
}
.tab-control-item span {
  padding: 5px;
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
.tab-control-item {
  flex: 1;
}
</style>