<template>
    <div id="Level" v-wechat-title="$route.meta.title">
        <!-- 等级列表 -->
        <div class="lv_table">
            <table class="table">
                <tr class="tr">
                    <td>Jabatan</td>
                    <td>Simbol</td>
                    <td>Level</td>
                    <td>Jumlah Poin</td>
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
        <!--<div class="lv_privileges">
            <p>Level Privileges</p>
            <ul>
                <li v-for="(item,index) in privileges" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>-->
        <!-- 如何获得排名？ -->
        <div class="lv_promotion">
            <p>Misi Harians ?</p>
            <ul>
                <li v-for="(item,index) in goRank" :key="index">
                    <div class="liD">
                        <div class="title">{{item.title}}</div>
                        <div class="desc">{{item.desc}}</div>
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
                    integral:[0,3000,5000]
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
                    integral:[18000,24000,48000]
                },
                {
                    id:4,
                    jabatan:"Camat",
                    icon:lv4,
                    level:["LV.10","LV.11"],
                    integral:[60000,90000]
                },
                {
                    id:5,
                    jabatan:"Wali Kota",
                    icon:lv5,
                    level:["LV.12","LV.13"],
                    integral:[120000,240000]
                },
                {
                    id:6,
                    jabatan:"Gubernur",
                    icon:lv6,
                    level:["LV.14","LV.15"],
                    integral:[420000,600000]
                },
                {
                    id:7,
                    jabatan:"Menteri",
                    icon:lv7,
                    level:["LV.16"],
                    integral:[720000]
                },
                {
                    id:8,
                    jabatan:"Wakil Presiden",
                    icon:lv8,
                    level:["LV.17"],
                    integral:[840000]
                },
                {
                    id:9,
                    jabatan:"Presiden",
                    icon:lv9,
                    level:["LV.18"],
                    integral:[1080000]
                }
            ],
            privileges:[
                'There is the privilege of "1 point of praise = 9 points of praise" at or above the provincial governor level.',
                'The President and Vice-President have the privilege of "comment first"',
                'The President has the additional privilege of "stamping and rubbing"'
            ],
            goRank:[
                {
                    title:"1. Memberi Komentar",
                    desc:"+ 5 Poin, 250 Max poin/day"
                },
                {
                    title:"2. Menyukai Artikel/Video",
                    desc:"+ 2 Poin, 100 Max poin/day"
                },
                {
                    title:"3. Balasan Komentar",
                    desc:"+ 5 Poin, 250 Max poin/day"
                },
                {
                    title:"4. Komentar Yang Disukai",
                    desc:"+ 2 Poin, 100 Max poin/day"
                },
                {
                    title:"5. Membaca Artikel",
                    desc:"+ 20 Poin, 800 Max poin/day"
                },
                {
                    title:"6. Menonton Video",
                    desc:"+ 20 Poin, 400 Max poin/day"
                },
                {
                    title:"7. Absen Harian",
                    desc:"+ 70 Poin, 10-70 Max poin/day"
                },
                {
                    title:"8. Mengambil Bonus",
                    desc:"+ 20 Poin, 160 Max poin/day"
                },
                {
                    title:"9. Bagikan Konten",
                    desc:"+ 5 Poin, 25 Max poin/day"
                },
                {
                    title:"10. Bagikan Kode Undangan",
                    desc:"+ 5 Poin, 100 Max poin/day"
                },
                {
                    title:"11. Membuka Push Notifikasi",
                    desc:"+ 5 Poin, 200 Max poin/day"
                },
                {
                    title:"12. Register Pengguna Baru",
                    desc:"+ 2000 Poin, - Max poin/day"
                },
                {
                    title:"13. Teman Yang Diundang",
                    desc:"+ 600 Poin, - Max poin/day"
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
    padding: 0.12rem;
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
    /* list-style-type: decimal; */
    /* margin-left: 0.15rem; */
    color: rgba(51, 51, 51, 0.7);
}
.lv_promotion li .liD{
    line-height: 0.24rem;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
}
.lv_promotion li{
    padding-top: 0.05rem;
    padding-bottom: 0.05rem;
    border-bottom: rgba(153, 76, 76, 0.15) 0.005rem solid;
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
.liD .desc{
    text-align: right;
}
</style>
