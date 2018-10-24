<template>
    <div class="life-cycle">
        <h1>生命周期</h1>
        <p>{{name}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:"life-cycle"
        }
    },
    beforeCreate() {
        console.log("beforeCreate",this.name);
    },
    created() {
        console.log("created",this.name);
    },
    beforeMount(){
        console.log("beforeMount",this.name);
    },
    mounted() {
        console.log("mounted",this.name);
    },
    beforeUpdate() {
        console.log("beforeUpdate",this.name);
    },
    updated() {
        console.log("updated",this.name);
    },
    beforeDestroy() {
        console.log("beforeDestroy",this.name);
    },
    destroyed() {
        console.log("destroyed",this.name);
    }
}
</script>