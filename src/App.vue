<script setup>
import locale from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <el-config-provider namespace="eai" :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped>

</style>
