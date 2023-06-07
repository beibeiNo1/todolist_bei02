<!--  -->
<template>
    <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
    </ul>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
        };
    },

    components: {},

    computed: {
    },
    
    mounted() { 
        console.log('111');

    },

    methods: {},

    beforeDestroy(){
        console.log('news即将被销毁');
    },
}

</script>
<style lang='stylus' scoped>
</style>