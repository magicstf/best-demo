<template>
    <div class="list-rander">
        <h1>列表渲染</h1>
        <!-- 数组 -->
        <ul id="example-1">
            <li v-for="(item, index) in items" :key="index">{{item.message}} {{index}} {{name}}</li>
        </ul>
        <!-- 对象 Object.keys()-->
        <ul>
            <li v-for="(value, key, index) in itemsObj">{{index}} {{key}} : {{value}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "list-randers",
      items: [{ message: "Foo",id:1 }, { message: "Bar",id:2 }],
      itemsObj: {
        firstName: "John",
        lastName: "Doe",
        age: 30
      }
    };
  }
};
</script>