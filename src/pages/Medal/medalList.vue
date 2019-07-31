<template>
    <div id="medalList" v-wechat-title="$route.meta.title">
        <div class="back">
            <div class="awarded" v-show="awardedTitleStatus" >
                <p class="title">Medal Awarded</p>
                <ul class="box">
                    <li class="medal" v-for="item in medalData" :key="item.id">
                        <medal class="medalCom" v-if="item.level>=1" @on-open="openMedalDetai(item)" :data="item"/>
                    </li>
                </ul>
            </div>
            <div class="unawarded" v-show="unawardedTitleStatus">
                <p class="title">Unawarded Medal</p>
                <ul class="box">
                    <li class="medal" v-for="item in medalData" :key="item.id">
                        <medal class="medalCom" v-if="item.level<1" @on-open="openMedalDetai(item)" :data="item"/>
                    </li>
                </ul>
            </div>
        </div>
        <detail @on-close="medalDetailShow = false" :medalData = medalData :detailData = detailData  v-if="medalDetailShow"/>
    </div>
</template>

<script>
// 组件
import medal from "./components/medal"
import detail from "./components/medalDetails"
//勋章图
import medalIcon1 from "@/assets/Meadl/medals_icon_critic_normal@2x.png"//评论家
import medalIcon2 from "@/assets/Meadl/medals_icon_labormodel_normal@2x.png"//劳动模范
import medalIcon3 from "@/assets/Meadl/medals_icon_commentary_normal@2x.png"//神评达人
import medalIcon4 from "@/assets/Meadl/medals_icon_votingpioneer_normal@2x.png"//投票先锋
import medalIcon5 from "@/assets/Meadl/medals_icon_theshoot_normal@2x.png"//快枪手
import medalIcon6 from "@/assets/Meadl/medals_icon_duancelebrity_normal@2x.png"//段子手

//标签图
import hotIcon from "@/assets/Meadl/medals_label_hot@2x.png"
import newIcon from "@/assets/Meadl/medals_label_new@2x.png"
//工具函数
import {getUrlAllParams} from "@/utils/getUAndD"
import {isTrue,isFalse} from "@/utils/isDataType"
import {getCookie,setCookie} from "@/utils/Cookie"
//
import {getUserMedalInfo} from "@/api/index"


export default {
    data(){
        return{
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
                {
                    condition: 10,
                    conditiondetail: "Mendapatkan 10 kali Hot Comment",
                    getCount: 1,
                    icon: medalIcon3,
                    id: 1,
                    instructions: "",
                    label: "hot",
                    labelIcon:hotIcon,
                    level: 0,
                    name: "Mantul",//神评达人
                    operationType: 3,
                    progress: 0,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "Mengikuti poling 1000 kali di fitur NGOBROL",
                    getCount: null,
                    icon: medalIcon4,
                    id: 2,
                    instructions: "",
                    label: null,
                    level: 0,
                    name: "Gaspol",//投票先锋
                    operationType: 4,
                    progress: 0,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "Mendapatkan 1000 like pada 1 komentar",
                    getCount: null,
                    icon: medalIcon6,
                    id: 3,
                    instructions: "",
                    label: null,
                    level: 0,
                    name: "Eksis",//段子手
                    operationType: 6,
                    progress: 0,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "Membuka 1000 kali push notifikasi",
                    getCount: null,
                    icon: medalIcon5,
                    id: 4,
                    instructions: "",
                    label: null,
                    level: 0,
                    name: "Gercep",//快枪手
                    operationType: 5,
                    progress: 0,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "Berikan 1000 komentar terbaikmu",
                    getCount: null,
                    icon: medalIcon1,
                    id: 5,
                    instructions: "",
                    label: null,
                    level: 0,
                    name: "Ceriwis",//评论家
                    operationType: 1,
                    progress: 0,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "Absen 1000 kali setiap hari",
                    getCount: null,
                    icon: medalIcon2,
                    id: 6,
                    instructions: "",
                    label: null,
                    level: 0,
                    name: "Panutan",//劳动模范
                    operationType: 2,
                    progress: 0,
                    status: 1,
                }
            ]
        }
    },
    components:{
        medal,
        detail
    },
    created(){
        let uid = this.getUrlParam()
        if(isTrue(uid)){
            this.getMeadelData(uid)
        }
    },
    mounted(){
        this.titleStatus(this.medalData)
    },
    methods:{
        openMedalDetai(medal){
            this.detailData = medal
            this.medalDetailShow = true
        },
        //获取勋章信息
        getMeadelData(uid){
            getUserMedalInfo({uid:uid}).then((res)=>{
                if(res.code && res.code === 0){
                    let data = res.data
                    for(let i = 0;i<data.length;i++){
                        switch(data[i].operationType){
                            case 1:data[i].icon = medalIcon1;break;
                            case 2:data[i].icon = medalIcon2;break;
                            case 3:data[i].icon = medalIcon3;break;
                            case 4:data[i].icon = medalIcon4;break;
                            case 5:data[i].icon = medalIcon5;break;
                            case 6:data[i].icon = medalIcon6;break;
                        }
                        if(data[i].label === "hot"){
                            data[i].labelIcon = hotIcon
                        }
                        if(data[i].label === "new"){
                            data[i].labelIcon = newIcon
                        }
                        data[i].progress = Math.floor(data[i].progress/data[i].condition*100)
                    }
                    this.medalData = data 
                    this.titleStatus(data)
                }
            })
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
        }
    }

}
</script>

<style scoped>
#medalList{
    padding: 0.12rem;
    background-color: #f6f6f6;
}
.awarded{
    margin-bottom: 0.22rem;
}
.box{
    display: flex;
    flex-wrap: wrap;
}
.medal{
    margin-top:0.06rem;
}
.medalCom{
    margin-right: 0.03rem;
    margin-left: 0.03rem;
}
.back{
    height: 100%;
    width: 100%;
    overflow-y: auto;
}
.back .title{
    font-size: 0.10rem;
    color: rgb(51, 51, 51, 0.5);;
}

ul .prize-item:nth-child(2){
    margin-right: 2rem;
}
</style>
