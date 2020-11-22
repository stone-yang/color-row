<template>
	<div id="app">
		<ColorRow
      v-for="(color, index) in colors"
      :key="index"
      :num="index + 1"
      :color="color" 
      :active="vm.num === index + 1"
			@click="onRowClick(index + 1)" />
	</div>
</template>

<script>
	import { observer } from 'mobx-vue';
	import ColorRow from './components/ColorRow.vue'
	import vm from './models/index'

  const colors = ['#ff8a8a', '#97de85', '#f1ed81']

  export default {
    name: 'App',
    components: {
      ColorRow
    },
    data() {
      return {
        colors,
        vm,
      }
    },
    methods: {
      onRowClick(num) {
        vm.update(num)
      }
    }
  }
</script>

<style>
	#app {
		margin-top: 60px;
	}
</style>