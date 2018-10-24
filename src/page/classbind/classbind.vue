<template>
    <div class="class-bind">
        <h1>class绑定</h1>
        <p v-bind:class="{ active: isActive, iserror: isError }">对象语法</p>
        <p v-bind:class="[active,iserror]">数据语法</p>
        <p v-bind:class="[isActive ? active : '',iserror]">根据条件添加class(数组)</p>
        <p v-bind:class="[{ active: isActive},iserror]">根据条件添加class(数字中套对象)</p>
        <h1>style绑定</h1>
        <p v-bind:style="{color:'red',background:'#efefef'}">对象语法</p>
        <p v-bind:style="styleObj">绑定对象</p>
        <p v-bind:style="[styleObj,overridStyleObj]">数组用法</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "class and style bind",
            isActive: true,
            isError: true,
            active: "active",
            iserror: "iserror",
            styleObj: {
                color:'green',
                background:'#efefef'
            },
            overridStyleObj:{
                color:"blue",
                background:"#999"
            }
        }
    }
}
</script>

<style>
    .active {
        color:red;
    }
    .iserror {
        background: #efefef;
        
    }
</style>