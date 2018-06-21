<template>
  <div class="hello">
    {{status}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // 当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // prop 的定义应该尽量详细，至少需要指定其类型。
  props: {
    status: {
      default:{},
      type: Object,
      required: true,
    }
  }
}
</script>

<!-- 为组件样式设置作用域，而不是使用scoped -->
<style>

</style>
