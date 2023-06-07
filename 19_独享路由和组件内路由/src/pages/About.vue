<!--  -->
<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log('进入关于之前');
    if (localStorage.getItem('school') === 'atguigu') {
      next()
    } else {
      alert('无权限')
      return
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('离开关于之前');
    next()
  },
}

</script>
