<!--  -->
<template>
    <div class="page-header">
        <h2>Vue Router Demo</h2>
        <button @click="forward">前进</button>
        <button @click="back">后退</button>
        <button @click="go">测试</button>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
        };
    },
    methods: {
        back() {
            // this.$router.push({
            //     path: '/home',
            //     query:{
            //         id:'001',
            //         name: '消息001',
            //     },
            // })
            this.$router.back()
        },
        forward() {
            this.$router.forward()
        },
        go() {
            this.$router.go(-2)
        },
    },
}

</script>
