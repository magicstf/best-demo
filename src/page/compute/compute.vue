<template>
    <div class="compute">
        <h1>计算属性与侦听器</h1>
        <h3>{{reverseName}} {{getnow}}</h3>
        <h3>{{reverseNameMethod()}} {{getnowMethod()}}</h3>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            name: "compute-and-watch"
        }
    },
    computed: {
        reverseName() {
            return this.name.split('').reverse().join('')
        },
        getnow() {
            return Date.now()
        }
    },
    methods: {
        reverseNameMethod() {
            return this.name.split('').reverse().join('=')
        },
        getnowMethod() {
            return Date.now()
        }
    }
}
</script>