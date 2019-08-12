<template>
    <div id="misiHarian">
        <div class="liD" @click="status = !status">
            <div class="title">{{data.misi}}</div>
            <div class="desc">
                {{data.aturan}}
                <img :src="status?topIcon:bottomIcom" alt="">
            </div>
        </div>
        <transition name="slide-fade">
            <p class="details" v-show="status">{{data.details}}</p>
        </transition>
    </div>
</template>

<script>
export default {
    props:["data"],
    data(){
        return{
            status:false,
            topIcon:require('@/assets/top_icon.png'),
            bottomIcom:require('@/assets/bottom_icon.png')
        }
    }
}
</script>

<style scoped>
.liD .desc{
    text-align: right;
}
.liD{
    line-height: 0.24rem;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
}
.details{
    color: rgba(51, 51, 51, 0.5);
    font-size: 0.12rem;
    font-weight: 500;
    padding: 0.05rem 0.1rem;
    line-height: 0.16rem;
}
img{
     width: 0.12rem;
     height: 0.08rem;
     margin-left: 0.1rem;
 }
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-0.10rem);
  opacity: 0;
}
</style>