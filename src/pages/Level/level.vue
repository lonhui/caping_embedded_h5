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
            <p>Misi Harian</p>
            <ul>
                <li v-for="(item,index) in goRank" :key="index">
                    <misiHarian :data = "item"/>
                    <!-- <div class="liD">
                        <div class="title">{{item.misi}}</div>
                        <div class="desc">{{item.aturan}}</div>
                    </div>
                    <p class="details">{{item.details}}</p> -->
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

import misiHarian from "./components/misiHarian"

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
                    jabatan:"Lurah",
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
                    misi:"1. Memberi Komentar",
                    aturan:"+ 5 Poin",
                    details:"Kamu berhak mendapatkan 5 poin setiap memberikan komentar pada artikel ataupun video, maksimal 50 kali/hari. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya. "
                },
                {
                    misi:"2. Menyukai Artikel/Video",
                    aturan:"+ 2 Poin",
                    details:"Kamu berhak mendapatkan 2 poin setiap menyukai komentar pada artikel ataupun video, maksimal 50 kali/hari. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya. "
                },
                {
                    misi:"3. Balasan Komentar",
                    aturan:"+ 5 Poin",
                    details:"Kamu berhak mendapatkan 5 poin jika komentarmu di balas oleh pengguna lain, maksimal 50 kali/hari. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya."
                },
                {
                    misi:"4. Komentar Yang Disukai",
                    aturan:"+ 2 Poin",
                    details:"Kamu berhak mendapatkan 2 poin jika komentarmu di sukai oleh pengguna lain, maksimal 50 kali/hari. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya."
                },
                {
                    misi:"5. Membaca Artikel",
                    aturan:"+ 20 Poin",
                    details:"Kamu berhak mendapatkan 20 poin setiap membaca artikel, maksimal 40 kali/hari. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya. "
                },
                {
                    misi:"6. Menonton Video",
                    aturan:"+ 20 Poin",
                    details:"Kamu berhak mendapatkan 20 poin setiap menonton video, maksimal 20 kali/hari. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya. "
                },
                {
                    misi:"7. Absen Harian",
                    aturan:"+ 70 Poin",
                    details:"Kamu berhak mendapatkan poin setiap kali kamu melakukan absensi harian, maksimal 70 poin pada hari ke 7. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya. "
                },
                {
                    misi:"8. Mengambil Bonus",
                    aturan:"+ 20 Poin",
                    details:"Kamu berhak mendapatkan sejumlah poin secara acak setiap kali kamu mengambil bonus. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya. "
                },
                {
                    misi:"9. Bagikan Konten",
                    aturan:"+ 5 Poin",
                    details:"Kamu berhak mendapatkan 5 poin setiap kali kamu membagikan konten ke sosial media kamu, maksimal 5 kali/hari. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya. "
                },
                {
                    misi:"10. Bagikan Kode Undangan",
                    aturan:"+ 5 Poin",
                    details:"Kamu berhak mendapatkan 5 poin setiap membagikan kode undangan, maksimal 20 kali/hari. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya. "
                },
                {
                    misi:"11. Membuka Push Notifikasi",
                    aturan:"+ 5 Poin",
                    details:"Kamu berhak mendapatkan 5 poin setiap membuka push notifikasi, maksimal 40 kali/hari. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya. "
                },
                {
                    misi:"12. Register Pengguna Baru",
                    aturan:"+ 2000 Poin",
                    details:"Kamu berhak mendapatkan 2000 poin bagi pengguna yang baru melakukan register. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya. "
                },
                {
                    misi:"13. Teman Yang Diundang",
                    aturan:"+ 600 Poin",
                    details:"Kamu berhak mendapatkan 600 poin setiap pengguna baru yang melakukan register dan menggunakan kode undangan kamu, maksimal 5 kali/hari. Poin akan bertambah secara otomatis. Aktif terus di Caping dan kumpulkan poinnya. "
                }
            ]
        }
    },
    components:{
        misiHarian
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
    color:#333;
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
    font-size: 0.12rem;
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
    color: #0aa344;
}
.lv_promotion ul{
    /* list-style-type: decimal; */
    /* margin-left: 0.15rem; */
    color: rgba(51, 51, 51, 0.7);
}
.lv_promotion li{
    padding-top: 0.05rem;
    padding-bottom: 0.05rem;
    border-bottom: rgba(0, 0, 0, 0.15) 0.005rem solid;
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
