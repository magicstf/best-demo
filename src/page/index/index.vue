<template>
  <hello-world :status="status"></hello-world>
</template>
<script>
  import HelloWorld from '../../components/HelloWorld.vue'
  export default {
    data() {
      return {
        name:"首页",
        status:{
          isOK:false
        }
      }
    },
    components: {
      HelloWorld
    }
  }
</script>