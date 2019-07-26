<template>
    <div id="medalList" v-wechat-title="$route.meta.title">
        <div class="back">
            <div class="awarded">
                <p class="title">Medal Awarded</p>
                <div class="box">
                    <div class="medal" v-for="item in medalData" :key="item.id">
                        <medal v-if="item.level>=1" @on-open="openMedalDetai(item.id)" :data="item"/>
                    </div>
                </div>
            </div>
            <div class="unawarded">
                <p class="title">Unawarded Medal</p>
                <div class="box">
                    <div class="medal" v-for="item in medalData" :key="item.id">
                        <medal v-if="item.level<1" @on-open="openMedalDetai(item)" :data="item"/>
                    </div>
                </div>
            </div>
        </div>
        <detail @on-close="medalDetailShow = false" :detailData = detailData  v-if="medalDetailShow"/>
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
            navigateTo:1,
            medalData:[
                {
                    condition: 10,
                    conditiondetail: "累计获得10次热门评论",
                    getCount: 1,
                    icon: medalIcon3,
                    id: 1,
                    instructions: "",
                    label: "hot",
                    labelIcon:hotIcon,
                    level: 1,
                    name: "神评达人",
                    operationType: 3,
                    progress: 100,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "累计投票100次",
                    getCount: null,
                    icon: medalIcon4,
                    id: 2,
                    instructions: "",
                    label: null,
                    level: 0,
                    name: "投票先锋",
                    operationType: 4,
                    progress: 36,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "累计投票100次",
                    getCount: null,
                    icon: medalIcon6,
                    id: 3,
                    instructions: "",
                    label: null,
                    level: 0,
                    name: "投票先锋",
                    operationType: 6,
                    progress: 20,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "累计投票100次",
                    getCount: null,
                    icon: medalIcon5,
                    id: 4,
                    instructions: "",
                    label: null,
                    level: 0,
                    name: "投票先锋",
                    operationType: 5,
                    progress: 1,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "累计投票100次",
                    getCount: null,
                    icon: medalIcon1,
                    id: 5,
                    instructions: "",
                    label: null,
                    level: 0,
                    name: "投票先锋",
                    operationType: 1,
                    progress: 90,
                    status: 1,
                },{
                    condition: 100,
                    conditiondetail: "累计投票100次",
                    getCount: null,
                    icon: medalIcon2,
                    id: 6,
                    instructions: "",
                    label: null,
                    level: 0,
                    name: "投票先锋",
                    operationType: 2,
                    progress: 50,
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
        this.getMeadelData(uid)
    },
    mounted(){
        this.initDepartment()
    },
    methods:{
        openMedalDetai(medal){
            this.detailData = medal
            // this.navigateTo = Number(medal.id)-1
            this.medalDetailShow = true
        },
        // 初始化部局 有问题！！！
        initDepartment(){
            let clientHeight = document.documentElement.clientHeight
            let medal_awarded = document.getElementsByClassName("awarded")[0].getElementsByClassName("medal")
            let medal_unawarded = document.getElementsByClassName("unawarded")[0].getElementsByClassName("medal")
            document.getElementById("medalList").style.height = clientHeight+"px";
            for(let i = 0;i < medal_awarded.length;i++){
                if((i)%3 === 0){
                    medal_awarded[i].style.marginRight = "0px"
                }else{
                    medal_awarded[i].style.marginRight = "0.09rem"
                }
            }
            for(let i = 0;i < medal_unawarded.length;i++){
                if((i)%3 === 0){
                    medal_unawarded[i].style.marginRight = "0px"
                }else{
                    medal_unawarded[i].style.marginRight = "0.09rem"
                }
            }
        },
        //获取勋章信息
        getMeadelData(uid){
            getUserMedalInfo({uid:uid}).then((res)=>{
                console.log(res)
                if(res.code === 0){
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
                }
            })
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
                    alert("没有mie")
                }
            }
            if(isFalse(did)){
                if(isTrue(urlParams.d)){
                    did = urlParams.d
                    setCookie("d",did,1)
                }else{
                    alert("没有did")
                }
            }
            if(isFalse(uid)){
                if(isTrue(urlParams.u)){
                    uid = urlParams.u
                    setCookie("u",uid,1)
                }else{
                    alert("没有uid")
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
    margin-top:0.10rem;
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
</style>
