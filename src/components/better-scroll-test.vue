<script setup>
import BetterScroll from 'better-scroll'
// import IScroll from 'iscroll/build/iscroll'; // 普通版

import { onMounted, ref } from 'vue'
const wrapper = ref(null);
onMounted(() => {
  console.log('wrapper.value', wrapper.value)
  new BetterScroll('.wrap', {
    scrollY: true,
      // tagException: {className: /^test/},
      // disableMouse: false,
      // disableTouch: false,
      // click: false
    stopPropagation: false
  })
})

const handleTouchMove = (e) => {
    console.log('---', e)

}

const handleTouchStart = (e) => {
  console.log('start', e)
}

</script>

<template>
  <div class="wrap">
    <div class="scroll-area">
      <div v-for="n in 50" class="item" @touchmove="handleTouchMove" @touchstart="handleTouchStart">{{ n }}11111+aaaaaa</div>
    </div>
  </div>
</template>

<style scoped>
.wrap{
  width: 300px;
  height: 400px;
  overflow: hidden;
  border: 1px solid red;
}
</style>