<template>
    <div id="medalList" v-wechat-title="$route.meta.title">
        <div class="back" v-if="dataStatus === true">
            <div class="awarded" v-show="awardedTitleStatus" >
                <p class="title">Medal Awarded</p>
                <ul class="box">
                    <li class="medal" v-for="item in medalData" :key="item.id">
                        <medal class="medalCom" 
                        v-if="item.level>=1" 
                        @on-open="openMedalDetai(item)" 
                        :medalimg="item.level>0?normal[item.operationType-1]:gray[item.operationType-1]" 
                        :data="item"/>
                    </li>
                </ul>
            </div>
            <div class="unawarded" v-show="unawardedTitleStatus">
                <p class="title">Unawarded Medal</p>
                <ul class="box">
                    <li class="medal" v-for="item in medalData" :key="item.id">
                        <medal class="medalCom" 
                        v-if="item.level<1" 
                        @on-open="openMedalDetai(item)" 
                        :medalimg="item.level>0?normal[item.operationType-1]:gray[item.operationType-1]" 
                        :data="item"/>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 没有信息 -->
        <div class="noData" v-else>
            <img src="../../assets/network_net_connected.jpg" alt="">
            <p>Oops!Coba cek koneksi internetnya ya!</p>
            <div class="button" @click="vfUid">Coba lagi</div>
        </div>
        <detail @on-close="medalDetailShow = false" :medalData = medalData :detailData = detailData  v-if="medalDetailShow"/>
    </div>
</template>

<script>
// 组件
import medal from "./components/medal"
import detail from "./components/medalDetails"

