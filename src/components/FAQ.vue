<template>
    <div id="faq">
        <div class="faq_child">
            <div class="title" @click="contentShow = !contentShow">
                <p>{{data.title}}</p>
                <img :src="contentShow?topIcon:bottomIcom" alt="">
            </div>
            <transition name="slide-fade">
                <div class="content" v-show="contentShow" v-html="data.content"></div>
            </transition>
        </div>
    </div>
</template>

<script>

export default {
    props:['data'],
    data(){
        return{
            contentShow:false,
            topIcon:require('@/assets/top_icon_new.png'),
            bottomIcom:require('@/assets/bottom_icon_new.png')
        }
    }
}
</script>

<style scoped>
@font-face{
    font-family: 'Roboto-Regular';
    src : url('../../static/fonts/Roboto-Regular.ttf');
}

 #faq{
     padding: 0.1rem 0.16rem 0.1rem 0.16rem;
     padding-bottom: 0;
     background-color:#f2f2f2
 }
 .faq_child{
     background-color: #fff;
     border-radius: 0.1rem;
 }
 img{
     width: 0.2rem;
     height: 0.2rem;
 }
 .title{
     padding: 0.10rem;
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
 }
 .title p{
     font-size: 0.13rem;
     line-height: 0.22rem;
     color: #333;
     font-weight: 600;
     margin-right: 0.05rem;
     font-family: 'Roboto-Regular';
 }
 
 .content{
     padding: 0.12rem 0 0.12rem 0;
     margin: 0 0.12rem 0 0.12rem;
     border-top: #dddddd6c 0.01rem solid;
     font-size: 0.12rem;
     color: rgba(102, 102, 102, 0.829);
     line-height: 0.18rem;
     font-family: 'Roboto-Regular';
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
