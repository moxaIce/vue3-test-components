<template>
  <div class="container">
    <h1 class="title">Button:</h1>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="primary" :disabled="true">主要按钮</el-button>
    <el-button type="primary" :loading="true">加载中</el-button>

    <el-button plain type="primary">次要按钮</el-button>
    <el-button plain>次要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <!--    <el-button :icon="Search" type="primary">带图标按钮</el-button>-->

    <h1 class="title">面包屑：</h1>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>组件</el-breadcrumb-item>
      <el-breadcrumb-item>面包屑</el-breadcrumb-item>
    </el-breadcrumb>

    <h1 class="title">Pagination 分页器：</h1>
    <label>正常分页器：</label>
    <el-pagination
        v-model:current-page="currentPage2"
        v-model:page-size="pageSize2"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="true"
        layout="sizes, prev, pager, next, jumper"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
    <label>小型分页器：</label>
    <el-pagination
        v-model:current-page="currentPage2"
        v-model:page-size="pageSize2"
        :page-sizes="[100, 200, 300, 400]"
        :small="true"
        :disabled="disabled"
        :background="false"
        layout="sizes, prev, pager, next, jumper"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
// import { Search } from '@element-plus/icons-vue'
import { ArrowRight } from '@element-plus/icons-vue'



import { ref } from 'vue'

const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>


<style scoped>
.container {
  padding: 50px;
}

.title {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>