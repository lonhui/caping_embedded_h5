<template>
    <div id="medalList">
        <div class="back">
            <div class="awarded">
                <p class="title">Medal Awarded</p>
                <div class="box">
                    <div class="medal" v-for="item in data" :key="item.id">
                        <medal @on-open="openMedalDetai(item.id)" :data="item"/>
                    </div>
                </div>
            </div>
            <div class="unawarded">
                <p class="title">Unawarded Medal</p>
                <div class="box">
                    <div class="medal" v-for="(item,index) in udata" :key="item.id">
                        <medal @on-open="openMedalDetai(item.id)" :data="item" :index="index"/>
                    </div>
                </div>
            </div>
        </div>
        
        <detail @on-close="medalDetailShow = false" :navigateTo = navigateTo v-if="medalDetailShow"/>
    </div>
</template>

<script>
import medal from "./components/medal"
import detail from "./components/medalDetails"

import medalIcon1 from "@/assets/Meadl/medals_icon_commentary_normal@2x.png"
import medalIcon2 from "@/assets/Meadl/medals_icon_critic_normal@2x.png"
import medalIcon3 from "@/assets/Meadl/medals_icon_duancelebrity_normal@2x.png"
import medalIcon4 from "@/assets/Meadl/medals_icon_labormodel_normal@2x.png"
import medalIcon5 from "@/assets/Meadl/medals_icon_theshoot_normal@2x.png"
import medalIcon6 from "@/assets/Meadl/medals_icon_votingpioneer_normal@2x.png"


import hotIcon from "@/assets/Meadl/medals_label_hot@2x.png"
import newIcon from "@/assets/Meadl/medals_label_new@2x.png"

export default {
    data(){
        return{
            medalDetailShow:false,
            navigateTo:1,
            data:[
                {
                    id:1,
                    icon:medalIcon1,
                    labelIcon:hotIcon,
                    whetherToGet:true,
                    name:"Commentary"
                },
                {
                    id:2,
                    icon:medalIcon2,
                    labelIcon:newIcon,
                    whetherToGet:true,
                    name:"Labor Model"
                },
                
            ],
            udata:[
                {
                    id:3,
                    icon:medalIcon3,
                    whetherToGet:false,
                    progress:"30%",
                    name:"Critic"
                },
                {
                    id:4,
                    icon:medalIcon4,
                    whetherToGet:false,
                    progress:"80%",
                    name:"Voting Pioneer"
                },
                {
                    id:5,
                    icon:medalIcon5,
                    whetherToGet:false,
                    progress:"59%",
                    name:"The Shoot"
                },
                {
                    id:6,
                    icon:medalIcon6,
                    whetherToGet:false,
                    progress:"95%",
                    name:"The Shoot"
                },
            ]
        }
    },
    components:{
        medal,
        detail
    },
    mounted(){
        this.initDepartment()
    },
    methods:{
        openMedalDetai(id){
            this.navigateTo = Number(id)-1
            this.medalDetailShow = true
        },
        // 初始化部局
        initDepartment(){
            let clientHeight = document.documentElement.clientHeight
            let medal_awarded = document.getElementsByClassName("awarded")[0].getElementsByClassName("medal")
            let medal_unawarded = document.getElementsByClassName("unawarded")[0].getElementsByClassName("medal")
            document.getElementById("medalList").style.height = clientHeight+"px";
            for(let i = 0;i < medal_awarded.length;i++){
                if((i+1)%3 === 0){
                    medal_awarded[i].style.marginRight = "0px"
                }else{
                    medal_awarded[i].style.marginRight = "0.09rem"
                }
            }
            for(let i = 0;i < medal_unawarded.length;i++){
                if((i+1)%3 === 0){
                    medal_unawarded[i].style.marginRight = "0px"
                }else{
                    medal_unawarded[i].style.marginRight = "0.09rem"
                }
            }
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
