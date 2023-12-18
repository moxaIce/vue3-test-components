<template>

<div>
    <button @click="showPlan">click</button>
    <div class="test" ref="aaa">
        <div>日程</div>
        {{ data.name }}
    </div>
</div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

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