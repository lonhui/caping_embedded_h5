<template>
    <div id="Level">
        <!-- 等级列表 -->
        <div class="lv_table">
            <table class="table">
                <tr class="tr">
                    <td>Jabatan</td>
                    <td>Simbol</td>
                    <td>Level</td>
                    <td>Integral</td>
                </tr>
                <tr class="tr" v-for="item in letable" :key="item.id">
                    <td>{{item.jabatan}}</td>
                    <td>
                        <img class="lvIcon" :src="item.icon" alt="">
                    </td>
                    <td>
                        <table class="teble_level">
                            <tr v-for="(item2,index) in item.level" :key="index">
                                <td>{{item2}}</td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table class="teble_Integral">
                            <tr v-for="(item2,index) in item.integral" :key="index">
                                <td>{{item2}}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        <!-- 级别权限 -->
        <div class="lv_privileges">
            <p>Level Privileges</p>
            <ul>
                <li v-for="(item,index) in privileges" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
        <!-- 如何获得排名？ -->
        <div class="lv_promotion">
            <p>How to get rank？</p>
            <ul>
                <li v-for="(item,index) in goRank" :key="index">
                    <div class="liD">
                        <div class="title">{{item.title}}</div>
                        <div>{{item.desc}}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import lv1 from "@/assets/LV/profil_icon_lv1@2x.png"
import lv2 from "@/assets/LV/profil_icon_lv4@2x.png"
import lv3 from "@/assets/LV/profil_icon_lv7@2x.png"
import lv4 from "@/assets/LV/profil_icon_lv10@2x.png"
import lv5 from "@/assets/LV/profil_icon_lv12@2x.png"
import lv6 from "@/assets/LV/profil_icon_lv14@2x.png"
import lv7 from "@/assets/LV/profil_icon_lv16@2x.png"
import lv8 from "@/assets/LV/profil_icon_lv17@2x.png"
import lv9 from "@/assets/LV/profil_icon_lv18@2x.png"

export default {
    data(){
        return{
            letable:[
                {
                    id:1,
                    jabatan:"warga",
                    icon:lv1,
                    level:["LV.01","LV.02","LV.03"],
                    integral:[2000,3000,5000]
                },
                {
                    id:2,
                    jabatan:"RT",
                    icon:lv2,
                    level:["LV.04","LV.05","LV.06"],
                    integral:[8000,10000,12000]
                },
                {
                    id:3,
                    jabatan:"Lurach",
                    icon:lv3,
                    level:["LV.07","LV.08","LV.09"],
                    integral:[8000,10000,12000]
                },
                {
                    id:4,
                    jabatan:"Camat",
                    icon:lv4,
                    level:["LV.10","LV.11"],
                    integral:[8000,10000]
                },
                {
                    id:5,
                    jabatan:"Wali Kota",
                    icon:lv5,
                    level:["LV.12","LV.13"],
                    integral:[8000,10000]
                },
                {
                    id:6,
                    jabatan:"Gubernur",
                    icon:lv6,
                    level:["LV.14","LV.15"],
                    integral:[8000,10000]
                },
                {
                    id:7,
                    jabatan:"Menteri",
                    icon:lv7,
                    level:["LV.16"],
                    integral:[8000]
                },
                {
                    id:8,
                    jabatan:"Wakil Presiden",
                    icon:lv8,
                    level:["LV.17"],
                    integral:[8000]
                },
                {
                    id:9,
                    jabatan:"Presiden",
                    icon:lv9,
                    level:["LV.18"],
                    integral:[8000]
                }
            ],
            privileges:[
                'There is the privilege of "1 point of praise = 9 points of praise" at or above the provincial governor level.',
                'The President and Vice-President have the privilege of "comment first"',
                'The President has the additional privilege of "stamping and rubbing"'
            ],
            goRank:[
                {
                    title:"Comment",
                    desc:"+ 5 points, 50 times a day"
                },
                {
                    title:"Comment",
                    desc:"+ 5 points, 50 times a day"
                },
                {
                    title:"Comment",
                    desc:"+ 5 points, 50 times a day"
                },
                {
                    title:"Comment",
                    desc:"+ 5 points, 50 times a day"
                },
                {
                    title:"Comment",
                    desc:"+ 5 points, 50 times a day"
                },
                {
                    title:"Comment",
                    desc:"+ 5 points, 50 times a day"
                },
                {
                    title:"Comment",
                    desc:"+ 5 points, 50 times a day"
                },
                {
                    title:"Comment",
                    desc:"+ 5 points, 50 times a day"
                },
                {
                    title:"Comment",
                    desc:"+ 5 points, 50 times a day"
                },
                {
                    title:"Comment",
                    desc:"+ 5 points, 50 times a day++ + 5 points, 50 times a day"
                },
                {
                    title:"Comment",
                    desc:"+ 5 points, 50 times a day"
                }
            ]
        }
    }
}
</script>

