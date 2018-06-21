<template>
    <div class="img-wrap">
        <input id="img1" type="file" @change = "fileChange">
    </div>

</template>
<script>
import EXIF from 'exif-js'
window.EXIF = EXIF
export default {
    name:"stf",
    components: {

    },
    props: {

    },
    data() {
        return {
            showMask:true
        }
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.getData();
        this.getJsonpData();
    },
    methods: {
        getImgInfo(img) {
            EXIF.getData(img,function() {
                var info = EXIF.getAllTags(this);
                console.log("info:", info); 
            })
        },
        fileChange(e) {
            console.log(e.target.files);
            this.getImgInfo(e.target.files[0])
        },
        hideMask() {
            this.showMask = false;
        },
        async getData() {
           let data =  await this.$api.get("topics");
           console.log(data);
        },
        async getJsonpData() {
           let data = await this.$api.jsonp("https://sug.so.360.cn/suggest",{word:"c"},{name:"suggest"});
           console.log(data);
        }
    }
}
</script>
<style lang='less'>
.img-wrap {
    margin: 0 auto;
    text-align: center;
    input {
        text-align: center;
    }
}
</style>