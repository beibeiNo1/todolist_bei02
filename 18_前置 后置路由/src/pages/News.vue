<!--  -->
<template>
    <ul>
        <li>news001
            <input type="text">
        </li>
        <li>news002
            <input type="text">
        </li>
        <li>news003
            <input type="text">
        </li>
    </ul>
</template>

<script>
export default {
    name: 'News',
    beforeDestroy() {
        console.log('News销毁了');
    },
    data() {
        return {
        };
    },

    components: {},

    computed: {},
    

    mounted() {
        console.log(111);
     },

    methods: {},
    activated(){
        console.log('news激活');
    },
    deactivated(){
        console.log('news失活');
    },
    

    
}

</script>
<style lang='stylus' scoped>
</style>