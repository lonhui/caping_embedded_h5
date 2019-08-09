<template>
    <div id="medal" @click="open">
        <!-- 已获得 -->
        <div class="medal_succ" v-if="data.level >= 1">
            <div class="labelBox">
                <img class="label" 
                v-if="data.label=='hot' || data.label == 'new'" 
                :src="data.label == 'hot' ? hotIcon : (data.label == 'new') ? newIcon : null" 
                alt="">
            </div>
            <img class="medalIcon" :src="medalimg" alt="">
            <img class="successIcon" src="@/assets/Meadl/icon_selected@2x.png" alt="">
            <p class="name">{{data.name}}</p>
        </div>
        <!-- 位获得 -->
        <div v-else class="medal_notObtained">
            <img class="medalIcon" :src="medalimg" alt="">
            <div class="progressbar">
                <div :class="'progress progress'+data.id"></div>
            </div>
            <p class="progressNum">{{data.progress}}%</p>
            <p class="name">{{data.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:["data","medalimg"],
    data(){
        return{
            //标签图
            hotIcon:require("@/assets/Meadl/medals_label_hot@2x.png"),
            newIcon:require("@/assets/Meadl/medals_label_new@2x.png"),
            progress:0 
        }
    },
    mounted(){
        this.initProgress()
    },
    methods:{
        open(){
            this.$emit("on-open")
        },
        // 初始化进度条
        initProgress(){
            if(this.data.level == 0){
                let count = 0
                let timer = setInterval(()=>{
                    if(count >= this.data.progress || count == 100){
                        clearInterval(timer)
                    }
                    document.getElementsByClassName("progress"+this.data.id)[0].style.width = count+"%"
                    count++
                },20)
            }
        }
    },
    watch:{
        "data":function (){
            this.initProgress()
        }
    }
}
</script>

<style scoped>
#medal{
    background-color: #fff;
    border-radius: 0.1rem;
}
.medal_succ,.medal_notObtained{
    width: 1.04rem;
    height: 1.45rem;
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    -moz-box-shadow:0 0 0.07rem rgba(0, 0, 0,0.2); 
    -webkit-box-shadow:0 0 0.07rem rgba(0, 0, 0,0.2); 
    box-shadow:0 0 0.07rem rgba(0, 0, 0,0.2);
}
.medal_succ .label{
    width: 0.25rem;
    height: 0.14rem;
    border-top-right-radius: 0.10rem;
    border-bottom-left-radius: 0.10rem;
}
.labelBox{
    height: 0.14rem;
    align-self:flex-end;
}
.medal_succ .medalIcon{
    width: 0.60rem;
    height: 0.60rem;
    align-self: center;
    margin-top: 0.08rem;
}
.medal_succ .successIcon{
    width: 0.20rem;
    height: 0.20rem;
    align-self: center;
    margin-top: 0.08rem;
}
.medal_succ p{
    text-align: center;
    margin-top: 0.08rem;
}
/* ------------------- */
.medal_notObtained .medalIcon{
    width: 0.60rem;
    height: 0.60rem;
    align-self: center;
    margin-top: 0.22rem;
    -webkit-filter:grayscale(1);
}
.medal_notObtained .progressbar{
    width: 0.43rem;
    height: 0.08rem;
    align-self: center;
    margin-top: 0.05rem;
    background-color: #e6e6e6;
    border-radius: 0.06rem;
    overflow:hidden;
}
.medal_notObtained .progress{
    width: 0%;
    height: 100%;
    background-color: #666;
}

.medal_notObtained p{
    text-align: center;
}
.medal_notObtained .progressNum{
    color: rgba(102, 102, 102, 0.5);
    margin-top: 0.02rem;
    line-height: 0.14rem;
}
.medal_notObtained .name {
    margin-top: 0.05rem;
    font-size: 0.10rem;
    color: rgb(51, 51, 51);
}

</style>
