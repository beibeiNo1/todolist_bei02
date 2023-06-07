<!--  -->
<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.name}`">
                    {{ m.name }}
                </router-link> -->
                <router-link :to="`/home/message/detail?id=${m.id}&name=${m.name}`">
                    {{ m.name }}
                </router-link>
                <!-- <router-link :to="{
                    name: 'xiangqing',
                    params: {
                        id: m.id,
                        name: m.name,
                    },
                }">
                    {{ m.name }}
                </router-link> -->
            </li>
            <hr>
            <router-view></router-view>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                {id: '001', name: '消息001'},
                {id: '002', name: '消息002'},
                {id: '003', name: '消息003'},
            ],
        };
    },

    components: {},

    computed: {},

    mounted() { },

    methods: {}
}

</script>
<style lang='stylus' scoped>
</style>