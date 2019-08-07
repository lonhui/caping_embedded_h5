<template>
    <div id="details" @touchmove.prevent>
        <carousel :per-page="1" 
            :centerMode="true" 
            :loop="true" 
            :paginationPadding="4"
            :paginationSize="6" 
            :mouse-drag="false"
            :navigateTo="detailData"
            paginationActiveColor="#fff"
            paginationColor="#666">
            <slide v-for="item in medalData" :key="item.id">
                <div class="detail">
                    <img class="medalImg" :src="imgData[item.operationType-1]" alt="">
                    <img class="isNotHave" v-show="item.level > 0" src="@/assets/Meadl/icon_selected@2x.png" alt="">
                    <div class="text">
                        <p class="name">{{item.name}}</p>
                        <p class="content">Sudah ada {{item.getCount == null ? 0 : item.getCount}} Capinger yang berhasil mendapatkan Medali ini</p>
                        <!-- 勋章获取方式 -->
                        <p class="title">Cara Mendapatkan?</p>
                        <p class="content">{{item.conditiondetail}}</p>
                        <!-- 勋章权限 -->
                        <!-- <p class="title">Medal privileges</p>
                        <p class="content foot">1. Visual display privileges (commentary area, personal center wear)</p> -->
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

import medalsImg1 from "@/assets/Meadl/medals_img_critic@2x.png"//评论家
import medalsImg2 from "@/assets/Meadl/medals_img_labormodel@2x.png"//劳动模范
import medalsImg3 from "@/assets/Meadl/medals_img_commentary@2x.png"//神评达人
import medalsImg4 from "@/assets/Meadl/medals_img_votingpioneer@2x.png"//投票先锋
import medalsImg5 from "@/assets/Meadl/medals_img_theshoot@2x.png"//快枪手
import medalsImg6 from "@/assets/Meadl/medals_img_duancelebrity@2x.png"//段子手

export default {
    props:["medalData","detailData"],
    data(){
        return{
          imgData:[
              medalsImg1,
              medalsImg2,
              medalsImg3,
              medalsImg4,
              medalsImg5,
              medalsImg6
          ]
        }
    },
    components:{
        Carousel,
        Slide
    },
    mounted(){
        console.log(this.medalData)
        console.log(this.detailData)
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
    width: 3.40rem;
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
    margin-bottom: 0.5rem;
    position: relative;
    top: 0.1rem
}
.name {
    font-size: 0.16rem;  
    line-height: 0.25rem;
}
.title{
    font-size: 0.13rem; 
    font-weight: 500; 
    line-height: 0.20rem;
    margin-top: 0.40rem;
}
.content{
    margin-bottom: 0.18rem;
    line-height: 0.17rem;
}
.foot{
    margin-bottom: 0;
}
.VueCarousel-pagination{
    margin-top: 0;
}
</style>
