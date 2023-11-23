<template>
  <div class="container">

    <div class="left">
      <el-form class="digital-man">
        <el-form-item label="视频内容">
          <el-input placeholder="文本" v-model="form.videoContent" type="textarea"/>
        </el-form-item>
        <el-form-item label="人物位置">
          <el-input placeholder="位置" v-model="form.anchorPosition"/>
        </el-form-item>
        <el-button class="save-button" @click="save" size="large" type="primary">生成</el-button>
      </el-form>
    </div>
    <div class="right">
      <video src=""></video>
    </div>
  </div>


</template>

<script setup>  
import axios from 'axios';
import { ref } from 'vue';
const form = ref({
  videoContent: '',
  anchorPosition: ''
})
const save = () => { 
  axios.get('http://localhost:3000/getProgress', {
    videoContent: form.value.videoContent,
    anchorPosition: form.value.anchorPosition
  })
}
</script>


<style scoped>
.container{
  display: flex;
  padding: 60px;
}
.container .left {
  border: 1px solid rebeccapurple;
}

.container .right {
  border: 1px solid #ccc;
  min-height: 400px;
  width: 500px;
  margin-left: 50px;
}
.digital-man {
  width: 600px;
  padding: 60px;
}
.save-button{
  width: 100%;
}
</style>