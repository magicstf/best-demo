<template>
  <div>
    <h3>{{title}}</h3>
    <button @click="updateName">修改标题</button>
    <p>in child2:</p>
    <p>props: {{title}}</p>
    <p>$attrs: {{$attrs}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$emit("test2");
  },
  methods: {
    updateName() {
      // this.title = "来自子组件的标题";
      this.$emit("update-title", "来自子组件的标题");
    }
  }
};
</script>
