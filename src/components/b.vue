<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
   
        <el-tab-pane v-for="item in listTab" :key="item.value" :label="item.label" :name="item.value">
            <div v-if="'first' === activeName">
                11
            </div>
            <name v-else></name>
        </el-tab-pane>
        
        <!-- <el-tab-pane label="User" name="first">
        111
        </el-tab-pane>
        <el-tab-pane label="Config" name="second">
            
        </el-tab-pane> -->

    </el-tabs>
 

</template>

<script setup>
import { ref, nextTick } from 'vue';
import name from './name.vue'
const data = ref({})
const activeName = ref('first')
const aaa = ref(null)

const listTab = [{
    label: 'first',
    value: 'first'
}, {
    label: 'schedule',
    value: 'schedule'
}]

const handleClick = (tab) => {
    activeName.value = tab.props.name
    
}

const loadData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            data.value = {
                name: '1'
            }
            resolve();
        }, 3000)
    })
}

const showPlan = async () => {
    await loadData();

    await nextTick();

    console.log('a', aaa.value?.parentElement);

    console.log('b', document.querySelector('.test').parentElement)
}

</script>