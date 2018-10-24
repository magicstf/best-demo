<template>
 <div class="vue-tips">
   <ul>
     <li v-for="item in arr">{{item}}</li>
   </ul>
   <ul>
     <li v-for="item2 in arr2">{{item2.name}}</li>
   </ul>
 </div>
</template>
<script>
export default {
  name: "vue-api",
  data() {
    return {
      arr:[1,2,3],
      arr2:[
        {
          name:"stf",
          age:23
        },
        {
          name:"nini",
          age:18
        }
      ]
    };
  },

  created() {
    
    this.$nextTick().then(() => {
      this.printVue();
    });
  },
  methods: {
    printVue() {
      // this.$set(this.arr, 0,0);
      this.arr2[0].name = "sutengfei";
      // console.log(JSON.stringify(this.arr));
      // console.log(this.arr2);
    }
  }
};
</script>
<style>
</style>