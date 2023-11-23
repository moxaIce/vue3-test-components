<template>
    <div id="root-markdown" ref="el">
    </div>
    <testDefineComponent :title="data.title"></testDefineComponent>
    <div class="edit" contenteditable="true" ref="edit"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Vditor from 'vditor'
import 'vditor/dist/index.css';
import testDefineComponent from './testDefineComponent';

const el = ref(null);
const edit = ref(null)
const vditor = ref(null);
const data = ref({
  title: 1
});



const editContent = ref(`
  \t s中
  工
`);

onMounted(() => {
  vditor.value = new Vditor('root-markdown', {
    toolbar: [],
    after: () => {
    },
    value: `
      # 1111
      111 \t sss \n
      aaaa
    `,
    tab: '    '
  });

  edit.value.innerHTML = editContent.value;
})
</script>

<style>
.edit{
  border: 1px solid red;
}
</style>