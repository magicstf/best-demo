<template>
    <div class="if-else">
        <h1>条件渲染</h1>
        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type === 'C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>
        <!-- <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address">
        </template>
        <button v-on:click="toggleEnter">toggle enter</button> -->
        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username" key="username-input">
        </template>
        <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address" key="email-input">
        </template>
         <button v-on:click="toggleEnter">toggle enter</button>

         <p v-show="ok">v-show</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "if-else",
      ok:true,
      type: "A",
      loginType:"username"
    };
  },
  methods: {
      toggleEnter(){
         this.loginType = this.loginType == 'username' ? '' :'username'
      }
  }
};
</script>