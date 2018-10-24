<template>
  <div>
    <p>in child1:</p>
    <p>props: {{label}}</p>
    <p>$attrs: {{$attrs}}</p>
    <base-header v-bind="$attrs" v-on="$listeners"></base-header>
  </div>

</template>
<script>
import baseHeader from "../components/baseHeader";
export default {
  data() {
    return {
      msg: "深入了解组件"
    };
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    }
  },
  components: {
    baseHeader
  },
  mounted() {
    this.$emit("test1");
  },
};
</script>
<style lang="less">
</style>