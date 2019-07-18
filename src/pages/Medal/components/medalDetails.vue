<template>
    <div id="details" @touchmove.prevent>
        <carousel :per-page="1" 
            :centerMode="true" 
            :loop="true" 
            :paginationSize="6" 
            :mouse-drag="false"
            :navigateTo="navigateTo"
            paginationActiveColor="#fff"
            paginationColor="#666">
            <slide v-for="item in data" :key="item.id">
                <div class="detail">
                    <img class="medalImg" :src="item.image" alt="">
                    <img class="isNotHave" v-show="item.isNotHave" src="@/assets/Meadl/icon_selected@2x.png" alt="">
                    <div class="text">
                        <p class="name">Labor model</p>
                        <p class="content">234 people have been awarded</p>
                        <br><br>
                        <p class="title">How to get it?</p>
                        <p class="content">Sign in for 2 consecutive months per day</p>
                        <p class="title">Medal privileges</p>
                        <p class="content foot">1. Visual display privileges (commentary area, personal center wear)</p>
                    </div>
                </div>
            </slide>
        </carousel>
        <div class="close" @click="close">
            <img src="@/assets/Meadl/icon_close_white@2x.png" alt="">
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

import medalsImg1 from "@/assets/Meadl/medals_img_commentary@2x.png"
import medalsImg2 from "@/assets/Meadl/medals_img_critic@2x.png"
import medalsImg3 from "@/assets/Meadl/medals_img_duancelebrity@2x.png"
import medalsImg4 from "@/assets/Meadl/medals_img_labormodel@2x.png"
import medalsImg5 from "@/assets/Meadl/medals_img_theshoot@2x.png"
import medalsImg6 from "@/assets/Meadl/medals_img_votingpioneer@2x.png"

export default {
    props:{
        navigateTo:{
            type: Number,
            default: 1
        }
    },
    data(){
        return{
            data:[
                {
                    id:1,
                    image:medalsImg1,
                    isNotHave:true,
                    name:"Labor model",
                    awardedCount:234,
                    howGet:"Sign in for 2 consecutive months per day",
                    medalPrivile:"1. Visual display privileges (commentary area, personal center wear)"
                },
                {
                    id:2,
                    image:medalsImg2,
                    isNotHave:true,
                    name:"Labor model",
                    awardedCount:234,
                    howGet:"Sign in for 2 consecutive months per day",
                    medalPrivile:"1. Visual display privileges (commentary area, personal center wear)"
                },
                {
                    id:3,
                    image:medalsImg3,
                    isNotHave:false,
                    name:"Labor model",
                    awardedCount:234,
                    howGet:"Sign in for 2 consecutive months per day",
                    medalPrivile:"1. Visual display privileges (commentary area, personal center wear)"
                },
                {
                    id:4,
                    image:medalsImg4,
                    isNotHave:false,
                    name:"Labor model",
                    awardedCount:234,
                    howGet:"Sign in for 2 consecutive months per day",
                    medalPrivile:"1. Visual display privileges (commentary area, personal center wear)"
                },
                {
                    id:5,
                    image:medalsImg5,
                    isNotHave:false,
                    name:"Labor model",
                    awardedCount:234,
                    howGet:"Sign in for 2 consecutive months per day",
                    medalPrivile:"1. Visual display privileges (commentary area, personal center wear)"
                },
                {
                    id:6,
                    image:medalsImg6,
                    isNotHave:false,
                    name:"Labor model",
                    awardedCount:234,
                    howGet:"Sign in for 2 consecutive months per day",
                    medalPrivile:"1. Visual display privileges (commentary area, personal center wear)"
                }
            ]
        }
    },
    components:{
        Carousel,
        Slide
    },
    methods:{
        close(){
            this.$emit("on-close")
        }
    }
}
</script>

<style scoped>
#details{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 3.6rem;
    height: 6.4rem;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
   
}
.detail{
    display: flex;
    flex-direction: column;
}
.close{
    align-self: flex-end;
    padding: 0.4rem;
    position: absolute;
}
.close img{
    width: 0.22rem;
    height: 0.22rem;
}
.medalImg{
    width: 3.4 0rem;
    height: 3.40rem;
    margin-top: 0.05rem;
    align-self: center;
    position: relative;
    top:0.3rem;
}
.isNotHave{
    width: 0.20rem;
    height: 0.20rem;
    align-self: center;
    position: absolute;
    top:2.9rem;
}
.text{
    color: #fff;
    font-size: 0.10rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    text-align: center;
    position: relative;
    top: -0.3rem
}
.name {
    font-size: 0.16rem;  
    line-height: 0.25rem;
}
.title{
    font-size: 0.12rem;  
    line-height: 0.20rem;
}
.content{
    margin-bottom: 0.18rem;
    line-height: 0.17rem;
}
.foot{
    margin-bottom: 0;
}
</style>
