<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.item" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  },
  mounted() {
    //console.log(this.goods);
  }
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  /* 均等分空白地方 */
  justify-content: space-around;
  padding: 2px;
}
</style>