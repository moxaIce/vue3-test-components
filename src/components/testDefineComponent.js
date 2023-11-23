import { defineComponent } from 'vue';


export default defineComponent({
    name: 'XeTable',
    props: {
        title: String
    },
    setup(props) {
        console.log(`props , props`, props.title)
    }
})