//工具函数
import {getUrlAllParams} from "@/utils/getUAndD"
import {isTrue,isFalse} from "@/utils/isDataType"
import {getCookie,setCookie} from "@/utils/Cookie"
//
import {getUserMedalInfo} from "@/api/index"

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
    data(){
        return{
            //已获得，彩色图
            normal:[
                require("@/assets/Meadl/medals_icon_critic_normal@2x.png"),//评论家
                require("@/assets/Meadl/medals_icon_labormodel_normal@2x.png"),//劳动模范
                require("@/assets/Meadl/medals_icon_commentary_normal@2x.png"),//神评达人
                require("@/assets/Meadl/medals_icon_votingpioneer_normal@2x.png"),//投票先锋
                require("@/assets/Meadl/medals_icon_theshoot_normal@2x.png"),//快枪手
                require("@/assets/Meadl/medals_icon_duancelebrity_normal@2x.png")//段子手
            ],
            //未获得，灰色图
            gray:[
                require("@/assets/Meadl/medals_icon_critic_gray@2x.png"),
                require("@/assets/Meadl/medals_icon_labormodel_gray@2x.png"),
                require("@/assets/Meadl/medals_icon_commentary_gray@2x.png"),
                require("@/assets/Meadl/medals_icon_votingpioneer_gray@2x.png"),
                require("@/assets/Meadl/medals_icon_theshoot_gray@2x.png"),
                require("@/assets/Meadl/medals_icon_duancelebrity_gray@2x.png")
            ],
            dataStatus:true,
            medalDetailShow:false,
            detailData:{
                navigateTo:1,
                getCount:0,
                conditiondetail:"",
                instructions: "",
            },
            awardedTitleStatus:true,
            unawardedTitleStatus:true,
            medalData:[
                
            ]
        }
    },
    components:{
        medal,
        detail
    },
    created(){
        this.vfUid()
    },
    mounted(){
        this.titleStatus(this.medalData)
    },
    methods:{
        openMedalDetai(medal){
            this.medalData.map((item,index)=>{
                if(item.operationType == medal.operationType){
                    this.detailData = index
                }
            })
            this.medalDetailShow = true
        },
        vfUid(){
            let uid = this.getUrlParam()
            if(isTrue(uid)){
                this.getMeadelData(uid)
            }else{
                this.medalInfo()
            }
        },
        //获取勋章信息
        getMeadelData(uid){
            NProgress.start()
            getUserMedalInfo({uid:uid}).then((res)=>{
                if(res.code != null && res.code === 0){
                    let data = res.data
                    for(let i = 0;i<data.length;i++){
                        data[i].progress = Math.floor(data[i].progress/data[i].condition*10000)/100 <= 100 ? Math.floor(data[i].progress/data[i].condition*10000)/100:100
                    }
                    this.medalData = data 
                    this.dataStatus = true
                    this.titleStatus(data)
                }else{
                    this.dataStatus = false
                }
            }).catch((error)=>{
                console.log(error)
                this.dataStatus = false
            })
            NProgress.done()
        },
        titleStatus(medalData){
            let awarded_count = 0
            let unawarded_count = 0
            medalData.map((item)=>{
                if(item.level < 1){
                    unawarded_count++
                }else{
                    awarded_count++
                }
            })
            awarded_count > 0 ? this.awardedTitleStatus = true : this.awardedTitleStatus = false
            unawarded_count > 0 ? this.unawardedTitleStatus = true : this.unawardedTitleStatus = false
        },
        //获取用户信息
        getUrlParam(){
            let mie = getCookie("c")
            let did = getCookie("d")
            let uid = getCookie("u")
            let urlParams = getUrlAllParams()
            if(isFalse(mie)){
                if(isTrue(urlParams.c)){
                    mie = urlParams.c
                    setCookie("c",mie,1)
                }else{
                    console.log("未登录（mie）")
                }
            }
            if(isFalse(did)){
                if(isTrue(urlParams.d)){
                    did = urlParams.d
                    setCookie("d",did,1)
                }else{
                    console.log("未登录（did）")
                }
            }
            if(isFalse(uid)){
                if(isTrue(urlParams.u)){
                    uid = urlParams.u
                    setCookie("u",uid,1)
                }else{
                    console.log("未登录（uid）")
                }
            }
            return uid;
        },
        //勋章默认信息
        medalInfo(){
            this.medalData = [{
                    condition: 10,
                    conditiondetail: "Mendapatkan 10 kali Hot Comment",
                    getCount: 1,
                    id: 1,
                    instructions: "",
                    label:"",
                    level: 0,
                    name: "Mantul",//神评达人
                    operationType: 3,
                    progress: 0,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "Mengikuti poling 100 kali di fitur NGOBROL",
                    getCount: null,
                    id: 2,
                    instructions: "",
                    label:"",
                    level: 0,
                    name: "Gaspol",//投票先锋
                    operationType: 4,
                    progress: 0,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "Mendapatkan 1000 like pada 1 komentar",
                    getCount: null,
                    id: 3,
                    instructions: "",
                    label:"hot",
                    level: 0,
                    name: "Eksis",//段子手
                    operationType: 6,
                    progress: 0,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "Membuka 1000 kali push notifikasi",
                    getCount: null,
                    id: 4,
                    instructions: "",
                    label:"hot",
                    level: 0,
                    name: "Gercep",//快枪手
                    operationType: 5,
                    progress: 0,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "Berikan 1000 komentar terbaikmu",
                    getCount: null,
                    id: 5,
                    instructions: "",
                    label:"hot",
                    level: 0,
                    name: "Ceriwis",//评论家
                    operationType: 1,
                    progress: 0,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "Lakukan absensi harian setiap hari selama 2 bulan.",
                    getCount: null,
                    id: 6,
                    instructions: "",
                    label:"hot",
                    level: 0,
                    name: "Panutan",//劳动模范
                    operationType: 2,
                    progress: 0,
                    status: 1,
                }]
        }
    }

}
</script>

<style scoped>
#medalList{
    padding-top: 0.12rem;
    padding-bottom: 0.12rem;
    padding-left: 0.085rem;
    padding-right: 0.085rem;
    background-color: #fff;
    height: 30rem;
}
.awarded{
    margin-bottom: 0.22rem;
}
.box{
    display: flex;
    flex-wrap: wrap;
}
.medal{
    margin-bottom:0.1rem;
}
.medalCom{
    margin-right: 0.05rem;
    margin-left: 0.05rem;
}
.back{
    height: 100%;
    width: 100%;
    overflow-y: auto;
}
.back .title{
    padding-left: 0.04rem;
    margin-bottom: 0.1rem;
    font-size: 0.10rem;
    color: rgb(51, 51, 51, 0.5);;
}
.noData{
    margin-top: 1.5rem;
    display: flex;
    flex-direction:column;
    align-items: center;
}
.noData img{
    width: 40%;
}
.noData p{
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 0.1rem;
}
.noData .button{
    margin-top: 0.2rem;
    border:0.01rem #82c345 solid;
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;
    color: #82c345;
    font-size: 0.12rem;
}
</style>
