<template>
    <div class="list">
        <!-- <base-header :title="title" @update-title="updateTitle"></base-header> -->
        <button @click="updateChildrenTitle">修改标题</button>
        </br>
        <base-input :title="title" :label="label" :value="value" @click="onTest1" @click.native="onTest2"></base-input>
        <ul>
            <li v-for="(item,index) in shopList" :key="index">
                <p>{{item.author_id | subString}}---{{item.create_at}}</p>
            </li>
        </ul>
        <input v-model="todotext" type="text">
        <div>{{todotext | capitalize}}</div>
    </div>
</template>

<script>
import Service from "./service.js";
import baseHeader from "../../components/baseHeader";
import baseInput from "../../components/baseInput";
import { GetAge, subString } from "../../util.js";
export default {
  data() {
    return {
      shopList: [],
      userList: [],
      title: "来自父组件都标题",
      label: "姓名：",
      value: "苏腾飞",
      todotext: ""
    };
  },
  components: {
    baseHeader,
    baseInput,
  },
  mounted() {
    this.getShopList();
    this.getUserList();
    console.log(GetAge("150221198901246537"));
    console.log(subString("150221198901246537",10,true));
  },
  filters: {
    subString(str) {
     return subString(str,10,true)
    },
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    updateTitle($event) {
      this.title = $event;
    },
    updateChildrenTitle() {
      this.title = "来自父组件都标题";
    },
    onTest1() {
      console.log("test1 running...");
    },
    onTest2() {
      console.log("test2 running");
    },
    async getShopList() {
      let ShopData = await Service.shopList();
      console.log(ShopData);
      if (ShopData.success) {
        this.shopList = ShopData.data;
      }
    },
    async getUserList() {
      let UserData = await Service.userList();
      console.log(UserData);
      if (UserData.success) {
        this.userList = UserData.data;
      }
    }
  }
};
</script>