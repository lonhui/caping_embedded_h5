<template>
    <div id="medal" @click="open">
        <div class="medal_succ" v-if="data.level >= 1">
            <div class="labelBox">
                <img v-if="data.labelIcon" class="label" :src="data.labelIcon" alt="">
            </div>
            <img class="medalIcon" :src="data.icon" alt="">
            <img class="successIcon" src="@/assets/Meadl/icon_selected@2x.png" alt="">
            <p class="name">{{data.name}}</p>
        </div>
        <div v-else class="medal_notObtained">
            <img class="medalIcon" :src="data.icon" alt="">
            <div class="progressbar">
                <div :class="'progress'+' progress'+data.id"></div>
            </div>
            <p class="progressNum">{{data.progress}}%</p>
            <p class="name">{{data.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:["data"],
    data(){
        return{
           progress:0 
        }
    },
    mounted(){
        if(this.data.level == 0){
            this.initProgress()
        }
    },
    methods:{
        open(){
            this.$emit("on-open")
        },
        // 初始化进度条
        initProgress(){
            if(this.data.progress <= 100){
                document.getElementsByClassName("progress"+this.data.id)[0].style.borderRadius="0.05rem 0 0 0.05rem"
            }
            let count = 0
            let timer = setInterval(()=>{
                if(count >= this.data.progress){
                    clearInterval(timer)
                }
                document.getElementsByClassName("progress"+this.data.id)[0].style.width = count+"%"
                count++
            },20)
        }
    }
}
</script>

<style scoped>
#medal{
    background-color: #fff;
}
.medal_succ,.medal_notObtained{
    width: 1.06rem;
    height: 1.45rem;
    border-radius: 0.10rem;
    display: flex;
    flex-direction: column;
    -moz-box-shadow:0 0 0.05rem rgba(0, 0, 0,0.3); 
    -webkit-box-shadow:0 0 0.05rem rgba(0, 0, 0,0.3); 
    box-shadow:0 0 0.05rem rgba(0, 0, 0,0.3);
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
}
.medal_notObtained .progress{
    width: 0%;
    height: 100%;
    background-color: #666;
    border-radius: 0.06rem;
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
