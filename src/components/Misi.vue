<template>
    <div id="Mise">
        <div class="Mise_child">
            <div class="title" @click="contentShow = !contentShow">
                <p>{{data.title}}</p>
                <span>{{data.coin}}</span>
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
 #Mise{
     padding: 0.10rem;
     padding-bottom: 0;
      background-color: #f2f2f2;
 }
 .Mise_child{
     background-color: #fff;
     border-radius: 0.1rem;

     /* -moz-box-shadow:0.02rem 0.02rem 0.05rem rgba(0,0,0,0.5); 
     -webkit-box-shadow:0.02rem 0.02rem 0.05rem rgba(0,0,0,0.5); 
     box-shadow:0.02rem 0.02rem 0.05rem rgba(0,0,0,0.5);  */
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
     font-family: 'Roboto-Regular';
 }
 .title p{
     width: 65%;
     font-size: 0.13rem;
     line-height: 0.30rem;
     color: #000;
     font-weight: 600;
     margin-right: 0.05rem;
 }
 .title span{
     color: #fa0000;
 }
 .content{
     padding: 0.12rem 0 0.12rem 0;
     margin: 0 0.12rem 0 0.12rem;
     border-top: #dddddd 0.01rem solid;
     font-size: 0.12rem;
     color: rgba(0, 0, 0, 0.5);
     line-height: 0.20rem;
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
