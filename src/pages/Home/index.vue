<template>
    <div id="home" v-wechat-title="$route.meta.title">
        <!-- <header>
            <div class="faq" @click="bottomLineShow = true">
                <span :style="{color:bottomLineShow?'#82c345':'rgba(0, 0, 0, 0.5)'}">Seputar Caping</span>
                <div class="bottomLine" v-show="bottomLineShow"></div>
            </div>
            <div class="misi" @click="bottomLineShow = false">
                <span :style="{color:!bottomLineShow?'#82c345':'rgba(0, 0, 0, 0.5)'}">Misi</span>
                <div class="bottomLine" v-show="!bottomLineShow"></div>
            </div>
        </header> -->
        <main id='main'>
            <div v-if="bottomLineShow">
                <v-faq v-for="item in FAQ" :key="item.id" :data="item" />
            </div>
            <!-- <div v-if="!bottomLineShow">
                <v-misi v-for="item in Misi" :key="item.id" :data='item'/>
            </div> -->
        </main>
    </div> 
</template>

<script>
import faq from '@/components/FAQ'
// import misi from '@/components/misi'
import {FAQ} from '@/assets/js/FAQ'
// import {Misi} from '@/assets/js/Misi'

export default {
    data(){
        return{
            bottomLineShow:true,
            FAQ:FAQ,
            // Misi:Misi
        }
    },
    components:{
        'v-faq':faq,
        // 'v-misi':misi
    }
}
</script>

<style scoped>

header{
    height: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;

    -moz-box-shadow:0.01rem 0.01rem 0.03rem rgba(0,0,0,0.5); 
    -webkit-box-shadow:0.01rem 0.01rem 0.03rem rgba(0,0,0,0.5); 
    box-shadow:0.01rem 0.01rem 0.03rem rgba(0,0,0,0.5); 
}
.faq,.misi{
    width: 50%;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.12rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
}
.bottomLine{
    height: 0.02rem;
    width: 100%;
    background-color: #82c345;
    border-radius: 0.05rem;
}

#main{
    padding-bottom: 0.1rem;
    overflow-y:auto;
}
</style>
