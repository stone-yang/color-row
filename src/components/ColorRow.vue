<template>
	<div class="color-row" :class="{ 'active': active }" :style="{ background: color }" @click="onClick">{{num}}</div>
</template>

<script>
  import vm from '../models/index'
  
	export default {
  name: 'ColorRow',
  props: {
    num: Number,
    color: {
      default: '#eee',
      type: String
    },
    active: Boolean,
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color-row {
  display: flex;
  width: 120px;
  height: 120px;
  margin: 8px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  transition: width linear 500ms;
}

.active {
  width: 100%;
}
</style>