<style scoped>
#Level{
    padding: 0.1rem;
    background-color: #f6f6f6;
}
table{
    width: 100%;
    border-collapse:collapse;
    color:rgba(51, 51, 51, 0.7);
}
.lv_table{
    border-radius: 0.1rem;
   -moz-box-shadow:0 0 0.05rem rgba(0, 0, 0,0.3); 
    -webkit-box-shadow:0 0 0.05rem rgba(0, 0, 0,0.3); 
    box-shadow:0 00 0.05rem rgba(0, 0, 0,0.3);
}
.table{
    background-color: #fff;
    border-radius: 0.1rem;
}
th,td{
    width: 25%;
}
td{
    text-align: center;
}
tr{
    display: flex;
    align-items:center;/*垂直居中*/
    justify-content: center;/*水平居中*/
}

.tr:first-child{
    height: 0.38rem;
    font-size: 0.12rem;
    font-weight: 600;
    border-radius: 0.10rem 0.10rem 0 0;
    background-color: rgba(130, 195, 69, 0.1);
}
.table .tr:nth-child(3),
.table .tr:nth-child(5),
.table .tr:nth-child(7),
.table .tr:nth-child(9)	{
    background-color: rgba(130, 195, 69, 0.07);
    
}
.table .tr{
    min-height: 0.38rem;
}
.teble_level,.teble_Integral,.teble_level td,.teble_Integral td{
    width: 100%;
    line-height: 0.17rem;
}
.teble_level,.teble_Integral{
    margin-top:0.1rem;
    margin-bottom: 0.1rem;
}
.lvIcon{
  width: 0.3rem;
  height: 0.3rem;
}
/* -------------------------  */

.lv_privileges{
    border-radius: 0.1rem;
    background-color: #fff;
    padding: 0.1rem;
    margin-top: 0.1rem;
    -moz-box-shadow:0 0 0.05rem rgba(0, 0, 0,0.3); 
    -webkit-box-shadow:0 0 0.05rem rgba(0, 0, 0,0.3); 
    box-shadow:0 0 0.05rem rgba(0, 0, 0,0.3);
}
.lv_privileges p{
    font-size: 0.12rem;
    font-weight: 600;
    padding-bottom: 0.1rem;
    color: #333;
}
.lv_privileges ul{
    list-style-type: decimal;
    margin-left: 0.15rem;
    line-height: 0.19rem;
    color: rgba(51, 51, 51, 0.7);
}
.lv_privileges li{
    padding:0.05rem 0 0 0.05rem;
}
/* -------------------------  */
.lv_promotion{
    border-radius: 0.1rem;
    background-color: #fff;
    padding: 0.1rem;
    margin-top: 0.1rem;
    -moz-box-shadow:0 0 0.05rem rgba(0, 0, 0,0.3); 
    -webkit-box-shadow:0 0 0.05rem rgba(0, 0, 0,0.3); 
    box-shadow:0 00 0.05rem rgba(0, 0, 0,0.3);
}
.lv_promotion p{
    font-size: 0.12rem;
    font-weight: 600;
    padding-bottom: 0.1rem;
    color: #333;
}
.lv_promotion ul{
    list-style-type: decimal;
    margin-left: 0.15rem;
    line-height: 0.19rem;
    color: rgba(51, 51, 51, 0.7);
}
.lv_promotion li .liD{
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
}
.lv_promotion li{
    padding-top: 0.05rem;
    padding-bottom: 0.05rem;
    border-bottom: rgba(51, 51, 51, 0.3) 0.005rem solid;
}
.lv_promotion li .title{
    color: #333;
}
.lv_promotion li:last-child{
    border-bottom:none;
}
.lv_promotion li div:nth-child(2){
    width: 50%;
}

</style>
